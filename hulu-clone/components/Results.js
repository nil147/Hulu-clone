import { useState } from "react";
import List from "./List";
import PopupInfo from "./PopupInfo";

function Results({ results }) {
  

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <div>
          <List  key={result.id} result={result} />

        </div>
      ))}
    </div>
  );
}

export default Results;
