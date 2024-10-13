interface TextSectionProps {
  text: string;
}

const TextSection: React.FC<TextSectionProps> = ({ text }) => <p>{text}</p>;

export default TextSection;
