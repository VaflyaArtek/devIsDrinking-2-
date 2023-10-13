const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programing-stats .details ul");

const chartData = {
  labels: [
      "Team",
      "Exchange Listing",
      "Strategic Partners & Advisors",
      "Staking",
      "Company reserves",
      "Marketing",
      "Private Round",
      "Hero Exlusive Presale",
      "TGLP",
  ],
  data: [10, 20, 12, 20, 15, 3, 5, 10, 5],
};

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                data: chartData.data,
            },
        ],
    },
    options: {
        borderWidth: 8,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

const populateUl = () => {
    chartData.labels.forEach((l, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${l}: <span class="percentage">${chartData.data[i]}%</span>`;
        ul.appendChild(li);
    });
};

populateUl();
