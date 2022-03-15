document.getElementById("btn").addEventListener("click", () => {
    const section = document.getElementById("question-answer-section");
    const name = "Nur Al Mumit"
    const div = document.createElement("div");
    div.innerHTML = `<p>Your answer is : ${name}</p>`
    section.appendChild(div);
})