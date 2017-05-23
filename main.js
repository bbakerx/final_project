

// for testing keep active - the Cookies.remove('b2wcookie');  from line 5. Comment out after testing and before production upload!!!!!

// Cookies.remove('b2wcookie');

// close doormat
// set cookie
function closeDoorMat() {
  $('#doorMat').animate({
      top: "-100%"
  }, 1000, function(){
      Cookies.set('b2wcookie','doormat', { expires: 7, path: '/' } );
  });
}

//  if there's no doormat cookie
// show doormat
if( Cookies.get('b2wcookie') != "doormat" ) {
  $('#doorMat').delay(2000).animate({
      top: "+0%"
  }, 1000, function(){
    //  done
  });
}

// user quits doormat
// run function
$('#quit').click(function() {
    closeDoorMat();
});

// the user subscribes
// delay, remove doormat
$('#mc-embedded-subscribe').click(function() {
  setTimeout( closeDoorMat() , 3000);
});
