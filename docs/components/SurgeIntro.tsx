const arr = [
  {
    title: "Introduction",
    url: "/overview/introduction",
  },
  {
    title: "Why Surge?",
    url: "/overview/why-surge",
  },
  {
    title: "Understanding Rollups",
    url: "/basics/understanding-the-rollups",
  },
  // {
  //   title: "Bitcoin Scaling Attempts",
  //   url: "/basics/attempts-to-scale-bitcoin",
  // },
  // {
  //   title: "Evolution of Bitcoin Rollups",
  //   url: "/basics/journey-of-rollups-on-bitcoin",
  // },
];

export default function SurgeIntro() {
  return (
    <div className="size-full bg-white dark:bg-black pb-8 pl-7 pr-5 pt-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 dark:border dark:border-gray-800 rounded-lg">
      <div>
        <p className="gradientText text-[32px] font-bold leading-[42px] pb-2">
          Surge 101
        </p>
        <p className="border-b border-dashed border-[#6F7B8B] pb-4 text-base leading-5 text-[#6B7280]">
          Surge’s core principles and Bitcoin scaling.
        </p>
      </div>
      <div className="flex flex-col gap-y-[10px] w-full mt-7">
        {arr.map((_item, ind) => (
          <a
            className="flex items-center justify-between group"
            href={_item.url}
            key={ind}
          >
            <p className="text-lg text-[#2D3036] dark:text-white group-hover:text-[#f4431b]">
              {_item.title}
            </p>
            <img src="/assets/arrow_right.svg" alt="MPC TSS bridge" />
          </a>
        ))}
      </div>
    </div>
  );
}
