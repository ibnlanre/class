import NavList from "../../components/NavList";

import productItems from "../../data/productItems.json";
import resourcesItems from "../../data/resourcesItems.json";
import developerItems from "../../data/developerItems.json";
import flutterwaveItems from "../../data/flutterwaveItems.json";
import contactItems from "../../data/contactItems.json";

import "./Menu.css";

export function Menu() {
  return (
    <div className="menu-container">
      <NavList title="Products" items={productItems} />
      <NavList title="Resources" items={resourcesItems} />
      <NavList title="Developers" items={developerItems} />
      <NavList title="Flutterwave" items={flutterwaveItems} />
      <NavList title="Contact" items={contactItems} />
    </div>
  );
}
