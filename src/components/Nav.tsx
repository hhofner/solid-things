import { styled } from "solid-styled-components";

// TODO: Get some global state of all lists

const Nav = styled("nav")`
  max-width: 40%;
  height: 100%;
  background-color: #f4f4ef;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  padding: 1rem;

  a {
    color: black;
    text-decoration: none;
  }
`;

const Item = styled("div")`
  display: flex;
  align-items: center;
`;

const CenteredItem = styled(Item)`
justify-content: center;
`;

const ThematicBreak = styled("div")`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 2px;
  border: 1px solid;
  background: black;
  border-radius: 5px;
`;

export default function Sidebar() {
  return (
    <Nav>
      <Item>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "1.5rem", width: "1.5rem" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
        <a href="inbox">Inbox</a>
      </Item>
      <Item>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          style={{ height: "1.5rem", width: "1.5rem" }}
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        <a href="/">Today</a>
      </Item>
      <Item>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "1.5rem", width: "1.5rem" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
        <a href="someday">Someday</a>
      </Item>
      <ThematicBreak></ThematicBreak>
      {/*TODO: Sort through lists here*/}
      <CenteredItem>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer"}}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </CenteredItem>
    </Nav>
  );
}
