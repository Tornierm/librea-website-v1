'use client';

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  description?: string;
}

export function SectionHeader({ eyebrow, heading, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-20">
      <span className="text-label text-[var(--text-muted)] block mb-2">
        {eyebrow}
      </span>
      <div className="flex flex-col md:flex-row md:items-start md:gap-16">
        <h2
          className="text-h1 md:text-display-sm flex-1"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {heading}
        </h2>
        {description && (
          <p className="text-body text-[var(--text-muted)] flex-1 mt-4 md:mt-0 max-w-md">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
