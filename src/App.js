import Header from "./Component/Header/Header";
import './common.css';
import './responsive.css';
import RoboticsLife from "./Component/RoboticsLife/roboticsLife";
import OurRobot from "./Component/OurRobot/OurRobot";
import Develop from "./Component/Develop/Develop";
import MultiItems from "./Component/News/News";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import { useState } from 'react';
import Items from './Component/Footer/Footer.jsx';

function App() {
  const [ListItem] = useState(Items)
  return (
    <>
     <Header/>
     <RoboticsLife/>
     <OurRobot/>
     <Develop/>
     <MultiItems/>
     <Contact/>
    <Footer listitem = {ListItem}/>
    </>
  );
}

export default App;
