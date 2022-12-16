const weaponData = {
    // Ref: https://github.com/crawl/crawl/blob/master/crawl-ref/source/item-prop.cc

    "unarmed": { category: "unarmed", damage: 3, hit: +6, delay: { base: 10, min: 5 }, },
    "claws 1": { category: "unarmed", damage: 5, hit: +6, delay: { base: 10, min: 5 }, },
    "claws 2": { category: "unarmed", damage: 7, hit: +6, delay: { base: 10, min: 5 }, },
    "claws 3": { category: "unarmed", damage: 9, hit: +6, delay: { base: 10, min: 5 }, },

    "dagger": { category: "short_blades", damage: 4, hit: +6, delay: { base: 10, min: 5 }, img: "dagger" },
    "quick blade": { category: "short_blades", damage: 4, hit: +6, delay: { base: 7, min: 3 }, img: "quickblade" },
    "short sword": { category: "short_blades", damage: 5, hit: +4, delay: { base: 11, min: 5 }, img: "short_sword" },
    "rapier": { category: "short_blades", damage: 7, hit: +4, delay: { base: 12, min: 5 }, img: "rapier" },

    "falchion": { category: "long_blades", damage: 8, hit: +2, delay: { base: 13, min: 6 }, img: "falchion" },
    "long sword": { category: "long_blades", damage: 10, hit: +1, delay: { base: 14, min: 7 }, img: "long_sword" },
    "scimitar": { category: "long_blades", damage: 12, hit: +0, delay: { base: 14, min: 7 }, img: "scimitar" },
    "demon blade": { category: "long_blades", damage: 13, hit: -1, delay: { base: 13, min: 6 }, img: "demon_blade" },
    "eudemon blade": { category: "long_blades", damage: 14, hit: -2, delay: { base: 12, min: 6 }, img: "blessed_blade" },
    "double sword": { category: "long_blades", damage: 15, hit: -1, delay: { base: 15, min: 7 }, img: "double_sword" },
    "great sword": { category: "long_blades", damage: 17, hit: -3, delay: { base: 17, min: 7 }, img: "greatsword" },
    "triple sword": { category: "long_blades", damage: 19, hit: -4, delay: { base: 18, min: 7 }, img: "triple_sword" },

    "hand axe": { category: "axes", damage: 7, hit: +3, delay: { base: 13, min: 6 }, img: "hand_axe" },
    "war axe": { category: "axes", damage: 11, hit: 0, delay: { base: 15, min: 7 }, img: "war_axe" },
    "broad axe": { category: "axes", damage: 13, hit: -2, delay: { base: 16, min: 7 }, img: "broad_axe" },
    "battleaxe": { category: "axes", damage: 15, hit: -4, delay: { base: 17, min: 7 }, img: "battle_axe" },
    "executioner's axe": { category: "axes", damage: 18, hit: -6, delay: { base: 19, min: 7 }, img: "executioner_axe" },

    "whip": { category: "maces", damage: 6, hit: +2, delay: { base: 11, min: 5 }, img: "bullwhip" },
    "club": { category: "maces", damage: 5, hit: +3, delay: { base: 13, min: 6 }, img: "club" },
    "mace": { category: "maces", damage: 8, hit: +3, delay: { base: 14, min: 7 }, img: "mace" },
    "flail": { category: "maces", damage: 10, hit: +0, delay: { base: 14, min: 7 }, img: "flail" },
    "morningstar": { category: "maces", damage: 13, hit: -2, delay: { base: 15, min: 7 }, img: "morningstar" },
    "demon whip": { category: "maces", damage: 11, hit: +1, delay: { base: 11, min: 5 }, img: "demon_whip" },
    "sacred scourge": { category: "maces", damage: 12, hit: +0, delay: { base: 11, min: 5 }, img: "sacred_scourge" },
    "dire flail": { category: "maces", damage: 13, hit: -3, delay: { base: 13, min: 6 }, img: "dire_flail" },
    "eveningstar": { category: "maces", damage: 15, hit: -1, delay: { base: 15, min: 7 }, img: "eveningstar" },
    "great mace": { category: "maces", damage: 17, hit: -4, delay: { base: 17, min: 7 }, img: "mace_large" },
    "giant club": { category: "maces", damage: 20, hit: -6, delay: { base: 16, min: 7 }, img: "giant_club" },
    "giant spiked club": { category: "maces", damage: 22, hit: -7, delay: { base: 18, min: 7 }, img: "spiked_giant_club" },

    "spear": { category: "polearms", damage: 6, hit: +4, delay: { base: 11, min: 6 }, img: "spear" },
    "trident": { category: "polearms", damage: 9, hit: +1, delay: { base: 13, min: 6 }, img: "trident" },
    "halberd": { category: "polearms", damage: 13, hit: -3, delay: { base: 15, min: 7 }, img: "halberd" },
    "scythe": { category: "polearms", damage: 14, hit: -4, delay: { base: 20, min: 7 }, img: "scythe" },
    "demon trident": { category: "polearms", damage: 12, hit: +1, delay: { base: 13, min: 6 }, img: "demon_trident" },
    "trishula": { category: "polearms", damage: 13, hit: +0, delay: { base: 13, min: 6 }, img: "trishula" },
    "glaive": { category: "polearms", damage: 15, hit: -3, delay: { base: 17, min: 7 }, img: "glaive" },
    "bardiche": { category: "polearms", damage: 18, hit: -6, delay: { base: 19, min: 7 }, img: "bardiche" },

    "quarterstaff": { category: "staves", damage: 10, hit: +3, delay: { base: 13, min: 6 }, img: "quarterstaff" },
    "lajatang": { category: "staves", damage: 16, hit: -3, delay: { base: 14, min: 7 }, img: "lajatang" },
    "staff": { category: "staves", damage: 5, hit: +5, delay: { base: 12, min: 6 }, img: "staff" },

    // missile base damage is no longer added to these
    "sling": { category: "slings", damage: 7, hit: +0, delay: { base: 14, min: 6 }, img: "ranged/sling" },
    "fustibalus": { category: "slings", damage: 10, hit: -2, delay: { base: 16, min: 7 }, img: "ranged/fustibalus" },

    "shortbow": { category: "bows", damage: 9, hit: +2, delay: { base: 15, min: 6 }, img: "ranged/shortbow" },
    "longbow": { category: "bows", damage: 12, hit: 0, delay: { base: 17, min: 7 }, img: "ranged/longbow" },

    "hand crossbow": { category: "crossbows", damage: 17, hit: +3, delay: { base: 18, min: 10 }, img: "ranged/hand_crossbow" },
    "arbalest": { category: "crossbows", damage: 17, hit: -2, delay: { base: 19, min: 10 }, img: "ranged/arbalest" },
    "triple crossbow": { category: "crossbows", damage: 23, hit: -2, delay: { base: 23, min: 10 }, img: "ranged/triple_crossbow" },

    "stone": { category: "throwing", damage: 2, hit: +0, delay: { base: 11, min: 7 }, },
    "boomerang": { category: "throwing", damage: 6, hit: +0, delay: { base: 13, min: 7 }, },
    "javelin": { category: "throwing", damage: 11, hit: +0, delay: { base: 15, min: 7 }, },
    "large rock": { category: "throwing", damage: 20, hit: +0, delay: { base: 20, min: 7 }, },

};

