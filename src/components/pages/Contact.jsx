
import { RiMailSendFill } from "react-icons/ri";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <label>
          <span>Your name:</span>
          <input type="name" name="name" required />
        </label>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Message:</span>
          <textarea type="text" name="message" required></textarea>
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
