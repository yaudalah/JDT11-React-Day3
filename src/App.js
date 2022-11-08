import { Route, Routes } from "react-router-dom";
import { HomePage, DetailProduct } from "@pages";
import "./App.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route exact path="/detail-product/:id" element={<DetailProduct />} />
      </Routes>
  );
}

export default App;
