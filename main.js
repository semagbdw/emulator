"use strict";

const navbar = document.getElementById("navbar");
const searchInput = document.getElementById("search-input");
const searchList = document.getElementById("search-list");
const fullscreenImg = document.getElementById("fullscreen-img");
const gameContainer = document.getElementById("game-container");

let games = null;
let currentId = null;
let fullscreen = false;

/*
    CURRENT CORES:
    - atari2600
    - nes
    - n64
    - arcade
    - snes
    - gb
    - gba
    - megaMD
*/

function loadGame(id) {
    const local = true;

    const game = games.find(game => game.id == id);
    if (!game) {
        return;
    }

    currentId = game.id;

    const cdn = window.cdn || (local ? "data/" : "https://cdn.emulatorjs.org/stable/data/");
    const core = `${game.core}`;

    window.EJS_player = "#game";
    window.EJS_gameName = game.name;
    window.EJS_biosUrl = "";
    window.EJS_gameUrl = `roms/${game.path}`;
    window.EJS_core = core;
    window.EJS_pathtodata = cdn;
    window.EJS_startOnLoaded = true;
    window.EJS_DEBUG_XX = window.debug;

    if (window.language !== "auto") {
        window.EJS_language = window.language;
    }

    if (core === "psp" || core === "dosbox_pure" || core === "azahar") {
        window.EJS_threads = true;
    }
    
    gameContainer.innerHTML = "";
    const div = document.createElement("div");
    div.id = "game";
    gameContainer.appendChild(div);
    const script = document.createElement("script");
    script.src = cdn + "loader.js";
    document.body.appendChild(script);

    console.log(`Loaded game: ${game.name}`);
}

function activateSearch() {
    searchList.style.display = "block";
    searchInput.style.borderRadius = "2px 2px 0 0";
}

function deactivateSearch() {
    searchList.style.display = "none";
    searchList.innerHTML = "";
    searchInput.style.borderRadius = "2px";
}

function toggleFullscreen() {
    if (fullscreen) {
        fullscreen = false;
        fullscreenImg.src = "assets/open_fullscreen.png";
        navbar.style.display = "flex";
    } else {
        fullscreen = true;
        fullscreenImg.src = "assets/close_fullscreen.png";
        navbar.style.display = "none";
    }
}

function initFeatured() {
    const featuredIds = [
        "galaga",
        "super_mario_bros",
        "pac_man",
        "super_mario_64",
        "pokemon_red_version",
        "sonic_the_hedgehog",
        "tetris_nes"
    ];

    const method = "date";

    let featuredId;
    switch (method) {
        case "date":
            const date = new Date();
            const day = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000) % featuredIds.length;
            featuredId = featuredIds[day];
            break;
        case "random":
            const random = Math.floor(Math.random() * featuredIds.length);
            featuredId = featuredIds[random];
            break;
    }

    const game = games.find(game => game.id == featuredId);
    if (!game) {
        throw new Error(`couldn't find featured game with id ${featuredId}`);
    }

    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const a = document.createElement("a");

    img.src = `assets/thumbnails/${game.id}.png`;
    div.id = "featured-game";
    p.textContent = "Featured Game: ";
    a.textContent = `${game.name}`;
    a.href = "#";
    a.onclick = (event) => {
        loadGame(`${game.id}`);
    };
    
    p.appendChild(a);
    div.appendChild(p);
    div.appendChild(img);
    gameContainer.appendChild(div);
}

async function init() {
    const response = await fetch("games.json");
    games = await response.json();

    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const id = searchParams.get("id");

    initFeatured();
    loadGame(id);
}

searchInput.addEventListener("focus", (event) => {
    searchList.innerHTML = games
        .map((item) => `<div id="${item.id}" class="search-list-item">${item.name}</div>`)
        .join("");

    activateSearch();
});

searchInput.addEventListener("blur", (event) => {
    searchInput.value = "";
    deactivateSearch();
});

searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase().trim();

    const matches = games.filter((item) =>
        item.name.toLowerCase().trim().includes(query)
    );

    if (matches.length > 0) {
        searchList.innerHTML = matches
            .map((item) => `<div id="${item.id}" class="search-list-item">${item.name}</div>`)
            .join("");

        activateSearch();
    } else {
       deactivateSearch();
    } 
});

searchList.addEventListener("mousedown", (event) => {
    const item = event.target.closest(".search-list-item");

    if (item) {
        loadGame(item.id);
    }
});

init();
