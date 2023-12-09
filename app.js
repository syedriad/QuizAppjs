let questions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    } 
]


let quest = document.getElementById("quest")
let opt1  = document.getElementById("opt1")
let opt2  = document.getElementById("opt2")
let opt3  = document.getElementById("opt3")
let score = 0
let index = 0
let min   = 1
let sec   = 59
let timer = document.getElementById("timer")

let countdown = setInterval(function(){
    timer.innerText = `${min} : ${sec}`
    sec--
    if(sec < 0){
        min --
        sec = 60
        if (min < 0){
            min = 1
            sec = 60
            NextQuestion()
        }
        
    }

},1000)






function NextQuestion(){
    let getoptions = document.getElementsByName("options")
    // getoptions.disabled = true   => won't work because list mai hai sary options. (you can check by console)
 
    

    for (let i=0; i<getoptions.length; i++){      //console.log(getoptions[i])
    
        if (getoptions[i].checked){
            let selectedvalue  = getoptions[i].value         //options k values nikal liye (you can check by console)
            let selectedquest  = questions[index -1]['question']  //wo question nikal liya jisk options screen prhen
            let selectedOpt    = questions[index -1][`option${selectedvalue}`]   //option1 ya option2 krty tou srf wo hi uth kr aajata yahn pr option{1,2,3} krdia ek ek krke sb aynge.
            let correctOpt     = questions[index -1]["correctOption"]
            
            if (selectedOpt ==  correctOpt){
                score++
            }   
    
        }
        getoptions[i].checked = false
    }
    
    // getoptions.forEach(function(e){
    //     e.checked = false
    // })


    if (index > questions.length -1){
        let Marks = document.getElementById("score")
        let done = (`your score is ${score} out of ${questions.length}, and percentage is ${(score/questions.length)*100}%`)
        Marks.innerText = done;
    }
    else{
        quest.innerText = questions[index].question
        opt1.innerText = questions[index].option1
        opt2.innerText = questions[index].option2
        opt3.innerText = questions[index].option3
        index++

        btn.disabled = true

    }

    min = 1
    sec = 60


}

NextQuestion()   // call krdia isy taa k ek bar saray questions khud hi load hojaye.

function OptionSelected(){
    var btn = document.getElementById("btn")
    btn.disabled = false
}

