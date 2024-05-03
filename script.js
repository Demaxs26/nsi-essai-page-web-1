
function f_rotate(){
  var actual_opacity = document.getElementById("nav")
  if (actual_opacity.style.opacity == 0){
    var opa = "1";
    var rotate = "rotate(0deg)";
  }

  else if(actual_opacity.style.opacity == 1){
    var opa = "0";
    var rotate = "rotate(180deg)";

  }
  document.getElementById("nav").style.opacity = opa;
  document.getElementById("logo-ensemble").style.transform = rotate;
    
  
}
