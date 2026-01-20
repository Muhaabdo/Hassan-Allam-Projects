// تفعيل مكتبة الأنيميشن عند التمرير
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// تغيير خلفية الناف بار عند التمرير لأسفل
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 0";
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
    } else {
        navbar.style.padding = "15px 0";
        navbar.style.background = "#fff";
    }
});

// معالجة إرسال الفورم (مثال بسيط)
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سيقوم فريق المبيعات بالاتصال بك قريباً.');
    this.reset();
});

// إغلاق القائمة في الموبايل عند الضغط على لينك
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
navLinks.forEach((l) => {
    l.addEventListener('click', () => { 
        if(window.innerWidth < 992) { bsCollapse.toggle(); } 
    });
});
/* slider script*/
const thumbsSwiper = new Swiper('.thumbs-swiper', {
  spaceBetween: 12,
  slidesPerView: 4,
  watchSlidesProgress: true,
});

const mainSwiper = new Swiper('.main-swiper', {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
});

