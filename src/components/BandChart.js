import React, { useContext, useEffect } from "react";
// import { Chart } from "chart.js";
import { Chart, registerables } from "chart.js";
import { SocketContext } from "../context/SocketContex";
Chart.register(...registerables);

const BandChart = () => {
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      crearGrafica(bands);
    });
  }, [socket]);

  /* 
  
  var chart = new Chart(ctx).Bar(oldData, {})

$.ajax({..}).done(function (newData) {
  // destory old
  chart.destroy()

  // create new
  chart = new Chart(ctx).Bar(newData, {})
})

2222


var chart_ctx = document.getElementById("chart").getContext("2d");

var chart = new Chart(chart_ctx, {
	type: "pie",
	data: {}
	options: {}
}

$.ajax({
	...
}).done(function (response) {
    chart.data = response;
    chart.update();
});
*/

  let myChart = null;

  const crearGrafica = (bands = []) => {
    // console.log(`myChart`, myChart);
    const ctx = document.getElementById("myChart");

    if (!myChart) {
      myChart = new Chart(ctx, {
        type: "bar",
        data: {},
        options: {},
      });
    } else {
      myChart.data = {
        labels: bands.map((band) => band.name),
        datasets: [
          {
            label: "# of Votes",
            data: bands.map((band) => band.votes),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
      myChart.update();
    }

    // if (myChart) {
    //   myChart.destroy();
    // } else {
    /* 
      myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: bands.map((band) => band.name),
          datasets: [
            {
              label: "# of Votes",
              data: bands.map((band) => band.votes),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          animation: false,
          indexAxis: "y",
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      }); 
     

    } */
  };

  return <canvas id="myChart"></canvas>;
};

export default BandChart;
