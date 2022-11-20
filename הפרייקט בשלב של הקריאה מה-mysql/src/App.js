import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Main from './components/main';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Main></Main>
        </header>
      </div>
    </BrowserRouter>
  );
}
export default App;
