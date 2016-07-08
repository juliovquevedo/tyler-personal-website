function reset() {
  var text = document.getElementById("hoverText");
  text.innerHTML = "Tyler Leite";
}

function setResume() {
  var text = document.getElementById("hoverText");
  text.innerHTML = "Resume";
}

function setLinkedin() {
  var text = document.getElementById("hoverText");
  text.innerHTML = "Linkedin Profile";
}

function setGithub() {
  var text = document.getElementById("hoverText");
  text.innerHTML = "Github Profile";
}

function setPortfolio() {
  var text = document.getElementById("hoverText");
  text.innerHTML = "Web Portfolio";
}

var resume = document.getElementById("logo-box-1");
resume.onmouseenter = setResume;
resume.onmouseleave = reset;

var linkedin = document.getElementById("logo-box-2");
linkedin.onmouseenter = setLinkedin;
linkedin.onmouseleave = reset;

var github = document.getElementById("logo-box-3");
github.onmouseenter = setGithub;
github.onmouseleave = reset;

var github = document.getElementById("logo-box-4");
github.onmouseenter = setPortfolio;
github.onmouseleave = reset;