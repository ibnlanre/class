import { ContactSales } from "../ContactSales";
import { Menu } from "../Menu";
import { Products } from "../Products";

import "./App.css";

function App() {
  return (
    <section className="app-container">
      <Products />
      <ContactSales />
      <Menu />
    </section>
  );
}

export default App;
