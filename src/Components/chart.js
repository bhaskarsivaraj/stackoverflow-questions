

// MyChart.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const MyChart = ({ data }) => {

  const [questionsData, setQuestionsData] = useState([]);


  useEffect(() => {

    axios.get("http://localhost:3500/api/questions").then((response) => {
      let { data } = response;
      setQuestionsData(data);

    }).catch((err) => {
      console.log(err);
    })


  }, [])



  const options = {
    chart: {
      type: 'line',
    },
    xaxis: {
      categories: questionsData.map(item => item.title),
    },
  };

  const series = [
    {
      name: 'Views',
      data: questionsData.map(item => item.views),
    },
    {
      name: 'Answer Count',
      data: questionsData.map(item => item.answerCount),
    },
  ];



  return (
    <div>
      <h1>Stack Overflow questions</h1>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default MyChart;
