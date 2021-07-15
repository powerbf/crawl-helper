const weaponData = {
    // Ref: https://github.com/crawl/crawl/blob/master/crawl-ref/source/item-prop.cc

    "unarmed": { category: "unarmed", damage: 3, hit: +6, delay: { base: 10, min: 5 }, },
    "claws 1": { category: "unarmed", damage: 5, hit: +6, delay: { base: 10, min: 5 }, },
    "claws 2": { category: "unarmed", damage: 7, hit: +6, delay: { base: 10, min: 5 }, },
    "claws 3": { category: "unarmed", damage: 9, hit: +6, delay: { base: 10, min: 5 }, },

    "dagger": { category: "short_blades", damage: 4, hit: +6, delay: { base: 10, min: 5 }, img: "dagger" },
    "quick blade": { category: "short_blades", damage: 5, hit: +6, delay: { base: 7, min: 3 }, img: "quickblade" },
    "short sword": { category: "short_blades", damage: 6, hit: +4, delay: { base: 11, min: 5 }, img: "short_sword" },
    "rapier": { category: "short_blades", damage: 8, hit: +4, delay: { base: 12, min: 5 }, img: "rapier" },

    "falchion": { category: "long_blades", damage: 7, hit: +2, delay: { base: 13, min: 6 }, img: "falchion" },
    "long sword": { category: "long_blades", damage: 9, hit: +1, delay: { base: 14, min: 7 }, img: "long_sword" },
    "scimitar": { category: "long_blades", damage: 11, hit: +0, delay: { base: 14, min: 7 }, img: "scimitar" },
    "demon blade": { category: "long_blades", damage: 12, hit: -1, delay: { base: 13, min: 6 }, img: "demon_blade" },
    "eudemon blade": { category: "long_blades", damage: 13, hit: -2, delay: { base: 12, min: 6 }, img: "blessed_blade" },
    "double sword": { category: "long_blades", damage: 14, hit: -1, delay: { base: 15, min: 7 }, img: "double_sword" },
    "great sword": { category: "long_blades", damage: 15, hit: -3, delay: { base: 17, min: 7 }, img: "greatsword" },
    "triple sword": { category: "long_blades", damage: 17, hit: -4, delay: { base: 19, min: 7 }, img: "triple_sword" },

    "hand axe": { category: "axes", damage: 7, hit: +3, delay: { base: 13, min: 6 }, img: "hand_axe" },
    "war axe": { category: "axes", damage: 11, hit: 0, delay: { base: 15, min: 7 }, img: "war_axe" },
    "broad axe": { category: "axes", damage: 13, hit: -2, delay: { base: 16, min: 7 }, img: "broad_axe" },
    "battleaxe": { category: "axes", damage: 15, hit: -4, delay: { base: 17, min: 7 }, img: "battle_axe" },
    "executioner's axe": { category: "axes", damage: 17, hit: -6, delay: { base: 20, min: 7 }, img: "executioner_axe" },

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
    "lance": { category: "polearms", damage: 8, hit: +4, delay: { base: 11, min: 6 }, img: "spear" },
    "trident": { category: "polearms", damage: 9, hit: +1, delay: { base: 13, min: 6 }, img: "trident" },
    "halberd": { category: "polearms", damage: 13, hit: -3, delay: { base: 15, min: 7 }, img: "halberd" },
    "scythe": { category: "polearms", damage: 14, hit: -4, delay: { base: 20, min: 7 }, img: "scythe" },
    "demon trident": { category: "polearms", damage: 12, hit: +1, delay: { base: 13, min: 6 }, img: "demon_trident" },
    "trishula": { category: "polearms", damage: 13, hit: +0, delay: { base: 13, min: 6 }, img: "trishula" },
    "glaive": { category: "polearms", damage: 15, hit: -3, delay: { base: 17, min: 7 }, img: "glaive" },
    "bardiche": { category: "polearms", damage: 18, hit: -6, delay: { base: 20, min: 7 }, img: "bardiche" },

    "quarterstaff": { category: "staves", damage: 10, hit: +3, delay: { base: 13, min: 6 }, img: "quarterstaff" },
    "lajatang": { category: "staves", damage: 16, hit: -3, delay: { base: 14, min: 7 }, img: "lajatang" },
    "staff": { category: "staves", damage: 5, hit: +5, delay: { base: 12, min: 6 }, img: "staff" },

    // missile base damage must be added to these (+2 for stones, +4 for bullets)
    "hunting sling": { category: "slings", damage: 5, hit: +2, delay: { base: 12, min: 6 }, img: "ranged/sling" },
    "fustibalus": { category: "slings", damage: 8, hit: -1, delay: { base: 14, min: 7 }, img: "ranged/fustibalus" },

    "shortbow": { category: "bows", damage: 9, hit: +2, delay: { base: 13, min: 6 }, img: "ranged/shortbow" },
    "longbow": { category: "bows", damage: 15, hit: 0, delay: { base: 17, min: 7 }, img: "ranged/longbow" },

    "hand crossbow": { category: "crossbows", damage: 12, hit: +5, delay: { base: 15, min: 10 }, img: "ranged/hand_crossbow" },
    "arbalest": { category: "crossbows", damage: 18, hit: +2, delay: { base: 19, min: 10 }, img: "ranged/arbalest" },
    "triple crossbow": { category: "crossbows", damage: 22, hit: +0, delay: { base: 23, min: 10 }, img: "ranged/triple_crossbow" },

    "stone": { category: "throwing", damage: 2, hit: +0, delay: { base: 11, min: 7 }, },
    "boomerang": { category: "throwing", damage: 6, hit: +0, delay: { base: 13, min: 7 }, },
    "javelin": { category: "throwing", damage: 11, hit: +0, delay: { base: 15, min: 7 }, },
    "large rock": { category: "throwing", damage: 20, hit: +0, delay: { base: 20, min: 7 }, },
};

