interface TableSectionProps {
  data: { [key: string]: string }[];
}

const TableSection: React.FC<TableSectionProps> = ({ data }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="bg-gray-100">
        <tr>
          {Object.keys(data[0]).map((header) => (
            <th key={header} className="p-2 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-b last:border-b-0">
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex} className="p-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableSection;
