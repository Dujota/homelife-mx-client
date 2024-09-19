export type PageWrapperType = {
  className?: string;
  children: React.ReactNode;
};

export default function PageWrapper({
  children,
  className = "",
}: PageWrapperType) {
  return (
    <main
      className={`relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] ${className}`}
    >
      {children}
    </main>
  );
}
