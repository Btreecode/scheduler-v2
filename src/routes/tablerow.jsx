export default function TableRow(props) {
    return <tr>
        <th><button>{props.date}</button></th>
        <td><button>{props.topic}</button></td>
        <td><button>{props.title}</button></td>
        <td><button>{props.username}</button></td>
    </tr>;
  }
  