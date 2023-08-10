"use client";
import "../styles/contact.css";

export default function Contact() {
  return (
      <section id="contact" className="contact-wrapper">
        <div className="left-contact">
          <div>
            <h1>CONTACT</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus expedita, deserunt delectus magni sit ipsum earum
              architecto assumenda iusto non, accusantium ab optio minima quos
              eligendi perferendis debitis! Modi, quaerat.
            </p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+54 1167236504</p>
          </div>
          <div>
            <h3>E-Mail</h3>
            <p>lighu.miranda@gmail.com</p>
          </div>
        </div>
        <div className="right-contact">
          <div className="contact-form">
            <h1>CONTACT FORM</h1>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="bdef2864-f945-465f-b893-65ef980d7cba"
              />
              <input type="hidden" name="redirect" value={undefined}></input>
              <input type="text" name="name" placeholder="Your name" required />
              <input
                type="number"
                name="phone"
                placeholder="Your phone"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your e-mail"
                required
              />
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
              />
              <button className="form-button" type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
  );
}
