const btn = document.getElementById("arrowImg");

btn.addEventListener("click", () => {
  const day = document.querySelector("#day").value;
  const month = document.querySelector("#month").value;
  const year = document.querySelector("#year").value;

  if (!day || !month || !year) {
    document.getElementsByTagName("label")[0].style.color = "hsl(0, 100%, 67%)";
    document.getElementsByTagName("label")[1].style.color = "hsl(0, 100%, 67%)";
    document.getElementsByTagName("label")[2].style.color = "hsl(0, 100%, 67%)";
    document.getElementsByTagName("input")[0].style.borderColor =
      "hsl(0, 100%, 67%)";
    document.getElementsByTagName("input")[1].style.borderColor =
      "hsl(0, 100%, 67%)";
    document.getElementsByTagName("input")[2].style.borderColor =
      "hsl(0, 100%, 67%)";
    return;
  }

  const dayDisplay = document.getElementsByTagName("span")[2];
  const monthDisplay = document.getElementsByTagName("span")[1];
  const yearDisplay = document.getElementsByTagName("span")[0];
  dayDisplay.innerHTML = "";
  monthDisplay.innerHTML = "";
  yearDisplay.innerHTML = "";

  let date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  dayDisplay.innerHTML = Math.abs(day - currentDay);
  monthDisplay.innerHTML = Math.abs(month - currentMonth);
  yearDisplay.innerHTML = Math.abs(currentYear - year);
});
