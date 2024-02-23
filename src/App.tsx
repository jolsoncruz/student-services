import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { User } from "./layouts";
import { Home } from "./views";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