// old weapon data - indexed by *last* version they were valid for
const oldWeaponData = {
    28: {
        "quick blade": { category: "short_blades", damage: 5, hit: +6, delay: { base: 7, min: 3 }, img: "quickblade" },
        "short sword": { category: "short_blades", damage: 6, hit: +4, delay: { base: 11, min: 5 }, img: "short_sword" },
        "rapier": { category: "short_blades", damage: 8, hit: +4, delay: { base: 12, min: 5 }, img: "rapier" },

        // missile base damage must be added to these (+2 for stones, +4 for bullets)
        "sling": { category: "slings", damage: 5, hit: +2, delay: { base: 12, min: 6 }, img: "ranged/sling" },
        "fustibalus": { category: "slings", damage: 8, hit: -1, delay: { base: 14, min: 7 }, img: "ranged/fustibalus" },

        "shortbow": { category: "bows", damage: 9, hit: +2, delay: { base: 13, min: 6 }, img: "ranged/shortbow" },
        "longbow": { category: "bows", damage: 15, hit: 0, delay: { base: 17, min: 7 }, img: "ranged/longbow" },

        "hand crossbow": { category: "crossbows", damage: 12, hit: +5, delay: { base: 15, min: 10 }, img: "ranged/hand_crossbow" },
        "arbalest": { category: "crossbows", damage: 18, hit: +2, delay: { base: 19, min: 10 }, img: "ranged/arbalest" },
        "triple crossbow": { category: "crossbows", damage: 22, hit: +0, delay: { base: 23, min: 10 }, img: "ranged/triple_crossbow" },
    },
    27: {
        "falchion": { category: "long_blades", damage: 7, hit: +2, delay: { base: 13, min: 6 }, img: "falchion" },
        "long sword": { category: "long_blades", damage: 9, hit: +1, delay: { base: 14, min: 7 }, img: "long_sword" },
        "scimitar": { category: "long_blades", damage: 11, hit: +0, delay: { base: 14, min: 7 }, img: "scimitar" },
        "demon blade": { category: "long_blades", damage: 12, hit: -1, delay: { base: 13, min: 6 }, img: "demon_blade" },
        "eudemon blade": { category: "long_blades", damage: 13, hit: -2, delay: { base: 12, min: 6 }, img: "blessed_blade" },
        "double sword": { category: "long_blades", damage: 14, hit: -1, delay: { base: 15, min: 7 }, img: "double_sword" },
        "great sword": { category: "long_blades", damage: 15, hit: -3, delay: { base: 17, min: 7 }, img: "greatsword" },
        "triple sword": { category: "long_blades", damage: 17, hit: -4, delay: { base: 19, min: 7 }, img: "triple_sword" },

        "executioner's axe": { category: "axes", damage: 18, hit: -6, delay: { base: 20, min: 7 }, img: "executioner_axe" },

        "bardiche": { category: "polearms", damage: 18, hit: -6, delay: { base: 20, min: 7 }, img: "bardiche" },
    },
    26: {
        "broad axe": { category: "axes", damage: 13, hit: -2, delay: { base: 17, min: 7 }, img: "broad_axe" },
    }
};

// map artefact name to weapon type
// (only for artefacts that don't have the base type in the name and/or modify the base type)
// values for damage/hit/delay are modifiers relative to the base type (i.e. not absolute values)
const artefactData = {
    29: {
        "singing sword" : { base_type: "double sword" },
        "wrath of trog" : { base_type: "battleaxe" },
        "sword of power" : { base_type: "great sword" },
        "vampire's tooth" : { base_type: "quick blade" },
        "sceptre of torment" : { base_type: "eveningstar" },
        "sword of zonguldrok" : { base_type: "double sword" },
        "sword of cerebov" : { base_type: "great sword", new_type: "sword of cerebov", damage: +1, hit: +1 },
        "sceptre of asmodeus" : { base_type: "staff" },
        "punk": { base_type: "fustibalus" },
        "zealot's sword": { base_type: "eudemon blade" },
        "sword of the doom knight" : { base_type: "great sword" },
        "arga" : { base_type: "broad axe" },
        "sniper" : { base_type: "triple crossbow", new_type: "heavy crossbow", base_delay: +4 },
        "wyrmbane" : { base_type: "spear", new_type: "lance", damage: +2 },
        "spriggan's knife" : { base_type: "dagger" },
        "plutonium sword" : { base_type: "triple sword" },
        "knife of accuracy" : { base_type: "dagger" },
        "captain's cutlass" : { base_type: "rapier" },
        "storm bow" : { base_type: "long bow" },
        "obsidian axe": { base_type: "broad axe" },
        "autumn katana": { base_type: "long sword", new_type: "katana", damage: +4, hit: +2, base_delay: -2 },
        "devastator": { base_type: "club", new_type: "shillelagh", damage: +3 },
        "axe of woe": { base_type: "executioner's axe" },
        "dark maul": { base_type: "great mace", new_type: "maul", damage: +35, hit: +2, base_delay: +13 },
        "arc blade": { base_type: "rapier" },
        "majin-bo": { base_type: "quarterstaff" },
        "frostbite": { base_type: "executioner's axe" },
        "thermic engine" : { base_type: "double sword" },
        "woodcutter's axe": { base_type: "battleaxe", new_type: "woodcutter's axe", base_delay: -7 },
        "throatcutter": { base_type: "long sword" },
        "staff of the meek": { base_type: "quarterstaff" },
    },
    28: {
        "woodcutter's axe": { base_type: "war axe", new_type: "woodcutter's axe", base_delay: -5 },
    }
};

const armourData = {
    // Ref: https://github.com/crawl/crawl/blob/master/crawl-ref/source/item-prop.cc

    "none": { ac: 0, encumbrance: 0 },

    "robe": { ac: 2, encumbrance: 0 },
    "animal skin": { ac: 2, encumbrance: 0 },
    "leather armour": { ac: 3, encumbrance: 40 },
    "ring mail": { ac: 5, encumbrance: 70 },
    "scale mail": { ac: 6, encumbrance: 100 },
    "chain mail": { ac: 8, encumbrance: 150 },
    "plate armour": { ac: 10, encumbrance: 180 },
    "crystal plate armour": { ac: 14, encumbrance: 230 },


    "steam dragon scales": { ac: 5, encumbrance: 0 },
    "acid dragon scales": { ac: 6,  encumbrance: 50 },
    "quicksilver dragon scales": { ac: 9,  encumbrance: 70 },
    "swamp dragon scales": { ac: 7,  encumbrance: 70 },
    "fire dragon scales": { ac: 8, encumbrance: 110 },
    "ice dragon scales": { ac: 9, encumbrance: 110 },
    "pearl dragon scales": { ac: 10, encumbrance: 110 },
    "storm dragon scales": { ac: 10, encumbrance: 150 },
    "shadow dragon scales": { ac: 11, encumbrance: 150 },
    "gold dragon scales": { ac: 12, encumbrance: 230 },
};

