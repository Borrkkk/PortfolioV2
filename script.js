
const follower = document.getElementById('blur');
    
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX - 500;
    const mouseY = e.clientY - 500;
    follower.style.left = mouseX + 'px';
    follower.style.top = mouseY + 'px';
});

function scrollToElement(elementSelector, instance=0){

    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance){
        elements[instance].scrollIntoView({block: "start", behavior: 'smooth'});
    }

}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener('click', () => {
    scrollToElement('.about');
})
link2.addEventListener('click', () => {
    scrollToElement('.education');
})
link3.addEventListener('click', () => {
    scrollToElement('.portfolio');
})