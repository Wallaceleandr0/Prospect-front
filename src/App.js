import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
     <Header />
     </Router>
    </div>
  );
}

export default App;
