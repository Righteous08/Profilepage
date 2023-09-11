// // async function updateDateAndTime() {
// //   try {
// //     const response = await fetch(
// //       "http://worldtimeapi.org/api/timezone/Africa/Lagos"
// //     );
// //     const data = await response.json();
// //     const time = new Date(data.utc_datetime);
// //     const dayOfWeek = new Intl.DateTimeFormat("en-US", {
// //       weekday: "long",
// //     }).format(time);
// //     const formattedTime = time.toLocaleTimeString("en-US", {
// //       timeZone: "Africa/Lagos",
// //       hour: "numeric",
// //       minute: "numeric",
// //       second: "numeric",
// //     });
// function updateUtcDateAndTime() {
//   const now = luxon.DateTime.utc();
//   // const now = new Date();
//   // const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

//   const formattedUtcDateAndTime = now.toFormat({
//     // const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     timeZoneName: "short",
//   });
//   const [formattedUtcDate, formattedTime] = formattedUtcDateAndTime.split(",");

//   document.querySelector(".time").textContent = `${formattedTime.trim()}`;
//   document.querySelector(".date").textContent = `${formattedUtcDate.trim()}`;
// }
// updateDateAndTime();
// setInterval(updateUtcDateAndTime, 1000);

function updateDateAndTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();

  const time = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  // const time = now.toUTCString().split(" ")[4];

  document.querySelector(".date").textContent = dayOfWeek;
  document.querySelector(".time").textContent = time;
}
updateDateAndTime();
setInterval(updateDateAndTime, 1000);
