import { Fragment, useContext, useState } from "react";
import { AppContext } from "../layout/layout";
import SideMenu from "../components/site-menu";

const fake_data = [
    { name: "shirley", day: 1, time: 16 },
    { name: "shirley", day: 1, time: 17 },
    { name: "shirley", day: 1, time: 18 },
    { name: "shirley", day: 1, time: 16 },
    { name: "shirley", day: 1, time: 17 },
    { name: "shirley", day: 2, time: 18 },
    { name: "shirley", day: 4, time: 18 },
    { name: "shirley", day: 4, time: 18 },
    { name: "shirley", day: 4, time: 18 },
    { name: "shirley", day: 5, time: 18 },
    { name: "shirley", day: 5, time: 18 },
    { name: "shirley", day: 5, time: 19 },
    { name: "Stanley", day: 5, time: 19 },
    { name: "Stanley", day: 5, time: 1 },
]

export default function HeatMap() {
    let [user, setUser] = useState(undefined);

    let { heatmap } = useContext(AppContext);

    let combined = [...heatmap, ...fake_data];
    if (user != undefined) {
        combined = combined.filter(v => v.name === user);
    }

    return <div>
        <div className="grid grid-cols-8 heatmap">
            {
                new Array(24).fill(0).map((v, hr) => (
                    <Fragment key={hr}>
                        <div>{hr}</div>
                        {
                            new Array(7).fill(0).map((v, day) => (
                                <div className={`bg-green-${combined.filter(v => v.day === day && v.time === hr).length}00`} key={day}></div>
                            ))
                        }
                    </Fragment>
                ))
            }

        </div>
        <SideMenu user={user} setUser={setUser} />
    </div>
}