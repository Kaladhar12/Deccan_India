import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
    <div className="container">
      {markdownify(title, "h1", "text-center font-normal")}
      <div className="flex justify-center section row pb-0">
        <div className="content col-12 md:col-6 lg:col-5">
          {markdownify(info.title, "h4")}
          {markdownify(info.description, "p", "mt-4")}
          <ul className="contact-list mt-5">
            {info.contacts.map((contact, index) => (
              <li key={index}>
                {markdownify(contact, "strong", "text-dark")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;