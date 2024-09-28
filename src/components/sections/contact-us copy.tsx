import "react-international-phone/style.css";
import { ContactForm } from "../forms/contact-form";

export default function ContactUs() {
  return (
    // <section className="py-12 bg-white">
    <section className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2rem] box-border gap-[1rem] max-w-full text-left text-[2rem] text-content-base-main font-text-md-regular 3xl:mx-auto 3xl:max-w-[1600px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
        <p className="text-gray-600 mb-8">
          In case of a question, you can always contact us
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@homelife.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 555-5555</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Office Location</h3>
              <p className="text-gray-600">
                4517 Washington Ave., Manchester, Kentucky 39495
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
