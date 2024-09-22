"use client";

// Hook Form
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  NewsletterFormData,
  newsletterSchema,
} from "@/lib/zod/forms/newsletter-schema";

// Compomnents
import EmailInput from "./fields/email-input";
import SubscribeButton from "../common/buttons/subscribe-button";

const NewsletterForm: React.FC = () => {
  const methods = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit: SubmitHandler<NewsletterFormData> = (data) => {
    alert(`Submitted email: ${data.email}`);
  };

  return (
    <FormProvider {...methods}>
      <div className="self-stretch flex flex-col items-center justify-start gap-[0.75rem] md:self-center md:w-[500px]">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={`self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-rounded-lg bg-colors-background-bg-primary border-input-border-light-main border-solid overflow-hidden flex flex-row items-center justify-center py-[0.625rem] px-[0.687rem] gap-[0.5rem] ${methods.formState.errors.email ? "border-4 border-red-500" : "border-[1px]"}`}
        >
          <EmailInput
            disableErrorMessage
            name="email"
            label="Your Email"
            placeholder="you@example.com"
            wrapperClassName="w-full"
            className="w-full [border:none] [outline:none] bg-[transparent] h-[1.25rem] flex-1 flex flex-row items-center justify-start font-text-md-regular text-[1rem] text-input-text-placeholder min-w-[11.938rem]"
          />
          <SubscribeButton text="Subscribe" />
        </form>
      </div>
    </FormProvider>
  );
};

export default NewsletterForm;
