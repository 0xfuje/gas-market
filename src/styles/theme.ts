import { DefaultTheme } from "styled-components";
// Size naming convention is based on the greek alphabet
// From largest to smallest:
// alpha - A
// beta - B
// gamma - G
// delta - D
// epsilon - E
// zeta - Z
// eta - e


const theme = {
    colors: {
        light: '#F8F9FA',
        lightgrey: '#ADB5BD',
        darkgrey: '#6C757D',
        dark: '#212529',
        darkest: '#0F1113',
        gradient: {
            dark: 'linear-gradient(to bottom right, rgba(52, 58, 64, 0.5), rgba(52, 58, 64, 0))',
            darkgrey: 'linear-gradient(to bottom right, rgba(52, 58, 64, 1), rgba(52, 58, 64, 0.5))',
        }
    },
    font: {
        size: {
            alpha: '1.5em',   // 24px
            beta: '1.125em',  // 18px
            gamma: '0.875em', // 14px
            delta: '0.625em', // 10px
        },
        weight: {
            alpha: '500',
            beta: '300'
        }

    },
    space: {
        alpha: '4em',
        beta: '3em',
        gamma: '2em',
        delta: '1.5em',
        epsilon: '1em',
        zeta: '0.5em',
        eta: '0.25em'
    },
    borrad: {
        alpha: '1em',
        beta: '0.5em',
        gamma: '0.25em'
    },
    breakpoints: {
        alpha: '1920px',
        beta: '1440px',
        gamma: '1200px',
        delta: '1024px',
        epsilon: '768px ',
        zeta: '600px',
        eta: '480px',
    },
    
}

declare module 'styled-components' {
    type Theme = typeof theme;
    export interface DefaultTheme extends Theme {}
}

export default theme;
