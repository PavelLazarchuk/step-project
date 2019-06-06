window.onload = function () {
    //section-servise "Our Services" tabs
    $('.section-servise-tabs').on('click', function (event) { 
        let dataTab = event.target.getAttribute('data-tab');
        $('.section-servise-tabs').each(function () {
            $(this).removeClass('section-servise-tabs-active');
        });
        $(event.target).addClass('section-servise-tabs-active');
        $('.section-servise-content').each(function (index) {
            if (index == dataTab) {
                $(this).css("display", "block");
            }
            else {
                $(this).css("display", "none");
            }
        });
    });

    //section-amazingwork filter
    $('.section-amazingwork-filter').on('click', function (event) {
        let dataTab = event.target.getAttribute('data-filter');
        $('.section-amazingwork-filter').each(function () {
            $(this).removeClass('section-amazingwork-filter-active');
        });
        $(event.target).addClass('section-amazingwork-filter-active');
        $(".section-amazingwork-animation").each(function () {
            $(this).css('display', "none");
        });

        if(dataTab == "all") {
            $(".section-amazingwork-animation").each(function () {
                $(this).css('display', "inline-block");
            });
        }
        else if (dataTab == "graphic") {
            $(".section-amazingwork-animation").each(function () {
                if(this.getAttribute('data-filter') == "graphic") {
                    $(this).css('display', "inline-block");
                }
            });
        }
        else if (dataTab == "web") {
            $(".section-amazingwork-animation").each(function () {
                if(this.getAttribute('data-filter') == "web") {
                    $(this).css('display', "inline-block");
                }
            });
        }
        else if (dataTab == "landing") {
            $(".section-amazingwork-animation").each(function () {
                if(this.getAttribute('data-filter') == "landing") {
                    $(this).css('display', "inline-block");
                }
            });
        }
        else {
            $(".section-amazingwork-animation").each(function () {
                if(this.getAttribute('data-filter') == "word") {
                    $(this).css('display', "inline-block");
                }
            });
        }
    });

    //section-amazingwork button add image 
    let count = 0;
    document.getElementById('section-amazingwork-load').onclick = function () {
        document.getElementById('load-spinner').style.display = "block";
        setTimeout(function() {
            document.getElementById('load-spinner').style.display = "none";
            if (count == 0) {
                let linkImage1 = ["img/graphicdesign/graphic-design1.jpg", "img/graphicdesign/graphic-design2.jpg",
                    "img/graphicdesign/graphic-design3.jpg", "img/graphicdesign/graphic-design4.jpg",
                    "img/graphicdesign/graphic-design5.jpg", "img/graphicdesign/graphic-design6.jpg",
                    "img/graphicdesign/graphic-design7.jpg", "img/graphicdesign/graphic-design8.jpg",
                    "img/graphicdesign/graphic-design9.jpg", "img/graphicdesign/graphic-design10.jpg",
                    "img/graphicdesign/graphic-design11.jpg", "img/graphicdesign/graphic-design12.jpg"];
                let newDiv = document.createElement('div');
                for (let i = 0; i < 12; i++) {
                    newDiv.innerHTML += `<div class="section-amazingwork-animation" data-filter = "landing"><img src=${linkImage1[i]}>
                <div class="section-amazingwork-anim"><div class="section-amazingwork-anim-range1"><img src="img/webdesign/forma_1_5.png" alt=""></div>
                <div class="section-amazingwork-anim-range2"><i class="fas fa-search anim"></i></div><div>CREATIVE DESIGN</div>
                <div class="section-amazingwork-anim-text">Web Design</div></div></div>`;
                }
                document.getElementById('section-amazingwork-img').appendChild(newDiv);
            }
            else {
                let linkImage2 = ["img/webdesign/web-design1.jpg", "img/webdesign/web-design2.jpg",
                    "img/webdesign/web-design3.jpg", "img/webdesign/web-design4.jpg",
                    "img/webdesign/web-design5.jpg", "img/webdesign/web-design6.jpg",
                    "img/webdesign/web-design7.jpg", "img/wordpress/wordpress1.jpg",
                    "img/wordpress/wordpress2.jpg", "img/wordpress/wordpress3.jpg",
                    "img/wordpress/wordpress4.jpg", "img/wordpress/wordpress5.jpg"];
                let newDiv = document.createElement('div');
                for (let i = 0; i < 12; i++) {
                    newDiv.innerHTML += `<div class="section-amazingwork-animation" data-filter = "word"><img src=${linkImage2[i]}>
                <div class="section-amazingwork-anim"><div class="section-amazingwork-anim-range1"><img src="img/webdesign/forma_1_5.png" alt=""></div>
                <div class="section-amazingwork-anim-range2"><i class="fas fa-search anim"></i></div><div>CREATIVE DESIGN</div>
                <div class="section-amazingwork-anim-text">Web Design</div></div></div>`;
                }
                document.getElementById('section-amazingwork-img').appendChild(newDiv);
            }
            if (count == 1) {
                document.getElementById('section-amazingwork-load').remove();
            }
            count++;
        }, 2000);
    } 

    //section-feedback
    $(function slider () {
        $("#feedback-indicators .feedback-indicators-img:first-child").addClass("active").animate({'bottom': +20 +'px'}, 400);
    
        function currentSlide(target) {
          $("#feedback-indicators .feedback-indicators-img").removeClass("active").eq(target).addClass("active");
            $("#feedback-indicators .feedback-indicators-img.active").animate({'bottom': +20 +'px'}, 750);
            $("#feedback-slider .feedback-img-item").animate({'bottom': +320 * target + 'px'}, 400);
        }
    
        $("#feedback-indicators li").click(function() {
            var target = $(this).index();
            currentSlide(target);
        });
    
        $("#feedback-prev").click(function() {
            let target = $("#feedback-indicators li.active").index();
            if (target == 0) {
                target = $("#feedback-indicators li").length;
            }
            target = target - 1;
            currentSlide(target);
        });

        $("#feedback-next").click(function() {
            let target = $("#feedback-indicators li.active").index();
            if (target == $("#feedback-indicators li").length - 1) {
                target = -1;
            }
            target = target + 1;
            currentSlide(target);
        });
    });

    //section-Gallery of best images Masonry
    $('#grid-masonry').masonry({
        columnWidth: 175,
        itemSelector: '.grid-item',
        gutter: 20
    });
    let count2 = 0;

    function getItemElement() {
        let elem = document.createElement('div');
        let imageNum = Math.floor((Math.random() * 6) + 1);
        elem.innerHTML = `<img src="img/gallery/post-${imageNum}-img.png"><div class="section-grid-hover">
        <i class="fas fa-search" id="search"></i><i class="fas fa-expand-arrows-alt" id="arrows"></i></div>`;
        elem.className = "section-grid-img grid-item";
        return elem;
    }
    function addGalleryImages() {
        count2++;
        if (count2 === 2) {
            document.getElementById('section-gallery-load').remove();
        }
        let elems = [getItemElement(), getItemElement(), getItemElement()];
        let $elems = $(elems);
        
        $('#grid-masonry').append($elems).masonry('appended', $elems);
      
    }
    document.getElementById('section-gallery-load').onclick = function () {
        document.getElementById('load-spinner2').style.display = "block";
        setTimeout(function() {
            document.getElementById('load-spinner2').style.display = "none";
            addGalleryImages(); 
        }, 2000);
    }
};