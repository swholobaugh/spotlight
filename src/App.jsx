//import "./styles.css";
import Pages from "./pages/index.jsx";
import { NominateContext } from "./Context.jsx";
import { useReducer } from "react";
import nominateListReducer from "./reducers/nominateListReducer.js";

export default function App() {
  const initialListState = [];

  const [listState, dispatchList] = useReducer(
    nominateListReducer,
    initialListState
  );

  return (
      <div className="App h-screen bg-app-background items-center">
        <NominateContext.Provider value={[listState, dispatchList]}>
          <Pages />
        </NominateContext.Provider>
      </div>
  );
}
