// const { registerables } = require("chart.js");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwords = [];

const generatorParole = function (numarParole) {
  for (let j = 0; j < numarParole; j++) {
    let password = "";
    let passwordLength = getRandomInt(4, 14);
    for (let i = 0; i <= passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    passwords[j] = password;
  }
};
// console.log(password);
// generatorParole(50);
// console.log(passwords);
const input = document.querySelector(`#input`);
const generate = document.querySelector(`#generate`);
const results = document.querySelector(`#results`);

generate.addEventListener(`click`, function () {
  const displays = document.querySelector(`.display`);
  displays.style.display = `block`;
  generatorParole(input.value);
  console.log(passwords);
  for (let i = 0; i < input.value; i++) {
    results.innerHTML += passwords[i] + `<br>`;
  }
  // results.innerHTML = passwords;
});

// Goel-Okumoto
let procesedData;
document.querySelector(`#text-file`).addEventListener(`change`, function () {
  if (this.files && this.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      console.log(typeof reader.result);
      // console.log(
      //   reader.result.replaceAll("	", '", x:"').replaceAll("\n", '"},')
      // );
      var array = reader.result.split("\n");
      console.log(array);

      var newObj = array.map((el) => {
        return '{"x":' + el.split("\t")[0] + ',"y":' + el.split("\t")[1] + "}";
      });
      procesedData = "[" + newObj.toString() + "]";
      console.log(JSON.parse(procesedData));

      const data = {
        labels: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
          "Week 7",
          "Week 8",
          "Week 9",
          "Week 10",
          "Week 11",
          "Week 12",
          "Week 13",
          "Week 14",
          "Week 15",
          "Week 16",
          "Week 17",
          "Week 18",
          "Week 19",
          "Week 20",
          "Week 21",
          "Week 22",
          "Week 23",
          "Week 24",
          "Week 25",
          "Week 26",
          "Week 27",
          "Week 28",
          "Week 29",
          "Week 30",
          "Week 31",
          "Week 32",
          "Week 33",
          "Week 34",
          "Week 35",
          "Week 36",
          "Week 37",
          "Week 38",
          "Week 39",
          "Week 40",
          "Week 41",
          "Week 42",
          "Week 43",
          "Week 44",
          "Week 45",
          "Week 46",
          "Week 47",
          "Week 48",
          "Week 49",
          "Week 50",
        ],
        datasets: [
          {
            label: "Failed tests",
            data: JSON.parse(procesedData),
            borderColor: "rgb(0,0,255)",
            pointStyle: "circle",
            pointRadius: 10,
            pointHoverRadius: 15,
          },
        ],
      };

      new Chart("myChart", {
        type: "line",
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: (ctx) =>
                "Point Style: " + ctx.chart.data.datasets[0].pointStyle,
            },
          },
        },
      });
    };
    reader.readAsText(this.files[0]);
  }

  let b = 0.1;
  let arr1 = JSON.parse(procesedData);
  let arr2 = JSON.parse(procesedData);
  let arr3 = JSON.parse(procesedData);
  // console.log(procesedData + `asta e un test`);
  for (let i = 0; i < JSON.parse(procesedData).length; i++) {
    arr1[i].y = 1 * (1 - Math.exp(-b * i));
    arr2[i].y = 3 * (1 - Math.exp(-b * i));
    arr3[i].y = 5 * (1 - Math.exp(-b * i));
  }
  if (JSON.parse(procesedData).length > 0) {
    const data = {
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
      ],
      datasets: [
        {
          label: "a = 1",
          data: arr1,
          borderColor: "rgb(0,0,255)",
          //backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          pointStyle: "circle",
          pointRadius: 10,
          pointHoverRadius: 15,
        },
        {
          label: "a = 2",
          data: arr2,
          borderColor: "rgb(0,255,0)",
          //backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          pointStyle: "circle",
          pointRadius: 10,
          pointHoverRadius: 15,
        },
        {
          label: "a = 3",
          data: arr3,
          borderColor: "rgb(255,0,0)",
          //backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          pointStyle: "circle",
          pointRadius: 10,
          pointHoverRadius: 15,
        },
      ],
    };

    new Chart("charp1", {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: (ctx) =>
              "Point Style: " + ctx.chart.data.datasets[0].pointStyle,
          },
        },
      },
    });
  }
});

// Vor fi 4 tipuri de securitate a parolelor:
// 1. Securitate Slaba -> minim 6 caractere.
// 2. Securitate Obisnuita -> minim 8 caractere -> litere + cifre
// 3. Securitate Avansata -> minim 8 caractere -> Majuscule + litere mici + cifre
// 4. Securitate Ultra -> minim 12 caractere -> Majuscule + litere mici + cifre + simboluri.
