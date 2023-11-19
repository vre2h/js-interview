import { subtle } from "crypto";
import { FaqOption } from "./Faq";
import clsx from "clsx";

export function Steps({
  title,
  description,
  steps,
  className,
}: {
  title: string;
  description: string;
  steps: FaqOption[];
  className?: string;
}) {
  return (
    <div className={clsx("py-16 px-8 sm:px-16 md:px-0", className)}>
      <h2 className="text-center mb-4 text-4xl font-bold">{title}</h2>
      <p className="text-center mb-8 text-lg">{description}</p>

      <div className="md:flex md:flex-col md:items-center">
        <div className="flex flex-col">
          {steps.map(({ question, answer }, idx) => (
            <div
              className={clsx(
                "flex flex-col justify-center relative h-32 mb-8",
                {
                  "md:text-right": idx % 2 !== 0,
                }
              )}
              key={idx}
            >
              <p
                className={clsx(
                  "text-9xl font-bold text-gray-100 absolute z-0",
                  {
                    "md:right-0": idx % 2 !== 0,
                  }
                )}
              >
                0{idx + 1}.
              </p>
              <p className={"pl-20 mt-8 mb-2 relative font-bold text-xl z-10"}>
                {question}
              </p>
              <p className="pl-20 relative z-10">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
