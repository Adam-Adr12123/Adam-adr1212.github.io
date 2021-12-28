// scroll
$(document).ready(function(){
    
    $("a").on('click', function(event) {
  
      
      if (this.hash !== "") {
        
        event.preventDefault();
  
        
        var hash = this.hash;
  
        
        $('html, body').animate({
          scrollTop: $(hash).offset().top-50
        }, 800, function(){
  
          
          window.location.hash = hash-50;
        });
      } 
    });
});

// header

function myFunction() {
  var x = document.getElementById("my-header");
  if (x.className === "header-list") {
    x.className += " responsive";
  } else {
    x.className = "header-list";
  }
}




// load on

$(window).on('load',function(){
  
  

})




// paralax 

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  // naik turun
  

  $('.profil-kiri').addClass('profil-muncul');
  $('.profil-kanan').addClass('profil-muncul');


  $('.text-hobby').addClass('hobby-muncul');
  $('.foto-hobby').addClass('hobby-muncul');

  $('.jumbotron h2').css({
      'transform' : 'translate(0px, '+ wScroll/8 +'%)'
  })

  $('.hob1').css({
      'transform' : 'translate(0px, '+ (wScroll - 2300)/18 +'%)'
  })

  


  // landing
  // pendidikan
  if(wScroll > $('.pendidikans').offset().top -300){

      $('.pendidikans .pendidikan').each(function(i){
          setTimeout(function(){
              $('.pendidikans .pendidikan').eq(i).addClass('muncul');
          }, 300 * (i+1));
          
      });

       
  }



  
})