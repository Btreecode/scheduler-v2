export default function Announcement() {
    return <div>
        <div class="card overflow-x-auto bg-base-100 shadow-xl">
            <figure><img src="https://jump.dev/JuMP.jl/stable/assets/partial_sudoku.png" alt="Sudoku" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    Sudoku
                    <div class="badge badge-primary">2023.10.27</div>
                </h2>
                <p>Fill in the missing boxes!</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Puzzle</div> 
                    <div class="badge badge-outline">Sudoku</div>
                </div>
            </div>
        </div>
    </div>;
}