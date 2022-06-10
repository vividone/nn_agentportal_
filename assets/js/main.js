// ---------------- DATE RANGE PICKER -----------------------------
$('input[name="daterange"]').daterangepicker({
  opens: "left",
  startDate: "03/05/2022",
  endDate: "03/06/2022",
});

// ---------------- CHART JS -----------------------------

// LINE CHART
const lineChartLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];

const lineChartData = {
  labels: lineChartLabels,
  datasets: [
    {
      label: "Transaction Performance",
      backgroundColor: "hsla(38, 99%, 52%, 1)",
      borderColor: "hsla(38, 99%, 52%, 1)",
      data: [100000, 250000, 350005, 2879000, 2700000, 756443, 450000],
    },
  ],
};

const lineChartConfig = {
  type: "line",
  data: lineChartData,
  options: {
    maintainAspectRatio: true,
  },
};

// RENDER THE CHART
const lineChart = new Chart($("#lineChart"), lineChartConfig);

// DOUGHNUT CHART

const doughnutChartData = {
  labels: ["Active", "In Active"],
  datasets: [
    {
      backgroundColor: ["hsla(38, 99%, 52%, 1)", "hsla(0, 0%, 85%, 1)"],
      data: [300, 100],
    },
  ],
};

const doughnitChartConfig = {
  type: "doughnut",
  data: doughnutChartData,
  options: {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
      },
    },
  },
};

// RENDER THE CHART
const doughnutChart = new Chart($("#doughnutChart"), doughnitChartConfig);

// SECOND DOUGHNUT CHART
const doughnutChartData2 = {
  labels: ["Successful", "Success Reversal", "Failed", "In Progress"],
  datasets: [
    {
      // label: "Transaction Performance",
      backgroundColor: [
        "hsla(126, 100%, 25%, 1)",
        "hsla(0, 0%, 85%, 1)",
        "hsla(0, 100%, 36%, 1)",
        "hsla(38, 99%, 52%, 1)",
      ],
      data: [300, 100, 200, 175],
    },
  ],
};

const doughnitChartConfig2 = {
  type: "doughnut",
  data: doughnutChartData2,
  options: {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
      },
    },
  },
};

// RENDER THE CHART
const doughnutChart2 = new Chart($("#doughnutChart2"), doughnitChartConfig2);

// BAR CHART CONFIGURATION

const barChartLabels = [
  "South West",
  "North West",
  "South South",
  "South East",
  "North East",
  "North Central",
];

const barChartData = {
  labels: barChartLabels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65000, 590000, 400000, 671000, 560000, 255000],
      backgroundColor: [
        "hsla(38, 68%, 78%, 1)",
        "hsla(38, 68%, 78%, 1)",
        "hsla(38, 68%, 78%, 1)",
        "hsla(38, 99%, 52%, 1)",
        "hsla(38, 68%, 78%, 1)",
        "hsla(38, 68%, 78%, 1)",
      ],
      borderColor: [
        "hsla(38, 68%, 78%, 1)",
        "hsla(38, 68%, 78%, 1)",
        "rgb(255, 205, 86)",
        "hsla(38, 99%, 52%, 1)",
        "hsla(38, 68%, 78%, 1)",
        "hsla(38, 68%, 78%, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const barChartConfig = {
  type: "bar",
  data: barChartData,
  options: {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    responsive: true,
  },
};

// RENDER THE CHART
const barChart = new Chart($("#barChart"), barChartConfig);

// ---------------- DATA TABLES -----------------------------
$("#table_id").DataTable({
  searching: true,
  dom: "Bfrtip",
  paging: true,
  buttons: ["pdf", "print", "csv", "excel"],
});

$("#table_id_2").DataTable({
  searching: true,
  paging: true,
});
