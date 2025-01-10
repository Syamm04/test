const wrapper = document.querySelector(".wrapper"); // or "#wrapper" if it's an ID
const question = document.querySelector(".question"); // Update the selector as per the actual class or ID
const gif = document.querySelector(".gif"); // Update to correct selector
const yesBtn = document.querySelector(".yes-btn"); // Use the class selector for yes button
const noBtn = document.querySelector(".no-btn"); // Use the class selector for no button

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaa, I love you too";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