const speciesData = {
    "barachi": { size: "medium" },
    "deep dwarf": { size: "medium" },
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
    "halfling": { size: "small", obsolete: true },

    // really obsolete
    "sludge elf": { size: "medium", obsolete: true },
    "high elf": { size: "medium", obsolete: true },
    "lava orc": { size: "medium", obsolete: true },
};

const armourData =
{
    "animal skin": { ac: 2, ev_penalty: 0, slot: "body_armour" },
    "robe": { ac: 2, ev_penalty: 0, slot: "body_armour" },
    "leather armour": { ac: 3, ev_penalty: 4, slot: "body_armour" }, 
    "troll leather armour": { ac: 4, ev_penalty: 4, slot: "body_armour" },
    "ring mail": { ac: 5, ev_penalty: 7, slot: "body_armour" },
    "scale mail": { ac: 6, ev_penalty: 10, slot: "body_armour" },
    "chain mail": { ac: 8, ev_penalty: 15, slot: "body_armour" },
    "plate armour": { ac: 10, ev_penalty: 18, slot: "body_armour" },
    "crystal plate armour": { ac: 14, ev_penalty: 23, slot: "body_armour" },

    "steam dragon scales": { ac: 5, ev_penalty: 0, slot: "body_armour" },
    "acid dragon scales": { ac: 6, ev_penalty: 5, slot: "body_armour" },
    "swamp dragon scales": { ac: 7, ev_penalty: 7, slot: "body_armour" },
    "quicksilver dragon scales": { ac: 9, ev_penalty: 7, slot: "body_armour" },
    "fire dragon scales": { ac: 8, ev_penalty: 11, slot: "body_armour" },
    "ice dragon scales": { ac: 9, ev_penalty: 11, slot: "body_armour" },
    "pearl dragon scales": { ac: 10, ev_penalty: 11, slot: "body_armour" },
    "shadow dragon scales": { ac: 10, ev_penalty: 15, slot: "body_armour" },
    "storm dragon scales": { ac: 10, ev_penalty: 15, slot: "body_armour" },
    "gold dragon scales": { ac: 12, ev_penalty: 23, slot: "body_armour" },

    "cloak": { ac: 1, ev_penalty: 0, slot: "cloak" },
    "scarf": { ac: 0, ev_penalty: 0, slot: "cloak" },

    "gloves": { ac: 1, ev_penalty: 0, slot: "gloves" },

    "helmet": { ac: 1, ev_penalty: 0, slot: "helmet" },
    "hat": { ac: 0, ev_penalty: 0, slot: "helmet" },

    "boots": { ac: 1, ev_penalty: 0, slot: "boots" },
    "barding": { ac: 4, ev_penalty: 6, slot: "boots" },

    "buckler": { old_name: "small shield", sh: 3, ev_penalty: 0.8, slot: "shield"},
    "kite shield": { old_name: "medium shield", sh: 8, ev_penalty: 3, slot: "shield"  },
    "tower shield": { old_name: "large shield", sh: 13, ev_penalty: 5, slot: "shield" }, 

};

