import TableRow from "./tablerow.jsx";
export default function Leaderboard() {
    return <div>
        <div class="font-bold text-2xl bg-purple-200 align-middle p-5 mb-4">Leaderboard</div>
        <div className="flex">
            <div class="overflow-x-auto table">
                <table class="table-1 w-max">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Topic</th>
                    <th>Title</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody class="hv">
                    <TableRow
                    date="2023.10.27"
                    topic="Puzzle"
                    title="Sudoku"
                    username="Chris Di Antonio"
                    link="./announcement"
                    />
                    <TableRow
                    date="2023.10.29"
                    topic="AMC"
                    title="AMC Deadline in 3 Days"
                    username="Min.lim07"
                    />
                </tbody>
                </table>
            </div>
        </div>
    </div>;
  }  