import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiMailSendFill } from "react-icons/ri";

export default function Contact() {
  // Alert if clicking off of an empty input field
  const handleBlur = (event) => {
    console.log(event.target);
    let type = event.target.getAttribute("name");
    console.log(type);
    if (event.target.value === "") {
      alert("All fields required to send message ⚠️");
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5d1uzmj",
        "template_5f44yck",
        form.current,
        "O2U3wxHSSiv-EdDFM"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset(); // clear form after submit
          alert("Message sent ✅");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>
          <span>Name:</span>
          <input
            className="form-input"
            type="name"
            name="name"
            onBlur={handleBlur}
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            className="form-input"
            type="email"
            name="email"
            onBlur={handleBlur}
            required
          />
        </label>
        <label>
          <span>Message:</span>
          <textarea
            className="form-input"
            type="text"
            name="message"
            onBlur={handleBlur}
            required
          ></textarea>
        </label>
        <button className="submit-btn">
          <RiMailSendFill className="submit-icon" />
        </button>
      </form>
    </div>
  );
}
