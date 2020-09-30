import { createGlobalStyle } from "styled-components";

import source from "./source.woff";
import source2 from "./source.woff2";
import quicksand from "./quicksand.woff";
import quicksand2 from "./quicksand.woff2";
import calibremedium from "./calibremedium.woff";
import calibremedium2 from "./calibremedium.woff2";
import calibre from "./calibre.woff";
import calibre2 from "./calibre.woff2";
import lato from "./lato.woff";
import lato2 from "./lato.woff2";
export default createGlobalStyle`
    @font-face {
        font-family: 'source';
        src: local('source'), local('source2'),
        url(${source2}) format('woff2'),
        url(${source}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'quicksand';
        src: local('quicksand'), local('quicksand2'),
        url(${quicksand2}) format('woff2'),
        url(${quicksand}) format('woff');
        font-weight: 100;
        font-style: normal;
    }
     @font-face {
         font-family: 'calibremedium';
         src: local('calibremedium'), local('calibremedium2'),
        url(${calibremedium2}) format('woff2'),
        url(${calibremedium}) format('woff');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'calibre';
        src: local('calibre'), local('calibre2'),
        url(${calibre2}) format('woff2'),
        url(${calibre}) format('woff');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'lato';
        src: local('lato'), local('lato2'),
        url(${lato2}) format('woff2'),
        url(${lato}) format('woff');
        font-weight: 100;
        font-style: normal;
    }
`;
