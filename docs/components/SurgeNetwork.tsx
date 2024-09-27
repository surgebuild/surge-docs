const arr = [
  {
    title: "Overview",
    url: "/metalayer/overview",
  },
  {
    title: "Verifiers",
    url: "/metalayer/verifier",
  },
  {
    title: "Signers (DKLs23 - ECDSA/EdDSA)",
    url: "/metalayer/signer",
  },
  {
    title: "Indexers",
    url: "/metalayer/indexer/overview",
  },
];

export default function SurgeNetwork() {
  return (
    <div className="size-full bg-white dark:bg-[#0d1111] pb-8 pl-7 pr-5 pt-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 dark:border dark:border-gray-800 rounded-lg">
      <div>
        <p className="gradientText text-[32px] font-bold leading-[42px] pb-2">
          Surge Network (Metalayer)
        </p>
        <p className="border-b border-dashed border-[#6F7B8B] pb-4 text-base leading-5 text-[#6B7280]">
          Composable Metalayer on Bitcoin
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
