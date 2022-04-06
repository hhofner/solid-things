import { styled } from "solid-styled-components";

// TODO: Get some global state of all lists

const Nav = styled("nav")`
  max-width: 20%;
  height: 100%;
  background-color: #f4f4ef;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: black;
    text-decoration: none;
  }
`;

export default function Sidebar() {
  return (
    <Nav>
      <a href="today">Today</a>
      <a href="someday">Someday</a>
    </Nav>
  )
}
