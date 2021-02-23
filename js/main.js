
$(document).ready(function(){



   
    

    
 $('#a-1').on('click',function(e){
     e.preventDefault()
     $('#txt-1').css('display','flex')
     $('#txt-2').css('display','none')
     $('#txt-3').css('display', 'none')

 })

 

 



 $('#a-2').on('click',function(e){
    e.preventDefault()
    $('#txt-1').css('display','none')
    $('#txt-2').css('display','flex')
    $('#txt-3').css('display', 'none')
    
 })

 $('#a-3').on('click',function(e){
    e.preventDefault()
    $('#txt-1').css('display','none')
    $('#txt-2').css('display','none')
    $('#txt-3').css('display', 'flex')

 })


 $('#barras').on('click', function(){
    $('.menu-movil-block').css( {
       'position':'absolute',
       'top':'0',
       'right': '0'
    })
    return;
    

 })

 $('#close').on('click', function(e){

   $('.menu-movil-block').css( {
      'position':'absolute',
      'top':'0',
      'right': '-375px'
   })
   e.preventDefault()
   

})



 
   
})



