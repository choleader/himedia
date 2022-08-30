$(document).ready(function(){
        //여기만<script>
        $('.nav>ul>li').mouseover(function(){
        $('.nav>ul>li>.submenu').stop().slideDown(1000);
        }); 
        $('.nav>ul>li').on('click', function(){
            $('.nav>ul>li>.submenu').stop().slideUp(1000);
        });

        $('.nav>ul>li').mouseleave(function(){
            $('.nav>ul>li>.submenu').stop().slideUp(1000);
        });
        
        });



        