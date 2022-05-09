const url = 'https://discordapp.com/api/guilds/877583088006344745/widget.json'

function getMembers() {
axios.get(`${url}`).then(function (response) {
    console.log(response.data.presence_count)
})
}