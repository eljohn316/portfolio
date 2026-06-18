import { JSX } from 'react';
import { cn } from '@/lib/utils';

interface TechBadgeProps extends React.ComponentProps<'span'> {
  name: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

export function TechBadge({ name, icon: Icon, className, ...props }: TechBadgeProps) {
  return (
    <span
      key={name}
      className={cn(
        'inline-flex items-center gap-x-2 rounded-full border border-zinc-600 px-3 py-1.75 text-xs leading-none font-semibold tracking-wide shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
        className
      )}
      {...props}>
      <Icon className="size-4 shrink-0 rounded-full" aria-hidden="true" />
      {name}
    </span>
  );
}
