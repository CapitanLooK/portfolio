import { IEmailData } from "../../interfaces";
import '../../smtp.js';
import swal from 'sweetalert';

export const useEmailSender = ()=>{

    const sendEmail = ({name, email, message}: IEmailData)=>{
        if (!(window as any).Email) {
            swal("Error al enviar el mensaje", "El servicio de correo no está disponible", "error");
            return;
          }

        (window as any).Email.send({
            Host : process.env.SMTP_HOST,
            Username : process.env.SMTP_USER,
            Password : process.env.SMTP_PASS,
            To: {email},
            From: process.env.SMTP_EMAIL,
            Subject: `${name} envio un mensaje`,
            Body: `
              <p>Nombre: <b>${name}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Mensaje: <b>${message}</b></p>
            `
          }).then(
            (message: string) => swal("Correo enviado exitosamente", "en breve nos pondremos en contacto", "success")
          ).catch(
            (error: any) => swal("Error al enviar el mensaje", "disculpa las molestias", "error")
          );
        };

        return { sendEmail }
    }