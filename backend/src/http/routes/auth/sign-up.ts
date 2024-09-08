import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { prisma } from '../../../lib/prisma';
import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

export async function handleSignUp(req: FastifyRequest, res: FastifyReply) {
  const signUpBody = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phoneNumber: z.string(),
  });

  const { name, email, password, phoneNumber } = signUpBody.parse(req.body);
  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (userExist) {
    return res.status(400).send({
      message: 'User already exists',
    });
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const created = await prisma.user.create({
    data: {
      email,
      name,
      phoneNumber,
      password: hashedPassword,
    },
  });

  const token = jwt.sign(created.id, process.env.JWT_PASS ?? '');

  res.status(201).send({
    id: created.id,
    email: created.email,
    name: created.name,
    token,
  });
}
