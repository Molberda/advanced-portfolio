// templateid: template_yh47puc
// serviceid: service_wuzb1m5
// pP19DnVESUmrE9Psq

// <script type="text/javascript"
//         src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
// </script>
// <script type="text/javascript">
//    (function(){
//       emailjs.init("YOUR_PUBLIC_KEY");
//    })();
// </script>

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

let isModalOpen = false 
function toggleModal(event){
    event.preventDefault()
    if (isModalOpen){
        return document.body.classList.remove('modal__open')
    }
    isModalOpen = !isModalOpen
    document.body.classList += ' modal__open'
}
