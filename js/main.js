let offset;
        let sectionCounter = 0;
        let count = 0;
        
        window.addEventListener("wheel", go);
        
        $(".gnb").click(mm);
        $(".dotmenu").click(mm);
        $(".burger").click(
            function(){
                $(this).toggleClass("on");
                $(".gnb").toggleClass("on");
            }
        );


        function mm(e){
            sectionCounter = $(e.target).parent().index();

            offset = innerHeight * sectionCounter;
            $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

            godotmenu();
            sectionOn();
        }

        function go(e){
            count++;
            let goCount = count%5;

            if(e.wheelDelta>0){
                if(goCount == 4 && sectionCounter > 0){sectionCounter--;}
            }else{
                if(goCount == 4 && sectionCounter < 9){sectionCounter++;}/* sectionCounter는 섹션 갯수 빼기 1 */
            }
            offset = innerHeight * sectionCounter;
            $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

            if(sectionCounter == 0){
                $(".gnb").addClass("first");
                $(".burger").addClass("first");
                $(".dotmenu a").addClass("first");
            }else{
                $(".gnb").removeClass("first");
                $(".dotmenu a").removeClass("first");
                $(".burger").removeClass("first");
            }
            godotmenu();
            sectionOn();
        }
        
        function godotmenu(){
            $(".dotmenu a").removeClass("on");
            $(".dotmenu li").eq(sectionCounter).children("a").addClass("on");
            if(sectionCounter == 0){
                $(".gnb").addClass("first");
                $(".burger").addClass("first");
                $(".dotmenu a").addClass("first");
            }else{
                $(".gnb").removeClass("first");
                $(".dotmenu a").removeClass("first");
                $(".burger").removeClass("first");
            }
            
        }
        function sectionOn(){
            $("section").removeClass("on");
            $("section").eq(sectionCounter).addClass("on");
            if(sectionCounter == 0){
                $(".gnb").addClass("first");
                $(".burger").addClass("first");
                $(".dotmenu a").addClass("first");
            }else{
                $(".gnb").removeClass("first");
                $(".dotmenu a").removeClass("first");
                $(".burger").removeClass("first");
            }
        }


        // 스크롤 막기 시작
        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        $('#element').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
        });
        //스크롤 막기 끝

        $('.vBanner_bxslider').bxSlider({
            slideWidth: 200,
            minSlides: 2,
            maxSlides: 3,
            slideMargin: 200
        });
        
        $('.hBanner_bxslider').bxSlider({
            mode:'vertical',
            minSlides: 3,
            maxSlides: 3,
            slideMargin: 50
        });
        
        // 세로배너 간격 및 스타일 설정

