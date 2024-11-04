//import "./styles.css";
import Pages from "./pages/index.jsx";
import { ContactContext } from "./Context.jsx";
import { useReducer } from "react";
import contactListReducer from "./reducers/contactListReducer";

export default function App() {
  const initialListState = [];

  const [listState, dispatchList] = useReducer(
    contactListReducer,
    initialListState
  );

  return (
      <div className="App h-screen bg-app-background items-center">
        <ContactContext.Provider value={[listState, dispatchList]}>
          <Pages />
        </ContactContext.Provider>
      </div>
  );
}
