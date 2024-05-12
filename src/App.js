import HomePage from "./home/HomePage";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./blog/BlogPage";
import AuthorPage from "./author/AuthorPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
