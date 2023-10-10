import { Router, useNavigate } from "react-router-dom";

export default function Index() {
  const nav = useNavigate()
  function onChange1() {
    nav("/puzzles")
  }
  function onChange2() {
    nav("/lessons")
  }

  return <div class="gap-2">
    <div class="aboutUs">
      <div class="Header">ABOUT US</div>
      <div class="Content">Hello T-Wolves! We are the Northwood High School Math Olympiad Club. We support our students through providing fun activities and competitions.
      <div class="mt-5">- Meeting Times: Thursday Lunch</div>
      <div>- Location: Mr. Di Antonio's Room (1122)</div>
      </div>
    </div>
    <div class="latestAnnouncement">
      <div class="Header">Latest Announcement</div>
      <div class="Content">variable: last announcement</div>
    </div>
    <div class="flex justify-between">
      <div class="collapse bg-base-200 w-80">
        <input type="checkbox" onChange={onChange1} /> 
        <div class="collapse-title text-xl font-bold">
          Puzzle of the Week
        </div>
        <div class="ml-5 mb-5"> 
          <p>smth</p>
        </div>
      </div>
      <div class="collapse bg-base-200 w-80">
        <input type="checkbox" onChange={onChange2} /> 
        <div class="collapse-title text-xl font-bold">
          Lesson of the Week
        </div>
        <div class="ml-5 mb-5"> 
          <p>smth</p>
        </div>
      </div>
    </div>
  </div>;
}
