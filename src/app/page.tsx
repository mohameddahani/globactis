import CardNav from "@/components/CardNav";
import logo from "../../public/logo.png";
import Hero from "@/components/Hero";

export default function Home() {
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
    <div>
      <header className="relative z-50">
        <CardNav
          logo={logo}
          logoAlt="Globactis Logo"
          items={items}
          ease="power3.out"
        />
      </header>

      <main className="relative top-50 z-10"><Hero /></main>

      <footer className="relative z-10">{/* footer */}</footer>
    </div>
  );
}
