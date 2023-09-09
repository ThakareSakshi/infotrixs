
function changebg(){
  var nav=document.getElementById('bg-nav')
  var scrollValue=window.scrollY;
  console.log(scrollValue);
  if(scrollValue < 150){
    nav.classList.remove('bg-nav-color');
  }else{
    nav.classList.add('bg-nav-color');
  }
}

window.addEventListener("scroll",changebg);