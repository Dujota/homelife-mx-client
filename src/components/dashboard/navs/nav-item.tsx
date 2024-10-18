// const NavItem = ({
//   icon: Icon,
//   label,
// }: {
//   icon: React.ElementType;
//   label: string;
// }) => (
//   <button className="flex flex-col items-center justify-center px-2 py-1 text-xs font-medium text-gray-500 hover:text-gray-900">
//     <Icon className="h-5 w-5 mb-1" />
//     {label}
//   </button>
// );

const NavItem = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <button className="flex flex-col items-center justify-center px-2 py-1 text-xs font-medium text-dash-muted-foreground hover:text-dash-foreground cursor-pointer bg-transparent">
    <Icon className="h-5 w-5 mb-1" />
    {label}
  </button>
);

export default NavItem;
