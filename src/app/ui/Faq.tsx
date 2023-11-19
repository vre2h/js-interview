import clsx from "clsx";

export interface FaqOption {
  question: string;
  answer: string;
}

export function Faq({
  title,
  subtitle,
  options,
  className,
}: {
  title: string;
  subtitle: string;
  options: FaqOption[];
  className?: string;
}) {
  return (
    <div className={clsx("flex flex-col items-center p-8 w-full", className)}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div className="max-w-4xl">
        {options.map(({ question, answer }, idx) => (
          <div className="grid md:grid-cols-2 py-8 border-b" key={idx}>
            <p className="text-xl font-bold mb-4 md:mb-0">{question}</p>
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
