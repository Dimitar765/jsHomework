import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const Url = 'https://swapi.dev/api/films/';
  const [movies, setMovies] = useState([]);
  const handleData = async () => {
    fetch(Url)
    const res = await fetch(Url);
    const data = await res.json();
    setMovies(data.results);
  }
  //  console.log(movies)

  const handleWithAxios = async () => {
    const res = await axios.get(Url);
    const data = await res.data;
    console.log(data.results)
  }
  //  handleWithAxios()

  useEffect(() => {
    handleData()

  }, []);



  //console.log(movies)
  return (
    <>
      {movies.map((movie) => (
        <h3 key={movie.episode_id}>{movie.title}</h3>
      ))}
    </>
  )

}

