import Link from "next/link";
import { InterviewIllustration } from "./Icons/InterviewIllustration";

export interface CardItem {
  title: string;
  subtitle: string;
  price: string;
  href: string;
  linkTitle: string;
}

export function Card({ title, subtitle, price, href, linkTitle }: CardItem) {
  return (
    <div className="max-w-xl py-6 cursor-pointer">
      <div className="shadow-lg flex bg-white overflow-hidden h-64">
        <div className="flex flex-col w-2/3 p-8">
          <h1 className="text-gray-900 font-bold text-2xl">{title}</h1>
          <p className="mt-2 text-gray-600 text-sm">{subtitle}</p>

          <div className="flex items-baseline justify-between mt-auto">
            <Link
              href={href}
              className="text-blue-600 border-b border-blue-100 no-underline hover:border-blue-800 hover:text-blue-800 font-bold pt-2.5"
            >
              {linkTitle}
            </Link>
            {/* <h2 className="text-gray-400 font-bold">{price}</h2> */}
          </div>
        </div>
        <div className="w-1/3">
          <InterviewIllustration />
        </div>
      </div>
    </div>
  );
}
