import './App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Books from './components/Books';
import { Route, Routes } from 'react-router';
import RegisterPage from './components/RegisterPage';
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    axios.get(`https://reactnd-books-api.udacity.com/books`, { headers: { 'Authorization': 'whatever-you-want' } })
      .then(result => {
        setData(result.data.books)
      })
      .catch(err => {
        console.log("Error fetching content")
      })
  }, [])

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<Books data={data} search={search} />} />
        <Route path='/registration' element={<RegisterPage />} />
      </Routes>

    </div>

  );

}


export default App

