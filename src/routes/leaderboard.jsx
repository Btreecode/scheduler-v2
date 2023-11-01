import TableRow from "./tablerow.jsx";
export default function Leaderboard() {
    return <div>
        <div class="font-bold text-2xl bg-purple-200 align-middle p-5 mb-4">Leaderboard</div>
        <div className="flex">
            <div class="overflow-x-auto table">
                <table class="table-1 w-max">
                <thead>
                    <tr>
                    <th>Ranking</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Points</th>
                    </tr>
                </thead>
                <tbody class="hv">
                    <TableRow
                    date="1"
                    topic="VW_Fr"
                    title="Victor Wembanyama"
                    username="12"
                    />
                    <TableRow
                    date="2"
                    topic="Zach_Lv"
                    title="Zach Levine"
                    username="11"
                    />
                    <TableRow
                    date="3"
                    topic="Lebron_The_Goat"
                    title="Lebron James"
                    username="8"
                    />
                    <TableRow
                    date="4"
                    topic="Min.lim07"
                    title="Min Lim"
                    username="7"
                    />
                    <TableRow
                    date="5"
                    topic="8_ballon"
                    title="Lionel Messi"
                    username="5"
                    />
                </tbody>
                </table>
            </div>
        </div>
    </div>;
  }  