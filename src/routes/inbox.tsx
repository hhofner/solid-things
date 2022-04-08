import ListPage from "~/components/ListPage"

export default function Inbox() {
  return (
    <ListPage title={"Inbox"} todos={[{title: "test"}, {title: "yep"}, {title: "woo"}]}/>
  )
}
