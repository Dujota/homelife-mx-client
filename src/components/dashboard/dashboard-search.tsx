import { Search, Filter } from "lucide-react";

export default function DashboardSearch() {
  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <input
          type="search"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-dash-border rounded-dash-lg focus:outline-none focus:ring-2 focus:ring-dash-ring focus:border-transparent bg-dash-card text-dash-foreground"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-dash-muted-foreground" />
      </div>
      <button className="p-2 bg-dash-card border border-dash-border rounded-dash-lg hover:bg-dash-accent focus:outline-none focus:ring-2 focus:ring-dash-ring focus:ring-offset-2">
        <Filter className="h-5 w-5 text-dash-muted-foreground" />
      </button>
    </div>
  );
}
// export default function DashboardSearch() {
//   return (
//     <div className="flex gap-2">
//       <div className="relative flex-1">
//         <input
//           type="search"
//           placeholder="Search"
//           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//         />
//         <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//       </div>
//       <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//         <Filter className="h-5 w-5 text-gray-400" />
//       </button>
//     </div>
//   );
// }
