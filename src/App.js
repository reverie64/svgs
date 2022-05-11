import { ReactComponent as HpBar } from './svgs/HpBar.svg';
import { ReactComponent as MpBar } from './svgs/MpBar.svg';
import { ReactComponent as Logo } from './svgs/Logo.svg';


function App() {

  var fills = document.querySelectorAll(".healthbar_fill");
  
  var health = 70;
  var maxHp = 100;
  
  function renderHealth() {
     
     var percent = health / maxHp * 100;
     
     //Update color
     document.documentElement.style.setProperty('--bar-fill', '#57e705');
     document.documentElement.style.setProperty('--bar-top',  '#6aff03');
     
     if (percent <= 50) { //yellows
        document.documentElement.style.setProperty('--bar-fill', '#d6ed20');
        document.documentElement.style.setProperty('--bar-top',  '#d8ff48');   
     }
     if (percent <= 25) { //reds
        document.documentElement.style.setProperty('--bar-fill', '#ec290a');
        document.documentElement.style.setProperty('--bar-top',  '#ff3818');
     }
  
  
  
  
     fills.forEach(fill => {
        fill.style.width = percent+"%";
     })   
  }
  
  function updateHealth(change) {
     health += change;
     health = health > maxHp ? maxHp : health;
     health = health < 0 ? 0 : health;
  
     renderHealth();
  }
  
  
  //init
  updateHealth(0)
  
  



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
