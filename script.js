var login = () => {
    var one = document.querySelector(".btn1")
    var air = document.querySelector(".btn1 .air")
    one.addEventListener('mouseenter', function () {
        one.style.backgroundColor = 'blue'
        air.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
    })

    one.addEventListener('mouseleave', function () {
        one.style.backgroundColor = '#FFFFFF'
        air.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
    })
}
login()

var fashion = () => {
    var fas3 = document.querySelector(".item3")
    var dow = document.querySelector(".down")
    var time = document.querySelector(".time")

    fas3.addEventListener("mouseenter", function () {
        dow.style.color = "#518FF3"
        time.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
    })
    fas3.addEventListener("mouseleave", function () {
        dow.style.color = "#333333"
        time.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
    })
}
fashion()

var electronics = () =>{
    var fas4 = document.querySelector(".item4")
    var dow1 = document.querySelector(".down1")
    var time1 = document.querySelector(".time1")

    fas4.addEventListener("mouseenter", function () {
        dow1.style.color = "#518FF3"
        time1.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
    })
    fas4.addEventListener("mouseleave", function () {
        dow1.style.color = "#333333"
        time1.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
    })
}
electronics()

var furniture = () =>{
    var fas5 = document.querySelector(".item5")
    var dow2 = document.querySelector(".down2")
    var time2 = document.querySelector(".time2")

    fas5.addEventListener("mouseenter", function () {
        dow2.style.color = "#518FF3"
        time2.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
    })
    fas5.addEventListener("mouseleave", function () {
        dow2.style.color = "#333333"
        time2.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
    })
}
furniture()

var toys = () =>{
    var fas8 = document.querySelector(".item8")
    var dow3 = document.querySelector(".down3")
    var time3 = document.querySelector(".time3")

    fas8.addEventListener("mouseenter", function () {
        dow3.style.color = "#518FF3"
        time3.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
    })
    fas8.addEventListener("mouseleave", function () {
        dow3.style.color = "#333333"
        time3.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
    })
}
toys()

var wheel = () =>{
    var fas9 = document.querySelector(".item9")
    var dow4 = document.querySelector(".down4")
    var time4 = document.querySelector(".time4")

    fas9.addEventListener("mouseenter", function () {
        dow4.style.color = "#518FF3"
        time4.innerHTML = `<i class="ri-arrow-up-s-line"></i>`
    })
    fas9.addEventListener("mouseleave", function () {
        dow4.style.color = "#333333"
        time4.innerHTML = `<i class="ri-arrow-down-s-line"></i>`
    })
}
wheel()

function slide(){
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
    
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}
slide()