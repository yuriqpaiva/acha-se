import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../../lib/prisma';
import Mail from '../../../lib/mail';

export async function handleNotifyLostItem(
  req: FastifyRequest,
  res: FastifyReply,
) {
  const { reportId } = req.params as { reportId: string };

  const report = await prisma.reportLostItem.findUnique({
    where: { id: reportId },
  });

  if (!report) {
    return res.status(404).send({ error: 'Report not found' });
  }

  const mail = new Mail();

  const subject = 'Encontramos seu item perdido!';
  const body = `
    Olá, nós encontramos seu item perdido, com base nas informações que você nos enviou:

    Categoria: ${report.category}
    Marca: ${report.brand}
    Cor: ${report.color}
    Detalhes: ${report.details}
    Localização: ${report.location}
    Data Perdida: ${report.lostTime.toLocaleDateString()}

    Por favor, venha buscar seu item nos achados e perdidos.
  `.trim();

  mail.send(report.email, subject, body).catch((error) => {
    console.error('Error sending email:', error);
  });

  return res.status(200).send({ message: 'Email enviado com sucesso' });
}
