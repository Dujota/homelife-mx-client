const StatCard = ({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
}) => (
  <div className="bg-dash-card rounded-dash-lg shadow p-4">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-sm font-medium text-dash-muted-foreground">
        {title}
      </h3>
      <Icon className="h-4 w-4 text-dash-muted-foreground" />
    </div>
    <p className="text-2xl font-bold text-dash-card-foreground">{value}</p>
  </div>
);

export default StatCard;
