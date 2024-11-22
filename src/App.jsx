//import "./styles.css";
import { useState, useEffect } from 'react'
import Pages from "./pages/index.jsx";
import { NominateContext } from "./Context.jsx";
import { useReducer } from "react";
import nominateListReducer from "./reducers/nominateListReducer.js";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  const initialListState = [];

  const [listState, dispatchList] = useReducer(
    nominateListReducer,
    initialListState
  );

  return (
      <div className="App h-screen bg-app-background items-center">
        <QueryClientProvider client={queryClient}>
        <NominateContext.Provider value={[listState, dispatchList]}>
          <Pages />
        </NominateContext.Provider>
        </QueryClientProvider>
      </div>
  );
}
