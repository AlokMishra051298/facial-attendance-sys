$(document).ready(function()
{
  $('button#teacher_login').click(function(){
    var page = $(this).attr('id');
    // console.log(page);
    // alert(page);
    $('.jumbotron').replaceWith($('.jumbotron').load(page+'/'));
    return false;
  });
  $('button#stud_login').click(function(){
    var page = $(this).attr('id');
    // console.log(page);
    $('.jumbotron').replaceWith($('.jumbotron').load(page+'/'));
    return false;
  });
});
// #window.onload = initAll;
// $('button#change').click(function(){
//     var id = $(this).attr('id');
//     $('#content').load('content/teacher_login.html');
//     console.log("form submitted!")
//     return false;
//
// });
