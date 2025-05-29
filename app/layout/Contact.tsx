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
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-6">
              Have questions or want to work together? Send us a message!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  type="text"
                  className="input"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  className="input"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
                <label className="label" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  {...register("subject")}
                  type="text"
                  className="input"
                  placeholder="Subject"
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
                  className="input resize-y h-24"
                  placeholder="Your message here..."
                ></textarea>{" "}
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-neutral mt-4"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
