import { useContext, useDeferredValue, useMemo, useState } from "react";
import { ContactSales } from "../ContactSales";
import { Menu } from "../Menu";
import { Products } from "../Products";

import "./App.css";

import useCalculator from "../../useCalculator";
import { AppContext } from "../../components/AppContext";

// async function generateABillionNumbers() {
//   return Array.from({ length: 1 * 1000 }, (e, i) => i + 1);
// }

function App(props) {
  // useState
  // useEffect
  // useLayoutEffect
  // useReducer

  // useCallback
  // useMemo
  // memo

  // useDeferredValue
  // useContext
  // useRef
  // forwardRef
  // computed values

  const [state, dispatch] = useCalculator(2);
  const [text, setText] = useState("");

  const value = useContext(AppContext);

  return (
    <section className="app-container">
      <div>
        <p>{value.name}</p>
        <p>{value.age}</p>
        <p>{value.address}</p>
      </div>
      <div>
        <p>{state}</p>
        <button onClick={() => dispatch({ type: "add", payload: 4 })}>
          Add Four
        </button>
        <input value={text} onChange={(e) => setText(e.currentTarget.value)} />
        {/* <ul
          style={{
            maxHeight: "200px",
            overflow: "auto",
          }}
        >
          {oneToABillion.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul> */}
      </div>
      <Products />
      <ContactSales />
      <Menu />
    </section>
  );
}

export default App;
