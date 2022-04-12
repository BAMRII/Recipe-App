import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import{BrowserRouter, Link} from 'react-router-dom';
import Styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav>
       <GiKnifeFork />
       <Logo to={"/"}>Deliciouss Recipes </Logo>
     </Nav>
     <Search />
     <Category /> 
     <Pages />
    </BrowserRouter> 
    </div>
  );
}

const Logo = Styled(Link)`
 text-decoration: none;
 font-weight: 400;
 font-size:2.5rem;
 font-family:'Lobter Two',cursive;
`;

const Nav = Styled.div`
  padding:4rem 0rem;
  display:flex;
  justify-content:flex-start;
  svg{
    font-size:3rem;
  }
`;

export default App;
