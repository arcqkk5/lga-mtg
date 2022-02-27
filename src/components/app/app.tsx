import { Component } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/header";
import MainPage from "../pages/mainPage";
import DropdownsPage from "../pages/dropdownPage";

const Page404 = lazy(() => import("../pages/404"));

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Suspense fallback="">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/dropdown" element={<DropdownsPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </Router>
    );
  }
}

export default App;
