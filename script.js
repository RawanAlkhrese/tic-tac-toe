//intilize variables 
var score_one = 0;
var score_two = 0;
var player= "one";

//functions 

//---------------------------------------------- check when player 1 wins ----------------------------------------------
function oneWinner(){
    
//              ----------------------- by rows ----------------------- 
    
//             top row 
        if($(".game div div.top-left,  .game div div.top-middle, .game div div.top-right").children(".x").length===3){
//            increase score 
            score_one ++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playerone h4').css("display","block");
//            zoom in 
            $(".game div div.top-left,  .game div div.top-middle, .game div div.top-right").children(".x").css("filter","brightness(80%)");
//            for check 
            console.log("x won");
    
        }
    
//              middle row                             
        else if($(".game div div.middle-left,  .game div div.middle-middle, .game div div.middle-right").children(".x").length===3){
//            increase score 
            score_one ++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playerone h4').css("display","block");
//            zoom in 
            $(".game div div.middle-left,  .game div div.middle-middle, .game div div.middle-right").children(".x").css("filter","brightness(80%)");
//            for check 
            console.log("x won");
        }
    
//             bottom row 
        else if($(".game div div.bottom-left,  .game div div.bottom-middle, .game div div.bottom-right").children(".x").length===3){
//            increase score 
            score_one ++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playerone h4').css("display","block");
//            zoom in 
            $(".game div div.bottom-left,  .game div div.bottom-middle, .game div div.bottom-right").children(".x").css("filter","brightness(80%)");
//            for check 
            console.log("x won");
        }
        
//              ----------------------- cross ----------------------- 
//             left to right 
       else if($(".game div div.top-left,  .game div div.middle-middle, .game div div.bottom-right").children(".x").length===3){
  //           increase score 
            score_one ++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playerone h4').css("display","block");
//            zoom in 
            $(".game div div.top-left,  .game div div.middle-middle, .game div div.bottom-right").children(".x").css("filter","brightness(80%)");
//            for check 
            console.log("x won");
        } 
//             right to left 
                                     
       else if($(".game div div.top-right,  .game div div.middle-middle, .game div div.bottom-left").children(".x").length===3){
//            increase score 
            score_one ++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playerone h4').css("display","block");
//            zoom in 
            $(".game div div.top-right,  .game div div.middle-middle, .game div div.bottom-left").children(".x").css("filter","brightness(80%)");
//            for check 
            console.log("x won");
        }
                                     
//              ----------------------- by columns ----------------------- 
//             first col                                     
       else if($(".game div div.top-left,  .game div div.middle-left, .game div div.bottom-left").children(".x").length===3){
//            increase score 
            score_one ++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playerone h4').css("display","block");
//            zoom in 
            $(".game div div.top-left,  .game div div.middle-left, .game div div.bottom-left").children(".x").css("filter","brightness(80%)");
//            for check 
            console.log("x won");
        }
//             sec col                                     

        else if($(".game div div.top-middle,  .game div div.middle-middle, .game div div.bottom-middle").children(".x").length===3){
 //            increase score 
            score_one ++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playerone h4').css("display","block");
//            zoom in 
            $(".game div div.top-middle,  .game div div.middle-middle, .game div div.bottom-middle").children(".x").css("filter","brightness(80%)");
//            for check 
            console.log("x won");
        }
//             third col                                     
        
         else if($(".game div div.top-right,  .game div div.middle-right, .game div div.bottom-right").children(".x").length===3){
//            increase score 
            score_one ++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playerone h4').css("display","block");
//            zoom in 
            $(".game div div.top-right,  .game div div.middle-right, .game div div.bottom-right").children(".x").css("filter","brightness(80%)");
//            for check 
            console.log("x won");
        }
//    update score 
    
    $('.playerone span.one-score').text(score_one);
    
}

//---------------------------------------------- check when player 2 wins ----------------------------------------------

