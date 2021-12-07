whack-a-mole

a class project to develop a whack a mole game in javascript with a team of around 15 people divided into 4 groups (backbone, graphics, QA and specs).

// Oct 25, 2021 Qi Da Chen I added a timer function on the js program to show the players how many times they have left.

// Oct 27, 2021 Qi Da Chen Created a home page. The home page will show the group number and the members in the group (I haven't code the member list yet). I also created a class logo online just to make the website look somewhat fancy. On the top right we have home, game, bug, specs. Right now I only link the game. In the future bug and specs will have their own page. Bug will display the bugs found on the game by the QA. Specs page will be for the specs team. On the game page (the whack a professor). I created tiny line that says "click this to go back to home", that line if you press on it will send you back to the home page. Beside software stuff, I organize the the image and audio into a specific folders.

//Nov 2, 2021 Perry Chen Spec Sheet - Incomplete/Template https://docs.google.com/document/d/1MZgJTXujNsg6eqlLFC_2V_HX-z8Qovzn/edit?usp=sharing&ouid=100119458935047973200&rtpof=true&sd=true

//Nov 7, 2021 Qi Da Chen Added a pop up box in the home page, with the groups and some members. The pop up box is control by home.js. There is a function for the member button and the X button on the box. Changed the hole image and profesosr image to the art graphic made. Apparently html need to have "!DOCTYPE html" so the browser will know what type of document type to expect. When I added that, the home page got messed up, so I made some changed to index.html and style.css. I also moved the images the graphic did to the gameImage folder so it's easier for backbone to look for the images.

//Nov 7, 2021 Lu Yang Wu Cleaned mistakes in CSS and rewrote some comments in .JS file. Changed game page font and top background picture. Couldn't go further with JS due to heavy study and job issues. But mmultiple moles/professor issue could be solve by array with random function. Will see in future.

// Nov 30, 2021 Qi Da Chen added more names to the member list. I was told that there was a bug where if the player press the play button multiple times, the time will go down faster (even reach the negative) and the multiple professor will pop out at the same time. The reason this is happening is that the program doesn't know that we are currently playing the game so it will run games on top of games. To fix that bug, I added a boolean called "play". If play was press once, the play boolean will turn true. If play is true and the player press play again, the game won't do the bug that I was told about because now it knows that the game is currently being played. In game.css, I made the background Brooklyn College campus and the game background green.

// Dec 5, 2021 Qi Da Che(AnbuCap) made some changed to the look of the game. Added sound effect and music to the game. Make the cursor turn to a hammer when the play button is pressed.

// Dec 5, 2021 Abdullah adding some test cases for the game and working on svn repo. 

// Dec 5, 2021 Lu Yang Wu improved and moved the tick() function from peep() to call from startGame(). Issues that countdown was not able to stop(if moved) and game speed follows peep() function are now fixed. Please change the number in peep()-> const time= randomTime(from min milli-sec, to max milli-sec) to test the game if needed. I changed to (100,1000) now instead of (1000,1000) originally.

// Dec 5, 2021 test case:
Time starts on start click: Passed
When prof is hit points should increase: Passed
The game is working together perfectly. The timer starts when the end-user clicks start. The timer starts at 19 seconds. When the timer starts the professors start to randomly appear. If the professor is click on correctly then the user will be awarded 10 points. If the user clicks on the wrong desk then they will not be awarded 10 points. 

// Dec 5, Please see below the steps to get the whack-a-mole repo using svn. 

1. go on your desktop and get the GitHub repo using svn using this: svn co --depth empty https://github.com/mixemer/whack-a-mole.git
2. It will create a folder named whack-a-mole. git (it might be a different name-check it on your desktop)
cd into the folder using: cd whack-a-mole. git
4. once you are inside the folder type this: svn up the trunk (this will download the GitHub repo into the folder and create a new folder colled trunk that has the files)
5. type this to get all the log: svn log

// Dec 5, the steps to commit and update using the svn repo. 

commit: svn commit -m "your commit comment here"
update: svn update.

* Please update your svn repo regularly so that you can get all the latest logs. 

// Dec 6, 2021 Sebastian Stephenson tested the score counter of the game. Clicks were applied on different areas in the game to see if the counter would rise or not. The score didn't rise when the clicks weren't applied to the moles on every attempt. 

// Dec 7, 2021,
- updated the specs.html file and removed the .docx that isnt used anymore.
- fixed the music issue, file was still zipped

// Dec 7, 2021 testing svn commit from terminal

// Dec 7, 2021 How to commit with svn and genarte token

1. Make sure that your repository is in sync with the main branch.
2. Go to GitHub > settings > developer settings > Personal access tokens
3. Enter your Github account password and enter.
4. click on the repo check box to get access to the entire repo and choose the time you want.
5. click generate the token and copy the token. 
6. Open your svn repository in your laptop's terminal. 
7. to commit please type: svn commit -m "comment" and then when you are asked for a password insert the token copied from Github. 

