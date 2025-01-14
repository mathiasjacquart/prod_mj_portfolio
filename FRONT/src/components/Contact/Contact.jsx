import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react"
import emailjs from "@emailjs/browser"; 

import ty from "../../assets/images/tyl.png"

export default function Contact() {

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicId = import.meta.env.VITE_PUBLIC_ID;
  const [feedback, setFeedback] = useState(null);
  const [showRedirection, setShowRedirection] = useState(false);
  const schema = yup.object({
    firstname: yup.string().required("Le champ est obligatoire"),
    surname: yup.string().required("Le champ est obligatoire"),
    email: yup
      .string()
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email non valide")
      .required("Le champ est obligatoire"),
    message: yup
      .string()
      .required("Le champ est obligatoire")
      .max(250, "Message trop long"),
  });

  const defaultValues = {
    firstname: "",
    surname: "",
    email: "",
    message: "",

  };
  async function submit(values) {
    try {
      const result = await emailjs.send(
        serviceId, 
        templateId,  
        {
          firstname: values.firstname,
          surname: values.surname,
          email: values.email,
          message: values.message,
        },
         publicId
      );
      console.log(result.text);
      setFeedback("Votre message a été envoyé avec succès !");
      setShowRedirection(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setFeedback("Une erreur est survenue lors de l'envoi du message.");
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  return (
    <section id="contact"className='contact'>
      <div className=' container mx-auto flex-col'>
        <h3 className='text-primary text-center sm:text-left mb-5 font-semibold text-2xl'>Contact</h3>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <form action="" className="flex flex-col  w-3/4 sm:w-3/5" onSubmit={handleSubmit(submit)}>
            <div className="flex flex-col">
              <label htmlFor="firstname">Prénom : </label>
              <input
              placeholder="ex : Jean"
                type="text"
                {...register("firstname")}
                id="firstname"
              />
              {errors.firstname && (
                <p className="text-error">{errors.firstname.message}</p>
              )}
              </div>
              <div className="flex  flex-col">
              <label htmlFor="surname">Nom : </label>
              <input type="text" {...register("surname")} id="surname" placeholder="ex : Morel"/>
              {errors.surname && (
                <p className="text-error">{errors.surname.message}</p>
              )}
              </div>

            
            <div className="flex flex-col">
              <label htmlFor="email">Adresse-mail : </label>
              <input type="email" {...register("email")} id="email" placeholder="contact@example.fr" />
              {errors.email && (
                <p className="text-error">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col ">
              <label htmlFor="message">Message:</label>
              <textarea
                placeholder="Ecrivez votre message ici (max: 250 caractères)"
                {...register("message")}
                id="message"
              />
              {errors.message && (
                <p className="text-error">{errors.message.message}</p>
              )}

            </div>

      
          <div className="flex justify-center ">
            <button className="mj-btn-primary text-xl">Envoyer</button>
          </div>
          {feedback && <p className="text-lg font-textPrimary text-center mt-4"> {feedback} </p>}

            </form>
           
            <div className="sm:w-1/4 w-1/2">
              <img src={ty} alt="thank you photo" />
            </div>
          </div>


      </div>
  </section>
  )
}
