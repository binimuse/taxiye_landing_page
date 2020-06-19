import { from } from 'rxjs';
import { Component, OnInit, forwardRef } from '@angular/core';
declare var jQuery: any;
import { PriceService } from '../service/price.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-vehicle-pricing',
  exportAs: 'slick-carousel',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => VehiclePricingComponent),
    multi: true,
  }],
  templateUrl: './vehicle-pricing.component.html',
  styleUrls: ['./vehicle-pricing.component.css']
})

export class VehiclePricingComponent implements OnInit {
  single_tab: any;
  single_tab1: any;
  single_tab2: any;
  prices: any;
  onDemand: any;
  rental: any;
  Outstation: any;
  constructor(private priceService: PriceService) { }
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  ngOnInit() {
    this.priceService.getprice().subscribe(resp => {
      this.prices = resp;
      this.onDemand =  this.prices.filter(function(price) {
        return price.service_type == 'on_demand';
});
    this.rental =  this.prices.filter(function(price1) {
        return price1.service_type == 'rental';
});
      this.Outstation = this.prices.filter(function (price2) {
        return price2.service_type == 'outstation';
      });
      console.log('hello');
      console.log(this.onDemand);
      console.log(this.rental);
      console.log(this.Outstation);
    });
    $('.slider-single').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      adaptiveHeight: true,
      infinite: false,
      useTransform: true,
      speed: 300,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    $('.slider-nav')
      .on('init', function (event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
      })
      .slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        dots: false,
        focusOnSelect: true,
        infinite: true,

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

    $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
      $('.slider-nav').slick('slickGoTo', currentSlide);
      // tslint:disable-next-line: prefer-const
      let currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.slider-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav').on('click', '.slick-slide', function (event) {
      event.preventDefault();
      const goToSingleSlide = $(this).data('slick-index');

      $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });

    var tabs = document.getElementById('icetab-container').children;
    var tabcontents = document.getElementById('icetab-content').children;

    var myFunction = function () {
      var tabchange = this.mynum;
      for (var int = 0; int < tabcontents.length; int++) {
        tabcontents[int].className = ' tabcontent';
        tabs[int].className = ' icetab';
      }
      tabcontents[tabchange].classList.add('tab-active');
      this.classList.add('current-tab');
    }


    for (var index = 0; index < tabs.length; index++) {
      tabs[index].mynum = index;
      tabs[index].addEventListener('click', myFunction, false);
    }

    $(function () {
      $("#slider").slick({
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,

      });
    });
    jQuery('.slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4
    });
  }
  
  open_tab(tab) {
    this.single_tab = tab;
  }
  open_tab1(tab1) {
    this.single_tab1 = tab1;
  }
  open_tab2(tab2) {
    this.single_tab2 = tab2;
  }

  }

