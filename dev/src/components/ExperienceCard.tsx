import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceCardProps {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  startDate,
  endDate,
  title,
  company,
  description,
  technologies,
  link,
}) => {
  const CardWrapper = link ? 'a' : 'div';
  const cardProps = link
    ? {
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'block',
      }
    : {};

  return (
    <CardWrapper {...cardProps}>
      <Card className="border-transparent bg-transparent p-6 rounded-lg transition-all duration-300 hover:bg-[rgba(156,163,175,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] cursor-pointer">
        <div className="grid md:grid-cols-4 gap-4">
          {/* Date Column */}
          <div className="md:col-span-1">
            <p className="text-xs text-[#9ca3af] uppercase tracking-wide">
              {startDate} — {endDate}
            </p>
          </div>

          {/* Content Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-lg font-medium text-[#fafafa] group-hover:text-[#10b981] transition-colors">
              {title} · {company}
            </h3>

            <p className="text-sm text-[#9ca3af] leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[rgba(16,185,129,0.2)] text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </CardWrapper>
  );
};
