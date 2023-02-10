import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import Movies from './Listing/Movie';
import React,{useState,useEffect} from 'react'

function App() {
  const [movies, setmovies] = useState([])
  const [search, setsearch] = useState('')
  const searchmovie = async (title)=>{
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4846fb2&s=${title}`)
    const data = await response.json()
    setmovies(data.Search)
    console.log(movies)
  }
  useEffect(()=>{
    searchmovie('300')
  },[])
  return (
    <div className="App">
      <Navbar/>
      <div className="test_div">
      <Search setsearch={setsearch} search={search} searchmovie={searchmovie} />
        <h1>Movies</h1>
      <div className="wrapper">
      {
        movies.length > 0 ?
        (
         movies.map((mv)=>(
          <Movies  key={mv.imdbID} cover={mv.Poster} type={mv.Type} title={mv.Title} year={mv.year} />
          
         ))
        ):
        (
         <div className="">
          app not found
         </div>
        )
      }
      </div>
      </div>
    </div>
  );
}

export default App;
