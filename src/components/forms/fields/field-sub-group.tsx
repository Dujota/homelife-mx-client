interface SubGroupProps {
  children: React.ReactNode;
  columns: 1 | 2 | 3 | 4;
}

export const SubGroup: React.FC<SubGroupProps> = ({ children, columns }) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
  };

  return <div className={`grid ${gridCols[columns]} gap-4`}>{children}</div>;
};
