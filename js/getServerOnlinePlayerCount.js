const ip = 'play.netherite.world'

function getPlayers() {
    axios.get(`https://api.mcsrvstat.us/2/${ip}`).then(function (response) {
        console.log(response.data.players.online)
        document.getElementById("mcOnlinePlayers").innerText = response.data.players.online
    })
}