const arr = [
  {
    title: "Surge Custom Signet",
    url: "https://signet.surge.dev/",
  },
  {
    title: "Bitviper Ordinals Wallet",
    url: "https://bitviper.surge.dev/",
  },
  {
    title: "BTC Bridge",
    url: "https://bridge.devnet.surge.dev/",
  },
  // {
  //   title: "Custom Bitcoin Rollup CLI",
  //   url: "/",
  // },
  {
    title: "B.R.I.E.F Rollup Fee Calculator",
    url: "https://brief.surge.dev/",
  },
];

export default function BitcoinPlayground() {
  return (
    <div className="size-full bg-white dark:bg-black pb-8 pl-7 pr-5 pt-10 shadow-lg dark:shadow-gray-500 dark:border dark:border-gray-500">
      <div>
        <p className="gradientText text-[32px] font-bold leading-[42px] pb-2">
          Bitcoin Playground
        </p>
        <p className="border-b border-dashed border-[#6F7B8B] pb-8 text-base leading-5 text-[#6B7280]">
          All the necessary docs to learn more about all the free bitcoin tools
          in our playground
        </p>
      </div>
      <div className="flex flex-col gap-y-[10px] w-full mt-7">
        {arr.map((_item, ind) => (
          <a
            className="flex items-center justify-between "
            href={_item.url}
            key={ind}
            target="_blank"
          >
            <p className="text-xl text-[#2D3036] dark:text-white">
              {_item.title}
            </p>
            <img src="/assets/arrow_right.svg" alt="MPC TSS bridge" />
          </a>
        ))}
      </div>
    </div>
  );
}
