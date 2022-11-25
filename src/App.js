import Index from "./pages/index";
import Create from "./pages/create";
import View from "./pages/view";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./store/store";
import Footer from "./components/Footer";


function App() {
  return (
    <Store>
      <div className="page-container">
        <div className="content-wrap">

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>

      </div>
      <Footer />
      </div>
      
    </Store>
  );
}

export default App;
