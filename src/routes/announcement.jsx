import { useLocation } from "react-router-dom"

export default function Announcement(props) {
    return <div>
        <div>{props.title}</div>
        <div>{props.content}</div>
        <div>{props.username}</div>
        <div>{props.date}</div>

    </div>;
}