var slides = document.querySelectorAll("#slides > img");//여러개 가져옴
var prev = document.getElementById("prev");
var next = document.getElementById("next");//맞춤법 실수로 애먹음

var current = 1;

showSlides(current); //현재 이미지 표시
prev.onclick = prevSlide; //이전 이미지 표시
next.onclick = nextSlide; //다음 이미지 표시

function showSlides(n) {
    for(var i = 0;i<slides.length;i++){  //배열의 처음부터 끝까지 반복
        slides[i].style.display = "none"; //모든 이미지를 화면에서 감춤
    }
    /*slides[n].style.display = "block";*/ //n번째 이미지만 표시
    current++;//다음 페이지로 이동
    if(current > slides.length) //마지막이라면
        current=1;
    slides[current-1].style.display = "block";
    setTimeout(showSlides,10000);
}

/*
function prevSlide(){  //이전으로
    if(current > 0) current -= 1;
    else current = slides.length-1;
    showSlides(current);
}

function nextSlide() {
    if (current < slides.length - 1) current += 1;
    else
      current = 0;
    showSlides(current);  
  }
  */