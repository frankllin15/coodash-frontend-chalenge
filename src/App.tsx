import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getUsers } from "./actions/query";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import UserTable from "./components/UserTable";
import { Home } from "./components/Home";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
