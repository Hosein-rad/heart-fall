const createHeart = () => {
    const newHeart = document.createElement("div");
    newHeart.innerText = "♥";
    newHeart.style.color= `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    newHeart.style.left = `${Math.floor(Math.random()*105)-5}vw`;
    newHeart.classList.add("heart");
    newHeart.addEventListener("click", () => {
        newHeart.style.opacity = 0;
    });
    document.body.appendChild(newHeart);
    setTimeout(()=> {
        newHeart.remove();
    }, 3000)
};
setInterval(createHeart, 50);