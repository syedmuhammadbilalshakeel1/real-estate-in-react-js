
import '../App.css';
import Topbar from '../compount/tobbar';
import NAvbar from '../compount/navbar';
import Banner from '../compount/banner';
import Slider1 from '../compount/Slider1';
import Footer from '../compount/Footer';
import Card from '../compount/card'
import Section4 from '../compount/section';


function home1() {
  return (
    <>
      <Topbar />
      <NAvbar />
 
      <Banner />
      <br />
      <Slider1 />
      <br />
     <Card imgsrc= "https://media.istockphoto.com/id/1283532037/photo/luxurious-beautiful-modern-villa-with-front-yard-garden-at-sunset.jpg?s=170667a&w=0&k=20&c=H1ZAest0KnCdFEjU8XQqCmFdSCvx0jNyR-eabL6gZNE=" />
      <br />
      <Section4/>
      
      <Footer />

    </>
  );
}

export default home1;
