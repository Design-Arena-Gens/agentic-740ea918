interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-sherogreen">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
