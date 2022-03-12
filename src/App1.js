import logo from './logo.svg';
import './App.scss';
import Card from './Card' 
import Img from './sw4.jpg'
import ReactBootstrap from './components/React-bootstrap/react-bootstrap';

function Header(props){
  return(
    <header style={{display:'flex', justifyContent:'space-around'}}>
      <div>
        <h3>Kodemia</h3>
      </div>
      <div style={{display:'flex', justifyContent:'space-between', width:"350px"}}>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>{props.name}</h3>
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    </header>
  )
}

function Footer(props){
  return(
    <> {/*Fragments */}
      <footer>
        <h3>Hecho con amor por {props.name}</h3>
      </footer>
    </>    
  )
}

function Layout(props){
  return(
    <div id='layout'>
      <Header name={props.name}/>
        {props.children}
      <Footer name={props.name}/>
    </div>
  )
}

function App() {
 /* const name = 'Gustavo'
  const age = '24'
  const ageCopy = `tiene ${age} años de edad`*/
 /* return (
    <div className="App">
      <Layout name={name}>
        <main className="App-header">
          <h2>Soy {name}</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Soy un tipo que {ageCopy}, que esta tratando de aprender a programar.
            Amante del cine y la musica.
          </p>
        </main>
      </Layout>
    </div>
  );*/
  return(
    <div className="App" >
      <main className="App-header" style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        <Card 
        title = 'Samsung Watch 4'
        img = {Img}
        price = '$5000'
        />
        <ReactBootstrap />

      </main>
    </div>
  );
}

export default App;