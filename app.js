// templateid: template_yh47puc
// serviceid: service_wuzb1m5
// pP19DnVESUmrE9Psq
let isModalOpen = false
let darkToggle = false


function toggleDark(){
    darkToggle = !darkToggle
    if(darkToggle){
        document.body.classList += " dark__theme"
    }
    else{
        document.body.classList.remove("dark__theme")
    }
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

function toggleModal(event){
    event.preventDefault()
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove('modal__open')
    }
    isModalOpen = !isModalOpen
    document.body.classList += ' modal__open'
}
