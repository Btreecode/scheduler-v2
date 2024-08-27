export default function footer() {
  return (
    <div className="w-full mt-8">
      <footer className="footer items-center p-4 bg-base-200">
        <aside className="items-center grid-flow-col">
          <a target="_blank" href="..">
            <img
              src="https://static.hudl.com/users/temp/3744584_ced4e9be82f441548663bb50f9e26fac.jpg"
              alt="App icon"
              className="w-9 h-9 rounded-3xl"
            />
          </a>
          <p>
            Copyright©{" "}
            <a target="_blank" href=".." className="underline">
              Min's Scheduler
            </a>{" "}
            - All rights reserved
          </p>
        </aside>
      </footer>
    </div>
  );
}
