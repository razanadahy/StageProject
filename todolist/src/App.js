import logo from './logo.svg';
import './App.css';
import MessageComponent from './Page/MessageComponent.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={ <MessageComponent message="Bonjour à tous !" />} />
        <Route path="/about" element={ <MessageComponent message="Bonjour à tous 111!" />} />
      </Routes>
    </Router>
      <div>
        <h1>Mon application React</h1>
        <MessageComponent message="Bonjour à tous !" />
      </div>
    </div>
  );
}
export default App;
