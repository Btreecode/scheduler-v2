import { Router, useNavigate } from "react-router-dom";

export default function Index() {
  const nav = useNavigate()
  function onChange1() {
    nav("/puzzles")
  }
  function onChange2() {
    nav("/lessons")
  }

  return <div class="flex flex-col gap-4">
    <div class="aboutUs">
      <div class="Header">ABOUT US</div>
      <div class="Content">Hello T-Wolves! We are the Northwood High School Math Olympiad Club. We support our students through providing fun activities and competitions.
        <ul class="list-disc mt-5 ml-7">
          <li>Meeting Times: Thursday Lunch</li>
          <li>Location: Mr. Di Antonio's Room (1122)</li>
        </ul>
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
          <p>Last Week Answer: </p>
        </div>
      </div>
      <div class="collapse bg-base-200 w-80">
        <input type="checkbox" onChange={onChange2} /> 
        <div class="collapse-title text-xl font-bold">
          Lesson of the Week
        </div>
        <div class="ml-5 mb-5"> 
          <p>Topic: </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-3">
      <div class="Header">Important Links</div>
      <ul class="list-disc ml-11 mt-3">
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSenWbICx6-I-WMiE9H5KskGdsaGZ2Vd34zwKGFy0kIh9soeFQ/viewform?usp=sharing">Sign-In Link</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdPfEeYt4rI_Sy449D7_7EMfmxuP_48CkST2S27EiZ9MNmriQ/viewform">Email List Link</a></li>
        <li><a href="www.google.com">Ask Questions - did not make link yet</a></li>
        <li><a href="www.google.com">Merch Purchase Link - need to connect link</a></li>
        <li><a href="www.google.com">Meeting Dates [shows which dates we don't meet] - need to make link</a></li>
      </ul>
    </div>
  </div>;
}