const speciesData = {
    "barachi": { size: "medium" },
    "deep elf": { size: "medium" },
    "demigod": { size: "medium" },
    "demonspawn": { size: "medium" },
    "djinni": { size: "medium" },
    "draconian": { size: "medium" },
    "felid": { size: "little" },
    "formicid": { size: "medium" },
    "gargoyle": { size: "medium" },
    "ghoul": { size: "medium" },
    "gnoll": { size: "medium" },
    "hill orc": { size: "medium" },
    "human": { size: "medium" },
    "kobold": { size: "small" },
    "merfolk": { size: "medium" },
    "minotaur": { size: "medium" },
    "meteoran": { size: "medium" },
    "mummy": { size: "medium" },
    "naga": { size: "large" },
    "octopode": { size: "medium" },
    "ogre": { size: "large" },
    "palentonga": { size: "large" },
    "spriggan": { size: "little" },
    "tengu": { size: "medium" },
    "troll": { size: "large" },
    "vampire": { size: "medium" },
    "vine stalker": { size: "medium" },

    // recently obsolete
    "centaur": { size: "large", obsolete: true },
    "deep dwarf": { size: "medium", obsolete: true },
    "halfling": { size: "small", obsolete: true },

    // really obsolete
    "sludge elf": { size: "medium", obsolete: true },
    "high elf": { size: "medium", obsolete: true },
    "lava orc": { size: "medium", obsolete: true },
};

const MIN_VERSION = 26;
const MAX_VERSION = 29;

// globals - yuck
var weapons = [];

// capitalize first letter of all words
function capitalizeWords(str) {
    var result = str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
    return result;
}

function clampValue(val, min, max) {
    return val < min ? min : (val > max ? max : val);
}

function populateVersionSelector()
{
    var selector = $('#version');
    selector.empty(); // remove old options

    for (let ver = MAX_VERSION; ver >= MIN_VERSION; ver--) {
        let name = "0." + ver.toString();
        var option = $("<option></option>");
        option.attr("value", ver);
        option.text(name);
        selector.append(option);
    }
}

function populateSpeciesSelector()
{
    var selector = $('#species');
    selector.empty(); // remove old options

    var sizes = ["little", "small", "medium", "large"];

    var speciesBySize = {};
    for (const size of sizes) {
        speciesBySize[size] = [];
    }

    for (var sp in speciesData) {
        var size = speciesData[sp]["size"];
        var name = capitalizeWords(sp);
        var option = $("<option></option>");
        option.attr("value", sp);
        if (speciesData[sp]["obsolete"]) {
            option.attr("class", "obsolete");
        }
        option.text(name);
        speciesBySize[size].push(option);
    }

    for (const size of sizes) {
        selector.append("<option disabled>-- " + size + " --</option>")
        for (const species of speciesBySize[size]) {
            selector.append(species);
        }
    }
}

function populateBodyArmourSelector()
{
    var selector = $('#body_armour');
    selector.empty(); // remove old options

    for (var arm in armourData) {
        var option = $("<option></option>");
        option.attr("value", arm);
        option.text(capitalizeWords(arm));
        selector.append(option);
    }
}

function reset()
{
    weapons = [];

    $(".number-val").text("0");

    $('#strength').text("10");
    $('#dexterity').text("10");
    $('#intelligence').text("10");
    $('#enemy_ac').text("10");

    $('#version').val(MAX_VERSION);
    $('#species').val("human");
    $('#shield').val("none");    
}

// add default unarmed type for species 
function defaultUnarmed()
{
    var species = $('#species').val();
    if (species == "felid" || species == "ghoul") {
        weapons[0] = parseWeapon("claws 1");
    }
    else if (species == "troll") {
        weapons[0] = parseWeapon("claws 3");
    }
    else {
        // standard unarmed (fists, tentacles, etc.)
        weapons[0] = parseWeapon("unarmed");
    }
}

// add weapon to list, but only if it's not a duplicate
function addWeapon(weapon)
{
    var exists = false;
    for (w of weapons) {
        if (w["description"] == weapon["description"]) {
            exists = true;
            break;
        }
    }

    if (!exists) {
        weapons.push(weapon);
    }
}

function parseData()
{
    reset();
    defaultUnarmed();

    var data = $('textarea#data').val();

    // line breaks could be removed by copy-paste (e.g. android), so we can't rely on them being there

    // remove junk at the end
    var sections = data.split('Dungeon Overview');
    data = sections[0];

    // now split into sections

    sections = data.split('Inventory:');
    var header = sections[0];
    data = (sections.length < 2 ? '' : sections[1]);

    sections = data.split('Skills:');
    var inventory = sections[0];
    data = (sections.length < 2 ? '' : sections[1]);

    sections = data.split('You');
    var skills = sections[0];
    data = (sections.length < 2 ? '' : sections[1]);

    //
    // process header
    //

    // get crawl version
    var version = header.match(/version\s+0\.(\d+)/);
    if (version != null) {
        let crawlVersion = parseInt(version[1]);
        crawlVersion = clampValue(crawlVersion, MIN_VERSION, MAX_VERSION);
        $('#version').val(crawlVersion);
    }

    // get player species
    var character_combo = header.match(/\(([A-Za-z ]+)\)\s+Turns:/);
    if (character_combo != null && character_combo.length >= 2) {
        let combo = character_combo[1].toLowerCase();
        for (var sp in speciesData) {
            if (combo.includes(sp)) {
                $('#species').val(sp);
                defaultUnarmed();
                break;
            }
        }
    }

    // get current armour
    for (let arm in armourData) {
        if (header.includes(arm)) {
            $('#body_armour').val(arm);
        }
    }

    // get current shield
    if (header.match(/buckler|small shield/i)) {
        $('#shield').val("buckler");
    }
    else if (header.match(/(kite|medium) shield/i)) {
        $('#shield').val("kite_shield");
    }
    else if (header.match(/(tower|large) shield/i)) {
        $('#shield').val("tower_shield");
    }

    // get strength
    var str = /Str:\s*(\d+)/.exec(header);
    if (str && str.length >= 2) {
        $('#strength').text(parseInt(str[1]));
    }

    // get dex
    var dex = /Dex:\s*(\d+)/.exec(header);
    if (dex && dex.length >= 2) {
        $('#dexterity').text(parseInt(dex[1]));
    }

    // get int
    var int = /Int:\s*(\d+)/.exec(header);
    if (int && int.length >= 2) {
        $('#intelligence').text(parseInt(int[1]));
    }

    // replace unarmed with current claws rank
    var claws = header.match(/claws [1-3]/);
    if (claws != null) {
        weapons[0] = parseWeapon(claws[0]);
    }

    // process slaying
    const slayRe = /Slay([+-]\d+)/g;
    const slayMatches = [...header.matchAll(slayRe)];
    let slaying = 0;
    for (const sm of slayMatches) {
        slaying += parseInt(sm[1])
    }
    $('#slaying').text(slaying);

    //
    // process inventory
    //

    // make sure there is a line break before each item
    inventory = inventory.replaceAll(/( [a-zA-Z] - )/g, '\n$1')

    var lines = inventory.split('\n');
    for (const line of lines) {
        // try to parse as weapon
        var w = parseWeapon(line);
        if (w != null) {
            addWeapon(w);
        }
        if (line.match(/(Armour|Magical Staves|Jewellery|Wands|Scrolls|Potions|Miscellaneous)/)) {
            break;
        }
    }

    //
    // process skills
    //

    // make sure there is a line break before each item
    skills = skills.replaceAll(/( . Level)/g, '\n$1')

    var lines = skills.split('\n');
    for (const line of lines) {
        parseSkill(line);
    }

    handleCrossTraining();
}

