

// MyChart.js
import ReactApexChart from 'react-apexcharts';

const MyChart = ({ data }) => {




  const options = {
    chart: {
      type: 'line',
    },
    xaxis: {
      categories: data.map(item => item.title),
    },
  };

  const series = [
    {
      name: 'Views',
      data: data.map(item => item.views),
    },
    {
      name: 'Answer Count',
      data: data.map(item => item.answerCount),
    },
  ];



  return (
    <div className='mt-5'>
      <h1 className="mb-3">Chart view</h1>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default MyChart;
