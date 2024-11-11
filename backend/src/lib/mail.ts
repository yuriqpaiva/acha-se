import nodemailer from 'nodemailer';

class Mail {
  private senderEmail: string;
  private password: string;
  private transporter: nodemailer.Transporter;

  constructor() {
    this.senderEmail = process.env.EMAIL_SENDER!;
    this.password = process.env.EMAIL_PASSWORD!;

    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: this.senderEmail,
        pass: this.password,
      },
    });
  }

  public async send(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: this.senderEmail,
      to,
      subject,
      text,
    };

    await this.transporter.sendMail(mailOptions);
  }
}

export default Mail;
