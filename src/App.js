import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import {createGlobalStyle} from "styled-components";
import Dropdown from "./components/Dropdown/Dropdown";
import ModalContentChange from "./components/modalContentChange/ModalContentChange";
import Accordions from "./components/Accordion/Accordion";
import LinkWithState from "./components/Link/LinkWithState";
import LinkWithStateTest from "./components/Link/LinkWithStateTest";
import BrowserLanguage from "./components/browseLanguage/BrowserLanguage";
import DataStructure from "./components/dataStructure/DataStructure";

const GlobalStyle = createGlobalStyle`
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  body {
    line-height: 1;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR','Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="modalContentChange" element={<ModalContentChange />} />
        <Route path="accordion" element={<Accordions />} />
        <Route path="link" element={<LinkWithState />} />
        <Route path="link-test" element={<LinkWithStateTest />} />
        <Route path="browser-language" element={<BrowserLanguage />} />
        <Route path="dataStructure" element={<DataStructure />} />
      </Routes>
    </>
  );
}

export default App;
