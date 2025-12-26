 $(window).bind('scroll',function(e){
     parallaxScroll();
 });
 
 function parallaxScroll(){
    var scrolled = $(window).scrollTop();
 
    $('.sky-layer-1').css('top',(0-(scrolled*.2))+'px');
    $('.sky-layer-2').css('top',(0-(scrolled*.4))+'px');



    $('.sky-layer-3').css('top',(0-(scrolled*.65))+'px');
 
    $('.streak-1').css('top',(90-(scrolled*.9))+'px');
    $('.streak-2').css('top',(190-(scrolled*.75))+'px');
    $('.streak-3').css('top',(260-(scrolled*1.05))+'px');
 
    $('.orb-1').css('top',(420-(scrolled*.8))+'px');
    $('.orb-2').css('top',(260-(scrolled*.6))+'px');


    $('.orb-3').css('top',(520-(scrolled*.45))+'px');
    
    $('.orb-4').css('top',(640-(scrolled*.55))+'px');

    $('.orb-5').css('top',(610-(scrolled*.7))+'px');
 
    $('.planet').css('top',(520-(scrolled*.5))+'px');
 }
