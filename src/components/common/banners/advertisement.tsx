export default function Advertisement({ split }: { split: number }) {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full">
      <textarea
        className="[border:none] bg-darkgray-100 h-[11.25rem] w-auto [outline:none] flex-1 max-w-full"
        rows={9}
        cols={18}
      />
    </div>
  );
}
