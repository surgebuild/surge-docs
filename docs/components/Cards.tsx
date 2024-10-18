import HomepageCards from "./HomepageCards";

export const cardsArr = [
  {
    img: "/assets/block-size.png",
    heading: "Learn",
    description:
      "Documentation that provides an execution environment for developers",
    link: "/overview/introduction",
  },
  {
    img: "/assets/block-size.png",
    heading: "Surge Network",
    description: "Composable Metalayer on Bitcoin",
    link: "/overview/introduction",
  },
  {
    img: "/assets/block-size.png",
    heading: "Run a node",
    description: "Secure the Surge Network and earn rewards",
    link: "/collaborate/custom-signet-node",
  },
  {
    img: "/assets/block-size.png",
    heading: "Community",
    description:
      "Join the Surge community to connect, collaborate and contribute.",
    link: "/resources/quick-links",
  },
];

export default function Cards() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 w-full gap-4">
      {cardsArr.map((card, ind) => (
        <HomepageCards
          key={ind}
          img={card.img}
          heading={card.heading}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
}
