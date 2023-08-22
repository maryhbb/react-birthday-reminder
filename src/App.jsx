import { useState } from "react";
import List from "./components/List";
import "./index.css";
import data from "./components/data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <h3>{data.length} birthday today</h3>
          <List people={people} />
          <button
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