function twoWinner(){
    
//              ----------------------- by rows ----------------------- 
//             top row                            
        if($(".game div div.top-left,  .game div div.top-middle, .game div div.top-right").children(".o").length===3){
//            increase score 
            score_two++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playertwo h4').css("display","block");
//            zoom in 
            $(".game div div.top-left,  .game div div.top-middle, .game div div.top-right").children(".o").css("filter","brightness(80%)");
//            for check 
            console.log("o won");
        }
//              middle row                     
        else if($(".game div div.middle-left,  .game div div.middle-middle, .game div div.middle-right").children(".o").length===3){
 //            increase score 
            score_two++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playertwo h4').css("display","block");
//            zoom in 
            $(".game div div.middle-left,  .game div div.middle-middle, .game div div.middle-right").children(".o").css("filter","brightness(80%)");
//            for check 
            console.log("o won");
        }
        
//              bottom row 
        else if($(".game div div.bottom-left,  .game div div.bottom-middle, .game div div.bottom-right").children(".o").length===3){
//            increase score 
            score_two++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playertwo h4').css("display","block");
//            zoom in 
            $(".game div div.bottom-left,  .game div div.bottom-middle, .game div div.bottom-right").children(".o").css("filter","brightness(80%)");
//            for check 
            console.log("o won");
        }
        
//              ----------------------- cross ----------------------- 
//              left to right 
       else if($(".game div div.top-left,  .game div div.middle-middle, .game div div.bottom-right").children(".o").length===3){
//            increase score 
            score_two++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playertwo h4').css("display","block");
//            zoom in 
            $(".game div div.top-left,  .game div div.middle-middle, .game div div.bottom-right").children(".o").css("filter","brightness(80%)");
//            for check 
            console.log("o won");
        }    
//              right to left  
                       
       else if($(".game div div.top-right,  .game div div.middle-middle, .game div div.bottom-left").children(".o").length===3){
//            increase score 
            score_two++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playertwo h4').css("display","block");
//            zoom in 
            $(".game div div.top-right,  .game div div.middle-middle, .game div div.bottom-left").children(".o").css("filter","brightness(80%)");
//            for check 
            console.log("o won");
        }
                                     
//              ----------------------- by columns -----------------------
    
//             first col                              
       else if($(".game div div.top-left,  .game div div.middle-left, .game div div.bottom-left").children(".o").length===3){
//            increase score 
            score_two++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playertwo h4').css("display","block");
//            zoom in 
            $(".game div div.top-left,  .game div div.middle-left, .game div div.bottom-left").children(".o").css("filter","brightness(80%)");
//            for check 
            console.log("o won");
        }
//             sec col  
        else if($(".game div div.top-middle,  .game div div.middle-middle, .game div div.bottom-middle").children(".o").length===3){
//            increase score 
            score_two++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playertwo h4').css("display","block");
//            zoom in 
            $(".game div div.top-middle,  .game div div.middle-middle, .game div div.bottom-middle").children(".o").css("filter","brightness(80%)");
//            for check 
            console.log("o won");
        }
//             third col  
         else if($(".game div div.top-middle,  .game div div.middle-middle, .game div div.bottom-middle").children(".o").length===3){
//            increase score 
            score_two++;
//            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
//            when it won the game stop 
            $('.container, .game div div').css("cursor","not-allowed");
//            display WINNER 
            $('.container .playertwo h4').css("display","block");
//            zoom in 
            $(".game div div.top-middle,  .game div div.middle-middle, .game div div.bottom-middle").children(".o").css("filter","brightness(80%)");
//            for check 
            console.log("o won");
        }
//    update scre 
    $('.playertwo span.two-score').text(score_two);
    
}

//---------------------------------------------- restart button ----------------------------------------------

