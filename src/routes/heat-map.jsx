import { Fragment } from "react"

const data = [
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
]


export default function HeatMap() {

    return <div className="grid grid-cols-8 heatmap">
        {
            new Array(24).fill(0).map((v, hr) => (
                <Fragment key={hr}>
                    <div>{hr}</div>
                    {
                        new Array(7).fill(0).map((v, day) => (
                            <div className={`bg-green-${data.filter(v => v.day === day && v.time === hr).length}00`} key={day}></div>
                        ))
                    }
                </Fragment>
            ))
        }
    </div>
}