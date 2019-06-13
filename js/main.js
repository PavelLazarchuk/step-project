window.onload = function () {
    //news-link window.onload
    let element = ["img/news/layer_49.jpg", "img/news/layer_50.jpg", "img/news/layer_51.jpg", 
        "img/news/layer_52.jpg", "img/news/layer_53.jpg", "img/news/layer_54.jpg", 
        "img/news/layer_55.jpg", "img/news/layer_56.jpg"];
    function getItemElem(arr) {
        $(arr).each(function(){
            let newA = document.createElement('a');
            newA.innerHTML = ` <img src="${this}" alt=""><div class="news-link-time">12<p>Feb</p></div>
                <div class="newc-link-text">Amazing Blog Post</div><span class="news-link-admin">By admin</span><span class="news-link-comment">2 comment</span>`;
            newA.href = "#";
            newA.classList.add('news-link');
            $('.news-grid').append(newA);
        });
    }
    getItemElem(element);



    //servise "Our Services" tabs
    $('.servise-tabs').on('click', function (event) {
        let dataTab = event.target.getAttribute('data-tab');
        $('.servise-tabs').each(function () {
            $(this).removeClass('servise-tabs-active');
        });
        $(event.target).addClass('servise-tabs-active');
        $('.servise-content').each(function (index) {
            if (index == dataTab) {
                $(this).css("display", "block");
            }
            else {
                $(this).css("display", "none");
            }
        });
    });

    //amazingwork filter
    $('.amazingwork-filter').on('click', function (event) {
        $('.amazingwork-filter').each(function () {
            $(this).removeClass('amazingwork-filter-active');
        });
        $(event.target).addClass('amazingwork-filter-active');
        let dataTab = event.target.getAttribute('data-filter');
        filter(dataTab);
    });
    function filter(dataTab) {
        $(".amazingwork-animation").each(function () {
            $(this).css('display', "none");
        });
        switch (dataTab) {
            case "all":
                $(".amazingwork-animation").each(function () {
                    $(this).css('display', "inline-block");
                });
                break;
            case "graphic":
                $(".amazingwork-animation").each(function () {
                    if (this.getAttribute('data-filter') == "graphic") {
                        $(this).css('display', "inline-block");
                    }
                });
                break;
            case "web":
                $(".amazingwork-animation").each(function () {
                    if (this.getAttribute('data-filter') == "web") {
                        $(this).css('display', "inline-block");
                    }
                });
                break;
            case "landing":
                $(".amazingwork-animation").each(function () {
                    if (this.getAttribute('data-filter') == "landing") {
                        $(this).css('display', "inline-block");
                    }
                });
                break;
            case "word":
                $(".amazingwork-animation").each(function () {
                    if (this.getAttribute('data-filter') == "word") {
                        $(this).css('display', "inline-block");
                    }
                });
                break;
        }
    }

    //amazingwork button add image 
    let count = 0;
    document.getElementById('amazingwork-load').onclick = function () {
        document.getElementById('load-spinner').style.display = "block";
        setTimeout(function () {
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
                    newDiv.innerHTML += `<div class="amazingwork-animation" data-filter = "landing"><img src=${linkImage1[i]}>
                <div class="amazingwork-anim"><div class="amazingwork-anim-range1"><img src="img/webdesign/forma_1_5.png" alt=""></div>
                <div class="amazingwork-anim-range2"><i class="fas fa-search anim"></i></div><div>CREATIVE DESIGN</div>
                <div class="amazingwork-anim-text">Web Design</div></div></div>`;
                }
                document.getElementById('amazingwork-img').appendChild(newDiv);
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
                    newDiv.innerHTML += `<div class="amazingwork-animation" data-filter = "word"><img src=${linkImage2[i]}>
                <div class="amazingwork-anim"><div class="amazingwork-anim-range1"><img src="img/webdesign/forma_1_5.png" alt=""></div>
                <div class="amazingwork-anim-range2"><i class="fas fa-search anim"></i></div><div>CREATIVE DESIGN</div>
                <div class="amazingwork-anim-text">Web Design</div></div></div>`;
                }
                document.getElementById('amazingwork-img').appendChild(newDiv);
            }
            if (count == 1) {
                document.getElementById('amazingwork-load').remove();
            }
            count++;
            $(".amazingwork-filter").each(function () {
                if (this.classList.contains("amazingwork-filter-active")) {
                    let dataTab = this.getAttribute('data-filter');
                    filter(dataTab);
                }
            });
        }, 2000);
    }

    //section-feedback
    $(function slider() {
        $("#feedback-indicators .feedback-indicators-img:first-child").addClass("active").animate({ 'bottom': +20 + 'px' }, 400);

        function currentSlide(target) {
            $("#feedback-indicators .feedback-indicators-img").removeClass("active").eq(target).addClass("active");
            $("#feedback-indicators .feedback-indicators-img.active").animate({ 'bottom': +20 + 'px' }, 750);
            $("#feedback-slider .feedback-img-item").animate({ 'right': +1160 * target + 'px' }, 400);
        }

        $("#feedback-indicators li").click(function () {
            var target = $(this).index();
            currentSlide(target);
        });

        $("#feedback-prev").click(function () {
            let target = $("#feedback-indicators li.active").index();
            if (target == 0) {
                target = $("#feedback-indicators li").length;
            }
            target = target - 1;
            currentSlide(target);
        });

        $("#feedback-next").click(function () {
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
        elem.innerHTML = `<img src="img/gallery/post-${imageNum}-img.png"><div class="grid-hover">
        <i class="fas fa-search" id="search"></i><i class="fas fa-expand-arrows-alt" id="arrows"></i></div>`;
        elem.className = "grid-img grid-item";
        return elem;
    }
    function addGalleryImages() {
        count2++;
        if (count2 === 2) {
            document.getElementById('gallery-load').remove();
        }
        let elems = [getItemElement(), getItemElement(), getItemElement()];
        let $elems = $(elems);

        $('#grid-masonry').append($elems).masonry('appended', $elems);

    }
    document.getElementById('gallery-load').onclick = function () {
        document.getElementById('load-spinner2').style.display = "block";
        setTimeout(function () {
            document.getElementById('load-spinner2').style.display = "none";
            addGalleryImages();
        }, 2000);
    }
};