import Link from "next/link";

const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Brokerages", url: "/brokerages" },
  { label: "Join", url: "/join" },
  { label: "Properties", url: "/properties" },
  { label: "Finance", url: "/finance" },
  { label: "Tech", url: "/tech" },
  { label: "Contact", url: "/contact" },
];

export default function NavLinks() {
  return (
    <div className="h-[1.375rem] w-[4.875rem] hidden flex-row items-center justify-center gap-[1.987rem]">
      {links.map((link, index) => (
        <div
          key={index}
          className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]"
        >
          <Link href={link.url} className="self-stretch relative font-medium">
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  );
}

// export default function NavLinks() {
//   return (
//     <div className="h-[1.375rem] w-[4.875rem] hidden flex-row items-center justify-center gap-[1.987rem]">
//       <div className="self-stretch relative font-medium">Home</div>
//       <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//         <div className="self-stretch relative font-medium">About</div>
//       </div>
//       <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//         <div className="self-stretch relative font-medium">Brokerages</div>
//       </div>
//       <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0.5rem]">
//         <div className="self-stretch relative font-medium">Join</div>
//       </div>
//       <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//         <div className="self-stretch relative font-medium">Properties</div>
//       </div>
//       <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//         <div className="self-stretch relative font-medium">Finance</div>
//       </div>
//       <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//         <div className="self-stretch relative font-medium">Tech</div>
//       </div>
//       <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
//         <div className="self-stretch relative font-medium">Contact</div>
//       </div>
//     </div>
//   );
// }
