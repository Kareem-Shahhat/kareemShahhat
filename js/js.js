const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundImage = 'linear-gradient(181deg, rgb(63, 11, 41) 43%, rgb(100 85 86) 152%)';
		header.style.borderBottom='1px solid red' ;
	} else {
		header.style.backgroundImage = 'linear-gradient(181deg, rgb(41 50 60 / 34%) 43%, rgb(144 151 160 / 25%) 152%)';
		header.style.backgroundColor = '#10345300';
		header.style.borderBottom='none' ;
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


let tabs = document.querySelectorAll(".tabs_ul li");
let tabsArray = Array.from(tabs);

let devs_cont = document.querySelectorAll(".content_rev > div");
let devs_contarray = Array.from(devs_cont);

tabsArray.forEach((ele) => {
    ele.addEventListener("click",function(e){
        tabsArray.forEach((ele)=>{
            ele.classList.remove("active_tab_rev");
        });
        e.currentTarget.classList.add("active_tab_rev");

        devs_contarray.forEach((div)=>{
            div.style.display="none";
        });
        console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display="block";
    });
});

let projectNum = document.querySelectorAll(".tab_one .project-items");
let prelm1 = document.getElementById("proj1").innerHTML=projectNum.length;

let projectNum2 = document.querySelectorAll(".tab_two .project-items");
let prelm2 = document.getElementById("proj2").innerHTML=projectNum2.length;
