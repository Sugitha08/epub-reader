import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Layout/Dashboard/Dashboard";
import PublisherAuth from "./Components/Authentication/Publisher/PublisherAuth";
import Library from "./Components/Layout/Library/Library";
import Report from "./Components/Layout/Report/Report";
import UploadFile from "./Components/Layout/UploadFile/UploadFile";
import BookDetail from "./Components/Layout/Library/BookDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<PublisherAuth />} />
            <Route path="/publisher/dashboard/" element={<Dashboard />} />
            <Route path="/publisher/dashboard/library" element={<Library />} />
            <Route path="/publisher/dashboard/report" element={<Report />} />
            <Route
              path="/publisher/dashboard/upload/"
              element={<UploadFile />}
            />
            <Route
              path="/publisher/dashboard/upload/book/:id"
              element={<BookDetail />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
