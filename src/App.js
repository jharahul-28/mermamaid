import Nav from './component/Nav'
import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';

function App() {
  return (
    <div className='page'>
    <Nav></Nav>
    <Body/>
    <Footer/>
    </div>
  );
}

export default App;
