
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        height: 100%;
        font-family: 'Poppins', Sans-Serif;
        background-color: #DCDCDC;
    }
`;

export default Global;