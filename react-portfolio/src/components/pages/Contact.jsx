export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>WHEN I am presented with the Contact section</p>
      <p>
        THEN I see a contact form with fields for a name, an email address, and
        a message
      </p>
      <br></br>
      <p>
      WHEN I move my cursor out of one of the form fields without entering text
      </p>
      <p>
      THEN I receive a notification that this field is required
      </p>
      <br></br>
      <p>
      WHEN I enter text into the email address field
      </p>
      <p>
      THEN I receive a notification if I have entered an invalid email address
      </p>
    </div>
  );
}
