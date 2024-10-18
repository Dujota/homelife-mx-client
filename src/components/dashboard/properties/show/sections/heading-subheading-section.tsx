interface HeadingSubheadingProps {
  heading: string;
  subheading: string;
}

const HeadingSubheadingSection: React.FC<HeadingSubheadingProps> = ({
  heading,
  subheading,
}) => (
  <div className="mb-2">
    <h4 className="text-sm text-gray-500">{heading}</h4>
    <p className="text-lg font-semibold">{subheading}</p>
  </div>
);

export default HeadingSubheadingSection;
