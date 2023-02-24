import Router from "./router.js"
import Layout from "./layout.js"
import Page from "./page.js"
const router = new Router(
    {
        about: new Layout(new Page("about.html")),
        research: new Layout(new Page("research.html")),
        project: new Layout(new Page("project.html")),
        hobby: new Layout(new Page("hobby.html")),
        "#default": new Page("about.html"),
    },
    document.querySelector("main")
);
