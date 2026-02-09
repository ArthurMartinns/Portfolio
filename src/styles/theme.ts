export const theme = {
  colors: {

    primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },


    background: {
      primary: '#f9fafb',
      secondary: '#ffffff',
      tertiary: '#eef2ff',
    },


    text: {
      primary: '#020617',
      secondary: '#334155',
      tertiary: '#64748b',
      inverse: '#f9fafb',
    },

    border: {
      light: '#e5e7eb',
      medium: '#cbd5f5',
      dark: '#94a3b8',
    },


    status: {
      success: '#22c55e',
      error: '#ef4444',
      warning: '#eab308',
      info: '#0ea5e9',
    },

    // Gradient colors
    gradient: {
      primary: {
        from: '#4f46e5',
        to: '#6366f1',
      },
      secondary: {
        from: '#eef2ff',
        to: '#e0f2fe',
      },
    },

    // Shadow colors
    shadow: {
      sm: '0 10px 30px rgba(15, 23, 42, 0.06)',
      md: '0 20px 45px rgba(15, 23, 42, 0.08)',
      lg: '0 25px 55px rgba(15, 23, 42, 0.12)',
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  // Spacing
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
};
export const darkTheme = {
  colors: {

    primary: {
      50: '#1d2440',
      100: '#1e293b',
      200: '#1e3a8a',
      300: '#4338ca',
      400: '#4f46e5',
      500: '#6366f1',
      600: '#818cf8',
      700: '#a5b4fc',
      800: '#c7d2fe',
      900: '#e0e7ff',
    },

    background: {
      primary: '#020617',
      secondary: '#020617',
      tertiary: '#020617',
    },

    text: {
      primary: '#e5e7eb',
      secondary: '#9ca3af',
      tertiary: '#6b7280',
      inverse: '#020617',
    },

    border: {
      light: '#1f2937',
      medium: '#374151',
      dark: '#4b5563',
    },

    status: {
      success: '#22c55e',
      error: '#f97373',
      warning: '#eab308',
      info: '#38bdf8',
    },

    gradient: {
      primary: {
        from: '#1e293b',
        to: '#4f46e5',
      },
      secondary: {
        from: '#020617',
        to: '#0f172a',
      },
    },

    shadow: {
      sm: '0 10px 30px rgba(15, 23, 42, 0.55)',
      md: '0 20px 45px rgba(15, 23, 42, 0.65)',
      lg: '0 25px 55px rgba(15, 23, 42, 0.75)',
    },
  },

  typography: {
    fontFamily: {
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
};


export default theme;