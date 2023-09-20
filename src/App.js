import FixImg from './components/FixImg';
import ShortInfoBar from './components/ShortInfoBar';

function App() {
  return (
    <div className="App">
      <div className="fixed top-0 left-0 w-[100%] h-[320px] bg-primary">
        <FixImg />
      </div>

      <div className="container h-[500vh] relative mt-[320px] bg-[#eeeeee]">
        <ShortInfoBar />
      </div>
    </div>
  );
}

export default App;
