import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/Navbar'
import FilmCarousel from './components/FilmCarousel';
import Footer from './components/Footer';

function App() {
  const potter = "harry%20potter"
  const marvel = "marvel"
  const starWars = "star%20wars"

  return (
    <div className="App">
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <h2>The Boy Who Lived - Harry Potter's Saga</h2>
      <FilmCarousel myEndpoint={potter}/>
      <h2>Latest from Marvel Cinematic Universe :</h2>
      <FilmCarousel myEndpoint={marvel}/>
      <h2>Star Wars - The Original Sixology :</h2>
      <FilmCarousel myEndpoint={starWars}/>
      <Footer />
    </div>
  );
}

export default App;
