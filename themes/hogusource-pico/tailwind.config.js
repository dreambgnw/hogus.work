/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // システム設定に従う
  content: [
    '../../layouts/**/*.html',
    '../../content/**/*.{md,html}',
    './layouts/**/*.html',
    './**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Harenosora Mincho"', '"Noto Serif JP"', 'serif', '"SourceHanSerifJP"'],
        'sans': ['"Noto Sans JP"', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.serif'),
            color: theme('colors.gray.900'),
            maxWidth: 'none',
            h1: {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: '700',
              fontSize: '2.25rem',
              lineHeight: '1.2',
              marginTop: '2rem',
              marginBottom: '1rem',
              color: theme('colors.gray.900'),
            },
            h2: {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: '700',
              fontSize: '1.875rem',
              lineHeight: '1.3',
              marginTop: '2rem',
              marginBottom: '1rem',
              color: theme('colors.gray.900'),
            },
            h3: {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '1.4',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              color: theme('colors.gray.900'),
            },
            h4: {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: '600',
              fontSize: '1.25rem',
              lineHeight: '1.4',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              color: theme('colors.gray.900'),
            },
            h5: {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: '600',
              fontSize: '1.125rem',
              lineHeight: '1.4',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
              color: theme('colors.gray.900'),
            },
            h6: {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: '600',
              fontSize: '1rem',
              lineHeight: '1.4',
              marginTop: '1rem',
              marginBottom: '0.5rem',
              color: theme('colors.gray.900'),
            },
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
              lineHeight: '1.9',
            },
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            strong: {
              fontWeight: '700',
              color: theme('colors.gray.900'),
            },
            ul: {
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
            },
            ol: {
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.blue.600'),
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: theme('colors.gray.700'),
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.gray.900'),
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '400',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.gray.900'),
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              border: `1px solid ${theme('colors.gray.200')}`,
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              borderRadius: '0',
            },
            table: {
              width: '100%',
              marginTop: '2rem',
              marginBottom: '2rem',
              fontSize: '0.875rem',
              lineHeight: '1.7142857',
              borderCollapse: 'collapse',
              border: `1px solid ${theme('colors.gray.200')}`,
              borderRadius: '0.5rem',
              overflow: 'hidden',
            },
            thead: {
              backgroundColor: theme('colors.gray.100'),
            },
            'thead th': {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              padding: '0.75rem 1rem',
              textAlign: 'left',
              borderBottom: `1px solid ${theme('colors.gray.200')}`,
            },
            'tbody tr': {
              borderBottom: `1px solid ${theme('colors.gray.200')}`,
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              padding: '0.75rem 1rem',
              color: theme('colors.gray.700'),
            },
            'tbody td:first-child': {
              backgroundColor: theme('colors.gray.100'),
              fontWeight: '600',
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: theme('colors.gray.50'),
            },
            'tbody tr:nth-child(even) td:first-child': {
              backgroundColor: theme('colors.gray.200'),
            },
            'tbody tr:hover': {
              backgroundColor: theme('colors.blue.50'),
            },
            'tbody tr:hover td:first-child': {
              backgroundColor: theme('colors.gray.300'),
            },
            hr: {
              borderColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              marginTop: '3rem',
              marginBottom: '3rem',
            },
            img: {
              marginTop: '2rem',
              marginBottom: '2rem',
              borderRadius: '0.5rem',
              border: `1px solid ${theme('colors.gray.200')}`,
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            h5: {
              color: theme('colors.white'),
            },
            h6: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.blue.400'),
              color: theme('colors.gray.300'),
            },
            code: {
              backgroundColor: theme('colors.black'),
              color: theme('colors.white'),
              border: `1px solid ${theme('colors.white')}`,
            },
            pre: {
              backgroundColor: theme('colors.black'),
              color: theme('colors.white'),
              border: `1px solid ${theme('colors.white')}`,
            },
            table: {
              borderColor: theme('colors.white'),
            },
            'thead th': {
              color: theme('colors.white'),
              backgroundColor: theme('colors.black'),
              borderBottomColor: theme('colors.white'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.white'),
            },
            'tbody td': {
              color: theme('colors.white'),
            },
            'tbody td:first-child': {
              backgroundColor: theme('colors.gray.900'),
              fontWeight: '600',
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: theme('colors.black'),
            },
            'tbody tr:nth-child(even) td:first-child': {
              backgroundColor: theme('colors.gray.800'),
            },
            'tbody tr:hover': {
              backgroundColor: theme('colors.gray.900'),
            },
            'tbody tr:hover td:first-child': {
              backgroundColor: theme('colors.gray.700'),
            },
            hr: {
              borderColor: theme('colors.white'),
            },
            img: {
              borderColor: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

