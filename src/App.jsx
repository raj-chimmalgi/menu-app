import { useState } from "react";
import Title from "./Title.jsx";
import data from "./data.js";
import Menu from "./Menu.jsx";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  return (
    <main>
      <section>
        <Title text="Our Menu" />
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
