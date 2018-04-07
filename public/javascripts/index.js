$(function(){
    $(".sidebar-collapse #main-menu >li").click(function(e){
      e.preventDefault();
      
      $(this).find('.first_nav').addClass('active-menu').find('span').removeClass('fa-chevron-right').delay('slow')
      .addClass('fa-chevron-down').parent().siblings().slideDown('1300').parent().siblings().find('a').removeClass('active-menu').find('span')
      .removeClass('fa-chevron-down').addClass('fa-chevron-right').parent().siblings().hide()

      $(".sidebar-collapse #main-menu >li").eq(0).click(function(){
       e.preventDefault();
      	$(this).siblings().find('a').removeClass('active-menu').find('span').removeClass('fa-chevron-down').addClass('fa-chevron-right').parent()
      	.siblings().hide()
      })
    })
})