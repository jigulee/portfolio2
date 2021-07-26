const menu = ["Company", "About", "Information", "News"];
//메뉴에 넣고 싶은 값을 배열로 설정

//스와이퍼 동작하는 기능
const swiper = new Swiper("#wrap", { //2번째 인수값을 객체로 전달
    loop: true, //순환
    slidesPerView: "auto", //지정한 넓이값 적용
    centeredSlides: true, //활성화된 값 가운데로 배치
    spaceBetween: 50, //사이 간격 벌리기
    mousewheel: true, //페이지 마우스휠로 넘기기

    navigation: { //페이지 넘기는 버튼
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-bytton-prev"
    },

    pagination: { //원하는 페이지 이동 버튼 
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true, //클릭한 버튼 위치로 넘어가기
        //Bullet 메뉴 모양을 변경하는 옵션값
        renderBullet: function (index, className) {
            return `<span class="${className}">${menu[index]}</span>`
            //템플릿 리턴으로 만들어진 태그의 구조 지정하기(span태그)
            //패널의 갯수만큼 index값 카운터됨 (반복되는 구조)
            //${menu[index]} menu라는 배열의 index번째 요소를 불러오기
        }
    },
    /*
    effect: "coverflow",
    coverflowEffect: { //coverflow 전용 옵션값
        rotate: 50, //회전
        stretch: 0, //밀어내기(-값)
        depth: 400, //원근감
        slideShadows: false //그림자 없애기
    }
    */
});

//Dom Caching
const bgs = document.querySelectorAll(".bg li");
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const navi = document.querySelectorAll(".swiper-pagination span");
//여러개 있으면 querySelectorAll

//next클릭 이벤트 호출
next.addEventListener("click", activation);
//prev클릭 이벤트 호출
prev.addEventListener("click", activation);
//휠 이벤트 호출
window.addEventListener("mousewheel", activation);
//스와이퍼 이벤트 호출
swiper.on("slideChangeTransitionEnd", activation);
//모션이 끝나는 순간 이벤트 발생 -> "slideChangeTransitionEnd"

//스와이퍼 span클릭시 이벤트 호출
for (let el of navi) { //반복도는 el에 클릭이벤트 연결
    el.addEventListener("click", e => {
        //재클릭 방지
        const isOn = e.currentTarget.classList.contains("swiper-pagination-bullet-active");
        //특정 요소에 특정 클래스 확인하는 것 .classList.contains ("활성화된 패널")
        if (isOn) return; // true ->이벤트x
        swiper.on("slideChangeTransitionEnd", activation); //fale ->모션 동작
    })
};

//이벤트 발생시 activation 함수만 호출
function activation() {
    let item = document.querySelector(".swiper-slide-active"); //활성화된 패널
    let i = item.getAttribute("data-swiper-slide-index"); //순서값 클래스명

    //모든 bg만큼 반복을 돌면서 클래스 "on" 없애기
    for (let el of bgs) {
        el.classList.remove("on");
    }
    bgs[i].classList.add("on"); //순번에 해당하는 bg에만 "on"  배경 바꾸기
};