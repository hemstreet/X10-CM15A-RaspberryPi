(function($) {

    $('a').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');

        $.get( href, function( data ) {
            alert( "Load was performed." );
        });
    });
})(jQuery);