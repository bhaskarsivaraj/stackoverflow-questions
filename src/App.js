import logo from './logo.svg';
import './App.css';
import MyChart from './Components/chart';
import { ContentTable } from './Components/table';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [questionsData, setQuestionsData] = useState([]);


  useEffect(() => {

    axios.get("http://localhost:3500/api/questions").then((response) => {
      let { data } = response;
      setQuestionsData(data);

    }).catch((err) => {
      console.log(err);
    })


  }, [])




  return (
    <>
      <h1 className='text-center mb-4 text-primary font-weight-bold' style={{ fontWeight: "bold" }}>STACKOVERFLOW QUESTIONS & VIEWS</h1>
      <ContentTable data={questionsData} />
      <MyChart data={questionsData} />
    </>
  );
}

export default App;
