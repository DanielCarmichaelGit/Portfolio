var isActive = false;
var a = document.getElementById("project-one");
var b = document.getElementById("project-two");
var c = document.getElementById("project-three");
var d = document.getElementById("project-four");
var e = document.getElementById("project-five");
var f = document.getElementById("project-six");
function showProjectOne() {
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    if (a.style.display === "none") {
      a.style.display = "flex";
      a.style.transition = "1s";
      isActive = true;
    } else {
      a.style.display = "none";
      isActive = false;
    }
  }

function showProjectTwo() {
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    if (b.style.display === "none") {
        b.style.display = "flex";
        b.style.transitionDuration= "1s";
        isActive = true;
    } else {
        b.style.display = "none";
        isActive = false;
    }
}

function showProjectThree() {
    b.style.display = "none";
    a.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    if (c.style.display === "none") {
        c.style.display = "flex";
        c.style.transition = "1s";
        isActive = true;
    } else {
        c.style.display = "none";
        isActive = false;
    }
}

function showProjectFour() {
    b.style.display = "none";
    c.style.display = "none";
    a.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    if (d.style.display === "none") {
        d.style.display = "flex";
        d.style.transition = "1s";
        isActive = true;
    } else {
        d.style.display = "none";
        isActive = false;
    }
}

function showProjectFive() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    f.style.display = "none";
    if (e.style.display === "none") {
        e.style.display = "flex";
        e.style.transition = "1s";
        isActive = true;
    } else {
        e.style.display = "none";
        isActive = false;
    }
}

function showProjectSix() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    if (f.style.display === "none") {
        f.style.display = "flex";
        f.style.transition = "1s";
        isActive = true;
    } else {
        f.style.display = "none";
        isActive = false;
    }
}

function contactModal() {
    var modal = document.getElementById("contact");
    if (modal.style.display === "none") {
        modal.style.display = "flex";
    }
    else {
        modal.style.display = "none";
    }
}