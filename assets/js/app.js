let squad = [
    {
        name: "muna",
        link: "https://steamcommunity.com/id/MunaKnif"
    }
];


$(document).ready(function() {
    shuffle(squad);
    for (let i = 0; i < squad.length; i++) {
        $("#squad").append('<a target="_blank" href="'+squad[i].link+'">'+squad[i].name+'</a><br>');
    }
});


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}
