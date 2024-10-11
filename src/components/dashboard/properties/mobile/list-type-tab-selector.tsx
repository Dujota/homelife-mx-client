export default function ListTypeTabSelector() {
  return (
    <div className="flex space-x-8 mb-6 border-b">
      <button className="font-semibold text-dash-primary border-b-2 border-dash-primary pb-2">
        All Properties
      </button>
      <button className="text-dash-muted-foreground hover:text-dash-primary pb-2">
        My Properties
      </button>
      <button className="text-dash-muted-foreground hover:text-dash-primary pb-2">
        All Listings
      </button>
      <button className="text-dash-muted-foreground hover:text-dash-primary pb-2">
        My Listings
      </button>
    </div>
  );
}
