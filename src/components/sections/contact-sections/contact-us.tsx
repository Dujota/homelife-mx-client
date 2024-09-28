import ContactForm from "../../forms/contact-form";
import ContactInfo from "./contact-info";

type ContactUsProps = {
  className?: string;
  title: string;
  text: string;
  info: {
    icon: string;
    title: string;
    content: string;
  }[];
};

export default function ContactUs({
  className = "",
  title,
  text,
  info,
}: ContactUsProps) {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-5 px-4 sm:px-10 box-border max-w-full text-left ${className}`}
    >
      <div className="w-full max-w-[98rem] mx-auto">
        <h1 className="text-3xl font-medium text-gray-900 mb-2 text-[32px] leading-[2.5rem]">
          {title}
        </h1>
        <p className="text-base text-content-base-base mb-8">{text}</p>

        <div className="flex flex-col lg:flex-row gap-10">
          <ContactForm />
          <ContactInfo info={info} />
        </div>
      </div>
    </section>
  );
}
