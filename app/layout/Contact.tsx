"use client";
import { useContactForm } from "../hooks/useContactForm";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useContactForm();

  return (
    <section id="Contact">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contactez-moi</h1>
            <p className="py-6 text-xl">
              Je suis disponible pour toute opportunité d&apos;emploi ou de
              formation, n&apos;hésitez pas à me contacter
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label" htmlFor="name">
                  Nom
                </label>
                <input
                  id="name"
                  {...register("name")}
                  type="text"
                  className="input"
                  placeholder="Nom de l'entreprise"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
                <label className="label" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  className="input"
                  placeholder="Votre e-mail"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
                <label className="label" htmlFor="subject">
                  Sujet
                </label>
                <input
                  id="subject"
                  {...register("subject")}
                  type="text"
                  className="input"
                  placeholder="Sujet"
                />{" "}
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
                <label className="label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="input resize-y h-24 "
                  placeholder="Votre message ici..."
                ></textarea>{" "}
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary mt-4"
                >
                  {isSubmitting ? "Envoi..." : "Envoyer un message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
