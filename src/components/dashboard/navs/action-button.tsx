// const ActionButton = ({
//   icon: Icon,
//   label,
// }: {
//   icon: React.ElementType;
//   label: string;
// }) => (
//   <button className="flex items-center justify-start px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//     <Icon className="mr-2 h-4 w-4" />
//     {label}
//   </button>
// );

const ActionButton = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <button className="flex items-center justify-start px-4 py-2 bg-dash-card border border-dash-border border-solid rounded-dash-lg text-sm font-medium text-dash-foreground hover:bg-dash-accent focus:outline-none focus:ring-2 focus:ring-dash-ring focus:ring-offset-2 cursor-pointer inset-0">
    <Icon className="mr-2 h-4 w-4" />
    {label}
  </button>
);

export default ActionButton;
