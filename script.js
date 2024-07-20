function checkAnswers() {
    const answer = document.querySelector('input[name="q1"]:checked');
    if (answer && answer.value === "Delhi") {
        alert("Correct.");
    } else {
        alert("Incorrect!");
    }
}
