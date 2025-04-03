import { questions } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const questionsContainer = document.getElementById('questions-container');
    const resultsContainer = document.getElementById('results-container');
    const scoreDisplay = document.getElementById('score');
    let questionDivs = []; // Store the question divs

    function displayQuestions() {
        questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `
                <p>${index + 1}. ${question.question}</p>
                <div class="options">
                    ${question.options.map((option, optionIndex) => `
                        <label>
                            <input type="radio" name="question${index}" value="${optionIndex}" required>
                            ${option}
                        </label>
                    `).join('')}
                </div>
                <div class="result" id="result${index}"></div>
            `;
            questionsContainer.appendChild(questionDiv);
            questionDivs.push(questionDiv); // Store the question div

            // Add event listeners to each radio button
            const radioButtons = questionDiv.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.addEventListener('change', () => {
                    const resultDiv = document.getElementById(`result${index}`);
                    const chosenAnswer = parseInt(radio.value);
                    if (chosenAnswer === question.correctAnswer) {
                        resultDiv.textContent = "Correcto!";
                        resultDiv.style.color = "green";
                    } else {
                        resultDiv.textContent = `Incorrecto. La respuesta correcta era: ${question.options[question.correctAnswer]}`;
                        resultDiv.style.color = "red";
                    }
                });
            });
        });
    }

    function calculateScore() {
        let score = 0;
        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            const resultDiv = document.getElementById(`result${index}`);
            if (selectedOption) {
                const chosenAnswer = parseInt(selectedOption.value);
                if (chosenAnswer === question.correctAnswer) {
                    score++;
                    
                } 
            } 
        });
        return score;
    }

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const score = calculateScore();
        scoreDisplay.textContent = `Obtuviste ${score} de ${questions.length} respuestas correctas.`;
        resultsContainer.style.display = 'block';
    });

    displayQuestions();
});