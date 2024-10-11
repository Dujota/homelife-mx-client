import {
  MessageSquare,
  List,
  Calendar,
  PlusCircle,
  FileSignature,
  UserPlus,
} from "lucide-react";

import ActionButton from "./action-button";

export default function QuickActionToolbar() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:flex lg:flex-wrap">
      <ActionButton icon={PlusCircle} label="Add Property" />
      <ActionButton icon={List} label="Add Listing" />
      <ActionButton icon={Calendar} label="Add Task/Event" />
      <ActionButton icon={UserPlus} label="Create a Lead" />
      <ActionButton icon={FileSignature} label="Create Transaction" />
      <ActionButton icon={MessageSquare} label="Start Conversation" />
    </div>
  );
}
// export default function QuickActionToolbar() {
//   return (
//     <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:flex lg:flex-wrap">
//       <ActionButton icon={PlusCircle} label="Add Property" />
//       <ActionButton icon={List} label="Add Listing" />
//       <ActionButton icon={Calendar} label="Add Task/Event" />
//       <ActionButton icon={UserPlus} label="Create a Lead" />
//       <ActionButton icon={FileSignature} label="Create Transaction" />
//       <ActionButton icon={MessageSquare} label="Start Conversation" />
//     </div>
//   );
// }
