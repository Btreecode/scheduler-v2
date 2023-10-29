export default function TableRow(props) {
    return <tr>
        <th><a href={props.link}><button>{props.date}</button></a></th>
        <td><a href={props.link}><button>{props.topic}</button></a></td>
        <td><a href={props.link}><button>{props.title}</button></a></td>
        <td><a href={props.link}><button>{props.username}</button></a></td>
    </tr>;
  }
  