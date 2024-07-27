import { useState } from "react";
import "./App.css";
import SideNav from "./assets/Components/Navigations/SideNav";
import Header from "./assets/Components/Header/Header";
import Dashboard from './assets/Components/MainContent/Dashboard/Dashboard'
import Transaction from "./assets/Components/MainContent/Transactions/Transaction";
import Support from "./assets/Components/MainContent/Support/Support";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function openNav() {
    setIsNavOpen(prev => !prev);
  }

  return (
    <Router>
      <div className="relative flex overflow-auto min-w-[370px] mx-auto">

        <aside className={`px-4 py-14 space-y-4 shadow-lg absolute h-full bg-white ${isNavOpen && 'hidden'} sm:block sm:sticky sm:h-auto`}>
          <SideNav openNav={openNav} />
        </aside>

        <section className="w-full">
          <Header openNav={openNav}/>
          <main className=" bg-customGrey400">
            <div className="py-10 w-[80%] mx-auto max-w-[1200px]">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Transaction" element={<Transaction />} />
                <Route path="/Support" element={<Support />} />
              </Routes>
            </div>
          </main>
        </section>
      </div>
    </Router>
  );
}

export default App;
