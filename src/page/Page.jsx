import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieList from "../components/Movies/MovieList";
import SideBar from "../components/SideBar";
import { ThemeContext } from "../context/Context";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
