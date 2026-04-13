declare module "nodemailer" {
  export type SendMailOptions = {
    from?: string;
    to: string;
    subject: string;
    html?: string;
    text?: string;
    replyTo?: string;
  };

  export type Transporter = {
    sendMail: (mailOptions: SendMailOptions) => Promise<unknown>;
    close: () => void;
  };

  export type TransportOptions = {
    service: string;
    auth: {
      user: string;
      pass: string;
    };
    connectionTimeout?: number;
    greetingTimeout?: number;
    socketTimeout?: number;
  };

  export function createTransport(options: TransportOptions): Transporter;

  const nodemailer: {
    createTransport: typeof createTransport;
  };

  export default nodemailer;
}
