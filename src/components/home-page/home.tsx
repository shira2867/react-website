import './home.css';
import { Footer } from '../footer/footer';
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { Main } from "../main/main";

export function Home() {
  return (
    <div className="homePage">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}
