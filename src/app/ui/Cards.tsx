import clsx from "clsx";
import { Card, CardItem } from "./Card";

export function Cards({
  items,
  className,
  title,
}: {
  items: CardItem[];
  className?: string;
  title: string;
}) {
  return (
    <div className="bg-gray-100 py-24">
      <h2 className="text-center mb-16 text-4xl font-bold">{title}</h2>
      <div className="w-full flex justify-center">
        <div
          className={clsx(
            "lg:grid lg:grid-cols-2 lg:gap-x-16 px-4 md:px-8 xl:px-32",
            className
          )}
        >
          {items.map((item) => (
            <Card key={item.href} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
