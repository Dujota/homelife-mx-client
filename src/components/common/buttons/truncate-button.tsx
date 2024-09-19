export default function TruncateButton({
  toggleExpanded,
  isExpanded,
  showMoreText,
  showLessText,
}: {
  toggleExpanded: () => void;
  isExpanded: boolean;
  showMoreText: string;
  showLessText: string;
}) {
  return (
    <div
      role="button"
      onClick={toggleExpanded}
      className="cursor-pointer self-stretch relative text-[0.875rem] [text-decoration:underline] leading-[1.125rem] text-content-base-highlight"
    >
      {isExpanded ? showLessText : showMoreText}
    </div>
  );
}
