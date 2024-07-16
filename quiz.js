const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('main ');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');


startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');

}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');

}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
}



let questionCount = 0;

const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');

nextBtn.onclick = () => {
    questionCount++;
    if (questionCount < questions.length) {
        showQuestions(questionCount);
    } else {
        console.log("End of questions");
    }
}

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
    }

    optionList.innerHTML = optionTag;
}















































let questions = [
    {
        numb: 1,
        question: 'What is the Cyrilic equivalent for letter "A"?',
        answer: "Аа",
        options: [
            "Ее",
            "Оо",
            "Аа",
            "Лл"
        ]
    },
    {
        numb: 2,
        question: 'What is the Cyrilic equivalent for sound "R"?',
        answer: "",
        options: [
            "Сс",
            "Тт",
            "Ђђ",
            "Рр"
        ]
    },
    {
        numb: 3,
        question: 'What is the Cyrilic equivalent for sound "Sh" as in "smaSHed"?',
        answer: "Шш",
        options: [
            "Њњ",
            "Кк",
            "Шш",
            "Чч"
        ]
    },
    {
        numb: 4,
        question: 'What is the Cyrilic equivalent for sound "N"?',
        answer: "Нн",
        options: [
            "Нн",
            "Њњ",
            "Вв",
            "Ии"
        ]
    },
    {
        numb: 5,
        question: 'What is the Cyrilic equivalent for sound "M"?',
        answer: "",
        options: [
            "Шш",
            "Пп",
            "Жж",
            "Мм"
        ]
    }
]