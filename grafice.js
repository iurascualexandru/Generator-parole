generate.addEventListener(`click`, function () {
  //   Securitate 1
  const data1 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [refuzat1, acceptat1],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const config1 = {
    type: "pie",
    data: data1,
    options: {},
  };
  const myChart1 = new Chart(document.getElementById("myChart1"), config1);

  //   Securitate 2 & 3

  const data2 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [refuzat2, acceptat2],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const config2 = {
    type: "pie",
    data: data2,
    options: {},
  };
  const myChart2 = new Chart(document.getElementById("myChart2"), config2);

  // Securitatea 4

  const data3 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [refuzat3, acceptat3],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const config3 = {
    type: "pie",
    data: data3,
    options: {},
  };
  const myChart3 = new Chart(document.getElementById("myChart3"), config3);

  // Verificarea simbolurilor

  //security 1

  const datasecurity1 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [fail1, pass1],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const configsecurity1 = {
    type: "pie",
    data: datasecurity1,
    options: {},
  };
  const securitate1 = new Chart(
    document.getElementById("securitate1"),
    configsecurity1
  );

  //security 2

  const datasecurity2 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [fail2, pass2],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const configsecurity2 = {
    type: "pie",
    data: datasecurity2,
    options: {},
  };
  const securitate2 = new Chart(
    document.getElementById("securitate2"),
    configsecurity2
  );

  //security 3

  const datasecurity3 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [fail3, pass3],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const configsecurity3 = {
    type: "pie",
    data: datasecurity3,
    options: {},
  };
  const securitate3 = new Chart(
    document.getElementById("securitate3"),
    configsecurity3
  );

  // security 4

  const datasecurity4 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [fail4, pass4],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const configsecurity4 = {
    type: "pie",
    data: datasecurity4,
    options: {},
  };
  const securitate4 = new Chart(
    document.getElementById("securitate4"),
    configsecurity4
  );

  //graficele finale
  //total 1
  const datatotal1 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [10 - nivel1, nivel1],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const configtotal1 = {
    type: "pie",
    data: datatotal1,
    options: {},
  };
  const total1 = new Chart(document.getElementById("total1"), configtotal1);

  //total 2

  const datatotal2 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [10 - nivel2, nivel2],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const configtotal2 = {
    type: "pie",
    data: datatotal2,
    options: {},
  };
  const total2 = new Chart(document.getElementById("total2"), configtotal2);

  //total 3

  const datatotal3 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [10 - nivel3, nivel3],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const configtotal3 = {
    type: "pie",
    data: datatotal3,
    options: {},
  };
  const total3 = new Chart(document.getElementById("total3"), configtotal3);

  //total 4

  const datatotal4 = {
    labels: ["Fail", "Pass"],
    datasets: [
      {
        label: "My First Dataset",
        data: [10 - nivel4, nivel4],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
  };

  const configtotal4 = {
    type: "pie",
    data: datatotal4,
    options: {},
  };
  const total4 = new Chart(document.getElementById("total4"), configtotal4);

  //bar chart cu totalul

  const labels = [
    `Parola slaba`,
    `Parola moderata`,
    `Parola puternica`,
    `Parola ultra`,
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Grafic complet a securitatii parolelor",
        data: [nivel1, nivel2, nivel3, nivel4],
        borderColor: ["rgb(75, 192, 192)"],
        borderWidth: 1,
        tension: 0.1,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
  };
  const total = new Chart(document.getElementById("total"), config);
});

// // goel
// function initGrafic(procesedData) {
//   document.getElementById("text-file").onchange = function () {
//     console.log("from grafice" + procesedData);
//     new Chart("myChart", {
//       type: "line",
//       data: procesedData,
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: "top",
//           },
//           title: {
//             display: true,
//             text: "Chart.js Line Chart",
//           },
//         },
//       },
//     });
//   };
// }
