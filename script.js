document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultsContainer = document.getElementById('results-container');

    const numQuestions = 10;
    let questions = [];

    function generateQuiz() {
        for (let i = 0; i < numQuestions; i++) {
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            const correctAnswer = num1 * num2;
            questions.push({ num1, num2, correctAnswer });

            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `
                <label for="q${i}">${num1} x ${num2} = </label>
                <input type="number" id="q${i}" />
            `;
            quizContainer.appendChild(questionElement);
        }
    }

    function calculateScore() {
        let score = 0;
        questions.forEach((question, index) => {
            const userAnswer = document.getElementById(`q${index}`).value;
            if (userAnswer && parseInt(userAnswer, 10) === question.correctAnswer) {
                score++;
            }
        });
        return score;
    }

    submitBtn.addEventListener('click', () => {
        const score = calculateScore();
        resultsContainer.textContent = `You scored ${score} out of ${numQuestions}!`;
    });

    generateQuiz();
});
