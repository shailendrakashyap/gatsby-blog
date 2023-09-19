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
        url(${NunitoBlack}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Nunito Regular';
        src: local('Nunito Regular'), local('NunitoRegular'),

        url(${NunitoBlack}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`