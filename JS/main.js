
var searchbut = document.querySelector('.boxl__search');

searchbut.addEventListener('click',function(){
    var input = document.querySelector('.boxi__forminput');
    if(input.style.display == 'none'){
      input.style.display="block";
      searchbut.style.backgroundColor = "#e9ecef";
      
    }
    else{
      input.style.display="none";
      searchbut.style.backgroundColor = "#fff";
    }
    
    }
)

// click danh muc
var x = document.querySelector('.bx-menu');
var m = document.querySelector('.bx-x');
x.addEventListener('click',function(){
    var y = document.querySelector('.headernav__cate');
    y.classList.add("dislayblock");
    x.style.display="none";
    m.style.display = "block";
  }
)

var c = document.querySelector('.bx-x');
c.addEventListener('click',function(){
  var z = document.querySelector('.headernav__cate');
  z.classList.remove("dislayblock")
  m.style.display="none";
  x.style.display = "block"
  
}
)




// khi kheo danh muc
const navbar = document.querySelector('.header-headernav');
const sticky = navbar.offsetTop;
const menu = document.querySelector('.headernav__cate')
console.log(sticky)

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("scroll");
    menu.classList.add("topofmenu");
  } else {
    navbar.classList.remove("scroll");
    menu.classList.remove("topofmenu");
  }
}


// chuyen tab

const tabnong = document.querySelector('.nav__nong');
const tabmoi = document.querySelector('.nav__moi');
const tabvideo = document.querySelector('.nav__video');
const tabchude = document.querySelector('.nav__chude');






