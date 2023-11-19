import clsx from "clsx";
import { InterviewIllustration } from "./Icons/InterviewIllustration";
import { Stats, UiStat } from "./Stats";

export function BgWithIllustration({
  title,
  subtitle,
  titleCompliment,
  stats,
  className,
}: {
  title: string;
  subtitle: string;
  titleCompliment: string;
  stats?: UiStat[];
  className?: string;
}) {
  return (
    <div className={clsx("p-8 xl:p-32", className)}>
      <div className="flex flex-col xl:flex-row gap-16">
        <div className="mb-12 xl:mb-0">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {title}{" "}
            <span className="text-blue-600 dark:text-blue-500">
              {titleCompliment}
            </span>
          </h1>
          <p
            className="max-w-lg"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>

        <div className="flex justify-center mb-16">
          <InterviewIllustration />
        </div>
      </div>

      {stats?.length && <Stats stats={stats} />}
    </div>
  );
}
