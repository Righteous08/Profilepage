async function updateDateAndTime() {
  try {
    const response = await fetch(
      "http://worldtimeapi.org/api/timezone/Africa/Lagos"
    );
    const data = await response.json();
    const time = new Date(data.utc_datetime);
    const dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(time);
    const formattedTime = time.toLocaleTimeString("en-US", {
      timeZone: "Africa/Lagos",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    document.querySelector(".date").textContent = dayOfWeek;
    document.querySelector(".time").textContent = formattedTime;
  } catch (error) {
    console.error("Error fetching time:", error);
  }
}
updateDateAndTime();
setInterval(updateDateAndTime, 1000);
