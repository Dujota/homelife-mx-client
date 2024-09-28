import Image from "next/image";

export default function ContactInfo({
  info,
}: {
  info: { icon: string; title: string; content: string }[];
}) {
  return (
    <div className="flex-1 space-y-6">
      {info.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="w-[4rem] h-[4rem] rounded bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
            <Image
              width={50}
              height={50}
              src={item.icon}
              alt=""
              className="w-[2rem] h-[2rem]"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-base text-content-base-base">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
