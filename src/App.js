import Header from "./Header";
import pic from "./pic1.png";
import "./App.css";
import HeroLeft from "./HeroLeft";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero">
        <HeroLeft />
        <div className="hero-img">
          <img src={pic}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
