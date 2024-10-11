import BlockLoader from "@/components/common/animations/block-loader";
import dynamic from "next/dynamic";

const DashboardPropertyList = dynamic(() => import("./property-list"), {
  ssr: false,
  loading: () => <BlockLoader message="Loading properties..." />,
});

export default function PropertiesPage() {
  return <DashboardPropertyList />;
}
