import React, { useState } from "react";

function QuadQueryApp() {
  const [results, setResults] = useState([]);
  const [totalMatches, setTotalMatches] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = () => {
    // Placeholder for the query logic
    // Example API call to fetch results and set states
    // setResults(fetchedResults);
    // setTotalMatches(totalEntries);
  };

  const nextPage = () => {
    // Logic for loading the next page
    setCurrentPage(currentPage + 1);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div>
          <h1 style={{ margin: 0 }}>Dhaker Iyad Nejah et Yanis Ouerdani</h1>
        </div>
        <img
          src="https://th.bing.com/th/id/R.7264834a50146dda666eb3e0cdd37373?rik=P9%2bOt1GQfJ6M%2bQ&riu=http%3a%2f%2fswelinscription.univ-nantes.fr%2fimg%2funantes-logo.png&ehk=pl%2fbpIHPl%2fnqA2jssKuUkUrl8KgLaqsUYub4PhI%2bobY%3d&risl=&pid=ImgRaw&r=0"
          alt="University Logo"
          style={{ height: "50px" }}
        />
      </div>

      {/* Query Form */}
      <h2>Query by Quad Pattern</h2>
      <div style={{ display: "grid", gap: "10px", marginBottom: "20px" }}>
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Predicate" />
        <input type="text" placeholder="Object" />
        <input type="text" placeholder="Graph" />
        <button onClick={handleSearch} style={{ padding: "10px", cursor: "pointer" }}>
          Find Matching Quads
        </button>
      </div>

      {/* Matches Info */}
      <p>
        Matches in database for:
        <br />
        Showing Quads {currentPage * 100 - 99} to {Math.min(currentPage * 100, totalMatches)} of ± {totalMatches} with
        100 triples per page.
      </p>
      <button onClick={nextPage} style={{ padding: "10px", cursor: "pointer" }}>
        Next
      </button>

      {/* Results Section */}
      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
        {results.length === 0 ? (
          <p>No results found</p>
        ) : (
          results.map((result, index) => (
            <p key={index} style={{ margin: "5px 0" }}>
              {result.subject} {result.predicate} {result.object} {result.graph}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default QuadQueryApp;
