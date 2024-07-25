import NavLink from "./nav-link";

interface Link {
  path: string;
  title: string;
}

export default function MenuOverlay({ links }: { links: Link[] }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
