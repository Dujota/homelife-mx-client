import CardSlider from "../common/banners/card-slider";
import ListingCard from "../listings/cards/listing-card";

const mockData = "123456".split("").map((m) => {
  if (parseInt(m) % 2) {
    return "/temp/TEST_IMAGE_DELETE.png";
  }

  return "/temp/TEST_IMAGE2_DELETE.png";
});

export default function FeaturedPropertiesBanner() {
  return (
    <CardSlider
      title="Featured Listings"
      slidesWrapperClassName="overflow-y-hidden h-[21.5rem]"
    >
      {mockData.map((m, i) => (
        <ListingCard
          currency={i % 2 ? "CAD" : "MXN"}
          listing={{ price: "1,234,567" }}
          key={i}
          imageUrl={m}
        />
      ))}
    </CardSlider>
  );
}
