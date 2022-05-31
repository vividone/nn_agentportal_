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
      data: [0, 10, 5, 2, 20, 30, 45],
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
  labels: ["Active", "inactive"],
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
  },
};

// RENDER THE CHART
const doughnutChart2 = new Chart($("#doughnutChart2"), doughnitChartConfig2);

// BAR CHART CONFIGURATION

const barChartLabels = ["Jan", "Feb", "March", "April", "May", "June", "July"];

const barChartData = {
  labels: barChartLabels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
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
        beginAtZero: true,
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
  buttons: ["copy", "csv", "excel", "pdf", "print"],
});

$("#table_id_2").DataTable({
  searching: true,
  dom: "Bfrtip",
  buttons: ["copy", "csv", "excel", "pdf", "print"],
});
