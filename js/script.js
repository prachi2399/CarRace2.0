// script.js

$(function() {
     
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });
    
    $('#box').click(function() {
        alert('you just clicked the box');
    });
    
    $("input").blur(function() {
        
        if( $(this).val() == "" ) {
            $(this).css('border','solid 1px red');
            $('#box').text('Forgot to add text?');
        }
        
    });
    
    $("input").keydown(function() {
        
        if( $(this).val() !== "" ) {
            $(this).css('border','solid 1px #777');
            $('#box').text('Thanks for that!');
        }
        
    });
    
    $('#box').hover(function() {
        
        $(this).text('you hovered in!');
        
    }, function() {
        
        $(this).text('you hovered out!');
        
    });
    
    
    $('#go').click(function() {
        
        
        function checkIfComplete() {
            
            if( isComplete == false ) {
                isComplete = true;
            } else {
                place = 'second';
            }
            
        }
        
        var carWidth = $('#car1').width();
        
        var raceTrackWidth = $(window).width() - carWidth;
        
        
        var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
        var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );
        
        var isComplete = false;
        
        var place = 'first';
        
        $('#car1').animate({
        
            
            left: raceTrackWidth
            
        }, raceTime1, function() {
        
            checkIfComplete();
            
            $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
            
        });
       
        $('#car2').animate({
        
            left: raceTrackWidth
            
        }, raceTime2, function() {
            
            checkIfComplete();
            
            $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
            
        });
        
    });
    
    $('#reset').click(function() {
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    });

    
});
    








