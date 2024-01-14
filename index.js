let title = document.querySelector('.main_heading');
let name = "Welcome to my Tribute Page "
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0,index);
    title.innerText = new_title;

    index > name.length ? index = 1 : index++;
    // index++;

    setTimeout(() => typeWriter(), 100)
}

typeWriter();