function parseSkill(line)
{
    const spell_schools = ["Conjurations", "Necromancy", "Hexes", "Poison Magic",
                          "Summonings", "Translocations", "Transmutations",
                          "Earth Magic", "Fire Magic", "Ice Magic", "Air Magic"];

    var m = line.match(/^\s*.\s+Level\s+(\S+)\s+(.*)$/)
    if (m == null || m.length != 3) {
        return;
    }

    try {
        var name = m[2].trim();
        var val = 0;

        // there can be either one number or two numbers in the form "9.9(9.9)"
        var nums = m[1].match(/(\d+(?:\.\d+)?)/g);
        if (nums.length == 1) {
            val = parseFloat(nums[0]);
        }
        else {
            val = Math.max(parseFloat(nums[1]), parseFloat(nums[0]));
        }

        if (name == "Fighting")
            $('#fighting').text(val);
        else if (name == "Armour")
            $('#armour').text(val);
        else if (name == "Shields")
            $('#shields').text(val);
        else if (name == "Short Blades")
            $('#short_blades').text(val);
        else if (name == "Long Blades")
            $('#long_blades').text(val);
        else if (name == "Axes")
            $('#axes').text(val);
        else if (name == "Maces & Flails")
            $('#maces').text(val);
        else if (name == "Polearms")
            $('#polearms').text(val);
        else if (name == "Staves")
            $('#staves').text(val);
        else if (name == "Unarmed Combat")
            $('#unarmed').text(val);
        else if (name == "Slings") {
            $('#slings').text(val);
        }
        else if (name == "Bows") {
            $('#bows').text(val);
        }
        else if (name == "Crossbows") {
            $('#crossbows').text(val);
        }
        else if (name == "Throwing")
            $('#throwing').text(val);
        else if (name == "Ranged Weapons") {
            $('#ranged').text(val);
            $('#slings').text(val);
            $('#bows').text(val);
            $('#crossbows').text(val);
        }
        else if (name == "Spellcasting") {
            $('#spellcasting').text(val);
        }
        else if (name == "Spellcasting") {
            $('#spellcasting').text(val);
        }
        else if (spell_schools.includes(name)) {
            let schools = parseFloat($('#avg_spell_schools').text());
            if (val > schools) {
                $('#avg_spell_schools').text(val);
            }
        }

        if (["Slings", "Bows", "Crossbows"].includes(name)) {
            let ranged = parseFloat($('#ranged').text());
            $('#ranged').text(Math.max(val, ranged));
        }
    }
    catch (err) {
    }
}

function handleCrossTraining() {
    // If a base skill is zero, it won't appear in char dump for game in progress
    // (although it will appear in the morgue of a completed game).
    // So, we have to manually add.

    var cross_train_factor = 0.6; // TODO: account for aptitudes

    // throwing and slings cross-train with eachother
    var throwing = parseFloat($('#throwing').text());
    var slings = parseFloat($('#slings').text());
    if (throwing == 0.0 && slings > 0.0) {
        throwing = slings * cross_train_factor;
        $('#throwing').text(niceNumber(throwing));
    }
    else if (slings == 0.0 && throwing > 0.0) {
        slings = throwing * cross_train_factor;
        $('#slings').text(niceNumber(slings));
    }

    // short blades and long blades cross-train with eachother
    var short_blades = parseFloat($('#short_blades').text());
    var long_blades = parseFloat($('#long_blades').text());
    if (short_blades == 0.0 && long_blades > 0.0) {
        short_blades = long_blades * cross_train_factor;
        $('#short_blades').text(niceNumber(short_blades));
    }
    else if (long_blades == 0.0 && short_blades > 0.0) {
        long_blades = short_blades * cross_train_factor;
        $('#long_blades').text(niceNumber(long_blades));
    }

    // axes, m&f, polearms and staves have a complicated cross-training relationship
    var axes = parseFloat($('#axes').text());
    var maces = parseFloat($('#maces').text());
    var polearms = parseFloat($('#polearms').text());
    var staves = parseFloat($('#staves').text());

    // axes are cross-trained by maces&flails and polearms
    if (axes == 0.0 && (maces > 0.0 || polearms > 0.0)) {
        var axes_adj = cross_train_factor * Math.max(maces, polearms);
        $('#axes').text(niceNumber(axes_adj));
    }

    // staves are cross-trained by maces&flails and polearms
    if (staves == 0.0 && (maces > 0.0 || polearms > 0.0)) {
        var staves_adj = cross_train_factor * Math.max(maces, polearms);
        $('#staves').text(niceNumber(staves_adj));
    }

    // maces&flails are cross-trained by axes and staves
    if (maces == 0.0 && (axes > 0.0 || staves > 0.0)) {
        var maces_adj = cross_train_factor * Math.max(axes, staves);
        $('#maces').text(niceNumber(maces_adj));
    }

    // polearms are cross-trained by axes and staves
    if (polearms == 0.0 && (axes > 0.0 || staves > 0.0)) {
        var polearms_adj = cross_train_factor * Math.max(axes, staves);
        $('#polearms').text(niceNumber(polearms_adj));
    }
}

function getBaseWeaponRefData(weapType, crawlVersion) {

    // if version is not specified, assume current version
    if (crawlVersion == null) {
        crawlVersion = MAX_VERSION;
    }

    var result = null;

    // search for older weapon data where relevant
    // take the oldest match where version >= target version
    for (let ver = crawlVersion; ver < MAX_VERSION; ver++) {
        if (ver in oldWeaponData && weapType in oldWeaponData[ver]) {
            result = oldWeaponData[ver][weapType];
            break;
        }
    }

    if (result == null) {
        // use current weapon data
        result = weaponData[weapType];
    }

    result["type"] = weapType;
    return result;
}

function getArtefactRefData(weapon, crawlVersion) {
    if (!("art_type" in weapon)) {
        return null;
    }

    // if version is not specified, assume current version
    if (crawlVersion == null) {
        crawlVersion = MAX_VERSION;
    }

    var artType = weapon["art_type"];

    for (let ver = crawlVersion; ver <= MAX_VERSION; ver++) {
        if (ver in artefactData && artType in artefactData[ver]) {
            let artData = artefactData[ver][artType];
            let baseWeaponData = getBaseWeaponRefData(artData["base_type"], crawlVersion);
            if ("new_type" in artData) {
                // construct a new base weapon type
                let newWeapType = Object.assign({}, baseWeaponData);
                newWeapType["delay"] = Object.assign({}, baseWeaponData["delay"]);
                if ("damage" in artData) {
                    newWeapType["damage"] += artData["damage"];
                }
                if ("hit" in artData) {
                    newWeapType["hit"] += artData["hit"];
                }
                if ("base_delay" in artData) {
                    newWeapType["delay"]["base"] += artData["base_delay"];
                }
                newWeapType["type"] = artData["new_type"];
                return newWeapType;
            }
            else {
                return baseWeaponData;
            }
        }
    }

    return null;
}

