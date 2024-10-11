const SidebarItem = ({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) => (
  <button
    className={`my-4 w-full flex items-center px-2 py-2 text-lg font-medium rounded-dash-md cursor-pointer ${active ? "bg-dash-accent text-dash-foreground" : "text-dash-muted-foreground hover:bg-dash-accent hover:text-dash-foreground bg-transparent"}`}
  >
    <Icon className="mr-3 h-5 w-5" />
    {label}
  </button>
);

export default SidebarItem;
