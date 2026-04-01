/**
 * Edit this array to add or update projects. Images can be local paths or URLs.
 */
var PROJECTS = [
  {
    title: "Agentic Privacy Control Center",
    image: "../assets/HDSI_Drone-Aerial.jpg",
    description:
      "Our team found that privacy settings are often buried, confusing, and inconsistent, so we built an AI application that finds and modifies them for you.",
    url: "https://sebastianferragut.github.io/DSC180-artifact-directory/",
  },
  {
    title: "Introduction to D3.js",
    image: "../assets/d3-logo.png",
    description:
      "These slides introduce the basic fundamentals of D3 to build custom data visualizations that communicate insights in a creative, yet effective manner.",
    url: "https://jeh027.github.io/Intro-to-D3.js/#intro",
  },
  {
    title: "Tennis Players Versus Court Surface",
    image: "../assets/roger-federer-tennis.jpg",
    description:
      "Tennis is mainly played on three surfaces: grass, hard, and clay. This scrollyteller investigates how the court surface affects professional tennis players' performance.",
    url: "https://jeh027.github.io/Tennis_Data_Viz/",
  }
];

function renderProjects(containerId) {
  var root = document.getElementById(containerId);
  if (!root) return;

  if (!PROJECTS.length) {
    root.innerHTML =
      '<p class="empty-state">No projects yet — add entries to <code>js/projects.js</code>.</p>';
    return;
  }

  var frag = document.createDocumentFragment();

  PROJECTS.forEach(function (p) {
    var article = document.createElement("article");
    article.className = "project-card";

    var img = document.createElement("img");
    img.className = "project-card__image";
    img.src = p.image;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";

    var body = document.createElement("div");
    body.className = "project-card__body";

    var h3 = document.createElement("h3");
    h3.className = "project-card__title";
    h3.textContent = p.title;

    var desc = document.createElement("p");
    desc.className = "project-card__desc";
    desc.textContent = p.description;

    body.appendChild(h3);
    body.appendChild(desc);

    if (p.url) {
      var link = document.createElement("a");
      link.className = "project-card__link";
      link.href = p.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "View project →";
      body.appendChild(link);
    }

    article.appendChild(img);
    article.appendChild(body);
    frag.appendChild(article);
  });

  root.appendChild(frag);
}

document.addEventListener("DOMContentLoaded", function () {
  renderProjects("projects-grid");
});
