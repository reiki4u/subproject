$(function() {
                $('#navigatione a').stop().animate({'marginLeft':'-85px'},300);
 
                $('#navigatione > li').hover(
                    function () {
                        $('a',$(this)).stop().animate({'marginLeft':'-2px'},1800);
                    },
                    function () {
                        $('a',$(this)).stop().animate({'marginLeft':'-85px'},200);
                    }
                );
            });