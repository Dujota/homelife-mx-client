const ActionButton = ({
  icon: Icon,
  label,
  handleClick,
}: {
  icon: React.ElementType;
  label: string;
  handleClick?: () => void;
}) => (
  <button
    onClick={handleClick}
    className="flex items-center justify-start px-4 py-2 bg-dash-card border border-dash-border border-solid rounded-dash-lg text-sm font-medium text-dash-foreground hover:bg-dash-accent focus:outline-none focus:ring-2 focus:ring-dash-ring focus:ring-offset-2 cursor-pointer inset-0"
  >
    <Icon className="mr-2 h-4 w-4" />
    {label}
  </button>
);

export default ActionButton;
