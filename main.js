const searchInput = document.getElementById("search-input");
const searchList = document.getElementById("search-list");

const games = [
    {
        name: "Adventure",
        path: "adventure.a26",
        core: "atari2600"
    },
    {
        name: "Banjo-Kazooie",
        path: "banjo_kazooie.n64",
        core: "n64"
    },
    {
        name: "Bomberman",
        path: "bomberman.nes",
        core: "nes"
    },
    {
        name: "Breakout",
        path: "breakout.bin",
        core: "atari2600"
    },
    {
        name: "Donkey Kong",
        path: "donkey_kong.zip",
        core: "arcade"
    },
    {
        name: "Donkey Kong 64",
        path: "donkey_kong_64.z64",
        core: "n64"
    },
    {
        name: "Donkey Kong Country",
        path: "donkey_kong_country.sfc",
        core: "snes"
    },
    {
        name: "Dr. Mario (GB)",
        path: "dr_mario.gb",
        core: "gb"
    },
    {
        name: "Dr. Mario (NES)",
        path: "dr_mario.nes",
        core: "nes"
    },
    {
        name: "Frogger",
        path: "frogger.zip",
        core: "arcade"
    },
    {
        name: "Galaga",
        path: "galaga.zip",
        core: "arcade"
    },
    {
        name: "Mario Bros.",
        path: "mario_bros.nes",
        core: "nes"
    },
    {
        name: "Mario Kart 64",
        path: "mario_kart_64.n64",
        core: "n64"
    },
    {
        name: "Mega Man",
        path: "mega_man.nes",
        core: "nes"
    },
    {
        name: "Mega Man 2",
        path: "mega_man_2.nes",
        core: "nes"
    },
    {
        name: "Mega Man 3",
        path: "mega_man_3.nes",
        core: "nes"
    },
    {
        name: "Mega Man 4",
        path: "mega_man_4.nes",
        core: "nes"
    },
    {
        name: "Mike Tyson's Punch Out!!",
        path: "mike_tyson_s_punch_out.nes",
        core: "nes"
    },
    {
        name: "Pac-Man",
        path: "pac_man.zip",
        core: "arcade"
    },
    {
        name: "Paper Mario",
        path: "paper_mario.n64",
        core: "n64"
    },
    {
        name: "Pitfall!",
        path: "pitfall.a26",
        core: "atari2600"
    },
    {
        name: "Pokémon Blue Version",
        path: "pokemon_blue_version.gb",
        core: "gb"
    },
    {
        name: "Pokémon Crystal Version",
        path: "pokemon_crystal_version.gbc",
        core: "gba"
    },
    {
        name: "Pokémon Emerald Version",
        path: "pokemon_emerald_version.gba",
        core: "gba"
    },
    {
        name: "Pokémon FireRed Version",
        path: "pokemon_firered_version.gba",
        core: "gba"
    },
    {
        name: "Pokémon Gold Version",
        path: "pokemon_gold_version.gbc",
        core: "gba"
    },
    {
        name: "Pokémon LeafGreen Version",
        path: "pokemon_leafgreen_version.gba",
        core: "gba"
    },
    {
        name: "Pokémon Red Version",
        path: "pokemon_red_version.gb",
        core: "gb"
    },
    {
        name: "Pokémon Silver Version",
        path: "pokemon_silver_version.gbc",
        core: "gba"
    },
    {
        name: "Pokémon Yellow Version: Special Pikachu Edition",
        path: "pokemon_yellow_version_special_pikachu_edition.gbc",
        core: "gb"
    },
    {
        name: "Sonic Advance",
        path: "sonic_advance.gba",
        core: "gba"
    },
    {
        name: "Sonic & Knuckles",
        path: "sonic_knuckles.bin",
        core: "segaMD"
    },
    {
        name: "Sonic the Hedgehog",
        path: "sonic_the_hedgehog.bin",
        core: "segaMD"
    },
    {
        name: "Sonic the Hedgehog 2",
        path: "sonic_the_hedgehog_2.bin",
        core: "segaMD"
    },
    {
        name: "Sonic the Hedgehog 3",
        path: "sonic_the_hedgehog_3.bin",
        core: "segaMD"
    },
    {
        name: "Space Invaders",
        path: "space_invaders.zip",
        core: "arcade"
    },
    {
        name: "Super Mario 64",
        path: "super_mario_64.z64",
        core: "n64"
    },
    {
        name: "Super Mario All-Stars",
        path: "super_mario_all_stars.smc",
        core: "snes"
    },
    {
        name: "Super Mario Bros.",
        path: "super_mario_bros.nes",
        core: "nes"
    },
    {
        name: "Super Mario Bros. 2",
        path: "super_mario_bros_2.nes",
        core: "nes"
    },
    {
        name: "Super Mario Bros. 3",
        path: "super_mario_bros_3.nes",
        core: "nes"
    },
    {
        name: "Super Mario World",
        path: "super_mario_world.smc",
        core: "snes"
    },
    {
        name: "Super Mario World 2: Yoshi's Island",
        path: "super_mario_world_2_yoshi_s_island.sfc",
        core: "snes"
    },
    {
        name: "Super Smash Bros.",
        path: "super_smash_bros.n64",
        core: "n64"
    },
    {
        name: "Tetris (GB)",
        path: "tetris.gb",
        core: "gb"
    },
    {
        name: "Tetris (NES)",
        path: "tetris.nes",
        core: "nes"
    },
    {
        name: "The Legend of Zelda",
        path: "the_legend_of_zelda.nes",
        core: "nes"
    },
    {
        name: "The Legend of Zelda: A Link to the Past",
        path: "the_legend_of_zelda_a_link_to_the_past.sfc",
        core: "snes"
    },
    {
        name: "The Legend of Zelda: Majora's Mask",
        path: "the_legend_of_zelda_majora_s_mask.n64",
        core: "n64"
    },
    {
        name: "The Legend of Zelda: Ocarina of Time",
        path: "the_legend_of_zelda_ocarina_of_time.n64",
        core: "n64"
    }
];

function loadGame(index) {
    const local = true;

    const game = games[index];
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
    
    const script = document.createElement("script");
    script.src = cdn + "loader.js";
    document.body.appendChild(script);

    console.log(name);
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
        .map((item, index) => `<div id="${index}" class="search-list-item">${item.name}</div>`)
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
            .map((item, index) => `<div id="${index}" class="search-list-item">${item.name}</div>`)
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
