import '../App.css'
import NAvbar from '../compount/navbar';
import Topbar from '../compount/tobbar';
import Footer from '../compount/Footer';
import Detail from '../compount/slider5';
import Faq from '../compount/faq';
import Banner from '../compount/banner';

function About() {
   return (
   <>
   
         <Topbar/>
         <NAvbar/>
         <Banner />

         <Detail/>

<Faq/>
         <Footer/>
 
    </>
    );

}
export default About;