function getWeaponRefData(weapon, crawlVersion) {

    var refData = getArtefactRefData(weapon, crawlVersion);

    if (refData == null) {
        refData = getBaseWeaponRefData(weapon["type"], crawlVersion);
    }

    return refData;
}

function parseWeapon(s) {
    if (s.match("tremorstone")) {
        // this is not a weapon, but it would match on "stone"
        return null;
    }

    var weapon = {
        enchantment: 0,
        brand: ""
    }

    for (let t in weaponData) {
        if (s.includes(t)) {
            // some weapon names include other weapon names (e.g. "demon whip" includes "whip")
            // we want to take the longest match
            if (weapon["type"] == null || t.length > weapon["type"].length) {
                weapon["type"] = t;
            }
        }   
    }

    var lower = s.toLowerCase();
    if (weapon["type"] == null) {
        for (let art in artefactData[MAX_VERSION]) {
            if (lower.includes(art)) {
                weapon["art_type"] = art;
                break;
            }
        }
    }

    if (weapon["type"] == null && weapon["art_type"] == null) {
        return null;
    }

    var refData = getWeaponRefData(weapon);
    weapon["ref_data"] = refData;

    try {
        if (refData["category"] != "throwing") {
            weapon["enchantment"] = parseInt(/([\+\-][0-9]+)\s/.exec(s)[1]);
        }
    } catch(err) {}
    
    weapon["brand"] = parseBrand(s);

    // get artefact name
    var m = s.match('"[A-Za-z "]+"');
    if (m) {
        weapon["name"] = m[0];
    }
    else {
        m = s.match(' of [A-Za-z ]+');
        if (m && parseBrand(m[0]) == "") {
            weapon["name"] = m[0].trim();
        }
    }

    // Gyre and Giimble
    weapon["is_pair"] = (s.match(' pair of ') != null);

    weapon["description"] = weaponToString(weapon);

    return weapon;
}

function parseBrand(s) {
    if (s.includes("thermic engine")) {
        return "flame+freeze";
    }
    else if (s.includes("arc blade")) {
        return "discharge";
    }

    var m = /(freeze|flame|elec|holy|protect|distort|pain|drain|speed|vamp|antimagic|disrupt|silver|venom|slay drac|spect)/.exec(s);
    if (m != null) {
        return m[1];
    }

    if (s.includes("flaming"))
        return "flame";
    else if (s.includes("freezing"))
        return "freeze";

    if (s.match('crushing|chopping|piercing|slashing|slicing|crush|chop|pierce|slash|slice|velocity|vorpal')) {
        return "vorpal"
    } 

    return "";
}

function updateResults()
{
    if ($("#weapons").is(":visible"))
        updateCombatResults();
    else
        updateSpellResults();
}

function updateCombatResults()
{
    var crawlVersion = parseInt($('#version').val());

    if (crawlVersion >= 29) {
        // slings/bows/crossbows use a single skill "ranged"
        $('#ranged_container').show();
        $('#slings_container').hide();
        $('#bows_container').hide();
        $('#crossbows_container').hide();
    }
    else {
        // slings/bows/crossbows use separate skills
        $('#ranged_container').hide();
        $('#slings_container').show();
        $('#bows_container').show();
        $('#crossbows_container').show();
    }

    var shieldSpeedPenalty = calcShieldSpeedPenalty(crawlVersion);
    var armourSpeedPenalty = calcArmourSpeedPenalty(crawlVersion);

    // make sure we've got the right weapon ref data for the current crawl version
    for (const w of weapons) {
        w["ref_data"] = getWeaponRefData(w, crawlVersion);
        if ("type" in w["ref_data"]) {
            w["type"] = w["ref_data"]["type"];
        }
    }

    var weaps = weapons;
    if (crawlVersion <= 28) {
        // handle sling with both stones and bullets as ammo
        weaps = [];
        for (const w of weapons) {
            if (w["ref_data"]["category"] == "slings") {
                let w1 = Object.assign({}, w);
                w1["description"] += " with stones";
                weaps.push(w1);

                let w2 = Object.assign({}, w);
                w2["description"] += " with bullets";
                weaps.push(w2);
            }
            else {
                weaps.push(w);
            }
        }
    }

    for (const weap of weaps) {
        calcDamage(weap, shieldSpeedPenalty, armourSpeedPenalty, crawlVersion);
    }
    weaps.sort((a, b) => (a["damage_per_turn"]["total"] < b["damage_per_turn"]["total"]) ? 1 : -1)

    $('#stats').empty();
    $('#weapons > tbody:last-child').empty();

    for (const weap of weaps) {

        var row = "<tr>";
        row += "<td class='fit'>" + weap["description"] + "</td>";

        row += "<td class='fit'>";
        if (weap["delay"] != null) {
            row += weap["delay"].toFixed(2);
        }
        row += "</td>";

        if (weap["damage_per_hit"] == null) {
            row += "<td></td><td></td><td></td>";
        }
        else {
            row += '<td class="fit" data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="left" title="';
            row += distroToString(weap["damage_per_hit"]["base_distro"]);
            row += '">'
            row += weap["damage_per_hit"]["base"].toFixed(1) + "</td>";
            row += "<td class='fit'>" + weap["damage_per_hit"]["brand"].toFixed(1) + "</td>";
            row += "<td class='fit'>" + weap["damage_per_hit"]["total"].toFixed(1) + "</td>";
        }

        if (weap["damage_per_turn"] == null) {
            row += "<td></td><td></td><td></td>";
        }
        else {
            row += "<td class='fit'>" + weap["damage_per_turn"]["base"].toFixed(1) + "</td>";
            row += "<td class='fit'>" + weap["damage_per_turn"]["brand"].toFixed(1) + "</td>";
            row += "<td class='fit'>" + weap["damage_per_turn"]["total"].toFixed(1) + "</td>";
            row += "</tr>";
        }

        $('#weapons > tbody:last-child').append(row);
    }
}

function weaponToString(w) {
    var wtype;
    if ("ref_data" in w) {
        wtype = w["ref_data"]["type"];
    }
    else {
        wtype  = w["type"];
    }

    if (wtype == "unarmed") {
        return wtype;
    }
    else if (wtype.match(/^claws/)) {
        return "unarmed (" + wtype + ")";
    }
    else {
        var s = ""
        if (w["ref_data"]["category"] != "throwing") {
            s += numStringWithSign(w["enchantment"]) + " ";
        }
        if (w["is_pair"])
            s += 'pair of ' + wtype + 's';
        else if ("art_type" in w && !(w["art_type"].includes(wtype)))
            s += wtype + " (\"" + w["art_type"] + "\")";
        else
            s += wtype;
        /*if (w["name"] != null) {
            s += " " + w["name"];
        }*/
        if (w["brand"] != "") {
            s += " (" + w["brand"] + ")";
        }

        return s;
    }
}

function numStringWithSign(e) {
    return (e<0?"":"+") + e.toString();
}

// round number to 1 decimal place, but omit the decimal if it's an integer
function niceNumber(n) {
    return n.toFixed(1).replace('.0', '');
}


// add value to a dictionary entry, creating the entry if needed
function addToEntry(dict, key, value)
{
    if (dict[key] == null)
        dict[key] = value;
    else
        dict[key] += value;
}

