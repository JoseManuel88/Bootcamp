import './App.scss';
import Characters from './pages/Characters.jsx';
import Home from './pages/Home.jsx';




function App() {
  console.log("Hola desde app");
  const nombre = "Yago";

  return (
    <div className ="App">
    
      <h1>App Works!</h1>
      <p>Hola {nombre}!;</p>
    <Home/>
    <Characters/>
    
    </div>
  );
}

export default App;
