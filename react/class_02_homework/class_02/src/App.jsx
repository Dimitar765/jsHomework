import "./App.css";
import Card from './components/card/card'
import Academies from './components/academies/Academies'
import Counter from "./components/counter/Counter";

const titles = ['first', 'second', 'third', 'forth', 'fifth']
function App() {
  return <div className="App">
    <div className="container">
    <Card title={titles[0]} content={'some dummy content'} image={'./img/1.jpg'}/>
    <Card title={titles[1]} content={'some dummy content'} image={'./img/1.jpg'}/>
    <Card title={titles[2]} content={'some dummy content'} image={'./img/1.jpg'}/>
    <Card title={titles[3]} content={'some dummy content'} image={'./img/1.jpg'}/>
    <Card title={titles[4]} content={'some dummy content'} image={'./img/1.jpg'}/>


   </div>
   <hr />
    <Academies/>
    <hr />

    <Counter/>


  </div>;
}

export default App;
