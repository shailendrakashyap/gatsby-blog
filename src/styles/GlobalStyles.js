import { createGlobalStyle } from "styled-components"
import NunitoRegular from "../fonts/Nunito-Regular"
import NunitoBlack from "../fonts/Nunito-Nunito-Black"

export const GlobalStyles = createGlobalStyle`
    :root{
        --site-max-width: 1200px;
    }
    @font-face {
        font-family: 'Nunito Regular';
        src: local('Nunito Regular'), local('NunitoRegular'),
        url(${NunitoRegular}) format('ttf'),
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Nunito Black';
        src: local('Nunito Black'), local('NunitoBlack'),
        url(${NunitoBlack}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
    body{
        background: {props => props.theme.colors.background};
        color: {props => props.theme.colors.textsecondary};
        margin: 0;
        padding: 0 20px 80px 20px;
        transition: all 0.5s ease;
    }
    main{
        max-width: 960px;
        margin: 40px auto;
    }
    h1,h2,h3,h4,h5,h6{
        color: {props => props.theme.colors.text};
        font-family: 'Nunito Black', sans-serif;
        transition: all 0.5s ease;
        letter-spacing: 1px;
    }
    p{
        font-size: 0.9rem;
        line-height: 1.2rem;

        @media screen and (min-width: 768px){
            font-size: 1.1rem;
            line-height: 1.5rem;
        }
    }
    h2{
        font-size: 1.5rem;
        margin: 30px 0;
        text-transform: uppercase;
        letter-spacing: 3px;

        @media screen and (min-width: 768px){
            font-size: 2rem;
        }
    }
`