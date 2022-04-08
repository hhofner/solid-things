import { For } from "solid-js";
import { styled } from "solid-styled-components";
import Todo from "./Todo";

const Container = styled("div")`
  padding: 2rem;
`;

const Header = styled("h1")`
  color: #335d92;
  text-transform: uppercase;
  font-size: 4rem;
  line-height: 1.1;
  max-width: 14rem;
`;

interface Props {
  title: string;
  todos: any[];
}

export default function ListPage(props: Props) {
  return (
    <Container>
      <Header>{props.title}</Header>
      <For each={props.todos}>
        {(todo, index) => (
          <div>
            <Todo
              title={todo.title}
              isChecked={false}
              onCheck={() => console.log("Check")}
            />
          </div>
        )}
      </For>
    </Container>
  );
}
