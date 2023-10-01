const buttons = document.querySelectorAll('.header-btn');
const text = document.querySelector('.text');
const imgDiv = document.querySelector('.img-div')
const texts = ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit, nihil nesciunt voluptatibus labore quasi unde molestiae quod delectus asperiores quibusdam! Eius, ducimus eaque minus repellendus temporibus quos voluptatibus blanditiis.',

'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nisi, illo mollitia obcaecati adipisci dolorem? Consequuntur, quod! Natus sed, sit voluptas, quas, corrupti blanditiis magnam animi enim voluptates quaerat neque.',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quia odio blanditiis sed laboriosam, sequi corrupti pariatur praesentium numquam aliquam sit officia provident quasi totam. Quo error quasi accusantium ipsam.'];


buttons.forEach((button, i) => {
  
  function activateButton() {
    const activatedButton = document.querySelector('.activated-btn');
    activatedButton.classList.remove("activated-btn");
    buttons[i].classList.add("activated-btn")
  }

  function changeText() {
    text.innerHTML = texts[i];
    imgDiv.innerHTML = `<img src="img/img${i}.jpg" class="img">`;
  }
  
  function eventHandler() {
    activateButton();
    changeText();
  }
  button.addEventListener('click', eventHandler);
})