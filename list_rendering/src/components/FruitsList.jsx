
import "./FruitsList.css"; 

const FruitsList = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  return (
    <div className="fruits-container">
      <h2 className="fruits-title">Fruits List</h2>
      <ul className="fruits-list">
        {fruits.map((fruit, index) => (
          <li key={index} className="fruit-item">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;
