whack-a-mole

a class project to develop a whack a mole game in javascript with a team of around 15 people divided into 4 groups (backbone, graphics, QA and specs).

// Oct 25, 2021 Qi Da Chen I added a timer function on the js program to show the players how many times they have left.

// Oct 27, 2021 Qi Da Chen Created a home page. The home page will show the group number and the members in the group (I haven't code the member list yet). I also created a class logo online just to make the website look somewhat fancy. On the top right we have home, game, bug, specs. Right now I only link the game. In the future bug and specs will have their own page. Bug will display the bugs found on the game by the QA. Specs page will be for the specs team. On the game page (the whack a professor). I created tiny line that says "click this to go back to home", that line if you press on it will send you back to the home page. Beside software stuff, I organize the the image and audio into a specific folders.

//Nov 2, 2021 Perry Chen Spec Sheet - Incomplete/Template https://docs.google.com/document/d/1MZgJTXujNsg6eqlLFC_2V_HX-z8Qovzn/edit?usp=sharing&ouid=100119458935047973200&rtpof=true&sd=true

//Nov 7, 2021 Qi Da Chen Added a pop up box in the home page, with the groups and some members. The pop up box is control by home.js. There is a function for the member button and the X button on the box. Changed the hole image and profesosr image to the art graphic made. Apparently html need to have "!DOCTYPE html" so the browser will know what type of document type to expect. When I added that, the home page got messed up, so I made some changed to index.html and style.css. I also moved the images the graphic did to the gameImage folder so it's easier for backbone to look for the images.

//Nov 7, 2021 Lu Yang Wu Cleaned mistakes in CSS and rewrote some comments in .JS file. Changed game page font and top background picture. Couldn't go further with JS due to heavy study and job issues. But mmultiple moles/professor issue could be solve by array with random function. Will see in future.

// Nov 30, 2021 Qi Da Chen added more names to the member list. I was told that there was a bug where if the player press the play button multiple times, the time will go down faster (even reach the negative) and the multiple professor will pop out at the same time. The reason this is happening is that the program doesn't know that we are currently playing the game so it will run games on top of games. To fix that bug, I added a boolean called "play". If play was press once, the play boolean will turn true. If play is true and the player press play again, the game won't do the bug that I was told about because now it knows that the game is currently being played. In game.css, I made the background Brooklyn College campus and the game background green.
