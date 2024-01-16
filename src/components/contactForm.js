import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwKPmFRvgMIixGIaahVrivlZLP9BtvBDyNPPZpLrj0-jMNkwVEqr_7KKacfQe3lVvm7uw/exec";

  useEffect(() => {
    const form = document.forms["submit-to-google-sheet"];

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          body: new FormData(form),
        });
        console.log("Success!", response);

        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form data

        // You can reset the success message after a certain duration if needed
        setTimeout(() => {
          setSuccessMessage("");
        }, 1000);
      } catch (error) {
        console.error("Error!", error.message);
      }
    };
    form.addEventListener("submit", handleSubmit);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container py-5" id="contact">
      <div className="row g-0">
        <div className="col-md-6">
          <h1 className="color_green ">Contact me</h1>
          <div>
            <a
              href="mailto: preethigowda463@gmail.com"
              className="text-white "
              style={{ textDecoration: "none" }}
            >
              <FaEnvelope size={21} className="text-warning me-2 my-3 " />
              preethigowda463@gmail.com
            </a>
          </div>
          <div>
            <a
              href="tel:+917204881223"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              <FaPhone size={21} className="text-warning me-2 my-3 " />
              +91 7204881223
            </a>
          </div>
          {/* <button className="btn_color px-3 py-2 rounded my-2 ">
            <a
              href="/img/mycv.pdf"
              download="mycv.pdf"
              style={{ textDecoration: "none", color: "white" }}
              title="Download CV"
            >
              Download CV
            </a>
          </button> */}
        </div>
        <div className="col-md-6">
          <form name="submit-to-google-sheet">
            <input
              placeholder="your name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-75 py-2  ps-2 rounded bg-dark my-3 border border-white text-white"
            />
            <input
              placeholder="your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-75 py-2  ps-2 rounded bg-dark my-3 border border-white text-white"
              required
            />
            <textarea
              placeholder="your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-75 py-2  ps-2 rounded bg-dark my-3 border border-white text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-warning px-5 py-2 text-white rounded fs_18 fw_500 border-0"
            >
              Submit
            </button>
          </form>
          {successMessage && (
            <p className="color_green fs_20 fw_500">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
