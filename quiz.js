/* ALL VARIABLES*/ 
const questionDOM = document.querySelector('.question-text');
const optionDOM = document.querySelectorAll('.option');
const optionOne = document.getElementById('btn-one');
const optionTwo = document.getElementById('btn-two');
const optionThree = document.getElementById('btn-three');
const playBTN = document.getElementById('play');
const nextBTN = document.getElementById('next');
const congrat = document.querySelector('.congratulation');
const para = document.querySelector('p');
const aside = document.querySelector('aside');
const current = document.querySelector('div .current');
const total = document.querySelector('.total');


/*CLASS FOR ALL QUESTIONS AND ANSWER*/
class Question {
    constructor(question,answer,correctAns){
        this.question = question;
        this.answer = answer;
        this.correctAns = correctAns;
    }
    getQuestion(){
    questionDOM.innerText = this.question;
        this.displayAns();
        
    }
    displayAns(){
        optionOne.innerText =this.answer[0];
        optionTwo.innerText =this.answer[1];
        optionThree.innerText =this.answer[2];

    }
      
    getCorrectAns(ans){
        if(this.correctAns == ans){
           correct(congrat,'correct');
            paraContent(para, `correct! you're awesome....`);
            removeClass('correct');
           nextQuestion();

        } else{
            correct(congrat,'wrong');
            paraContent(para, `oops! wrong answer! try again!`);
                removeClass('wrong');
            endGame(aside);
            getScore();
        }
        
    }
}

let currQuestion = 0;

const q1 = new Question ('in What year did the Titanic sink in the atlantic ocean on 15 april on its  maiden voyage from southampton?', [1912,1950, 1913], 1912)
const q2 = new Question ('who invented the tin can for preserving food in 1810?', ['jamie oliver','robert peel','peter duran'], 'peter duran');
const q3 = new Question ('how many breaths does the human body take daily?', [5000,20000,40000], 20000);
const q4 = new Question ('the first world war ends in what year?', [1900,1970,1918], 1918);
const q5 = new Question ('william shakespeare was born, when?', [1564,1780,1965], 1564);
const q6 = new Question ('what is the furthest you can see with the naked eye?', ['2.5m light years','1m light years','7m light years'], "2.5m light years");
const q7 = new Question ('how many grams of salt are there in a litre of typical seawater?', ['none','80m','10m'], 'none');
const q8 = new Question ('how many hearts does an octopus have?', ['one','four','three'], 'four');
const q9 = new Question ('where is the water towers located?', ['iran','kuwait','hungary'], 'kuwait');
const q10 = new Question ('where is the colosseum located?', ['australia,cambodia','italy'], 'italy');
const allArr = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

allArr[currQuestion]

function getQuest(allQuest){
    allQuest.getQuestion();
}
getQuest(allArr[currQuestion]
)

/*get correct answer*/
function getAns(ans,el){
    ans.getCorrectAns(el);
}

/*UI for correct answer*/
function correct(val,clas){
     val.classList.add(clas);
}

/*message for correct answer*/
function paraContent(val,message){
val.innerText = message;
}

/*go to next question*/
function nextQuestion(){
setTimeout(() => {

},2000);

}


// remove class of message
function removeClass(clas){
setTimeout(() => {
congrat.classList.remove(clas)
 },1500);
}

// wrong answer
function endGame(elem){
setTimeout(() => {
elem.classList.add('active');
 },2000);
}

// add other page
function getAside(){
    aside.classList.add('active');
}

// get Scores
function getScore(){
 let saveQuestion = [currQuestion++];
current.innerText = `${saveQuestion++}/${allArr.length}`;
}

nextBTN.addEventListener('click', (e) => {
//    getScore()
//    getScore()
    currQuestion++
    getQuest(allArr[currQuestion]);
    
    if(currQuestion === allArr.length -1){
        console.log(currQuestion);
            endGame(aside);
    getScore();

    }
});

optionDOM.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const curTarget = e.currentTarget.textContent;
        getAns(allArr[currQuestion],curTarget);
            if(currQuestion === allArr.length-1){
        console.log(currQuestion);
            endGame(aside);
    getScore();
    }
    })
});
playBTN.addEventListener('click', (e) => {
    endGame(aside);
    getScore();

});





