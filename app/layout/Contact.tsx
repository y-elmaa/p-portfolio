"use client";
import { useContactForm } from "../hooks/useContactForm";
import { userEmail, userLocation } from "../components/constant";
const Contact = () => {
  const {
    isSuccess,
    statusMessage,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useContactForm();

  return (
    <section
      id="Contact"
      className="py-20 px-4 md:px-8 bg-neutral-950 text-white"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Get in Touch
          </h2>
          <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-neutral-300 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <svg
                  className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <p className="text-white">{userEmail}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg
                  className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-neutral-400">Location</p>
                  <p className="text-white">{userLocation}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  type="text"
                  placeholder="your name"
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-white"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  {...register("subject")}
                  type="text"
                  placeholder="your subject"
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Tell me more..."
                  rows={4}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-2.5 bg-white text-neutral-950 text-sm font-medium rounded-lg hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-6"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {statusMessage && (
                <div
                  className={`text-sm p-3 rounded-lg text-center ${
                    isSuccess
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
