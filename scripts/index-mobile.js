// Burger Menu
const burgerMenu = document.querySelector(".burger-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


let slideIndex = 0;
showSlides(slideIndex);
function showSlides(para) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
    // Tambahkan event listener pada tombol dot
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function() {
            changeSlide(i);
        });
    }
}

function changeSlide(index) {
slideIndex = index + 1;
showSlides(slideIndex);
}


window.addEventListener('load', function() {
    const container = document.querySelector('.wrapper-all');
    container.classList.add('no-transition'); // Nonaktifkan transisi
    container.style.transform = 'translateX(-50%)'; // Pindah ke halaman kanan
  
    setTimeout(function() {
      container.classList.remove('no-transition'); // Aktifkan kembali transisi setelah halaman dimuat
    }, 10); // Tunggu sejenak sebelum mengaktifkan transisi
  });
  
  let isLeft = false;
  
  document.getElementById('toggleButtonLeft').addEventListener('click', function() {
    const container = document.querySelector('.wrapper-all');
    if (isLeft) {
      container.style.transform = 'translateX(-50%)'; // Pindah ke halaman kanan
    } else {
      container.style.transform = 'translateX(0)'; // Pindah ke halaman kiri
    }
    isLeft = !isLeft;
  });

  document.getElementById('toggleButtonLeftMobile').addEventListener('click', function() {
    const container = document.querySelector('.wrapper-all');
    if (isLeft) {
      container.style.transform = 'translateX(-50%)'; // Pindah ke halaman kanan
    } else {
      container.style.transform = 'translateX(0)'; // Pindah ke halaman kiri
    }
    isLeft = !isLeft;
  });

  document.getElementById('toggleButtonRight').addEventListener('click', function() {
    const container = document.querySelector('.wrapper-all');
    if (isLeft) {
      container.style.transform = 'translateX(-50%)'; // Pindah ke halaman kanan
    } else {
      container.style.transform = 'translateX(0)'; // Pindah ke halaman kiri
    }
    isLeft = !isLeft;
  });

  document.getElementById('toggleButtonRightMobile').addEventListener('click', function() {
    const container = document.querySelector('.wrapper-all');
    if (isLeft) {
      container.style.transform = 'translateX(-50%)'; // Pindah ke halaman kanan
    } else {
      container.style.transform = 'translateX(0)'; // Pindah ke halaman kiri
    }
    isLeft = !isLeft;
  });

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const headerHeight = document.querySelector('header').offsetHeight;
    
    if (window.scrollY >= headerHeight) {
        navbar.classList.toggle('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
    }
    console.log(window.scrollY, headerHeight)
});