// convert distribution to string
function distroToString(distro)
{
    var result = "";
    if (Object.entries(distro).length <= 20) {
        // display all values
        for (const [key, pcnt] of Object.entries(distro)) {
            result += key + ": ";
            result += pcnt < 0.1 ? pcnt.toPrecision(1) : pcnt.toFixed(1);
            result += "%<br>";
        }
    }
    else {
        // group into buckets
        const bucketSize = 5;
        var buckets = {};
        var distroMax = 0;
        for (const [k, pcnt] of Object.entries(distro)) {
            var key = parseInt(k);
            var bucket = Math.floor((key + bucketSize - 1) / bucketSize) * bucketSize;
            addToEntry(buckets, bucket, pcnt);
            if (key > distroMax)
                distroMax = key;
        }
        for (const [k, pcnt] of Object.entries(buckets)) {
            var key = parseInt(k);
            var bucketMin = Math.max(0, key - bucketSize + 1);
            var bucketMax = Math.min(key, distroMax);
            result += bucketMin.toString();
            if (bucketMax != bucketMin)
                result += "-" + bucketMax.toString();
            result += ": ";
            result += pcnt < 0.1 ? pcnt.toPrecision(1) : pcnt.toFixed(1);
            result += "%<br>";
        }
    }
    return result;
}

// Ref: attack::calc_damage() method in:
// https://github.com/crawl/crawl/blob/master/crawl-ref/source/attack.cc 
function calcDamage(weapon, shieldSpeedPenalty, armourSpeedPenalty, crawlVersion)
{
    var refData = weapon["ref_data"];
    if (refData == null) {
        return;
    }

    var skillName = refData["category"];
    if (crawlVersion >= 29) {
        // in 0.29, slings/bows/crossbows skills were combined into a single skill "ranged"
        if (skillName == "slings" || skillName == "bows" || skillName == "crossbows") {
            skillName = "ranged"
        }
    }
    var unarmed = (skillName == "unarmed");

    var str = parseFloat($('#strength').text());
    var dex = parseFloat($('#dexterity').text());
    var fighting = parseFloat($('#fighting').text());
    var weaponSkill = parseFloat($('#'+skillName).text());
    var enemy_ac = parseInt($('#enemy_ac').text());
    var slaying = parseInt($('#slaying').text());

    // all possible damage values, weighted by probability
    var weightedDamage = {};
    var prevWeightedDamage;

    // base damage
    var base_damage = refData["damage"];
    if (unarmed) {
        base_damage += Math.floor(weaponSkill);
        var fraction = weaponSkill - Math.floor(weaponSkill);
        // if there is a fractional part of weapon skill then there is the corresponding chance to add 1 to base damage
        if (fraction == 0) {
            weightedDamage[base_damage] = 1;
        }
        else {
            weightedDamage[base_damage+1] = Math.floor(fraction * 256);
            weightedDamage[base_damage] = 256 - weightedDamage[base_damage+1];
        }
    }
    else {
        if (crawlVersion <= 28 && refData["category"] == "slings") {
            // add missile base damage
            if (weapon["description"].match(/bullets/))
                base_damage += 4; // using sling bullets
            else
                base_damage += 2; // using stones
        }
        weightedDamage[base_damage] = 1;
    }


    // stat modifier

    prevWeightedDamage = weightedDamage;
    weightedDamage = {};

    if (crawlVersion >= 27) {
        var stat = str;
        if (crawlVersion >= 29) {
            var dex_weapons = ["short_blades", "long_blades", "bows", "crossbows", "slings"];
            if (dex_weapons.includes(refData["category"])) {
                stat = dex;
            }
        }
        // max(1.0, 75 + 2.5 * stat) / 100
        for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
            var dam = parseInt(damage);
            var newDam = Math.floor(dam * Math.max(1.0, 75 + 2.5 * stat));
            newDam = Math.floor(newDam / 100);
            addToEntry(weightedDamage, newDam, weight);
        }
    }
    else {
        if (str > 10) {
            // [39 + (random2(you.strength() - 9) * 2)] / 39]
            // = 1 + (0->str-10)*2/39
            for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
                var dam = parseInt(damage);
                for (var i = 0; i <= str - 10; i++) {
                    var newDam = Math.floor(dam + dam*i*2/39);
                    addToEntry(weightedDamage, newDam, weight);
                }
            }
        }
        else if (str < 10) {
            // [39 - (random2(11 - you.strength()) * 3)] / 39
            // = 1 - (0->10-str)*3/39
            // = 1 - (0->10-str)/13
            for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
                var dam = parseInt(damage);
                for (var i = 0; i <= 10-str; i++) {
                    var newDam = Math.floor(dam - dam*i/13);
                    addToEntry(weightedDamage, newDam, weight);
                }
            }
        }
        else {
            weightedDamage = prevWeightedDamage;
        }
    }

    // at this point, damage is randomized to a number between 0 and the full amount
    prevWeightedDamage = weightedDamage;
    weightedDamage = {};

    for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
        var dam = parseInt(damage);
        for (var i = 0; i <= dam; i++) {
            addToEntry(weightedDamage, i, weight);
        }
    }

    // weapon skill modifier
    // [2500 + (random2(you.skill(wpn_skill, 100) + 1))] / 2500
    // = 1 + (0->weapon_skill*100)/2500

    if (!unarmed) {
        prevWeightedDamage = weightedDamage;
        weightedDamage = {};

        for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
            var dam = parseInt(damage);
            for (var i = 0; i <= weaponSkill*100; i++) {
                var newDam = Math.floor(dam + dam*i/2500);
                addToEntry(weightedDamage, newDam, weight);
            }
        }
    }

    // fighting skill modifier
    // [30 * 100 + (random2(you.skill(SK_FIGHTING, 100) + 1))] / (30 * 100)
    // = 1 + (0->fighting_skill*100)/3000

    prevWeightedDamage = weightedDamage;
    weightedDamage = {};

    for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
        var dam = parseInt(damage);
        for (var i = 0; i <= fighting*100; i++) {
            var newDam = Math.floor(dam + dam*i/3000);
            addToEntry(weightedDamage, newDam, weight);
        }
    }

    // slaying bonus
    // a random number between 0 and effective enchantment (which can be negative)
    var effective_enchant = weapon["enchantment"] + slaying;
    var slay_bonus_min = Math.min(effective_enchant, 0)
    var slay_bonus_max = Math.max(effective_enchant, 0)

    prevWeightedDamage = weightedDamage;
    weightedDamage = {};

    for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
        var dam = parseInt(damage);
        for (var i = slay_bonus_min; i <= slay_bonus_max; i++) {
            var newDam = dam + i;
            addToEntry(weightedDamage, newDam, weight);
        }
    }

    // apply ac reduction

    if (enemy_ac > 0) {
        prevWeightedDamage = weightedDamage;
        weightedDamage = {};

       for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
           var dam = parseInt(damage);
           for (var saved = 0; saved <= enemy_ac; saved++) {
                // damage can't go below zero
                var newDam = Math.max(0, dam - saved);
                addToEntry(weightedDamage, newDam, weight);
            }
        }
    }

    // work out the weighted average
    var avg_damage = getWeightedAverage(weightedDamage);

    // convert weights to percentages
    var sumWeights = 0;
    for (const [damage, weight] of Object.entries(weightedDamage)) {
        sumWeights += weight;
    }
    for (const [damage, weight] of Object.entries(weightedDamage)) {
        weightedDamage[damage] = 100 * weight / sumWeights;
    }

    var damage_per_hit = {}
    damage_per_hit["base"] = avg_damage;
    damage_per_hit["base_distro"] = weightedDamage;

    damage_per_hit["brand"] = 0.0;
    if (weapon["brand"] == "vorpal") {
        // 0-33% on melee weapons -> avg = 16.7%
        // TODO: handle ranged (apparently 20%)
        damage_per_hit["brand"] = 0.167 * damage_per_hit["base"];
    }
    else if (weapon["brand"] == "flame" || weapon["brand"] == "freeze") {
        // 0-50% -> avg = 25%
        damage_per_hit["brand"] = 0.25 * damage_per_hit["base"];
    }
    else if (weapon["brand"] == "flame+freeze") {
        damage_per_hit["brand"] = 0.5 * damage_per_hit["base"];
    }
    else if (weapon["brand"] == "holy") {
        // 0-150% -> avg = 75%
        damage_per_hit["brand"] = 0.75 * damage_per_hit["base"];
    }
    else if (weapon["brand"] == "drain") {
        // 0-50% + 1+1d3 -> avg = 25% + 2
        damage_per_hit["brand"] = (0.25 * damage_per_hit["base"]) + 2.0;
    }
    else if (weapon["brand"] == "elec") {
        // chance to trigger is 1/4 (1/3 prior to 0.28)
        trigger_chance = crawlVersion < 28 ? 1/3 : 1/4;
        // if triggered, it does 8 + rand2(13) dmg -> 8 + [0 to 12] -> avg = 14
        damage_per_hit["brand"] = 14 * trigger_chance;
    }
    else if (weapon["brand"] == "disrupt") {
        // only found on the unrand artefact "Undeadhunter"
        // has 1/3 chance to inflict random2avg((1 + (dam * 3)), 3);
        // random2avg(x, 3) returns (random2(x) + random2(x+1) + random2(x+1))/3
        // so avg when it triggers is (3*dam + 3*dam+1 + 3*dam+1)/2/3
        // = (9*dam+2)/6
        // divide by 3 because it only triggers 1/3 of the time: avg = (9*dam+2)/18
        damage_per_hit["brand"] = (9.0 * damage_per_hit["base"] + 2.0) / 18.0;
    }
    else if (weapon["brand"] == "silver") {
        // flat 75% on chaotic monsters
        damage_per_hit["brand"] = 0.75 * damage_per_hit["base"];
        //TODO: (1 + random2(damage_done) / 3) on others
    }
    else if (weapon["brand"] == "slay drac") {
        // bonus_dam = 1 + random2(3 * dam / 2);
        // avg = 1 + 75% * dam
        damage_per_hit["brand"] = 1 + 0.75 * damage_per_hit["base"];
    }
    else if (weapon["brand"] == "spect") {
        damage_per_hit["brand"] = calcSpectralDamage(weapon);
    }
    else if (weapon["brand"] == "discharge") {
        // 1 in 3 chance of casting discharge with an average power of 150
        // damage when it triggers: 3 + random2(5 + pow / 10 + (random2(pow) / 10));
        damage_per_hit["brand"] = (3 + (20 + 15/2) / 2) / 3;
    }

    damage_per_hit["total"] = damage_per_hit["base"] + damage_per_hit["brand"];
    weapon["damage_per_hit"] = damage_per_hit;


    // calculate delay
    var base_delay = refData["delay"]["base"] / 10.0;
    var min_delay = refData["delay"]["min"] / 10.0;

    var delay = base_delay;
    if (unarmed) {
        delay -= weaponSkill * (base_delay - min_delay) / 27.0;
    }
    else {
        delay -= 0.1 * weaponSkill/2.0;
    }
    delay = Math.max(delay, min_delay);
    if (weapon["brand"] == "speed") {
        delay = 2.0/3.0 * delay;
    }
    else if (weapon["is_pair"]) {
        // gets two attacks
        delay /= 2;
    }

    delay += shieldSpeedPenalty;

    if (crawlVersion >= 29) {
        if (refData["category"] == "bows" || refData["category"] == "crossbows" || refData["category"] == "slings") {
            delay += armourSpeedPenalty;
        }
    }

    weapon["delay"] = delay;


    var damage_per_turn = {}
    damage_per_turn["base"] = damage_per_hit["base"] / delay;
    damage_per_turn["brand"] = damage_per_hit["brand"] / delay;
    damage_per_turn["total"] = damage_per_hit["total"] / delay;
    weapon["damage_per_turn"] = damage_per_turn;
}

