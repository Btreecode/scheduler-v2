export default function Puzzles() {
  return (
    <div className="puzzles">
      <div className="bg-purple-200 text-2xl font-bold p-5">Puzzles</div>
      <div class="flex justify-between mt-5">
        <div class="collapse bg-base-200 w-96">
          <div class="collapse-title text-xl font-bold">
            <div>Daily Puzzle</div>
            <img
              src="https://i.imgur.com/3tjI9CU.png"
              alt="Placeholder daily puzzle"
              className="mt-4"
            />
          </div>
          <div className="ml-5 mb-5">
            <p>Lv. 1 [1 point]</p>
          </div>
        </div>
        <div className="collapse bg-base-200 w-96">
          <div className="collapse-title text-xl font-bold">
            <div>Weekly Puzzle</div>
            <img
              src="https://i.imgur.com/8ySDiP7.png"
              alt="Placeholder Weekly Puzzle"
              className="mt-4"
            />
          </div>
          <div className="ml-5 mb-5">
            <p>Lv. 2 [2 points]</p>
          </div>
        </div>
      </div>
      <div className="mt-8 font-bold flex flex-col gap-3">
        <a target="_blank" href="https://www.youtube.com">
          Puzzle Suggestion Form
        </a>
        <a target="_blank" href="https://www.youtube.com">
          Puzzle Answer Sumbission Form
        </a>
      </div>
    </div>
  );
}
