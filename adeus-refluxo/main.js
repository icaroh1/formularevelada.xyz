
var $j = jQuery.noConflict();

$j( document ).ready( function() {

    // fn_countdown();
    fn_location();
    fn_cta();

});

var countdown, countdown_time, countdown_initial;
function fn_countdown()
{
    countdown = setInterval(
        fn_countdown_step, 1000
    );
}

function fn_countdown_step()
{
    if ( !countdown_time )
        fn_countdown_time();

    countdown_time--;

    ct = countdown_time;
    // console.log( ct );

    if ( ct <= 0 ) {
        /*
        clearInterval( countdown );
        $j( '.countdown' ).remove();
        return false; */
        countdown_time = countdown_initial;
    }

    var s = Math.floor( ct % 60 ),
        m = Math.floor( (ct/60) % 60 ),
        h = Math.floor( (ct/(60*60)) % 24 );
        // d = Math.floor( ct/(60*60*24) );

    // $j( '#ct-days' ).text( d );
    $j( '.ct-hours' ).text( fn_pad( h ) );
    $j( '.ct-minutes' ).text( fn_pad( m ) );
    $j( '.ct-seconds' ).text( fn_pad( s ) );
}

function fn_countdown_time()
{
    var t = 0;

    var $el = $j( '.countdown' ).first();

    // t += parseInt( $j( '#ct-days' ).text() )*24*60*60;
    t += parseInt( $el.find( '.ct-hours' ).text() )*60*60;
    t += parseInt( $el.find( '.ct-minutes' ).text() )*60;
    t += parseInt( $el.find( '.ct-seconds' ).text() );

    countdown_time = t;

    if ( !countdown_initial )
        countdown_initial = t+1;
}

function fn_pad( n )
{
    var str = '' + n;
    var pad = '00';
    return pad.substring( 0, pad.length - str.length ) + str;
}

function fn_location()
{
    var url = 'https://wtfismyip.com/json';
    $j.get( url, function( r ){
        if ( typeof r.YourFuckingLocation !== 'string' )
            return false;

        var l = r.YourFuckingLocation.split( ',' );
        $j( '#location' ).text( l[0] );
    });
}

function fn_cta()
{
    setTimeout( function(){
        $j( '.cta-wrap' ).fadeIn();
        fn_countdown();
    }, 500*1000 );
}