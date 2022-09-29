import { Item } from "./ListItem";

export function Label(props: {item: Item}) {
    return <div>{props.item.name}</div>
}