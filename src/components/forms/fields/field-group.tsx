interface FieldGroupProps {
  heading: string;
  children: React.ReactNode;
}

export const FieldGroup: React.FC<FieldGroupProps> = ({
  heading,
  children,
}) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
      {heading}
    </h3>
    <div className="space-y-4">{children}</div>
  </div>
);
