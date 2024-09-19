import UpcomingProjectsCard from "@/components/listings/upcoing-projects-card";
import CardSlider from "../../common/banners/card-slider";

const mockData = "123456".split("").map((m) => {
  if (parseInt(m) % 2) {
    return {
      label: " Vaughan, Ontario, Canada",
      img: "/temp/UPCOMING1.png",
      date: " 22 January 2024",
    };
  }

  return { img: "/temp/UPCOMING2.png", date: " 22 January 2024" };
});

export default function UpcomingProjectsBanner() {
  return (
    <CardSlider
      title="Upcoming Projects"
      slidesWrapperClassName="overflow-y-hidden"
    >
      {mockData.map((m, i) => (
        <UpcomingProjectsCard
          // currency={i % 2 ? "CAD" : "MXN"}
          // listing={{ price: "1,234,567" }}
          label={m.label}
          date={m.date}
          key={i}
          imgUrl={m.img}
        />
      ))}
    </CardSlider>
  );
}
