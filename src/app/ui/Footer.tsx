import Link from "next/link";
import { LinkType } from "../types/general";

export function Footer({
  title,
  description,
  links,
  signature,
}: {
  title: string;
  description: string;
  links: LinkType[];
  signature: string;
}) {
  return (
    <footer className="py-16 flex flex-col items-center bg-gray-800 text-white">
      <h2 className="text-6xl mb-8">{title}</h2>
      <p className="font-bold mb-8">{description}</p>
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        {links.map(({ href, title }) => (
          <Link
            className="bg-white hover:bg-zinc-600	 hover:text-white rounded-2xl text-black text-xs px-4 py-2"
            key={href}
            href={href}
          >
            {title}
          </Link>
        ))}
      </div>
      <p className="text-sm text-slate-400">{signature}</p>
    </footer>
  );
}