// calculate damage from spectral weapon
// ref: player::handle_spectral_brand() and attack::calc_damage()
// If you trace through player::handle_spectral_brand() you see that spectral wepon is implemented
// as a monster with damage 6 wielding the original wepaon (I think)
function calcSpectralDamage(weapon)
{
    var refData = weapon["ref_data"];
    if (refData == null) {
        return;
    }

    var enemy_ac = parseInt($('#enemy_ac').text());

    // all possible damage values, weighted by probability
    var weightedDamage = {};
    var prevWeightedDamage;

    // weapon base damage
    var base_damage = refData["damage"];
    for (var i = 0; i < base_damage; i++) {
        weightedDamage[i] = 1;
    }

    // weapon enchantment damage
    var enchant = weapon["enchantment"]
    var bonus_min, bonus_max;
    if (enchant < 0) {
        bonus_min = enchant;
        bonus_max = 0;
    }
    else {
        bonus_min = 0;
        bonus_max = Math.max(0, enchant - 1); // ripped off!
    }

    prevWeightedDamage = weightedDamage;
    weightedDamage = {};

    for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
        var dam = parseInt(damage);
        for (var i = bonus_min; i <= bonus_max; i++) {
            var newDam = Math.max(dam + i, 0);
            addToEntry(weightedDamage, newDam, weight);
        }
    }

    // subtract 1-3 for monster wielding weapon
    prevWeightedDamage = weightedDamage;
    weightedDamage = {};
    for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
        var dam = parseInt(damage);
        for (var i = 1; i <= 3; i++) {
            var newDam = Math.max(dam - i, 0);
            addToEntry(weightedDamage, newDam, weight);
        }
    }

    // now add random value from 1 to monster damage (6 for spectral weapons - see mon-data.h)
    prevWeightedDamage = weightedDamage;
    weightedDamage = {};
    for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
        var dam = parseInt(damage);
        for (var i = 1; i <= 6; i++) {
            var newDam = dam + i;
            addToEntry(weightedDamage, newDam, weight);
        }
    }

    // apply ac reduction
    if (enemy_ac > 0) {
        prevWeightedDamage = weightedDamage;
        weightedDamage = {};

       for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
           var dam = parseInt(damage);
           for (var saved = 0; saved <= enemy_ac; saved++) {
                // damage can't go below zero
                var newDam = Math.max(0, dam - saved);
                addToEntry(weightedDamage, newDam, weight);
            }
        }
    }

    return getWeightedAverage(weightedDamage);
}