const slots = ["body_armour", "helmet", "boots", "cloak", "shield"];


// globals - yuck
var crawlVersion = 0.26;
var weapons = [];

// capitalize first letter of all words
function capitalizeWords(str) {
    var result = str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
    return result;
}

// add option to selector
function addToSelector(selectorId, value, description, disabled = false)
{
    var selector = $('#' + selectorId);
    if (selector == null) {
        return;
    }

    var option = $("<option></option>");
    option.attr("value", value);
    option.attr("disabled", disabled);
    option.text(description);

    selector.append(option);
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
            name += "(✝)";
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

function populateEnchantmentSelector(id)
{
    var selector = $('#' + id);
    selector.empty(); // remove old options

    for (var i = 20; i >= -20; i--) {
        var value = (i >= 0 ? '+' : '');
        value += i.toString();
        addToSelector(id, value, value);
    }

    selector.val("+0");
}

function populateEnchantmentSelectors()
{
    populateEnchantmentSelector("body_armour_enchantment");
    populateEnchantmentSelector("helmet_enchantment");
    populateEnchantmentSelector("boots_enchantment");
    populateEnchantmentSelector("cloak_enchantment");
    populateEnchantmentSelector("shield_enchantment");
}

function populateArmourSelectors()
{
    $('#body_armour').empty();
    $('#helmet').empty();
    $('#boots').empty();
    $('#cloak').empty();
    $('#shield').empty();

    addToSelector("body_armour", "none", "None");
    addToSelector("helmet", "none", "None");
    addToSelector("boots", "none", "None");
    addToSelector("cloak", "none", "None");
    addToSelector("shield", "none", "None");

    for (const [key, value] of Object.entries(armourData)) {
        var description = key.replace(/ (armour|scales)/, '');
        description = description.replace(/^(.)/, c => c.toUpperCase());
        addToSelector(value["slot"], key, description);
    }
}

function reset()
{
    weapons = [];

    $(".number-val").text("0");

    $('#strength').text("10");
    $('#dexterity').text("10");
    $('#enemy_ac').text("1");

    $('#species').val("human");
    $('#body_armour').val("none");
    $('#helmet').val("none");
    $('#boots').val("none");
    $('#cloak').val("none");
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
    var lines = data.split('\n');

    var section = "Header";
    for(var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.match(/spell levels/)) {
            break;
        }
        else if (line.match(/Inventory/)) {
            section = "Inventory";
            continue;
        }
        else if (line.match(/Skills/)) {
            section = "Skills";
            continue;
        }

        if (section == "Header") {
            var version = line.match(/version\s+(\d+\.\d+)/);
            if (version != null) {
                crawlVersion = parseFloat(version[1]);
            }

            // get player species
            if (line.match(/Turns:/i)) {
                for (var sp in speciesData) {
                    var re = new RegExp(sp, 'i');
                    if (re.test(line)) {
                        $('#species').val(sp);
                        defaultUnarmed();
                    }
                }
            }

            var str = /str:\s*(\d+)/i.exec(line);
            if (str && str.length >= 2) {
                $('#strength').text(parseInt(str[1]));
            }

            var dex = /dex:\s*(\d+)/i.exec(line);
            if (dex && dex.length >= 2) {
                $('#dexterity').text(parseInt(dex[1]));
            }

            var xl = /XL:\s*(\d+)/i.exec(line);
            if (xl && xl.length >= 2) {
                $('#XL').text(parseInt(xl[1]));
            }

            // replace unarmed with current claws rank
            var claws = line.match(/claws [1-3]/);
            if (claws != null) {
                weapons[0] = parseWeapon(claws[0]);
            }

            parseArmour(line);

            parseBonus('#ac_bonus', /AC([\+\-][0-9]+)/, line);
            parseBonus('#ac_bonus', /([\+\-][0-9]+) ring of protection/, line);

            parseBonus('#ev_bonus', /EV([\+\-][0-9]+)/, line);
            parseBonus('#ev_bonus', /([\+\-][0-9]+) ring of evasion/, line);
        }
        else if (section == "Inventory") {
            // inventory item - try to parse as weapon
            var w = parseWeapon(line);
            if (w != null) {
                addWeapon(w);
                if (w["ref_data"]["category"] == "slings") {
                    // handle for both stones and bullets as ammo
                    var w2 = {};
                    Object.assign(w2, w);
                    addWeapon(w2);
                    w["description"] += " with stones";
                    w2["description"] += " with bullets";
                }
            }
            else {
            }
        }
        else {
            parseSkill(line);
        }
    }
}

