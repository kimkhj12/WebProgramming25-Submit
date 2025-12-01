document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides a"); // a 태그로 감싼 이미지
  let index = 0;

  function showSlide() {
    slides.style.transform = `translateY(-${index * 310}px)`;
  }

  function nextSlide() {
    index++;
    if (index >= images.length) {
      index = 0; // 처음으로 돌아가기
    }
    showSlide();
  }

  // 3초마다 자동으로 다음 슬라이드
  setInterval(nextSlide, 3000);

});






