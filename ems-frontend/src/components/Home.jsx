import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <button>
          <Link to="/patients">Patient List</Link>
        </button>
        <button>Inventory</button>
        <button>Appointment</button>
        <button>
          <Link to="/about">About</Link>
        </button>
      </div>

      <div className="box-container">
        <div className = 'box'>
          <h1>Words of CEO</h1>
          <p>he Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries. It is a frequent competitor in dog shows and obedience trials; it is also used as a gun dog (a type of hunting dog for soft-mouthed retrieving of fowl) and may be trained for use as a guide dog.</p>
        </div>

        <div className = 'box'>
          <img
            src="https://www.petsworld.in/blog/wp-content/uploads/2015/06/golden-retriever.jpg"
            alt="..."
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
