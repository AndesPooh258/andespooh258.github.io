window.onload = () => window.matchMedia('(prefers-color-scheme: dark)').matches && toggleDark();

window.onscroll = function(){
	let target = document.querySelector(".progress-bar");
	let progress = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
	target.style.width = progress.toString() + "%";
}

function changeImage(){
	let default_img = 0;
	let num_files = 12;
	let pic = document.querySelector("#about-pic");
	if(pic != null){
		let img = parseInt(pic.alt, 10);
		if (Number.isNaN(img)){
			img = default_img;
		} else img = ++img % num_files;
		pic.alt = img;
		pic.src = "./img/about/image_" + img + ".jpg";
	}
}

function toggleSpecialBar(){
	let target1 = document.querySelector("#special-bar.hide");
	let target2 = document.querySelector("#special-bar.navbar");
	if(target1 != null){
		target1.className = "navbar navbar-expand-lg justify-content-center my-sm-3";
	} 
	if(target2 != null){
		target2.className = "hide";
	}
}

function align(){
	let leftList = document.querySelectorAll(".section-heading.text-start");
	let centerList = document.querySelectorAll(".section-heading.text-center");
	let rightList = document.querySelectorAll(".section-heading.text-end");
	for(let i = 0; i < leftList.length; i++){
		leftList[i].className = "section-heading text-center";
	}
	for(let i = 0; i < centerList.length; i++){
		centerList[i].className = "section-heading text-end";
	}
	for(let i = 0; i < rightList.length; i++){
		rightList[i].className = "section-heading text-start";
	}
}

function toggleDark(){
	let table = document.querySelector(".table");
	let lightList = document.querySelectorAll(".navbar.bg-light");
	let darkList = document.querySelectorAll(".navbar.bg-dark");
	let theme = document.querySelector("#theme-css");
	let button_dark = document.querySelector("#button-dark");
	if (table != null){
		table.classList.toggle("table-dark");
	}
	if(theme != null && button_dark != null){
		if(lightList.length > 0){
			theme.href = "./css/style-dark.css";
			button_dark.textContent = "Light";
		}else{
			theme.href = "./css/style-light.css";
			button_dark.textContent = "Dark";
		}
	}
	for(let i = 0; i < lightList.length; i++){
		lightList[i].className = "navbar navbar-expand-md bg-dark justify-content-center my-sm-3";
	}
	for(let i = 0; i < darkList.length; i++){
		darkList[i].className = "navbar navbar-expand-md bg-light justify-content-center my-sm-3";
	}
}

function toggleScrollBar(){
	let target1 = document.querySelector("#scroll-bar.hide");
	let target2 = document.querySelector("#scroll-bar.progress");
	if(target1 != null){
		target1.className = "progress sticky-top";
	}
	if(target2 != null){
		target2.className = "hide";
	}
}
