
$(function(){
    
    if($(window).width()>768){
        skrollr.init({
            forceHeight: false
        });
    }else{
    }

    $(window).scroll(function(){       //当用户滚动指定元素时，会发生scroll事件
        scrollT=$(window).scrollTop()  //scrollTop 获取匹配元素相对滚动条顶部的偏移
        if(scrollT>0){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    })

    $('.search_btn a').click(function(){
        if($('.header_search').hasClass('into')){
            $('.body_bg').removeClass('into')
            $('.header_search').removeClass('into')
            $('html').css('overflow-y','auto')
        }else{
            $('html').css('overflow-y','hidden')
            $('.body_bg').addClass('into')
            $('.header_search').addClass('into')
        }
    })

    $('.body_bg,.headerSearch_cot input[type="button"]').click(function(){
        $('.body_bg').removeClass('into')
        $('.header_search').removeClass('into')
        $('html').css('overflow-y','auto')
    })
    
})