// work out average of weighted values
function getWeightedAverage(weightedValues)
{
    var sum = 0;
    var count = 0;
    for (const [value, weight] of Object.entries(weightedValues)) {
        var val = parseInt(value);
        count += weight;
        sum += (val * weight)
    }
    return count == 0 ? 0 : sum/count;
}

function calcShieldPenalty(crawlVersion)
{
    var species = $("#species").val();
    var size = speciesData[species]["size"];
    var  racialFactor = 0; // default for most medium species
    if (size == "little") {
         racialFactor = 4;
    }
    else if (size == "small") {
         racialFactor = 2;
    }
    else if (size == "large" || species == "formicid") {
        // Formicid is a special case: Due to having an extra set of arms,
        // this medium species gets the reduced shield penalty of large species
         racialFactor = -2;
    }

    var shieldsSkill = parseFloat($("#shields").text());
    var shield = $("#shield").val();

    var penalty = 0;

    if (crawlVersion >= 28) {
        switch (shield) {
            case "buckler": penalty = 5; break;
            case "kite_shield": penalty = 10; break;
            case "tower_shield": penalty = 15; break;
            default: return 0;
        }

        penalty = 2 * penalty * penalty;
        penalty *= (270 - shieldsSkill * 10);
        penalty /= (5 * (20 - 3 * racialFactor));
        penalty /= 270;
    }
    else {
        switch (shield) {
            case "buckler": penalty = 0.8; break;
            case "kite_shield": penalty = 3; break;
            case "tower_shield": penalty = 5; break;
            default: return 0;
        }

        // ref: player::adjusted_shield_penalty (player.cc)
        penalty -= shieldsSkill / (5 + racialFactor);
    }

    return Math.max(0, penalty);
}

function calcShieldSpeedPenalty(crawlVersion) {
    var shieldPenalty = calcShieldPenalty(crawlVersion);

    if (crawlVersion >= 27) {
        // this is in auts, so convert to turns
        return shieldPenalty / 10;
    }

    if (shieldPenalty == 0) {
        return 0;
    }

    // scale for the roll
    var scale = 20;
    var scaledPenalty = shieldPenalty * scale;

    weightedValues = {};

    // DCSS rolls two dice with scaled shieldPenalty sides and takes the lower one
    for (var i = 1; i <= scaledPenalty; i++) {
        for (var j = 1; j <= scaledPenalty; j++) {
            addToEntry(weightedValues, Math.min(i, j), 1);
        }
    }

    weightedValues2 = {};

    for (var v = 1; v <= scaledPenalty; v++) {
        var key = Math.floor(v / scale);
        var rem = v % scale;
        addToEntry(weightedValues2, key, weightedValues[v] * (scale - rem));
        if (rem != 0) {
            addToEntry(weightedValues2, key + 1, weightedValues[v] * rem);
        }
    }

    var avg = getWeightedAverage(weightedValues2);

    // this is in auts, so convert to turns
    return avg / 10;
}

function calcArmourPenalty(crawlVersion)
{
    // Ref: player.cc

    var str = parseFloat($('#strength').text());
    var armourSkill = parseFloat($("#armour").text());
    var bodyArmour = $("#body_armour").val();

    var armourStats = armourData[bodyArmour];
    var base_ev_penalty = armourStats["encumbrance"] / 10;

    var penalty =  2 / 5 * base_ev_penalty * base_ev_penalty / (str + 3)

    penalty *= (450 - armourSkill*10) / 450;

    return penalty;
}

function calcArmourSpeedPenalty(crawlVersion) {
    if (crawlVersion < 29) {
        return 0;
    }

    var penalty = calcArmourPenalty(crawlVersion);

    // convert from auts to turns
    return penalty / 10;
}

function updateSpellResults()
{
    $('#spells > tbody:last-child').empty();

    for (let level = 1; level <= 9; level++) {

        let fail_rate = calculateSpellFailRate(level);

        var row = "<tr>";
        row += "<td class='fit'>" + level.toString() + "</td>";

        row += "<td class='fit'>";
        row += fail_rate.toString();
        row += "%</td>";

        row += "</tr>";

        $('#spells > tbody:last-child').append(row);
    }
}

function getSpellDifficulty(level)
{
    const difficulty_by_level = [0, 3, 15, 35, 70, 100, 150, 200, 260, 340];
    return difficulty_by_level[level];
}

function getRawSpellFailRate(level)
{
    let intelligence = parseFloat($('#intelligence').text());
    let spellcasting = parseFloat($('#spellcasting').text());
    let schools = parseFloat($('#avg_spell_schools').text());

    // calculate penalties
    let crawlVersion = parseInt($('#version').val());
    let armourPenalty = 19 * calcArmourPenalty(crawlVersion);
    let shieldPenalty = 19 * calcShieldPenalty(crawlVersion);
    let penalties = Math.max(0, Math.max(0, armourPenalty) + shieldPenalty);

    let fail = 60 + getSpellDifficulty(level);
    fail -= 6 * (2*schools + 0.5*spellcasting);
    fail -= 2 * intelligence;
    fail += penalties;

    // limit to 210
    fail = Math.min(210, fail);

    // weird polynomial smoothing
    fail = Math.max(0, (((fail + 426) * fail + 82670) * fail + 7245398) / 262144);

    // TODO: apply mutations, Vehumet, etc.

    // clamp to range 0-100%
    fail =  Math.max(0, Math.min(100, fail));

    return fail;
}

function calculateSpellFailRate(level)
{
    let fail = getRawSpellFailRate(level);

    if (fail <= 0)
        return 0;
    else if (fail >= 100)
        return (fail + 100)/2;
    else
        return Math.max(1, Math.floor(100 * _get_true_fail_rate(fail)));
}

function _get_true_fail_rate(raw_fail)
{
    // Need 3*random2avg(100,3) = random2(101) + random2(101) + random2(100)
    // to be (strictly) less than 3*raw_fail. Fun with tetrahedral numbers!

    // How many possible outcomes, considering all three dice?
    const outcomes = 101 * 101 * 100;
    const target = Math.floor(raw_fail) * 3;

    if (target <= 100)
    {
        // The failures are exactly the triples of nonnegative integers
        // that sum to < target.
        return (_tetrahedral_number(target)) / outcomes;
    }
    if (target <= 200)
    {
        // Some of the triples that sum to < target would have numbers
        // greater than 100, or a last number greater than 99, so aren't
        // possible outcomes. Apply the principle of inclusion-exclusion
        // by subtracting out these cases. The set of triples with first
        // number > 100 is isomorphic to the set of triples that sum to
        // 101 less; likewise for the second and third numbers (100 less
        // in the last case). Two or more out-of-range numbers would have
        // resulted in a sum of at least 201, so there is no overlap
        // among the three cases we are subtracting.
        return (_tetrahedral_number(target)
                      - 2 * _tetrahedral_number(target - 101)
                      - _tetrahedral_number(target - 100)) / outcomes;
    }
    // The random2avg distribution is symmetric, so the last interval is
    // essentially the same as the first interval.
    return (outcomes - _tetrahedral_number(300 - target)) / outcomes;
}

function _tetrahedral_number(n)
{
    return n * (n+1) * (n+2) / 6;
}
