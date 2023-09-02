import React from 'react';
import "./Components/header.css";
import "./Components/card1.css";
import "./Components/card2.css";
import "./Components/card3.css";
import "./Components/card4.css";
import "./Components/card5.css";
import "./Components/footer.css";
import Header from './Components/header';
import Card1 from './Components/card1';
import Card2 from './Components/card2';
import Card3 from './Components/card3';
import Card4 from './Components/card4';
import Card5 from './Components/card5';
import Footer from './Components/footer';


function App() {
  return (
    <div >
       <Header />
       <Card1/>
       <Card2 />
       <Card3 />
       <Card4/>
       <Card5 />
       <Footer />
    </div>
  );
}

export default App;
