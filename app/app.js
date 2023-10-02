// import { Value } from "sass";
import { getPage } from "../model/model.js";

/* active Navigator */
function updateActiveBtn(btnClass) {
    //grab old and new actives
    let oldActive = document.getElementById("active");
    let newActiveArray = document.getElementsByClassName(btnClass);
    let newActive = newActiveArray[0];

    if (newActive.className != oldActive.className) {
        // console.log("old and new different");

        /* remove old active */
        oldActive.id = "";
        /* add new active */
        newActive.id = "active";

    } else {
        // console.log("old and new identical");
        /* no change */
    }
}

/* current Banner */
function updateBanner(btnID) {
    if (btnID == "active") {
        /* Banner remains the same */
    } else {
        document.getElementById("banner").innerHTML = btnID;
    }
}

function photoDetail() {
    let details = document.querySelectorAll(".detail");
    let photos = document.getElementsByClassName("photoCard");
    console.log(details);
    console.log(photos);
}

function checkID(rawID) {
    if (rawID == "" || rawID == null) {
        rawID = "home"
    }
    return (rawID)
}

function route() {

    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    pageID = checkID(pageID);

    const pageData = new Promise(function (resolve, reject) {
        if (pageID) {
            resolve(getPage(pageID))
        }
    })

    if (pageID == "photos") {
        console.log("id is photos");
        updateActiveBtn(pageID);
        updateBanner(pageID);
        // getPage(pageID);
        pageData.then(function (e) {
            console.log("Then");
            photoDetail();

        }).catch(function () {
            console.log("Catch");
        })

    } else {
        // console.log("id is anything but photo");
        updateActiveBtn(pageID);
        updateBanner(pageID);
        getPage(pageID);
    }

    /* if (pageID == "" || pageID == null) {
        pageID = "home";
        getPage(pageID);
        updateActiveBtn(pageID);
        updateBanner(pageID);

    } else if (pageID == "photos") {
        getPage(pageID);
        updateActiveBtn(pageID);
        updateBanner(pageID);
        // photoPage();
        photoListener();
    } else {
        getPage(pageID);
        updateActiveBtn(pageID);
        updateBanner(pageID);
    } */
}

function readySite() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    readySite();

});