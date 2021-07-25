import Navbar from '../components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="hero-container">
        <div className="img-overlay">
          <div className="hero-body">
            <span className="hero-heading">
              One-stop shop for all your travel needs</span>
            <button className="hero-bt">
              Take me away
            </button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
