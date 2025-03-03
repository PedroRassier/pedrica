import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaPaw, FaHeart, FaCalendarAlt } from "react-icons/fa";

const StyledNavbar = styled.header`
  background-color: #f7f3dc;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.8rem;

  a {
    transition: opacity 0.5s ease-in-out;
    font-size: 1.5rem;
    color: #929292;
    text-decoration: none;
    display: flex;
    align-items: center;
    .icon {
      transition: opacity 0.5s ease-in-out;
      margin-left: 10px;
      opacity: 0;
    }
  }
  a:hover {
    transition: font-size 0.5s ease-in-out, color 0.5s ease-in-out;
    color: #4e4e4e;
    font-size: 1.8rem;
    border-bottom: 0.2rem solid #ffffff;
    .icon {
      opacity: 1;
    }
  }
  a:not(:hover) {
    transition: font-size 0.3s ease-in-out, color 0.3s ease-in-out;
    font-size: 1.5rem;
    color: #929292;
    text-decoration: none;

    .icon {
      opacity: 0;
    }
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/counter">
        Contador
        <FaCalendarAlt color="#4e4e4e" fontSize={"1.5rem"} className="icon" />
      </Link>
      <Link to="/cats">
        Gatos
        <FaPaw color="#4e4e4e" fontSize={"1.5rem"} className="icon" />
      </Link>
      <Link to="/dogs">
        Cachorros
        <FaPaw color="#4e4e4e" fontSize={"1.5rem"} className="icon" />
      </Link>
      <Link to="/pedrica">
        Nós
        <FaHeart color="#4e4e4e" fontSize={"1.5rem"} className="icon" />
      </Link>
    </StyledNavbar>
  );
}
export default Navbar;