function parseBonus(id, regex, line)
{
    var m = regex.exec(line);
    if (m && m[1].length >= 2) {
        var bonus = getNumericInput(id);
        bonus += parseInt(m[1]);
        $(id).text(bonus.toString());
    }
}

function parseSkill(line)
{
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
        else if (name == "Dodging")
            $('#dodging').text(val);
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
        else if (name == "Slings")
            $('#slings').text(val);
        else if (name == "Bows")
            $('#bows').text(val);
        else if (name == "Crossbows")
            $('#crossbows').text(val);
        else if (name == "Throwing")
            $('#throwing').text(val);
    }
    catch (err) {
    }
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

    for (var t in weaponData) {
        if (s.includes(t)) {
            // some weapon names include other weapon names (e.g. "demon whip" includes "whip")
            // we want to take the longest match
            if (weapon["type"] == null || t.length > weapon["type"].length) {
                weapon["type"] = t;
            }
        }   
    }

    if (weapon["type"] == null) {
        return null;
    }

    var refData = weaponData[weapon["type"]]
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

// parse a worn armour line from inventory
function parseArmour(s) {

    if (!/ [a-zA-Z] \- /.test(s)) {
        return;
    }

    var armType = null;

    for (var t in armourData) {
        var found = false;
        if (s.includes(t)) {
            found = true;
        }
        else {
            var oldName = armourData[t]["old_name"];
            if (oldName && s.includes(oldName)) {
                found = true;
            }
        }

        if (found) {
            // some armour names include other armour names
            // we want to take the longest match
            if (armType == null || t.length > armType.length) {
                armType = t;
            }
        }   
    }

    if (armType == null) {
        return;
    }

    var refData = armourData[armType]
    if (refData == null) {
        return;
    }

    var slot = refData["slot"];

    $('#' + slot).val(armType);

    // enchantment
    var m = /([\+\-][0-9]+)\s/.exec(s);
    if (m && m[1].length >= 2) {
        $('#' + slot + '_enchantment').val(m[1]);
    }
}


