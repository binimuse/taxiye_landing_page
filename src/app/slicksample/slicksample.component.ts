import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-slicksample',
  templateUrl: './slicksample.component.html',
  styleUrls: ['./slicksample.component.css']
})
export class SlicksampleComponent implements OnInit {

  constructor() {
    
  }
   ngOnInit() {
$(".slider-single").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 400,
  cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
});

$(".slider-nav")
  .on("init", function (event, slick) {
    $(".slider-nav .slick-slide.slick-current").addClass("is-active");
  })
  .slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    focusOnSelect: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

$(".slider-single").on("afterChange", function (event, slick, currentSlide) {
  $(".slider-nav").slick("slickGoTo", currentSlide);
  var currrentNavSlideElem =
    '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $(".slider-nav .slick-slide.is-active").removeClass("is-active");
  $(currrentNavSlideElem).addClass("is-active");
});

$(".slider-nav").on("click", ".slick-slide", function (event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data("slick-index");

  $(".slider-single").slick("slickGoTo", goToSingleSlide);
});
}

}