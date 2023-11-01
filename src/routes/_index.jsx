import { Router, useNavigate } from "react-router-dom";

export default function Index() {
  const nav = useNavigate();
  function onChange1() {
    nav("/puzzles");
  }
  function onChange2() {
    nav("/lessons");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="aboutUs">
        <div className="text-2xl font-bold p-5 bg-purple-200">ABOUT US</div>
        <div className="Content py-2">
          Hello T-Wolves! We are the Northwood High School Math Olympiad Club.
          We support our students through providing fun activities and
          competitions.
          <ul className="list-disc mt-5 ml-7">
            <li>Meeting Times: Thursday Lunch</li>
            <li>Location: Mr. Di Antonio's Room (1122)</li>
          </ul>
        </div>
      </div>
      <div className="latestAnnouncement">
        <div className="bg-purple-200 text-2xl font-bold p-3">
          Latest Announcement
        </div>
        <div className="Content py-2">3 days left for AMC registration! Registration window closes at November 1st!</div>
      </div>
      <div className="flex flex-col mt-4">
        <div className="bg-purple-200 text-2xl font-bold p-3">Important Links</div>
        <ul className="list-disc ml-11 mt-4">
          <li>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSenWbICx6-I-WMiE9H5KskGdsaGZ2Vd34zwKGFy0kIh9soeFQ/viewform?usp=sharing"
            >
              Sign-In Link
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPfEeYt4rI_Sy449D7_7EMfmxuP_48CkST2S27EiZ9MNmriQ/viewform"
            >
              Email List Link
            </a>
          </li>
          <li>
            <a target="_blank" href="https://northwood.myschoolcentral.com/(S(s1axgspyckxu3a2fttcvdhzi))/Index.aspx#/15053/123">
              AMC Purchase Link
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/">
              Merch Purchase Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
