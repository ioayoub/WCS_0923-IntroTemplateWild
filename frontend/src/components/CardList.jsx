import { useState } from "react";
import data from "../data/challenge.json";
import Card from "./Card";

function CardList() {
  const [filteredData, setFilteredData] = useState(data);

  const handleClick = (cat) => {
    setFilteredData(data.filter((d) => d.category === cat));
  };

  const categories = new Set(...data.map((d) => d.category));

  return (
    <>
      <div className="filters">
        {categories.map((c) => (
          <button onClick={() => handleClick(c)} key={c} type="button">
            {c}
          </button>
        ))}

        <button type="button" onClick={() => setFilteredData(data)}>
          Reset
        </button>
      </div>
      <div className="cardList">
        {filteredData.map((d) => (
          <Card
            name={d.name}
            image={d.picture}
            category={d.category}
            key={d.id}
          />
        ))}
      </div>
    </>
  );
}

export default CardList;
