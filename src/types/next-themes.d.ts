declare module 'next-themes' {
  export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: string;
    attribute?: string;
    value?: { [key: string]: string };
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
    storageKey?: string;
    nonce?: string;
  }

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
  
  export function useTheme(): {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    resolvedTheme: string | undefined;
    themes: string[];
    systemTheme: string | undefined;
  };
}

declare module 'next-themes/dist/types' {
  export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: string;
    attribute?: string;
    value?: { [key: string]: string };
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
    storageKey?: string;
    nonce?: string;
  }
}
