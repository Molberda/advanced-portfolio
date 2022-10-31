// templateid: template_yh47puc
// serviceid: service_wuzb1m5
// pP19DnVESUmrE9Psq
let isModalOpen = false
let darkToggle = false
const scaleFactor = 1 / 15

function moveBackground(event){
    const shapes = document.querySelectorAll('.shape')
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    const rot = event.clientX / 1.5
    
    for (let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1: 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${rot}deg)`   
    }
}

function toggleDark(){
    darkToggle = !darkToggle
    if(darkToggle){
        document.body.classList += " dark__theme"
    }
    else{
        document.body.classList.remove("dark__theme")
    }
}

function toggleModal(event){
    event.preventDefault()
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove('modal__open')
    }
    isModalOpen = !isModalOpen
    document.body.classList += ' modal__open'
}


function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
        'service_wuzb1m5',
        'template_yh47puc',
        event.target,
        'pP19DnVESUmrE9Psq'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            'The email service is temporarily unavailable. Please contact me directly on davidmollerb@gmail.com'
        )
        
    })
}

