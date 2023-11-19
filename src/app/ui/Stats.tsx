export interface UiStat {
  title: string;
  subtitle: string;
}

export function Stats({ stats }: { stats: UiStat[] }) {
  return (
    <div className="flex flex-col xl:flex-row justify-between">
      {stats.map(({ title, subtitle }, idx) => (
        <div className="flex flex-col mb-8" key={idx}>
          <p className="text-blue-600 font-medium text-2xl mb-2">{title}</p>
          <p>{subtitle}</p>
        </div>
      ))}
    </div>
  );
}
