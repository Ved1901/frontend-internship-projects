const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: 0
    },
    {
        question: "What is the name of our galaxy?",
        options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
        answer: 1
    },
    {
        question: "Which celestial body is at the center of our solar system?",
        options: ["Earth", "Moon", "Sun", "Mars"],
        answer: 2
    },
    {
        question: "What causes day and night on Earth?",
        options: ["Earth’s revolution around the Sun", "Earth’s rotation on its axis", "Moon’s movement", "Sun’s movement"],
        answer: 1
    },
    {
        question: "Which planet is the largest in our solar system?",
        options: ["Earth", "Saturn", "Juipter", "Neptune"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll("input[name='option']");
const errorEl = document.getElementById("error");
const resultBox = document.getElementById("result");
const scoreEl = document.getElementById("score");
const questionBox = document.getElementById("question-box");

loadQuestion();

function loadQuestion() {
    errorEl.textContent = "";
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach((opt, index) => {
        document.getElementById("opt" + index).textContent = opt;
        optionsEls[index].checked = false;
    });
}

document.getElementById("nextBtn").addEventListener("click", () => {
    let selectedOption = null;

    optionsEls.forEach(option => {
        if (option.checked) {
            selectedOption = option.value;
        }
    });

    if (selectedOption === null) {
        errorEl.textContent = "Please select an answer before continuing.";
        return;
    }

    if (parseInt(selectedOption) === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionBox.classList.add("hidden");
        resultBox.classList.remove("hidden");
        scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
    }
});
