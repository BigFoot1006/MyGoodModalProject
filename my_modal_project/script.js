const btn = document.querySelector(".button");

const m_box = document.getElementById("modal_box");
const m_bg = document.getElementById("modal_background");

const myapp = document.querySelector(".myapp");

btn.addEventListener('click', function(event) {
    event.preventDefault();
    m_box.classList.add("active");
    m_bg.classList.add("active");
    });

btn.innerHTML = "This is my 'it' performance";

const headerOne = document.querySelector(".js-header");
headerOne.innerHTML = "Hi There";

const para1 = document.querySelector(".js-para1");
const para2 = document.querySelector(".js-para2");

para1.innerHTML = "This is my programming webpage. I am striving to better my programming knowledge everyday. Hope you enjoy these short programming samples."
para2.innerHTML = "Here they go!"

const btncls1 = document.querySelector(".button_close");
const btncls2 = document.querySelector(".button_accept");

btncls1.addEventListener('click', function(ev) {
    ev.preventDefault();
    setTimeout(() => {
        m_bg.classList.remove("active");
        m_box.classList.remove("active");
        myapp.classList.remove("active");
        
    }, 250);
});

btncls2.addEventListener ('click', function(even) {
    m_bg.classList.remove("active");
    m_box.classList.remove("active");
    myapp.classList.add("active");
    }, 250);
    


// const btncls = document.querySelectorAll(".js-button");
// btncls.forEach(node => { 
//     node.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         setTimeout(() => { m_bg.classList.remove("active");
//                          }, 250
//         );
//         setTimeout(() => { m_box.classList.remove("active");
//                          }, 250
//         );
//         setTimeout(() => {myapp.classList.add("active");
            
//         }, 250);
//     });
// });
