
const plugin = require("tailwindcss/plugin");
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	fontFamily: {
  		oswald: 'var(--font-oswald)',
  		manrope: 'var(--font-manrope)'
  	},
  	extend: {
  		container: {
  			center: true,
  			screens: {
  				xs: '480px',
  				sm: '576px',
  				md: '768px',
  				lg: '992px',
  				xl: '1200px',
  				xxl: '1400px',
  				'3xl': '1600px',
  				'4xl': '1800px'
  			}
  		},
  		screens: {
  			xs: '480px',
  			sm: '576px',
  			md: '768px',
  			lg: '992px',
  			xl: '1200px',
  			xxl: '1400px',
  			'3xl': '1600px',
  			'4xl': '1800px'
  		},
  		colors: {
			  primary: "#ED7527",
        skinColor:"#FBF3EA",
        secondary: "#09307B",
        secondaryLight: "#8eafed",
		 light:"#FFF8F5",
  		
  			accent: {
  				'1': '#1D1D1D',
  				'2': '#121212',
  				'3': '#FFCE32',
  				'4': '#FFEFD7',
  				'5': '#CDFF00',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			white: {
  				'1': '#FFFFFF',
  				'2': '#F2F6F6',
  				'3': '#B3B6B9',
  				'4': '#F8F8F8'
  			},
  			black: {
  				'1': '#343839',
  				'2': '#232627',
  				'3': '#555555',
  				'4': '#121212'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'hero-pattern': 'linear-gradient(256deg, #CBF1D3 2.16%, #FFEFD7 109.64%)'
  		},
  		boxShadow: {
  			custom1: '0px 6px 30px 0px rgba(0, 0, 0, 0.04)',
  			custom2: '0px 6px 30px 0px rgba(0, 0, 0, 0.06)',
  			custom3: '0px 6px 30px 0px rgba(0, 0, 0, 0.08)'
  		},
  		spacing: {
  			'15': '60px',
  			'18': '72px',
  			'25': '100px',
  			'30': '120px'
  		},
  		keyframes: {
  			'custom-pulse': {
  				'0%': {
  					opacity: '0.2'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'spin-slow': 'spin 10s linear infinite',
  			'custom-pulse': 'custom-pulse 6s ease-in-out infinite alternate-reverse;'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [

    require('tailwind-scrollbar'),
  
    plugin(function ({ addComponents }: { addComponents: ({}) => void }) {
      addComponents({
        ".theme-transition-3": {
          transition: "all 0.3s ease-in-out",
        },
        ".theme-transition-10": {
          transition: "all 1s ease-in-out",
        },
        ".theme-transition-4": {
          transition: "all 0.4s ease-in-out",
        },
        ".theme-transition-6": {
          transition: "all 0.6s ease-in-out",
        },
        ".theme-transition-8": {
          transition: "all 0.8s ease-in-out",
        },
      });
    }),
      require("tailwindcss-animate")
],
};
export default config;