function restart(){
    
//    clear scores 
    score_one = 0;
    score_two = 0;
    $('.playerone span.one-score').text(score_one);
    $('.playertwo span.two-score').text(score_two);
//    remove imgs x & o 
    $('.game div div').children('img').remove();
//    player 1 turn 
    player = "one";
//   active player 1 and  disable player 2
    $(".container .playertwo h2 , .container .playertwo img").css({"opacity":".7", "transform": "scale(.7,.7)"});
    $(".container .playerone h2 , .container .playerone img").css({"opacity":"1", "transform": "scale(1,1)"});
//    hide WINNER 
    $('.container .playerone h4').css("display","none");
    $('.container .playertwo h4').css("display","none");
//    activate game 
    $('.container').css("cursor","unset");
    $('.game div div').css("cursor","pointer")
//    hide equivalent
    $('body span.equivalent').css("display","none");
    
}

function playAgain(){
    
//    player 1 turn 
    player = "one";
//    remove imgs x & o 
    $('.game div div').children('img').remove();
//   active player 1 and  disable player 2
    $(".container .playertwo h2 , .container .playertwo img").css({"opacity":".7", "transform": "scale(.7,.7)"});
    $(".container .playerone h2 , .container .playerone img").css({"opacity":"1", "transform": "scale(1,1)"});
//    hide WINNER 
    $('.container .playerone h4').css("display","none");
    $('.container .playertwo h4').css("display","none");
//    activate game 
    $('.container').css("cursor","unset");
    $('.game div div').css("cursor","pointer");
//    hide equivalent
    $('body span.equivalent').css("display","none");
    
}


//main code
//---------------------------------------------- main code ----------------------------------------------

//when html done redending , start implement this
$(function(){
//    disable player 2
    $(".container .playertwo h2 , .container .playertwo img").css({"opacity":".7", "transform": "scale(.7,.7)"});
//    when start playing 
    $(".game div div").click(function () {
//        check if the game is over 
        if ($('.container').css('cursor')==='not-allowed'){
                alert("The Game is Over");
            }

        else {
    //    check if the cell is empty 
                if( $(this).children('img').length === 0){
    //    check the player so we display the right img 
                    if (player === 'one') { 
    //    append > add component in the current one 
                        $(this).append("<img class='x' src= 'imgs/x.PNG' height='"+$(this).css('height')+"' width='"+$(this).css('width')+"'>");
    //         after player 1 "x" finishes , disable it and active player 2 "o"                            
                        $(".container .playerone h2 , .container .playerone img").css({"opacity":".7", "transform": "scale(.8,.8)"});
                        $(".container .playertwo h2 , .container .playertwo img").css({"opacity":"1", "transform": "scale(1,1)"});
                        player = "two";                                                    
    //        check if player 1 won  after this click                        
                        oneWinner();

                        }
    //         if it is player 2 
                    else {
                         $(this).append("<img class='o' src= 'imgs/o.PNG' height='"+$(this).css('height')+"' width='"+$(this).css('width')+"'>"); 
    //         after player 2 "o" finishes , disable it and active player 1 "x"  
                         $(".container .playertwo h2 , .container .playertwo img").css({"opacity":".7", "transform": "scale(.8,.8)"});
                        $(".container .playerone h2 , .container .playerone img").css({"opacity":"1", "transform": "scale(1,1)"});
                        player = "one";

     //        check if player 1 won  after this click                                  
                        twoWinner();

                        } 
                    }
    //        if the cell is not empty , change the style of cursor 
             else {

                $(this).css("cursor","not-allowed");
             }
        }

        if($(".game div div").children("img").length === 9 && $('.container .playerone h4').css("display")=== "none" && $('.container .playertwo h4').css("display")==="none"){
            
            $("body span.equivalent").fadeIn(500);
            //            remove disabled proprity from html button
            $('.disabled').prop('disabled', false);
//            remove the class , so the style will be removed also
            $('.disabled').removeClass('disabled');
        }                     
    });
    
    //        when click restart        

    $('.buttons .restart').click(function(){
        
        restart();
          
    });
    
    //        when click play again         
    $('.buttons .again').click(function(){
        
        playAgain();
        
    });
    
    
});


