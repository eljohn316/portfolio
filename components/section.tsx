import * as React from 'react';
import { cn } from '@/lib/utils';

export function Section({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      className={cn('border-t border-gray-200 py-28 lg:py-32 dark:border-zinc-600', className)}
      {...props}
    />
  );
}

export function SectionHeader({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('space-y-5 text-center', className)}>{children}</div>;
}

export function SectionHeading({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'text-3xl font-bold tracking-tight text-blue-700 dark:text-blue-500',
        className
      )}
      {...props}
    />
  );
}
export function SectionDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return <p className={cn('text-gray-600 dark:text-zinc-300', className)} {...props} />;
}
