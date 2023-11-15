const menubar = document.querySelector('#menu')
const headr = document.querySelector('.header')
        const cross = document.querySelector('#cross')
        const navmenu = document.querySelector('.mobile-menu')
        menubar.addEventListener('click', ()=>{
            navmenu.classList.toggle('show-menu')
            menubar.style.display = 'none'
            cross.style.display = 'block'
            headr.style.backgroundColor = 'black'
        })
        cross.addEventListener('click',()=>{
            navmenu.classList.remove('show-menu')
            menubar.style.display = 'block'
            cross.style.display = 'none'
        })
        function closemenu (){
            navmenu.classList.remove('show-menu')
            menubar.style.display = 'block'
            cross.style.display = 'none'
        }

        gsap.to('.header',{
            backgroundColor: 'black',
            duration: '0.5',
            
            scrollTrigger: {
                trigger: '.header',
                scroller: 'body',
                start: 'top -30px',
                scrub: true,
            }
        
        })
        gsap.to('.nav-bar',{
            padding: '8px 10px',
            
            scrollTrigger: {
                trigger: '.nav-bar',
                scroller: 'body',
                start: 'top -30px',
                scrub: 1,
            }
        
        })

        var TrandingSlider = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
          ScrollReveal().reveal('.course',{
            origin: 'top',
            distance: '300px',
            delay:200,
            duration: 1000,
            viewFactor:0.3,  
        })
        ScrollReveal().reveal('.course2',{
            origin: 'top',
            distance: '300px',
            delay:600,
            duration: 1000,  
            viewFactor:0.3, 
        })
        ScrollReveal().reveal('.course3',{
            origin: 'top',
            distance: '300px',
            delay:1000,
            duration: 1000,
            viewFactor:0.3,   
        })
        ScrollReveal().reveal('.course4',{
            origin: 'left',
            distance: '300px',
            delay:200,
            duration: 500,
            viewFactor:0.6,   
        })
        ScrollReveal().reveal('.course5',{
            origin: 'top',
            distance: '300px',
            delay:600,
            duration: 500,
            viewFactor:0.6,   
        })
        ScrollReveal().reveal('.course6',{
            origin: 'right',
            distance: '300px',
            delay:1000,
            duration: 500,
            viewFactor:0.6,   
        })
        ScrollReveal().reveal('.course7',{
            origin: 'left',
            distance: '300px',
            delay:500,
            duration: 500,
            viewFactor:0.3,   
        })
        ScrollReveal().reveal('.course8',{
            origin: 'right',
            distance: '300px',
            delay:1000,
            duration: 500,
            viewFactor:0.3,   
        })
        ScrollReveal().reveal('.center-main',{
            origin: 'top',
            distance: '300px',
            duration: 1000,
            viewFactor:0.3,   
        })
        ScrollReveal().reveal('.h1',{
            origin: 'top',
            distance: '300px',
            duration: 1000,   
        })
        ScrollReveal().reveal('.mission',{
            origin: 'left',
            distance: '1000px',
            duration: 1000,
            viewFactor:0.3,   
        })
        ScrollReveal().reveal('.rev-mission',{
            origin: 'right',
            distance: '1000px',
            duration: 1000,
            viewFactor:0.3,   
        })
        ScrollReveal().reveal('.contact-info',{
            origin: 'left',
            distance: '1000px',
            duration: 1000,
            viewFactor:0.6,   
        })
        ScrollReveal().reveal('.cont-img',{
            origin: 'right',
            distance: '1000px',
            duration: 1000,
            viewFactor:0.6,   
        })
        const loader = document.querySelector('.load')
        window.addEventListener('load',()=>{
            loader.classList.add('show')
            document.querySelector('body').classList.toggle('.overflow')
        })



          