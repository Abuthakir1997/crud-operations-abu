import './App.scss';
import LeftSideBar from './components/left-side-bar/left-side-bar';
import MainWrapper from './components/main-wrapper/main-wrapper';

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <MainWrapper />
    </div>
  );
}

export default App;
