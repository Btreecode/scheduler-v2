export default function Announcements() {
    return <div className="flex">
        <div class="overflow-x-auto table">
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Topic</th>
                        <th>Title</th>
                        <th>Number of Comments</th>
                    </tr>
                </thead>
                <tbody class="hv">
                    <tr>
                        <th>2023.10.20</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                    <tr>
                        <th>2023.10.20</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>
                    <tr>
                        <th>2023.10.19</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>;
}