function updateResults()
{
    calculate_AC_EV_SH();

    var shieldSpeedPenalty = calcShieldSpeedPenalty();

    for(var i = 0; i < weapons.length; i++) {
        calcDamage(weapons[i], shieldSpeedPenalty);
    }

    $('#stats').empty();
    $('#weapons > tbody:last-child').empty();

    for(var i = 0; i < weapons.length; i++) {
        var weap = weapons[i];

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
    var wtype = w["type"];
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
        else
            s += wtype
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
function calcDamage(weapon, shieldSpeedPenalty)
{
    var refData = weapon["ref_data"];
    if (refData == null) {
        return;
    }

    var unarmed = (refData["category"] == "unarmed");

    var str = parseFloat($('#strength').text());
    var fighting = parseFloat($('#fighting').text());
    var weaponSkill = parseFloat($('#'+refData["category"]).text());
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
        if (refData["category"] == "slings") {
            if (weapon["description"].match(/bullets/))
                base_damage += 4; // using sling bullets
            else
                base_damage += 2; // using stones
        }
        weightedDamage[base_damage] = 1;
    }


    // strength modifier

    prevWeightedDamage = weightedDamage;
    weightedDamage = {};

    if (crawlVersion >= 0.27) {
        // this has changed in version 0.27
        // there's no longer a random element
        // max(1.0, 75 + 2.5 * you.strength()) / 100
        for (const [damage, weight] of Object.entries(prevWeightedDamage)) {
            var dam = parseInt(damage);
            var newDam = Math.floor(dam * Math.max(1.0, 75 + 2.5 * str));
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
    else if (weapon["brand"] == "holy") {
        // 0-150% -> avg = 75%
        damage_per_hit["brand"] = 0.75 * damage_per_hit["base"];
    }
    else if (weapon["brand"] == "drain") {
        // 0-50% + 1+1d3 -> avg = 25% + 2
        damage_per_hit["brand"] = (0.25 * damage_per_hit["base"]) + 2.0;
    }
    else if (weapon["brand"] == "elec") {
        // 1/3 chance to inflict 7+1d13 -> avg = 14/3
        damage_per_hit["brand"] = 14.0/3.0;
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

function calcShieldPenalty()
{
    var penalty;

    var shield = $("#shield").val();
    switch (shield) {
        case "buckler": penalty = 0.8; break;
        case "kite shield": penalty = 3; break;
        case "tower shield": penalty = 5; break;
        default: return 0;
    }

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

    // ref: player::adjusted_shield_penalty (player.cc)
    penalty -= shieldsSkill / (5 + racialFactor);

    return Math.max(0, penalty);
}

function calcShieldSpeedPenalty() {
    var shieldPenalty = calcShieldPenalty();
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

function getSizeFactor()
{
    var speciesName = $('#species').val();
    var size = speciesData[speciesName]["size"];  

    if (size == "little") {
        return 4;
    }
    else if (size == "small") {
        return 2;
    }
    else if (size == "large") {
        return -2;
    }
    else {
        return 0;
    }
}

// Determines racial shield penalties (formicids get a bonus compared to
// other medium-sized races)
function player_shield_racial_factor()
{
    var modifier;
    if ($("#species").val() == "formicid") {
        modifier = -2;
    }
    else {
        modifier = getSizeFactor();
    }
    return 5 + modifier;
}


function calculate_AC_EV_SH()
{
    var armourSkill = getNumericInput('#armour');

    var ac = racial_ac();
    var sh = 0;

    for (var slot of slots) {
        var selection = $('#' + slot).val();
        var armour = armourData[selection];
        if (armour != null) {
            var enchantment = parseInt($('#' + slot + '_enchantment').val());
            if (slot == "shield") {
                sh += armour["sh"] + enchantment;
            }
            else {
                ac += armour["ac"] * (1 + armourSkill / 22);
                ac += enchantment;
            }
        }
    }
    ac += getNumericInput('#ac_bonus');
    ac = Math.trunc(ac);

    var ev = player_evasion();

    $("#AC").text(ac.toString());
    $("#EV").text(ev.toString());
    $("#SH").text(sh.toString());
}

function racial_ac()
{
    var species = $('#species').val();
    var experience_level = getNumericInput('#XL');

    var AC = 0;
    if (species == "draconian") {
        AC = 4 + (experience_level / 3);  // max 13
        //if (species == SP_GREY_DRACONIAN) // no breath
        //    AC += 5;
    }
    else if (species == "naga") {
        AC = experience_level / 3;
    }
    else if (species == "gargoyle") {
        AC = 2 + experience_level * 2 / 5
             + Math.max(0, experience_level - 7) * 2 / 5;
    }

    return Math.trunc(AC);
}

function getNumericInput(id)
{
    var elmt = $((id.startsWith('#') ? '' : '#') + id);
    if (elmt) {
        if (elmt.attr("value") != null)
            return parseFloat(elmt.val());
        else
            return parseFloat(elmt.text());
    }
    return 0;
}

function unadjusted_body_armour_penalty()
{
    var armour = armourData[$('#body_armour').val()];
    if (armour == null) {
        return 0;
    }
    return armour["ev_penalty"];    
}

function adjusted_body_armour_penalty(scale)
{
    var strength = getNumericInput('#strength');
    var armourSkill = getNumericInput('#armour');

    var base_ev_penalty = unadjusted_body_armour_penalty();

    var result = 2 * base_ev_penalty * base_ev_penalty * scale;
    result *= (450 - 10 * armourSkill);
    result = Math.trunc(result / (5 * (strength + 3)));
    result = Math.trunc(result / 450);

    return result;
}

function player_armour_adjusted_dodge_bonus(scale)
{
    var dex = getNumericInput('#dexterity');
    var dodging = getNumericInput('#dodging');

    // step down dex > 18, step up dex < 18
    var evDex = Math.round(18 * Math.log2(1 + dex / 18));

    var dodge_bonus = Math.trunc(Math.trunc((70 + dodging * 10 * evDex) * scale / (20 - getSizeFactor())) / 10);

    var armour_dodge_penalty = unadjusted_body_armour_penalty() - 3;
    if (armour_dodge_penalty <= 0)
        return dodge_bonus;

    var str = Math.max(1, getNumericInput('#strength'));
    if (armour_dodge_penalty >= str)
        return Math.trunc(dodge_bonus * str / (armour_dodge_penalty * 2));
    else
        return dodge_bonus - Math.trunc(dodge_bonus * armour_dodge_penalty / (str * 2));
}

function player_adjusted_evasion_penalty(scale)
{
    // penalties from auxilliary armour (helmet, boot, cloak)
    var aux_armour_penalty = 0;
    for (var slot of slots) {
        if (slot == "shield" || slot == "body_armour") {
            continue;
        }
        var selection = $('#' + slot).val();
        var armour = armourData[selection];
        if (armour != null) {
            var penalty = Math.trunc(armour["ev_penalty"] * 10 / 3);
            if (penalty > 0)
                aux_armour_penalty += penalty;
        }
    }

    aux_armour_penalty = Math.trunc(aux_armour_penalty * scale / 10);
    var body_armour_penalty = adjusted_body_armour_penalty(scale);
    return aux_armour_penalty + body_armour_penalty;
}

function adjusted_shield_penalty(scale)
{
    var shield = armourData[$("#shield").val()];
    if (shield == null) {
        return 0;
    }

    var shieldsSkill = parseFloat($("#shields").text());

    var penalty = shield["ev_penalty"] * 10 * scale;

    penalty -= shieldsSkill * scale / player_shield_racial_factor() * 10;

    penalty = penalty / 10;

    return Math.max(0, penalty);
}

// get evasion bonuses from rings and artefacts
function player_evasion_bonuses()
{
    return getNumericInput('#ev_bonus');
}

function player_evasion()
{
    var scale = 100;

    var size_factor = getSizeFactor();
    var size_base_ev = (10 + size_factor) * scale;
    var adj_dodge_bonus = player_armour_adjusted_dodge_bonus(scale);
    var adj_evasion_penalty = player_adjusted_evasion_penalty(scale);
    var adj_shield_penalty = adjusted_shield_penalty(scale);

    var prestepdown_evasion = size_base_ev + adj_dodge_bonus - adj_evasion_penalty - adj_shield_penalty;

    var poststepdown_evasion =
        stepdown_value(prestepdown_evasion, 20*scale, 30*scale, 60*scale, -1);

    var evasion_bonuses = player_evasion_bonuses() * scale;

    var final_evasion = poststepdown_evasion + evasion_bonuses;

    // descale
    final_evasion = Math.ceil(final_evasion / scale);

    return final_evasion;
}

// returns double in C++ (so no trunc)
function _stepdown(value, step)
{
    return step * Math.log2(1 + value / step);
}

// returns int in C++
function stepdown(value, step, roundDown, max)
{
    var ret = _stepdown(value, step);

    if (max > 0 && ret > max)
        return max;

    if (roundDown)
        return Math.floor(ret);
    else
        return Math.round(ret);
}

// returns int in C++
function stepdown_value(base_value, stepping, first_step,
                   last_step, ceiling_value)
{
    if (ceiling_value < 0)
        ceiling_value = 0;

    if (ceiling_value && ceiling_value < first_step)
        return min(base_value, ceiling_value);
    if (base_value < first_step)
        return base_value;

    var diff = first_step - stepping;
    // Since diff < first_step, we can assume here that ceiling_value > diff
    // or ceiling_value == 0.
    return diff + stepdown(base_value - diff, stepping, true,
                           ceiling_value ? ceiling_value - diff : 0);
}


