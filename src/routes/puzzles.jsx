export default function Puzzles() {
  return (
    <div class="puzzles">
      <div class="Header">Puzzles</div>
      <div class="flex justify-between mt-5">
        <div class="collapse bg-base-200 w-96">
          <div class="collapse-title text-xl font-bold">
            <div>Daily Puzzle</div>
            <img
              src="https://i.imgur.com/3tjI9CU.png"
              alt="Placeholder daily puzzle"
              class="mt-4"
            />
          </div>
          <div class="ml-5 mb-5">
            <p>Lv. 1 [5 points]</p>
          </div>
        </div>
        <div class="collapse bg-base-200 w-96">
          <div class="collapse-title text-xl font-bold">
            <div>Weekly Puzzle</div>
            <img
              src="https://i.imgur.com/8ySDiP7.png"
              alt="Placeholder Weekly Puzzle"
              class="mt-4"
            />
          </div>
          <div class="ml-5 mb-5">
            <p>Lv. 2 [10 points]</p>
          </div>
        </div>
      </div>
      <div class="mt-6 font-bold flex flex-col">
        <a target="_blank" href="">
          Puzzle Suggestion Form
        </a>
        <a target="_blank" href="">
          Puzzle Answer Sumbission Form
        </a>
      </div>
    </div>
  );
}
