window.onload = () => popupInit() && window.matchMedia('(prefers-color-scheme: dark)').matches && toggleDark();

window.onscroll = function(){
	let progress = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
	let progress_bar = document.querySelector("#main-progress-bar");
	let to_top = document.querySelector("#main-to-top");
	// update progress bar
	progress_bar.style.width = progress.toString() + "%";
	// update to-top button with animation
	if (progress > 10){
		to_top.style.animation = "fade-in 0.5s";
		setTimeout(() => to_top.style.display = "block", 500);
	} else {
		to_top.style.animation = "fade-out 0.5s";
		setTimeout(() => to_top.style.display = "none", 500);
	}
	
}

function toggleSpecialBar(){
	let special_bar_hide = document.querySelector("#special-bar.hide");
	let special_bar = document.querySelector("#special-bar.navbar");
	// update special bar
	if(special_bar_hide != null){
		special_bar_hide.className = "navbar navbar-expand-lg justify-content-center my-sm-3";
	}
	if(special_bar != null){
		special_bar.className = "hide";
	}
}

function align(){
	let left_list = document.querySelectorAll(".section-heading.text-start");
	let center_list = document.querySelectorAll(".section-heading.text-center");
	let right_list = document.querySelectorAll(".section-heading.text-end");
	// update section headings
	for(let i = 0; i < left_list.length; i++){
		left_list[i].className = "section-heading text-center";
	}
	for(let i = 0; i < center_list.length; i++){
		center_list[i].className = "section-heading text-end";
	}
	for(let i = 0; i < right_list.length; i++){
		right_list[i].className = "section-heading text-start";
	}
}

function toggleDark(){
	let table = document.querySelector(".table");
	let light_list = document.querySelectorAll(".navbar.bg-light");
	let dark_list = document.querySelectorAll(".navbar.bg-dark");
	let theme = document.querySelector("#theme-css");
	let dark_btn = document.querySelector("#dark-btn");
	let is_light = light_list.length > 0;
	// update table
	if (table != null){
		table.classList.toggle("table-dark");
	}
	// update css
	if(theme != null){
		theme.href = is_light ? "./css/style-dark.css" : "./css/style-light.css";
	}
	// update dark mode button
	if (dark_btn != null){
		dark_btn.textContent = is_light ? "Light" : "Dark";
	}
	// update navbar
	for(let i = 0; i < light_list.length; i++){
		light_list[i].className = "navbar navbar-expand-md bg-dark justify-content-center my-sm-3";
	}
	for(let i = 0; i < dark_list.length; i++){
		dark_list[i].className = "navbar navbar-expand-md bg-light justify-content-center my-sm-3";
	}
}

function toggleScrollBar(){
	let scroll_bar_hide = document.querySelector("#scroll-bar.hide");
	let scroll_bar = document.querySelector("#scroll-bar.progress");
	// update scroll bar
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
	// set onclick event on close button
	popup_close.onclick = function(){
		popup_box.classList.toggle("hide");
	}
	// set onClick event on links
	addPopupOnClick(popup_box, popup_img, popup_caption, major_gpa, 
		"./img/popup/major_gpa.png", 
		"A list of all courses included in the calculation of Major GPA.");
	addPopupOnClick(popup_box, popup_img, popup_caption, ptcg_deck, 
		"./img/popup/ptcg_deck.jpg",
		"My current PTCG deck.");
	return true;
}

function changeImage(){
	let default_img = 0;
	let num_files = 12;
	let pic = document.querySelector("#about-pic");
	// update image
	if(pic != null){
		let img = parseInt(pic.alt, 10);
		if (Number.isNaN(img)){
			img = default_img;
		} else img = ++img % num_files;
		pic.alt = img;
		pic.src = "./img/about/image_" + img + ".jpg";
	}
}
