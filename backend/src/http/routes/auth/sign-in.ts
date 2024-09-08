import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { prisma } from '../../../lib/prisma';

export async function handleSignIn(req: FastifyRequest, res: FastifyReply) {
  const signInBody = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const { email, password } = signInBody.parse(req.body);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: 'invalid credentials',
    });
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    return res.status(400).send({
      message: 'invalid credentials',
    });
  }

  const token = jsonwebtoken.sign(user.id, process.env.JWT_PASS ?? '');

  res.status(201).send({
    id: user.id,
    email: user.email,
    name: user.name,
    token,
  });
}
