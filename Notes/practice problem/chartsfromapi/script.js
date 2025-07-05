let apikey = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=23.8103,90.4125&destinations=24.3636,88.6241&key=WyEBydB96KIxpH9QwSxXRVxz8ucuvvLlzkRHI8NHzKMrGAPjNOXXheMKcEuzvoDA
`;
let maindiv = document.getElementById("main");

let myvalues = [];
async function apifunc() {
  const response = await fetch(apikey);
  const data = await response.json();

  data.rows.forEach((val) =>
    val.elements.forEach((exactdata) => {
      myvalues.push(exactdata.distance.value);
      myvalues.push(exactdata.duration.value);
      console.log(myvalues);
    })
  );
  const ctx = document.getElementById("section");

new Chart(ctx, {
  type: "line",
  data: {
    labels: myvalues.map((val,i) => i + 1),
    datasets: [
      {
        label: "# of speed",
        data: myvalues,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
}


apifunc();
