import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar'
import FilmCarousel from './components/FilmCarousel';;

function App() {
  const potter = "harry%20potter"
  const marvel = "marvel"
  const starWars = "star%20wars"

  return (
    <div className="App">
      <NavBar />
      Harry Potter
      <FilmCarousel myEndpoint={potter}/>
      Marvel Cinematic Universe :
      <FilmCarousel myEndpoint={marvel}/>
      Star Wars :
      <FilmCarousel myEndpoint={starWars}/>
    </div>
  );
}

export default App;
