import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterBar from "./Components/FooterBar";
import AlbumPage from "./Components/AlbumPage";
import HomePage from "./Components/HomePage";
import MainPageSpotify from "./Components/MainBar";
import SearchPage from "./Components/SearchPage";
import SideBarSpotify from "./Components/SideBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPageSpotify />
        <SideBarSpotify />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<SearchPage />} />
          <Route path="/album/:e.id" element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
      <FooterBar />
    </div>
  );
}

export default App;
