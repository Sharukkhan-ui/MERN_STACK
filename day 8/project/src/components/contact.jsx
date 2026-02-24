import { useState } from "react";

function Contact() {
  const [showMsg, setShowMsg] = useState(false);

  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h2>Contact</h2>
      <p>Email: SHARUKKHAN@gmail.com</p>
      <p>Phone: 9876543210</p>

      <button onClick={() => setShowMsg(!showMsg)}>
        {showMsg ? "Message Sent!" : "Send Message"}
      </button>

      {showMsg && <p>Thanks for reaching out! 😊</p>}
    </section>
  );
}

export default Contact;