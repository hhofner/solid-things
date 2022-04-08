import { styled } from "solid-styled-components";
const Container = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

interface Props {
  title: string;
  isChecked: boolean;
  onCheck: () => void;
}

export default function Todo (props: Props) {
  return (
    <Container>
      <input type="checkbox" checked={props.isChecked} onClick={props.onCheck}/>
      <p>{props.title}</p>
    </Container>
  )
}
