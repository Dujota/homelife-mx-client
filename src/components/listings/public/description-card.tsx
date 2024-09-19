"use client";

import TruncateButton from "@/components/common/buttons/truncate-button";
import useExpandable from "@/lib/hooks/use-expandable";

interface DescriptionCardProps {
  title: string;
  content: string;
  showMoreText: string;
  showLessText: string;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  title,
  content,
  showMoreText,
  showLessText,
}) => {
  const { toggleSection, isSectionExpanded } = useExpandable();

  const isExpanded = isSectionExpanded("description");

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
      <div className="self-stretch relative tracking-[-0.01em] leading-[1.5rem] font-medium">
        {title}
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-[1rem] text-black">
        <div
          className={`self-stretch relative leading-[1.5rem] overflow-hidden text-ellipsis ${
            isExpanded
              ? ""
              : "[display:-webkit-inline-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical]"
          }`}
        >
          <p className="m-0">{content}</p>
        </div>
        <TruncateButton
          toggleExpanded={() => toggleSection("description")}
          isExpanded={isExpanded}
          showMoreText={showMoreText}
          showLessText={showLessText}
        />
      </div>
    </div>
  );
};

export default DescriptionCard;
