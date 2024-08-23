const arr = [
  {
    title: "Introduction",
    url: "/",
  },
  // {
  //   title: "Why Surge?",
  //   url: "/",
  // },
  {
    title: "Understanding Rollups",
    url: "/",
  },
];

export default function RaasStack() {
  return (
    <div className="size-full bg-white dark:bg-black pb-8 pl-7 pr-5 pt-10 shadow-lg dark:shadow-gray-500 dark:border dark:border-gray-500">
      <div>
        <p className="gradientText text-[32px] font-bold leading-[42px] pb-2">
          RAAS Stack
        </p>
        <p className="border-b border-dashed border-[#6F7B8B] pb-8 text-base leading-5 text-[#6B7280]">
          Learn how we empower Surge rollups for maximum customisation
        </p>
      </div>
      <div className="flex flex-col gap-y-[10px] w-full mt-7">
        {arr.map((_item, ind) => (
          <a
            className="flex items-center justify-between "
            href={_item.url}
            key={ind}
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
