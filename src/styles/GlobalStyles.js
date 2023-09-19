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
`