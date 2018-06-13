window.onload = function(){
 	highscores();
 };

 function scores(a, b) {
   if (a.score > b.score) {
 	return -1;
 	}
   if (a.score < b.score) {
 	return 1;
   }
 	return 0;
 }

 function highscores() {
   var session = JSON.parse(localStorage.getItem("session"));
   var content = document.getElementsByClassName('LeaderboardPlayers')[0];

   session.sort(scores);

   for (i = 0; i < 10; i++) {
    content.innerHTML += "<li>" + " Nimi: " + session[i].name + " | Skoor: " +  session[i].score + " " + "</li>";
   }
}
