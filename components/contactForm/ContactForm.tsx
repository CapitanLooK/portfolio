import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEmailSender } from "@/app/utils/hooks/useEmailSender/useEmailSender"

function ContactForm() {

  const { sendEmail } = useEmailSender()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    swal({
      title: "¿Estás seguro?",
      text: "Una vez enviado, no podrás modificar el mensaje.",
      icon: "warning",
      buttons: ["Cancelar", "Enviar"],
      dangerMode: true,
    }).then((willSend) => {
      if (willSend) {
        sendEmail(formData);
        swal("¡Mensaje enviado!", "Tu mensaje ha sido enviado exitosamente.", "success");
      } else {
        swal("Tu mensaje no ha sido enviado.");
      }
    });
  }

  return (
    <div className="xl:w-[54%] order-2 xl:order-none">
      <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
        <h3 className="text-4xl text-accent capitalize">trabajemos juntos</h3>
        <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iste quae, totam distinctio dolorem, voluptatem veritatis possimus aut praesentium iure dolores enim magni quisquam natus fugiat aliquam adipisci. Dolore, similique.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="name"
            placeholder="Nombre"
            required
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="mail@mail.com"
            required
            onChange={handleChange}
          />
        </div>
        <Textarea
          className="h-[200px]"
          placeholder="Escribi tu consulta aqui"
          required
          onChange={handleChange}
        />
        <Button
          type="submit"
          size="md"
          className="max-w-40 flex justify-center items-center capitalize"
        >enviar</Button>
      </form>
    </div>
  )
}

export default ContactForm