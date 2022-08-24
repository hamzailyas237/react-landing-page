import './App.css';
import Header from './components/Header';
import Card from './components/Card'
import serviceImg from './images/services.jpg'
import fileImg from './images/files.png'
import listImg from './images/lists.png'
import captureImg from './images/capture1.png'
import About from './components/About';
import commitmentImg from './images/commitment.png'
import solutionImg from './images/solution.png'
import graphImg from './images/graph.png'
import { FooterSectionOne, FooterSectionTwo, FooterSectionThree } from './components/Footer';

function App() {
  return (
    <div>

      <Header />

      <div className="cards-container">
        <Card heading="Services" img={serviceImg} title="Supendisse Sollicitudin" titleDescription="Duis vitae semper turpis" para1="Sodales farmentum" para2="Qquam integer" para3="Nibh arcu" />
        <Card heading="Shared Files" img={fileImg} title="Tempus Sapien" titleDescription="Nunc vestibulum libero" para1="Sed aliquam" para2="Nisi aenean" para3="Faucibus eu" />
        <Card heading="Manage Lists & Subscribers" img={listImg} title="Aliquam Massa" titleDescription="Nam at rhoncus odio" para1="Varius sit amet" para2="Cursus lacinia" para3="Metus phaselius" />
        <Card heading="Videos & Photos" img={captureImg} title="Magna Consectetur" titleDescription="Integer risus sem maximus" para1="Cras Lectus" para2="Commodo mauris" para3="Sapien consequat" />
      </div>

      <div className='about-container'>
        <About span={'Commited'} heading="to Our Clients" src={commitmentImg} btnText="Read more.." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <About span={'Solutions'} heading="for Bottom Line" src={solutionImg} btnText="Read more.." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <img width="400" src={graphImg} />
      </div>

      <div className='footer-container'>
        <FooterSectionOne />
        <FooterSectionTwo />
        <FooterSectionThree />
      </div>


    </div>
  );
}

export default App;
