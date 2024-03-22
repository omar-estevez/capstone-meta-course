import './App.scss';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
        <Nav />
        <Main />
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
