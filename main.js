const searchInput = document.getElementById("search-input");
const searchList = document.getElementById("search-list");
const gameContainer = document.getElementById("game-container");

const games = [
    {
        name: "Adventure",
        id: "adventure",
        ext: ".a26",
        core: "atari2600"
    },
    {
        name: "Banjo-Kazooie",
        id: "banjo_kazooie",
        ext: ".n64",
        core: "n64"
    },
    {
        name: "Bomberman",
        id: "bomberman",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Breakout",
        id: "breakout",
        ext: ".bin",
        core: "atari2600"
    },
    {
        name: "Donkey Kong",
        id: "donkey_kong",
        ext: ".zip",
        core: "arcade"
    },
    {
        name: "Donkey Kong 64",
        id: "donkey_kong_64",
        ext: ".z64",
        core: "n64"
    },
    {
        name: "Donkey Kong Country",
        id: "donkey_kong_country",
        ext: ".sfc",
        core: "snes"
    },
    {
        name: "Dr. Mario (GB)",
        id: "dr_mario",
        ext: ".gb",
        core: "gb"
    },
    {
        name: "Dr. Mario (NES)",
        id: "dr_mario",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Frogger",
        id: "frogger",
        ext: ".zip",
        core: "arcade"
    },
    {
        name: "Galaga",
        id: "galaga",
        ext: ".zip",
        core: "arcade"
    },
    {
        name: "Mario Bros.",
        id: "mario_bros",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Mario Kart 64",
        id: "mario_kart_64",
        ext: ".n64",
        core: "n64"
    },
    {
        name: "Mega Man",
        id: "mega_man",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Mega Man 2",
        id: "mega_man_2",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Mega Man 3",
        id: "mega_man_3",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Mega Man 4",
        id: "mega_man_4",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Mike Tyson's Punch Out!!",
        id: "mike_tyson_s_punch_out",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Pac-Man",
        id: "pac_man",
        ext: ".zip",
        core: "arcade"
    },
    {
        name: "Paper Mario",
        id: "paper_mario",
        ext: ".n64",
        core: "n64"
    },
    {
        name: "Pitfall!",
        id: "pitfall",
        ext: ".a26",
        core: "atari2600"
    },
    {
        name: "Pokémon Blue Version",
        id: "pokemon_blue_version",
        ext: ".gb",
        core: "gb"
    },
    {
        name: "Pokémon Crystal Version",
        id: "pokemon_crystal_version",
        ext: ".gbc",
        core: "gba"
    },
    {
        name: "Pokémon Emerald Version",
        id: "pokemon_emerald_version",
        ext: ".gba",
        core: "gba"
    },
    {
        name: "Pokémon FireRed Version",
        id: "pokemon_firered_version",
        ext: ".gba",
        core: "gba"
    },
    {
        name: "Pokémon Gold Version",
        id: "pokemon_gold_version",
        ext: ".gbc",
        core: "gba"
    },
    {
        name: "Pokémon LeafGreen Version",
        id: "pokemon_leafgreen_version",
        ext: ".gba",
        core: "gba"
    },
    {
        name: "Pokémon Red Version",
        id: "pokemon_red_version",
        ext: ".gb",
        core: "gb"
    },
    {
        name: "Pokémon Silver Version",
        id: "pokemon_silver_version",
        ext: ".gbc",
        core: "gba"
    },
    {
        name: "Pokémon Yellow Version: Special Pikachu Edition",
        id: "pokemon_yellow_version_special_pikachu_edition",
        ext: ".gbc",
        core: "gb"
    },
    {
        name: "Sonic Advance",
        id: "sonic_advance",
        ext: ".gba",
        core: "gba"
    },
    {
        name: "Sonic & Knuckles",
        id: "sonic_knuckles",
        ext: ".bin",
        core: "segaMD"
    },
    {
        name: "Sonic the Hedgehog",
        id: "sonic_the_hedgehog",
        ext: ".bin",
        core: "segaMD"
    },
    {
        name: "Sonic the Hedgehog 2",
        id: "sonic_the_hedgehog_2",
        ext: ".bin",
        core: "segaMD"
    },
    {
        name: "Sonic the Hedgehog 3",
        id: "sonic_the_hedgehog_3",
        ext: ".bin",
        core: "segaMD"
    },
    {
        name: "Space Invaders",
        id: "space_invaders",
        ext: ".zip",
        core: "arcade"
    },
    {
        name: "Super Mario 64",
        id: "super_mario_64",
        ext: ".z64",
        core: "n64"
    },
    {
        name: "Super Mario All-Stars",
        id: "super_mario_all_stars",
        ext: ".smc",
        core: "snes"
    },
    {
        name: "Super Mario Bros.",
        id: "super_mario_bros",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Super Mario Bros. 2",
        id: "super_mario_bros_2",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Super Mario Bros. 3",
        id: "super_mario_bros_3",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "Super Mario World",
        id: "super_mario_world",
        ext: ".smc",
        core: "snes"
    },
    {
        name: "Super Mario World 2: Yoshi's Island",
        id: "super_mario_world_2_yoshi_s_island",
        ext: ".sfc",
        core: "snes"
    },
    {
        name: "Super Smash Bros.",
        id: "super_smash_bros",
        ext: ".n64",
        core: "n64"
    },
    {
        name: "Tetris (GB)",
        id: "tetris",
        ext: ".gb",
        core: "gb"
    },
    {
        name: "Tetris (NES)",
        id: "tetris",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "The Legend of Zelda",
        id: "the_legend_of_zelda",
        ext: ".nes",
        core: "nes"
    },
    {
        name: "The Legend of Zelda: A Link to the Past",
        id: "the_legend_of_zelda_a_link_to_the_past",
        ext: ".sfc",
        core: "snes"
    },
    {
        name: "The Legend of Zelda: Majora's Mask",
        id: "the_legend_of_zelda_majora_s_mask",
        ext: ".n64",
        core: "n64"
    },
    {
        name: "The Legend of Zelda: Ocarina of Time",
        id: "the_legend_of_zelda_ocarina_of_time",
        ext: ".n64",
        core: "n64"
    }
];

function init() {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);

    const id = searchParams.get("id");
    loadGame(id);
}

function loadGame(id) {
    const local = true;

    const game = games.find(game => game.id == id);
    if (!game) {
        return
    }

    const cdn = window.cdn || (local ? "data/" : "https://cdn.emulatorjs.org/stable/data/");
    const core = `${game.core}`;

    window.EJS_player = "#game";
    window.EJS_gameName = game.name;
    window.EJS_biosUrl = "";
    window.EJS_gameUrl = `roms/${game.id}${game.ext}`;
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
