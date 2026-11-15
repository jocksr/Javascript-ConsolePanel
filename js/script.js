const loadButton = document.getElementById("loadConsoles");

loadButton.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      console.log(data);
      console.log(data.consoles);
      console.log(data.consoles.length);
    }
  };
  xhr.send();
});