"use client";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-wrapper">
      <div className="left-contact">
        <div>
          <h1>ABOUT</h1>
          <p>
            My name is Lighuen Miranda, I'm a Fullstack web developer graduated
            from the SoyHenry bootcamp back in 2021. I'm very interested in working as a
            Frontend/Backend/FullStack web Developer. My most notable skills are being persistent and
            product focused, nothing is impossible as long as you have the will
            to try!
          </p>
        </div>
        <div>
          <h3>Phone</h3>
          <a href="https://walink.co/156dba" rel="noopener noreferrer" target="_blank" style={{color: "lightblue"}}>+54 1167236504</a>
        </div>
        <div>
          <h3>E-Mail</h3>
          <p onClick={() => window.location.href = 'mailto:yourmail@domain.com'} style={{cursor: "pointer", textDecoration: "underline"}}>lighu.miranda@gmail.com</p>
        </div>
      </div>
      <div className="right-contact">
        <div className="contact-form">
          <h1>CONTACT ME</h1>
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
            <button className="form-button" type="submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
