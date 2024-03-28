// Film listesi gezinme işlevselliği
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  // Pencerenin genişliğine bağlı olarak bir genişlik oranı hesaplanır
  const widthRatio = Math.floor(window.innerWidth / 300);
  let clickCounter = 0;
  const imageCount = movieLists[i].querySelectorAll("img").length;
  const itemWidth = 300; // Öğe genişliği sabit olarak tanımlanmalı

  arrow.addEventListener("click", function () {
    if (imageCount - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      clickCounter++;
      const currentTransformValue = parseInt(
        movieLists[i].style.transform.split("(")[1]
      ); // Mevcut transform değeri alınıyor
      const newTransformValue = currentTransformValue - itemWidth; // Yeni transform değeri hesaplanıyor
      movieLists[i].style.transform = `translateX(${newTransformValue}px)`; // Yeni transform değeri atanıyor
    } else {
      // Eğer tüm öğeler görüntüleniyorsa, sıfıra sıfırlanıyor
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0; // Tıklama sayısı sıfırlanıyor
    }
  });
});

// Karanlık mod işlevselliği
const ball = document.querySelector(".toggle-ball");
ball.addEventListener("click", function () {
  const items = document.querySelectorAll(
    ".container,.navbar,.sidebar,i,.toggle,.toggle-ball,.toggle-ball,.movie-list-filter,.select,.movie-list-title"
  );

  // Topa tıklandığında, karanlık modun etkilediği tüm elementlere ulaşılır
  ball.addEventListener("click", function () {
    items.forEach((item) => {
      item.classList.toggle("active"); // Her bir öğeye sınıf eklenip çıkarılarak karanlık modu açıp kapatır
    });
  });
});
