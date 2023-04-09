import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    text-decoration: none;
    line-height:1.5;
}

body{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
}


:root{
    --color-primary:#FF577F;
    --color-primary-focus:#FF427F;
    --color-primary-negative:#59323F;

    --color-grey-4:#121214;
    --color-grey-3:#212529;
    --color-grey-2:#343B41;
    --color-grey-1:#868E96;
    --color-grey-0:#F8F9FA;
}




`;
