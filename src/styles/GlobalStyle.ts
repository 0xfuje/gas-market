import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    // CSS RESET START
    *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
        all: unset;
        display: revert;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    a { cursor: revert; }
    ol, ul, menu { list-style: none; }
    img { max-width: 100%; }
    table { border-collapse: collapse;}
    textarea { white-space: revert; }
    :where([hidden]){ display:none; }
    :where([contenteditable]){
        -moz-user-modify: read-write;
        -webkit-user-modify: read-write;
        overflow-wrap: break-word;
        -webkit-line-break: after-white-space;
        line-break: after-white-space;
    }
    :where([draggable="true"]) { -webkit-user-drag: element; }
    // CSS RESET END

    // DEFAULT STYLING START
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 75%;
        background-color: ${props => props.theme.colors.darkest};
        color: ${props => props.theme.colors.light};
        padding: ${props => props.theme.space.gamma};
        font-weight: ${props => props.theme.font.weight.alpha};
        margin: 0 auto;
        @media screen and (min-width: ${props => props.theme.breakpoints.eta}) {
            font-size: 85%;
        }
        @media screen and (min-width: ${props => props.theme.breakpoints.delta}) {
            font-size: 100%;
        }
    }
    // DEFAULT STYLING END
`

export default GlobalStyle;