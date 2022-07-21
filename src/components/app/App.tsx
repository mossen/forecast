import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Loading from "../loading/Loading";


const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
