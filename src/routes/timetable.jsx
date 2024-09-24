import { useState } from "react";
const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Timetable() {
    let [d, setD] = useState(new Date());
    return(
        <div className="flex flex-col gap-4">
            <div className="schedule">
                <table>
                    <Tablehead weekday = {d.getDay()} />
                    <Tablebody />
                </table>
            </div>
        </div>
    );
}

function Tablehead({weekday}) {
    return(
        <thead>
            <tr class="tableRow">
                <th>{WEEK[weekday]}</th>
                <th>{WEEK[(weekday+1)%7]}</th>
                <th>{WEEK[(weekday+2)%7]}</th>
                <th>{WEEK[(weekday+3)%7]}</th>
                <th>{WEEK[(weekday+4)%7]}</th>
                <th>{WEEK[(weekday+5)%7]}</th>
                <th>{WEEK[(weekday+6)%7]}</th>
            </tr>
        </thead>
    );
}

function Tablebody() {
    return(
        <tbody>
            <tr class="tableRow">
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
            </tr>
            <tr class="tableRow">
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
            </tr>
            <tr class="tableRow">
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
                <button class="block">
                    30 min
                </button>
            </tr>
        </tbody>
    );
}