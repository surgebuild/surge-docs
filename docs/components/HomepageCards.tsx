interface IHomepageCardsProps {
  img?: string;
  heading: string;
  description: string;
  link: string;
}

export default function HomepageCards({
  img,
  heading,
  description,
  link,
}: IHomepageCardsProps) {
  return (
    <a
      className="h-full w-full bg-[#969faf20] transition-all duration-300 ease-in-out hover:-translate-y-[6px] p-6 rounded-xl flex flex-col justify-start gap-4 mr-4"
      href={link}
    >
      <img src={img} alt={`${heading}-img`} />

      <p className="font-semibold text-[18px] gradientText">{heading}</p>
      <p className="text-base leading-5 text-[#6B7280] dark:text-white">
        {description}
      </p>
    </a>
  );
}
