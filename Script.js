const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const message = document.getElementById("message");
const cat = document.getElementById("cat");

const sadMessages = [
    "I’ll be sad 😿",
    "Are you sure? 💔",
    "Please reconsider! 🥺",
    "You’re breaking my heart 😭",
    "Think again, pretty please? 🥹",
    "But I have treats! 🍪"
];

noButton.addEventListener("mouseover", () => {
    // Move the "No" button to a random position
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    // Change message randomly
    const randomMessage = sadMessages[Math.floor(Math.random() * sadMessages.length)];
    message.textContent = randomMessage;
});

yesButton.addEventListener("click", () => {
    message.textContent = "Yay! You're my Valentine! ❤️🎉";
    cat.src = "happy-cat.gif"; // Replace with a happy dancing cat gif
});
