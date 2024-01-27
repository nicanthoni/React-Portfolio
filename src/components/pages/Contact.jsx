import { RiMailSendFill } from "react-icons/ri";

export default function Contact() {
  const handleBlur = (event) => {
    console.log(event.target);
    let type = event.target.getAttribute("name");
    console.log(type);
    if (event.target.value === "") {
      alert("Empty fields are not allowed");
    }
  };
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label>
          <span>Your name:</span>
          <input type="name" name="name" onBlur={handleBlur} required />
        </label>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" onBlur={handleBlur} required />
        </label>
        <label>
          <span>Message:</span>
          <textarea
            type="text"
            name="message"
            onBlur={handleBlur}
            required
          ></textarea>
        </label>
        <button className="submit-btn">
          <RiMailSendFill
            className="submit-icon"
            //  onClick={handleExit}
          />
        </button>
      </form>
    </div>
  );
}
