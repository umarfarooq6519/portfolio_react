import { useState } from "react";

export default function ContactPage() {
  const email = "umar_farooq52@outlook.com";
  const whatsapp = "+923244298602";
  const emailPath = `mailto:${email}`;
  const whatsappPath = `https://wa.me/${whatsapp}`;

  const upworkLink =
    "https://www.upwork.com/services/product/development-it-front-end-website-using-html-css-javascript-animations-and-styling-1756304190940692480?ref=fl_profile";
  const fancyBox = "bg-neutral-content rounded-3xl w-full py-5 px-6 flex";

  const [emailState, setEmailState] = useState(true); // copyToClipboard state
  const [whatsappState, setWhatsappState] = useState(true);

  function copyToClipboard(text, state, setState) {
    navigator.clipboard.writeText(text); // write to clipboard
    setState(!state);
    setTimeout(() => setState(true), 2000); // reset state
  }

  const CopyIcon = ({ state }) => {
    return state ? (
      <i className="fa-solid fa-clipboard fa-lg"></i>
    ) : (
      <i className="fa-solid fa-check fa-lg"></i>
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col text-center justify-center items-center gap-4 md:gap-8"
    >
      {/* contacts header */}
      <div className="flex flex-col items-center w-fit max-w-sm">
        Get in Touch
        <span className="heading text-4xl md:text-5xl">Contact Me</span>
        <p className="mt-4">
          Tell me about your next project and let's create something incredible
          together
        </p>
      </div>

      <div className="contact-list w-full text-base poppins flex max-w-lg flex-col md:flex-row px-10 md:px-0 items-center gap-4">
        <div className={`${fancyBox} justify-between`}>
          <span>
            <i className="fa-solid fa-envelope fa-xl mr-2"></i>
            <a href={emailPath}>
              <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
                Email me
              </span>
            </a>
          </span>
          <span
            title="Copy Email Address"
            className="hover:text-[#132043bf] cursor-pointer"
            onClick={() => copyToClipboard(email, emailState, setEmailState)}
          >
            <CopyIcon state={emailState} />
          </span>
        </div>
        <div className={`${fancyBox} justify-between`}>
          <span>
            <i className="fa-brands fa-whatsapp fa-xl mr-2"></i>
            <a href={whatsappPath} target="_blank" rel="noopener noreferrer">
              <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
                WhatsApp
              </span>
            </a>
          </span>
          <span
            title="Copy Phone Number"
            className="hover:text-[#132043bf] cursor-pointer"
            onClick={() =>
              copyToClipboard(whatsapp, whatsappState, setWhatsappState)
            }
          >
            <CopyIcon state={whatsappState} />
          </span>
        </div>
      </div>
      <p>
        Or place an order directly and we <br /> can start straight away
      </p>
      <div className="w-full text-base poppins flex max-w-xs md:max-w-64 flex-col md:flex-row px-10 md:px-0 items-center gap-4">
        <ul className={`${fancyBox} justify-center`}>
          <li>
            <i className="fa-brands fa-upwork fa-xl mr-2"></i>
            <a href={upworkLink} target="_blank" rel="noopener noreferrer">
              <span className="hover:text-[#132043bf] hover:border-b border-b-[#1320438f] py-1">
                Upwork
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
