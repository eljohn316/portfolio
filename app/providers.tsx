'use client';

import * as React from 'react';
import { ThemeProvider } from '@wrksz/themes';

export function Providers({
  children,
  storage = 'cookie',
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = true,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  return (
    <ThemeProvider
      storage={storage}
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      {...props}>
      {children}
    </ThemeProvider>
  );
}
