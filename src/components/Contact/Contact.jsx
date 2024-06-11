import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { assets } from "@/assets";

const cx = classNames.bind(styles);

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ce7f4e86-1713-47bc-b562-7842f1018918");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className={cx("contact")}>
      <div className={cx("contact-col")}>
        <h3>
          Send us a message <img src={assets.msg_icon} />{" "}
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={assets.mail_icon} />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={assets.phone_icon} />
            +1 123-456-7890
          </li>
          <li>
            <img src={assets.location_icon} />
            77 Massachusetts Ave, Cambridge
            <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className={cx("contact-col")}>
        <form onSubmit={onSubmit}>
          <label> Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label> Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="Submit" className={cx("btn", "dark-btn")}>
            Submit now
            <img src={assets.white_arrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
