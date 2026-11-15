const loadButton = document.getElementById("loadConsoles");
const consoleCards = document.getElementById("consoleCards");
const summary = document.getElementById("summary");
const message = document.getElementById("message");

loadButton.addEventListener("click", function () {
    message.textContent = "Loading...";
    consoleCards.textContent = "";
    summary.textContent = "";
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                message.textContent = "";

                const data = JSON.parse(xhr.responseText);

                for (const item of data.consoles) {
                    const column = document.createElement("div");
                    column.className = "col-12 col-sm-6 col-lg-3";

                    const card = document.createElement("div");
                    card.className = "card h-100 shadow-sm";

                    const image = document.createElement("img");
                    image.className = "card-img-top console-image";
                    image.src = item.image;
                    image.alt = item.name;

                    const body = document.createElement("div");
                    body.className = "card-body";

                    const heading = document.createElement("h2");
                    heading.className = "card-title h5";
                    heading.textContent = item.name;

                    const details = document.createElement("p");
                    details.className = "card-text";
                    details.textContent =
                        item.manufacturer + " · " + item.year;

                    body.appendChild(heading);
                    body.appendChild(details);
                    card.appendChild(image);
                    card.appendChild(body);
                    column.appendChild(card);
                    consoleCards.appendChild(column);
                }
                summary.style.color = "#FFFFFF";

                if (data.consoles.length === 0) { summary.textContent = "0 consoles"; summary.style.color = "#FFFFFF"; }
                else {
                    let oldest = data.consoles[0];
                    let newest = data.consoles[0];

                    for (let i = 1; i < data.consoles.length; i++) {
                        const item = data.consoles[i];

                        if (item.year < oldest.year) { oldest = item; }
                        if (item.year > newest.year) { newest = item; }
                    }
                    summary.textContent = data.consoles.length + " consoles · " + "Oldest: " + oldest.name + " (" + oldest.year + ") · " + "Newest: " + newest.name + " (" + newest.year + ")";
                    summary.style.color = "#FFFFFF";
                }
            } else {
                message.textContent = "Unable to load consoles. Status code: " + xhr.status;
                message.style.color = "#FFFFFF";
            }
        }
    };

    xhr.send();
});