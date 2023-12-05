import ContactForm from "../../components/contact/ContactForm";
import "../../styles/contact/contact.css";

const Contact = () => {
  return (
    <main className="d-flex pt-4 justify-content-center" id="contact-page">
      <section
        id="contact-form-container"
        className="p-4 bg-white mx-3 mt-auto"
      >
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
