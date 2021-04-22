import List from "./List"

function Results({ results }) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {
                results.map((result) => (
                    <List key={result.id} result={result} />
                ))
            }
        </div>
    )
}

export default Results
