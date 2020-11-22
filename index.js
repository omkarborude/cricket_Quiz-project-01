var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
var rank ="";

// Intro To Quize
console.log(chalk.bold.rgb(186,85,211)('Hello Cricket Fans! Welcome To the Cricket Quize !! \n'));

// Getting User Name
var userName= readlineSync.question(chalk.red.bold('May I know Your Name? ' ));

// Welcome To User
console.log(chalk.red.bold('\nWELCOME! ',userName.toUpperCase()));

var userName= readlineSync.question
 (chalk.white.bold("Who is your Favourite Batsman ? " ));

 // Showing Rules To User	
 console.log(chalk.green.bold.bgBlackBright("Rules for Score points:"))
console.log(chalk.white.bgBlack(" if your answer is Right you will get +2  \n if your answer is Wrong your Score will -1"))

// Points System 
console.log(chalk.cyan.bold('\n There is rank system in this game,\n   i)C  >1,<=8 points\n   ii)C+  >8,<= 12 points\n   iii)B  >12,<=18 points\n   iv)B+  >18,<=25 points\n   v)A  >25,<=29 points\n   vi)A+ = 30 points\n3.No rank for score <=0 \n'));

// Starting Quize 
console.log(chalk.green.bold.bgBlack("\n Let's Start the Game !! \n "));

// Score Data
var highScore = [
  {
    name: 'omkar',
    score: 26,
    rank: 'A'
  },
  {
    name: 'Nikhil',
    score: 30,
    rank: 'B+'
  },
  {
    name: 'Shradha',
    score: 24,
    rank: 'B'
  }
]


// questoin for Quize with Answer
var quiz = [
  {
    question: '1. Whos is The Captain of Indian Cricket Team ?\na)Rohit Sharma\nb)Virat Kohli\nc)Ajinkya Rahane\nd)MS.Dhoni\n',
    answer: 'b'
  },
  {
    question: '2. how many overs are there in T20 Match?\na)10 Overs\nb)40 Overs\nc)50 Overs\nd)20 Overs\n',
    answer: 'd'
  },
  {
    question:'3. Who is the First Cricketer To Score 100 Hundreds?\na)sachin tendulkars\nb)Virat Kohli\nc)Ab de villier\nd)Steve Smith\n',
    answer: 'a'
  },
  {
    question:'4. Cricket is The national Sport of Which Country?\na)Indian\nb)new zealand\nc)South Africa\nd)England\n',
    answer: 'd'
  },
  {
    question:'5. What is the Long-Form of ICC?\na)Indian Cricket Council\nb)International Country Cricket\nc)International Cricket Council\nd)International Cricket Commity\n',
    answer: 'c'
  },
  {
    question:'6.  who is the winner of world cup 2019?\na)England\nb)India\nc)Australia\nd)Srilanka\n',
    answer: 'a'
  },
  {
    question:'7. Which team won most IPL titles?\na)Royal Challengers Bangalore Players (RCB)\nb)Mumbai Indians Players (MI)\nc)Chennai Super Kings Players (CSK)\nd)Rajasthan Royals Players (RR)\n',
    answer: 'b'
  },
  {
    question:"8. Which wicketkeeper has the most stumpings??\na)Kumar Sangakkara\nb)ricky ponting\nc)MS Dhoni \nd)Rishab Pant\n",
    answer:'c'
  },
  {
    question:'9. In cricket, who is called Mr. 360? 2.\na)AB de Villiers3\nb)Virat Kohli\nc)MS Dhoni\nd)Ajinkya Rahane\n',
    answer:'a'
  },
  {
    question:"10. First sportsperson nominated for Rajya Sabha membership?\na)Virat Kohli\nb)Rohit Sharma\nc)MS Dhoni\nd)Sachin Tendulkar\n",
    answer:'d'
  },
  {
    question:"11. Which cricket team has won most ICC Cricket World Cup titles?\na)England\nb)West Indies\nc)India\nd)Australia\n",
    answer: 'd'
  },
  {
    question:"12. Which of the following country did not won the ICC Cricket World Cup (50 over format) title so far??\na)England\nb)New Zealand\nc) South Africa\nd)All of the above\n",
    answer: 'd'
  },
  {
    question:"13.Which of the following Indian player have got first “Man of the Tournament” Award in the ICC Cricket World Cup??\na)sachin tendulkars\nb)Yuvraj Singh\nc)MS Dhoni\nd)Kohli\n",
    answer:'b'
  },
  
  {
    question:"15.Who was the captain of the Indian cricket team in the ICC World Cup 1983?\na)Sunil Gavaskar\nb)Kirti Azad\nc)sachin tendulkar 2\nd)Kapil Dev\n",
    answer:'d'
  },
  
]


// Function for Right & Wrong
function checkAnswer(question , answer) {

  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green.bold("Right answer !!\n"));
    score = score + 2;
  }
  else {
    console.log(chalk.red.bold("Wrong answer !!\n"));
    score = score-1;
  }
}

for(var  i=0 ;i<quiz.length; i++) {
 checkAnswer(quiz[i].question,quiz[i].answer);
}


// Rank credibility  
rankScore(score);

function rankScore(score) {
  if(score>0 && score <= 8) {
    rank = rank + 'C'
  }
  else if(score > 8 && score<=12) {
    rank = rank + 'C+'
  }
  else if(score > 12 && score<=18) {
    rank = rank + 'B'
  }
  else if(score > 18 && score<=25) {
    rank = rank + 'B+'
  }
  else if( score > 25 && score <=29) {
    rank = rank + 'A'
  }
  else if( score === 30) {
    rank = rank + 'A+'
  }
  
  else 
      {
    console.log('Oops!! You Did not Get Any Rank !!\n');
    rank = rank + 'No Rank'
  }
}

console.log('**************************');

console.log(chalk.green.bold.underline('your final score is: ',score));
console.log(chalk.red.bold.underline('Your are Rank is: ',rank) );

console.log(chalk.green('\n     HIGH SCORE'))
console.log('name   score   rank')
console.log('********************')

for(var j=0 ;j<highScore.length ; j++) {
  console.log(chalk.white(highScore[j].name, " " ,highScore[j].score, " " ,highScore[j].rank))
}

if(highScore[0].score < score) {
  console.log(chalk.green.bold('\n You are Real Cricket Fan !!'));
  console.log(chalk.bgRedBright('Awsome'))
  console.log(chalk.bgGreenBright.bold('\nSend me the screen shot With your  high score '))
}
else {
  console.log(chalk.yellow.bold('\nSend me the screen shot With your  high score '))
}

