window.onload = window.matchMedia('(prefers-color-scheme: dark)').matches && toggleDark();

window.onscroll = function(){
	let progress = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
	let progress_bar = document.querySelector("#main-progress-bar");
	let to_top = document.querySelector("#main-to-top");
	let to_top_threshold = 10;
	// update progress bar
	if (progress_bar != null){
		progress_bar.style.width = progress.toString() + "%";
	}
	// update to-top button with animation
	if (to_top != null) {
		if (progress > to_top_threshold && to_top.classList.contains("hide")){
			to_top.className = "to-top-btn";
		} else if (progress <= to_top_threshold && !to_top.classList.contains("hide")){
			to_top.style.animation = "fade-out 0.5s";
			setTimeout(() => to_top.removeAttribute('style') || (to_top.className = "to-top-btn hide"), 500);
		}
	}
}

function pageInit(){
	let navbar = document.querySelector("#nav-navbar");
	let is_light = navbar.classList.contains("bg-light");
	let tables = document.querySelectorAll(".table");
	let to_top = document.querySelector("#main-to-top");
	// update table
	if (!is_light && tables != null){
		for(let i = 0; tables != null && i < tables.length; i++){
			tables[i].classList.toggle("table-dark");
		}
	}
	// update to-top button
	if (to_top != null){
		to_top.setAttribute('href', window.location.hash || '#');
	}
	// initialize pop-up images
	popupInit();
}

/* special bar related features */
function toggleSpecialBar(){
	let special_bar = document.querySelector("#nav-special-bar");
	// update special bar
	if (special_bar != null){
		special_bar.className = special_bar.classList.contains("hide") ? "navbar navbar-expand-lg justify-content-center my-sm-3" : "hide";
	}
}

function align(){
	let section_headings = document.querySelectorAll(".section-heading");
	let heading_className = "section-heading ";
	// update section headings
	if (section_headings != null && section_headings.length > 0){
		heading_className += section_headings[0].classList.contains("text-start") ? "text-center" : 
							 section_headings[0].classList.contains("text-center") ? "text-end" : "text-start";
		for(let i = 0; i < section_headings.length; i++){
			section_headings[i].className = heading_className;
		}
	}
}

function toggleDark(){
	let theme = document.querySelector("#theme-css");
	let navbar = document.querySelector("#nav-navbar");
	let dark_btn = document.querySelector("#nav-dark-btn");
	let tables = document.querySelectorAll(".table");
	let is_light = navbar.classList.contains("bg-light");
	let nav_className = "navbar navbar-expand-md justify-content-center my-sm-3 ";
	// update css
	if(theme != null){
		theme.href = is_light ? "./css/style-dark.css" : "./css/style-light.css";
	}
	// update navbar
	if (navbar != null){
		navbar.className = nav_className + (is_light ? "bg-dark" : "bg-light");
	}
	// update dark mode button
	if (dark_btn != null){
		dark_btn.textContent = is_light ? "Light" : "Dark";
	}
	// update tables
	for(let i = 0; tables != null && i < tables.length; i++){
		tables[i].classList.toggle("table-dark");
	}
}

function toggleScrollBar(){
	let scroll_bar = document.querySelector("#main-scroll-bar");
	// update scroll bar
	if(scroll_bar != null){
		scroll_bar.className = scroll_bar.classList.contains("hide") ? "progress sticky-top" : "hide";
	}
}

/* pop-up related features */
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
	let major_gpa = document.querySelector("#popup-major-gpa");
	let estr_cuhk = document.querySelector("#popup-estr-cuhk");
	let pkm_team = document.querySelector("#popup-pkm-team");
	let ptcg_deck = document.querySelector("#popup-ptcg-deck");
	// set onClick event on close button
	popup_close.onclick = function(){
		popup_box.classList.toggle("hide");
	}
	// set onClick event on links
	if(major_gpa != null)
		addPopupOnClick(popup_box, popup_img, popup_caption, major_gpa, 
			"./img/popup/major_gpa.png", 
			"A list of all courses included in the calculation of Major GPA.");
	if(estr_cuhk != null)
		addPopupOnClick(popup_box, popup_img, popup_caption, estr_cuhk, 
			"./img/popup/estr_cuhk.png", 
			"Exposure to the admission brochure (2022-23) of the Faculty of Engineering, CUHK.");
	if(pkm_team != null)
		addPopupOnClick(popup_box, popup_img, popup_caption, pkm_team, 
			"./img/popup/pkm_team.jpg",
			"My current Pokemon team.");
	if(ptcg_deck != null)
		addPopupOnClick(popup_box, popup_img, popup_caption, ptcg_deck, 
			"./img/popup/ptcg_deck.jpg",
			"My current PTCG deck.");
	return true;
}

/* other features */
function changeImage(){
	let default_img = 0;
	let num_files = 6;
	let about_pic = document.querySelector("#about-pic");
	// update about image
	if(about_pic != null){
		let img = parseInt(about_pic.alt, 10);
		if (Number.isNaN(img)){
			img = default_img;
		} else img = ++img % num_files;
		about_pic.alt = img;
		about_pic.src = "./img/about/image_" + img + ".jpg";
	}
}
