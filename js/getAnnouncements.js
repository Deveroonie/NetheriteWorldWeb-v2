function getAnnouncements() {
    axios.get("https://nw-anouncements-api.sirepicly.repl.co").then(function (response) {
        var res = response.data
        var e = document.getElementById("announcement");

        if(res.enabled != "true") {
            e.style.display = "none"
            return false;
        }
        var colour = res.colour

        if(colour == "red") { colour = "danger" }
        if(colour == "gray" || colour == "grey") { colour = secondary }
        if(colour == "yellow") { colour = "warning" }
        if(colour == "white") { colour = "light" }
        if(colour == "green") { colour = "success" }
        if(colour == "blue") { colour = "info" }

        var e = document.getElementById("announcement");
        e.classList.add(`alert-${colour}`)
        e.innerText = res.announcement

    })
}