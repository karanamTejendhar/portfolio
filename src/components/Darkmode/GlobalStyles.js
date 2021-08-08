import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  section {
    border:${({ theme }) => theme.boxBorder};
    padding:10px;
    margin-top:10px;
  }
  .intro {
    background:${({ theme }) => theme.introBg};
  }
  .nav {
    background:${({ theme }) => theme.introBg};
  }
  .heading {
    color:${({ theme }) => theme.heading} !important
  }
  .itemname {
    color:${({ theme }) => theme.heading} !important
  }
  .items .linkWrapper ul li {
    color:${({ theme }) => theme.color} !important
  }
  .demobtn {
    border:${({ theme }) => theme.demoBtn};
    color:${({ theme }) => theme.demoBtnColor} !important
  }
  .about span {
    color:${({ theme }) => theme.color} !important
  }
  .footer {
    background:${({ theme }) => theme.introBg};
  }
  .darkmodeforgit {
    fill:${({ theme }) => theme.darkmodeforgit} !important;
  }
  `