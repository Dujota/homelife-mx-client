export interface Option {
  value: string;
  label: string;
}

export const parkingOptions: Option[] = [
  { value: "any", label: "Any" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
];

export const daysOnMarketOptions: Option[] = [
  { value: "any", label: "Any" },
  { value: "1", label: "1 day+" },
  { value: "7", label: "7 days+" },
  { value: "14", label: "14 days+" },
  { value: "30", label: "30 days+" },
  { value: "90", label: "90 days+" },
  { value: "180", label: "6 months+" },
  { value: "365", label: "12 months+" },
  { value: "730", label: "24 months+" },
  { value: "1095", label: "36 months+" },
];

export const bedOptions: Option[] = [
  { label: "Any", value: "any" },
  { label: "1+", value: "1" },
  { label: "2+", value: "2" },
  { label: "3+", value: "3" },
  { label: "4+", value: "4" },
  { label: "5+", value: "5" },
];

export const bathOptions: Option[] = [
  { label: "Any", value: "any" },
  { label: "1+", value: "1" },
  { label: "1.5+", value: "1.5" },
  { label: "2+", value: "2" },
  { label: "3+", value: "3" },
  { label: "4+", value: "4" },
];

export const priceOptions: Option[] = [
  { value: "any", label: "Any" },
  { value: "200000", label: "200,000+" },
  { value: "300000", label: "300,000+" },
  { value: "400000", label: "400,000+" },
  { value: "500000", label: "500,000+" },
  { value: "600000", label: "600,000+" },
  { value: "700000", label: "700,000+" },
  { value: "800000", label: "800,000+" },
  { value: "900000", label: "900,000+" },
  { value: "1000000", label: "1M+" },
  { value: "2000000", label: "2M+" },
  { value: "3000000", label: "3M+" },
  { value: "4000000", label: "4M+" },
  { value: "5000000", label: "5M+" },
  { value: "6000000", label: "6M+" },
  { value: "7000000", label: "7M+" },
  { value: "8000000", label: "8M+" },
  { value: "9000000", label: "9M+" },
  { value: "10000000", label: "10M+" },
  { value: "11000000", label: "11M+" },
  { value: "12000000", label: "12M+" },
  { value: "13000000", label: "13M+" },
  { value: "14000000", label: "14M+" },
  { value: "15000000", label: "15M+" },
  { value: "16000000", label: "16M+" },
  { value: "17000000", label: "17M+" },
  { value: "18000000", label: "18M+" },
  { value: "19000000", label: "19M+" },
  { value: "20000000", label: "20M+" },
];

export const lotSizes: Option[] = [
  { value: "any", label: "Any" },
  { value: "100", label: "100+" },
  { value: "200", label: "200+" },
  { value: "300", label: "300+" },
  { value: "400", label: "400+" },
  { value: "500", label: "500+" },
  { value: "600", label: "600+" },
  { value: "700", label: "700+" },
  { value: "800", label: "800+" },
  { value: "900", label: "900+" },
  { value: "1000", label: "1000+" },
];

export const livingSpaceSizes: Option[] = [
  { value: "any", label: "Any" },
  { value: "100", label: "100+" },
  { value: "200", label: "200+" },
  { value: "300", label: "300+" },
  { value: "400", label: "400+" },
  { value: "500", label: "500+" },
  { value: "600", label: "600+" },
  { value: "700", label: "700+" },
  { value: "800", label: "800+" },
  { value: "900", label: "900+" },
  { value: "1000", label: "1000+" },
];
