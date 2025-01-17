import "./App.css";
import { useSelector } from "react-redux";
import { selectAllCategories } from "./helpers/redux/categories/categoriesSelectors";

function App() {
  const categories = useSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
}

export default App;
