import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const TAGS = {
  frontend: 'Frontend',
  fullstack: 'Fullstack',
  frontendmentor: 'FrontendMentor'
} as const;

const tagVariants = cva('rounded px-2 py-2.5 text-xs font-semibold leading-0', {
  variants: {
    variant: {
      frontend: 'bg-green-200 text-green-900 border border-transparent',
      fullstack: 'bg-red-200 text-red-900 border border-transparent',
      frontendmentor: 'bg-white text-blue-700 border border-blue-700'
    }
  }
});

export type TagVariants = VariantProps<typeof tagVariants>;

interface TagProps extends React.ComponentProps<'span'>, VariantProps<typeof tagVariants> {}

export function Tag({ variant, className, ...props }: TagProps) {
  const content = TAGS[variant!];

  return (
    <span className={cn(tagVariants({ variant, className }))} {...props}>
      {content}
    </span>
  );
}
