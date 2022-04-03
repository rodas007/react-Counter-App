
import './App.css';
import Contador from './components/Contador/Contador';


import Title from './components/Title/Title';


const contadorNumero = 0;

function App() {
  return (
    <div >

<Title/>

<Contador data={contadorNumero}/>
    </div>
  );
}

export default App;
