import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}`);
  }
  return (
    <div className="app-wrapper">
      <h1>Welcome to Uber-豊崎支店✌️</h1>
      <div className="menu-area">
      <h2
        onClick={() => movePage("tklogin")}
        className="individual-page-takuma">Takuma's Page</h2>
      <hr />
      <h2
        onClick={() => movePage("btlogin")}
        className="individual-page-batayan">Batayan's Page</h2>
      <h2
        onClick={() => movePage("stlogin")}
          className="individual-page-satake">Satake's Page</h2>
      </div>
    </div>
  );
}

export default App;
