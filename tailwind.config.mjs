/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Primary - Navy Blue (#000080)
                primary: {
                    50: '#e6e6f2',
                    100: '#b3b3d9',
                    200: '#8080bf',
                    300: '#4d4da6',
                    400: '#262693',
                    500: '#000080',
                    600: '#000073',
                    700: '#000063',
                    800: '#000054',
                    900: '#000036',
                },
                // Accent - Red (#FF0000)
                accent: {
                    50: '#ffe6e6',
                    100: '#ffb3b3',
                    200: '#ff8080',
                    300: '#ff4d4d',
                    400: '#ff2626',
                    500: '#FF0000',
                    600: '#e60000',
                    700: '#cc0000',
                    800: '#b30000',
                    900: '#800000',
                },
                // Secondary - Burgundy (#9E2A3A)
                secondary: {
                    50: '#f7e9eb',
                    100: '#e9c1c7',
                    200: '#db97a1',
                    300: '#cd6d7b',
                    400: '#c24d5f',
                    500: '#9E2A3A',
                    600: '#8e2534',
                    700: '#7a1f2c',
                    800: '#671a25',
                    900: '#461017',
                },
                // Neutral - Dark Brown (#3A2525)
                neutral: {
                    50: '#f5f3f3',
                    100: '#e5e0e0',
                    200: '#d4cccc',
                    300: '#c3b8b8',
                    400: '#b6a9a9',
                    500: '#3A2525',
                    600: '#342121',
                    700: '#2d1c1c',
                    800: '#261717',
                    900: '#1a0f0f',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            // Design Tokens for Consistency
            spacing: {
                'card': '1.5rem',      // Standard card padding (p-6)
                'card-sm': '1.25rem',  // Small card padding (p-5)
                'section': '4rem',     // Section padding
                'section-lg': '6rem',  // Large section padding
            },
            borderRadius: {
                'card': '1rem',        // rounded-2xl equivalent
                'button': '0.75rem',   // rounded-xl equivalent  
                'badge': '9999px',     // rounded-full for pills
                'icon': '0.75rem',     // Icon containers - standardized to rounded-xl
            },
            backgroundImage: {
                'glass-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.6) 100%)',
                'glass-dark': 'linear-gradient(135deg, rgba(58, 37, 37, 0.75) 0%, rgba(58, 37, 37, 0.6) 100%)',
            },
            boxShadow: {
                'sm-layered': '0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)',
                'layered': '0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 15px rgba(0, 0, 0, 0.1)',
                'lg-layered': '0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.1)',
                'xl-layered': '0 20px 25px rgba(0, 0, 0, 0.1), 0 30px 50px rgba(0, 0, 0, 0.15)',
                'glow-primary': '0 0 20px rgba(0, 0, 128, 0.3), 0 0 40px rgba(0, 0, 128, 0.1)',
                'glow-accent': '0 0 20px rgba(255, 0, 0, 0.3), 0 0 40px rgba(255, 0, 0, 0.1)',
                'glow-secondary': '0 0 20px rgba(158, 42, 58, 0.3), 0 0 40px rgba(158, 42, 58, 0.1)',
            },
            // Animation System - Single Source of Truth
            // All common animations defined here, component-specific animations in their own files
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
            },
            animationDelay: {
                '75': '75ms',
                '100': '100ms',
                '150': '150ms',
                '200': '200ms',
                '300': '300ms',
                '500': '500ms',
                '700': '700ms',
            },
        },
    },
    plugins: [],
}
