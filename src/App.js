import { ReactComponent as HpBar } from './svgs/HpBar.svg';
import { ReactComponent as MpBar } from './svgs/MpBar.svg';
import { ReactComponent as Logo } from './svgs/Logo.svg';


function App() {



  return (
    <div className="App">
      <header className="App-header">
     <Logo />  
      hp: <HpBar />
    mp: <MpBar />
      </header>
    </div>
  );
}

export default App;
