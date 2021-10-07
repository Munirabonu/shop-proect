import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './component/Footer';
import Header from "./component/Header";
import SHop from './component/SHop';
import { ContextProvider } from './context';
import'./index.css';
function App() {
  return (
    <div className="App">
      <ToastContainer />
    <Header />
    <ContextProvider>
    <SHop />
    </ContextProvider>
    <Footer />
    </div>
  );
}

export default App;
