import NewsletterForm from "../forms/newsletter-form";

export type NewsletterBannerType = {
  className?: string;
  title: string;
  description?: string;
};

const NewsletterBanner: React.FC<NewsletterBannerType> = ({
  className = "",
  title,
  description,
}) => {
  return (
    <section
      className={`self-stretch bg-colors-background-bg-primary overflow-hidden flex flex-row items-center justify-start py-spacing-section-section-vertical-padding px-spacing-section-section-horizontal-padding box-border max-w-full text-center text-[2rem] text-content-inverted-main font-text-md-regular ${className}`}
    >
      <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-center py-[6.125rem] px-[0.5rem] box-border bg-[url('/images/newsletter-bg.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-spacing-container-md max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[0.75rem]">
            <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[2.5rem] font-medium font-[inherit]">
              {title}
            </h2>
            {description && (
              <div className="self-stretch relative text-[1rem] tracking-[-0.03em] leading-[1.5rem] font-medium hidden">
                {description}
              </div>
            )}
          </div>

          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
