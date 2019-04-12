console.log('')
$(document).ready(function ($) {
  /*
  basic selector
  */
  $('p').css('border-bottom', '1px solid black')
  $('first').css('border-color', 'red')
  $('#special').css('background-color', '#ffcc00')
  $('p.firrst small').css('background-color', 'lightgrey')

  $('.first').html('Hey you <em>pig</em>')
  $('.first').prepend('<h2>welcome</h2>')
  $('.first').after('<small> make webpages interactive</small>')

  $('#yourName').val('bob builder')

  $('a[href="#1"]').css('background-color','tomato')
  $('a[href="#"]').css('color','grey')
  $('a[href="google"]').css('font-weight','bold')
  //$('.card:first').delay(1000).hide("400s").show(800,function () {alert ('we\'re back')
$('.card').animate({borderRadius:'20px'},400)

$('img:first').attr('src','./img/image-5.jpg')

//console.log($('img:first').hasClass('special'))
//$('img').addClass('special')
$('img').toggleClass('special')

$('img').click(function(){

  console.log($(this).attr('src','./img/image-4.jpg'))
  $(this).toggleClass('special')
})


//AJAX

// $('#content').load('./about.html')
// $('#contentNav .nav-link').click(function (e)
// {
// e.preventDefault()
// var page = $(this).attr('href')
// $('#content').load(page)
// })

$('#content').load('./about.html')
$('#contentNav .nav-link').click(function (e)
{
e.preventDefault()
var page = $(this).attr('href')
$('.active').removeClass('active')
$(this).addClass('active')
$('#content').fadeOut(500,function () {
  $('#content').load(page)
})
.fadeIn(500)
})

$.ajax({
  url: 'data/posts.json',
  type:'GET',
  dataType:'json'
})
.done(function(data){
// var posts = JSON.parse(data)
  console.log(data)
var numPosts = data.posts.length
for(var i = 0; i < numPosts; i++){
  var post = '<div class="col-sm-6 p-5"><h3>'
    post +=(i+1)+'.'+data.posts[i].title
    post +='</h3><p>'
    post += data.posts[i].body
    post +='</p></div>'
    $('#posts').append(post)

}
})
})
