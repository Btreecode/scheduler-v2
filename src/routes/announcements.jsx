import { Link } from "react-router-dom";
import TableRow from "./tablerow.jsx"
export default function Announcements() {
    return <div className="flex">
        <div class="overflow-x-auto table">
            <table class="table w-max">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Topic</th>
                        <th>Title</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody class="hv">
                    <TableRow date="2023.10.27" topic="Puzzle" title="Sudoku" username="Chris Di Antonio" link="./announcement"/>
                    <TableRow date="2023.10.29" topic="AMC" title="AMC Deadline in 3 Days" username="Min.lim07"/>
                </tbody>
            </table>
        </div>
    </div>;
}
