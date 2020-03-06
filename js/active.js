$(document).ready(function (){
  /*导航条点击变色*/
  $(".navtypeList").each(function(index){
  $(this).click(function(){ 
  $(".navtypeList").removeClass("active");
  $(".navtypeList").eq(index).addClass("active");
  });
  });
  /*三级菜单*/
  $(".shopClass_item").each(function(index){
  $(this).click(function(){ 
  $(".shopClass_item").removeClass("shopClass_active");
  $(".shopClass_item").eq(index).addClass("shopClass_active");
  $(".shopClass_list").removeClass("hide");
  $(".shopClass_list").eq(index).addClass("hide");
  });
  });
 });
/*二级菜单*/
$(function xiala_menu(){
     var tree1 = $(".shopClass").find("h3");
     var tree_one = $(".shopClass").find(".shopClass_show");
     tree1.each(function(){
         $(this).click(function(){
             $(this).next().slideToggle();
        })
     })
})

