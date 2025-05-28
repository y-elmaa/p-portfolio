import React from "react";

const Contact = () => {
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
              <fieldset className="fieldset">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                />

                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  placeholder="Your Email"
                />

                <label className="label" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="input"
                  placeholder="Subject"
                />

                <label className="label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="input resize-y h-24"
                  placeholder="Your message here..."
                ></textarea>

                <button className="btn btn-neutral mt-4">Send Message</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
