window.onload = () => popupInit() && window.matchMedia('(prefers-color-scheme: dark)').matches && toggleDark();

window.onscroll = function(){
	let progress_bar = document.querySelector(".progress-bar");
	let progress = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
	progress_bar.style.width = progress.toString() + "%";
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
	let special_bar_hide = document.querySelector("#special-bar.hide");
	let special_bar = document.querySelector("#special-bar.navbar");
	if(special_bar_hide != null){
		special_bar_hide.className = "navbar navbar-expand-lg justify-content-center my-sm-3";
	} 
	if(special_bar != null){
		special_bar.className = "hide";
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
	let scroll_bar_hide = document.querySelector("#scroll-bar.hide");
	let scroll_bar = document.querySelector("#scroll-bar.progress");
	if(scroll_bar_hide != null){
		scroll_bar_hide.className = "progress sticky-top";
	}
	if(scroll_bar != null){
		scroll_bar.className = "hide";
	}
}

function addPopupOnClick(popup_box, popup_img, popup_caption, target, src, innerText){
	target.onclick = function(){
		popup_box.classList.toggle("hide");
		popup_img.src = src;
		popup_caption.innerText = innerText;
	}
}

function popupInit(){
	let popup_box = document.querySelector("#main-popup-box");
	let popup_img = document.querySelector("#main-popup-img");
	let popup_caption = document.querySelector("#main-popup-caption");
	let popup_close = document.querySelector("#main-popup-close");
	let major_gpa = document.querySelector("#major-gpa");
	let ptcg_deck = document.querySelector("#ptcg-deck");
	popup_close.onclick = function(){
		popup_box.classList.toggle("hide");
	}
	addPopupOnClick(popup_box, popup_img, popup_caption, major_gpa, 
		"./img/popup/major_gpa.png", 
		"A list of all courses included in the calculation of Major GPA.");
	
	addPopupOnClick(popup_box, popup_img, popup_caption, ptcg_deck, 
		"./img/popup/ptcg_deck.jpg",
		"My current PTCG deck.");
	return true;
}
