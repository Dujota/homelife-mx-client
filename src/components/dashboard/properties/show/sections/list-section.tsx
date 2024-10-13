import { LayoutDashboard } from "lucide-react";

interface ListItemProps {
  text: string;
  icon: React.ElementType;
}

interface ListSectionProps {
  items: ListItemProps[];
}

const ListSection: React.FC<ListSectionProps> = ({ items }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-center space-x-2">
        <item.icon className="w-5 h-5" />
        <span>{item.text}</span>
      </li>
    ))}
  </ul>
);

export default ListSection;
