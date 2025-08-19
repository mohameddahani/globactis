import CardNav from "@/components/CardNav";
import Background from "@/components/Background";
import logo from "../../public/logo.png";

const Home = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          href: "/about/company",
          ariaLabel: "About Company",
        },
        {
          label: "Careers",
          href: "/about/careers",
          ariaLabel: "About Careers",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          href: "/projects/featured",
          ariaLabel: "Featured Projects",
        },
        {
          label: "Case Studies",
          href: "/projects/case-studies",
          ariaLabel: "Project Case Studies",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          href: "mailto:contact@globactis.com",
          ariaLabel: "Email us",
        },
        {
          label: "Twitter",
          href: "https://twitter.com/globactis",
          ariaLabel: "Twitter",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/globactis",
          ariaLabel: "LinkedIn",
        },
      ],
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Background
        beamWidth={2}
        beamHeight={150}
        beamNumber={10}
        lightColor="#FEB50F"
        speed={2}
        noiseIntensity={1.5}
        scale={0.2}
        rotation={40}
      />
      <div className="absolute top-0 left-0 w-full z-10">
        <CardNav
          logo={logo}
          logoAlt="Globactis Logo"
          items={items}
          ease="power3.out"
        />
      </div>
    </div>
  );
};

export default Home;
