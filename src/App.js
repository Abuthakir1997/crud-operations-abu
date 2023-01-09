import './App.scss';
import LeftSideBar from './components/left-side-bar/left-side-bar';
import MainWrapper from './components/main-wrapper/main-wrapper';
import Rightsidebar from './components/right-side-bar/right-side-bar';

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <MainWrapper />
    </div>
  );
}

export default App;
