const arr = [
  {
    title: "Brand Kit",
    url: "/resources/branding-and-logos",
  },
  {
    title: "Quick Links",
    url: "/resources/quick-links",
  },
  {
    title: "Community Guidelines",
    url: "/resources/community-guidelines",
  },
];

export default function Resources() {
  return (
    <div className="size-full bg-white dark:bg-black pb-8 pl-7 pr-5 pt-10 shadow-lg dark:shadow-gray-500 dark:border dark:border-gray-500">
      <div>
        <p className="gradientText text-[32px] font-bold leading-[42px] pb-2">
          Resources
        </p>
        <p className="border-b border-dashed border-[#6F7B8B] pb-8 text-base leading-5 text-[#6B7280]">
          All our brand assets including logos, and sub product logos for
          external communications
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
