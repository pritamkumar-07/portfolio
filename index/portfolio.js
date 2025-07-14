function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav_list"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav_list";
    }
  }
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  function headerShadow() {
    const navHeader =document.getElementById("header");
    if (document.body.scrollTop > 55 || document.documentElement.scrollTop >  50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
  /* ----- TYPING EFFECT ----- */
  var typingEffect = new Typed("#course",{
    strings : ["Java Developer","Frontend Developer"," Full Stack Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
  })
  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
  })
  /* -- HOME -- */
  sr.reveal('.hero_left_box',{delay:100})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.btn_grp',{delay: 200})
  sr.reveal('.socialm',{delay: 200})
  sr.reveal('.hero_right',{delay: 300})
  
  /* -- PROJECT BOX -- */
 
   sr.reveal('.conn',{interval: 200})
    sr.reveal('.conn2',{interval: 200})
     sr.reveal('.conn3',{interval: 200})
  /* -- HEADINGS -- */
  sr.reveal('.header',{})
  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srLeft.reveal('.intro',{delay: 100})
   srLeft.reveal('.desc',{delay: 100})
  srLeft.reveal('.bigbox',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srRight.reveal('.data',{delay: 100})
  srRight.reveal('.names',{delay: 100})
  srRight.reveal('.mail',{delay: 100})
  srRight.reveal('.sndinf',{delay: 100})
  // srRight.reveal('.line3',{delay: 100})
  
  /* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 70,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav_list a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav_list a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
  }
  window.addEventListener('scroll', scrollActive)

  // -------------------------------------- contact form ----------------------------------
//   const form = document.getElementById("#myform").addEventListener("submit",async function sendMail(e) {
    
//   })

  
//     e.preventDefault();

//     const name = document.querySelector(".names").value;
//     const email = document.querySelector(".mail").value;
//     // const number = document.getElementById("number").value;
//     const message = document.querySelector(".inputmes").value;

//   const response = await fetch("http://localhost:5000/send", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({ name, email, message })
// });


//     if (response.ok) {
//       alert("Message sent successfully!");
//       form.reset();
//     } else {
//       alert("Failed to send message.");
//     }
//   };
// Attach event listener to the form submit
document.getElementById("myform").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.querySelector(".names .inp").value;
  const email = document.querySelector(".mail .inp").value;
  const message = document.querySelector(".inputmes").value;

  const response = await fetch("http://localhost:5000/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  });

  if (response.ok) {
    alert("Message sent successfully!");
    document.getElementById("myform").reset();
  } else {
    alert("Failed to send message.");
  }
});
// function sendmail() {
//   let nameField = document.querySelector(".names");
//   let emailField = document.querySelector(".mail");
//   let messageField = document.querySelector(".inputmes");

//   let params = {
//     name: nameField.value,
//     email: emailField.value,
//     message: messageField.value,
//   };

//   emailjs.send("service_qk5rbsb", "template_m24i2at", params)
//     .then(() => {
//       alert("Email sent successfully");


//       // Clear the inputs after 3 seconds
//       setTimeout(() => {
//         nameField.value = "";
//         emailField.value = "";
//         messageField.value = "";
//       }, 3000);
//       form.reset()
//     })
//     .catch(() => {
//       alert("Failed to send message");
//     });
// }
