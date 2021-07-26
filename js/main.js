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
        clickable: true //클릭한 버튼 위치로 넘어가기
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