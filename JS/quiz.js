const quizQuestions = [
    {   q: "HTML এর পূর্ণরূপ কী?", 
        options: [
            "Hyperlinks and Text Markup Languag",
            "Home Tool Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinking Text Management Language"
        ], 
        answer: "Hyper Text Markup Language"
    },
    {q: "CSS এর কাজ কী?", 
        options: [
            "ওয়েবসাইটের গঠন তৈরি করা",
            "ওয়েবসাইটে ডাটা সংরক্ষণ করা",
            "ওয়েবসাইটকে স্টাইল করা",
            "ওয়েবসাইটে লজিক লিখা"
        ], 
        answer: "ওয়েবসাইটকে স্টাইল করা"
    },

    {   q: "JSON stands for?", 
        options: [
            "Java Source Object Notation",
            "JavaScript Object Notation",
            "JavaScript Order Number","None"
        ], 
        answer: "JavaScript Object Notation"
    },
];

const quizForm = document.getElementById('quizForm');
const quizContainer = document.getElementById('quizContainer');

quizQuestions.forEach((item, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionTitle = document.createElement('h3');
    questionTitle.innerText = `${index + 1}. ${item.q}`;
    questionDiv.appendChild(questionTitle);

    const optionDiv = document.createElement('div');
    optionDiv.classList.add('options');

    item.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option-card')
        

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${index}`;
        input.value = option;

        const span = document.createElement('span');
        span.innerText = option;
        
        label.appendChild(input)
        label.appendChild(span);

        optionDiv.appendChild(label);
    });

    questionDiv.appendChild(optionDiv)
    quizContainer.appendChild(questionDiv);
});

quizForm.onsubmit = function(e){
    e.preventDefault();

    let score = 0

    quizQuestions.forEach((item, index) =>{
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if(selected && selected.value === item.answer){
            score++;
        }
    });
    alert(`Your score: ${score} / ${quizQuestions.length}`);

    const quizScore = document.getElementById('quizScore');
    quizScore.innerText = `${score} / ${quizQuestions.length}`;

}