(function(global){
    'use strict';
    
    var slide = {
        init: function(id) {
            this.elem = document.createElement('ul');
            document.getElementById(id).appendChild(this.elem);
            this.curentSlide = 0;
        },

        addSlide: function(src, alt) {
            var li = document.createElement('li');
            var img = document.createElement('img');
            img.setAttribute('src', src);
            img.setAttribute('alt', alt);

            img.style.height = window.innerHeight + "px";
            img.style.width = window.width + "px";

            li.appendChild(img);
            this.elem.appendChild(li);
        },

        nextSlide: function() {
            if (this.curentSlide < this.allSlides.length-1){
            this.allSlides[this.curentSlide].classList.remove('active');
            this.allSlides[this.curentSlide+1].classList.add('active');
            this.curentSlide++;
            } else {
                this.curentSlide = 0;
                this.allSlides[this.allSlides.length-1].classList.remove('active');
                this.allSlides[0].classList.add('active');
            }
        },

        runSlide: function() {
            this.allSlides = document.querySelectorAll('#slide > ul > li')
            this.nextSlide();
            setInterval(this.nextSlide.bind(this), 1500); // первый аргумент функция которая будет запущенна, вторая время в милисек промежуток через который будет запускаться функ
        },

        setSize: function() {
            var imgs = document.querySelectorAll('img');
            for (var i = 0; i< imgs.length; i++) {
                imgs[i].style.height = window.innerHeight + "px";
                imgs[i].style.width = window.innerWidth + "px";
            }
        },

    };

    slide.init('slide');
    slide.addSlide('img/sl1.jpg');
    slide.addSlide('img/sl2.jpg');
    slide.addSlide('img/sl3.jpg');
    slide.runSlide();

    window.addEventListener('resize', slide.setSize);


}())