import React from 'react';
import { Badge } from '@/components/ui/badge';

interface TechBadgeProps {
  name: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  return (
    <Badge
      variant="outline"
      className="bg-[rgba(16,185,129,0.05)] text-[#9ca3af] border-[rgba(156,163,175,0.2)] px-4 py-2 text-sm hover:bg-[rgba(16,185,129,0.1)] hover:text-[#10b981] hover:border-[rgba(16,185,129,0.3)] transition-all cursor-default"
    >
      {name}
    </Badge>
  );
};
