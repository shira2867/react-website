import React, { useState } from "react";
import './contact.css'
import { Footer } from '../footer/footer';
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { Main } from "../main/main";
import { ChildA } from "./ChildA";
import { ChildB } from "./childB";
export function Grandfather() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main_class">
          <div className="props-drilling-container">
            <h1>Contact Page</h1> 
            <div className="children-row">
              <div className="child">
                <ChildA increment={increment} />
              </div>
              <div className="child">
                <ChildB count={count} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
