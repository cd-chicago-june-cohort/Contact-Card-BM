function contactName (first, last) {
    return '<div class="contactBox"><h1 class="header">' + first + '&nbsp' + last + '</h1>' + '<p class="info">Click here for more info</p></div>';
}

$(document).ready(function() {
console.log('NOW READY')
    $('form').submit(function (ithappened) {
      ithappened.preventDefault();
    });

    $('#submit').click( function(){

        var fname = $('#firstName').val();
        var lname = $('#lastName').val();
        var descr = $('#description').val();
         
        $('#rightSide').append(contactName(fname, lname));
        $('.box').val(" ");
        
        $('.info').click(function () {
            $(this).html(descr);
            console.log(descr);
        });

    });
        



    console.log("bottom");


    });
