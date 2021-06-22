var weaponData = {
    unarmed: { category: "unarmed", damage: "3", hit: "+6", delay: { base: 10, min: 5 }, },

    dagger: { name: "dagger", category: "short_blades", damage: "4", hit: "+6", delay: { base: 10, min: 5 }, img: "dagger" },
    "quick blade": { category: "short_blades", name: "quick_blade", damage: "5", hit: "+6", delay: { base: 7, min: 3 }, img: "quickblade" },
    "short sword": { category: "short_blades", name: "short_sword", damage: "6", hit: "+4", delay: { base: 11, min: 5 }, img: "short_sword" },
    rapier: { category: "short_blades", name: "rapier", damage: "8", hit: "+4", delay: { base: "12", min: 5 }, img: "rapier" },

    falchion: { category: "long_blades", name: "falchion", damage: "7", hit: "+2", delay: { base: 13, min: 6 }, img: "falchion" },
    "long sword": { category: "long_blades", name: "long_sword", damage: "9", hit: "+1", delay: { base: "14", min: 7 }, img: "long_sword" },
    scimitar: { category: "long_blades", name: "scimitar", damage: "11", hit: "0", delay: { base: 14, min: 7 }, img: "scimitar" },
    "demon blade": { category: "long_blades", name: "demon_blade", damage: "12", hit: "-1", delay: { base: 13, min: 6 }, img: "demon_blade" },
    "eudemon blade": { category: "long_blades", name: "eudemon_blade", damage: "13", hit: "-2", delay: { base: 12, min: 6 }, img: "blessed_blade" },
    "double sword": { category: "long_blades", name: "double_sword", damage: "14", hit: "-1", delay: { base: 15, min: 7 }, img: "double_sword" },
    "great sword": { category: "long_blades", name: "great_sword", damage: "15", hit: "-3", delay: { base: 17, min: 7 }, img: "greatsword" },
    "triple sword": { category: "long_blades", name: "triple_sword", damage: "17", hit: "-4", delay: { base: "19", min: 7 }, img: "triple_sword" },

    "hand axe": { category: "axes", name: "hand axe", damage: "7", hit: "+3", delay: { base: 13, min: 6 }, img: "hand_axe" },
    "war axe": { category: "axes", name: "hand axe", damage: 11, hit: "0", delay: { base: 15, min: 7 }, img: "war_axe" },
    "broad axe": { category: "axes", name: "hand axe", damage: 13, hit: "-2", delay: { base: 16, min: 7 }, img: "broad_axe" },
    "battleaxe": { category: "axes", name: "hand axe", damage: 15, hit: "-4", delay: { base: 17, min: 7 }, img: "battle_axe" },
    "executioner's axe": { category: "axes", name: "hand axe", damage: "17", hit: "-6", delay: { base: 20, min: 7 }, img: "executioner_axe" },

    whip: { category: "maces", name: "whip", damage: "6", hit: "+2", delay: { base: 11, min: 5 }, img: "bullwhip" },
    club: { category: "maces", name: "hand axe", damage: "5", hit: "+3", delay: { base: 13, min: 6 }, img: "club" },
    mace: { category: "maces", name: "hand axe", damage: "8", hit: "+3", delay: { base: 14, min: 7 }, img: "mace" },
    flail: { category: "maces", name: "hand axe", damage: "10", hit: "+0", delay: { base: 14, min: 7 }, img: "flail" },
    morningstar: { category: "maces", name: "hand axe", damage: "13", hit: "-2", delay: { base: 15, min: 7 }, img: "morningstar" },
    "demon whip": { category: "maces", name: "hand axe", damage: "11", hit: "+1", delay: { base: 11, min: 5 }, img: "demon_whip" },
    "sacred scourge": { category: "maces", name: "hand axe", damage: "12", hit: "+0", delay: { base: 11, min: 5 }, img: "sacred_scourge" },
    "dire flail": { category: "maces", name: "dire flail", damage: "13", hit: "-3", delay: { base: 13, min: 6 }, img: "dire_flail" },
    eveningstar: { category: "maces", name: "hand axe", damage: "15", hit: "-1", delay: { base: 15, min: 7 }, img: "eveningstar" },
    "great mace": { category: "maces", name: "hand axe", damage: "17", hit: "-4", delay: { base: 17, min: 7 }, img: "mace_large" },
    "giant club": { category: "maces", name: "hand axe", damage: "20", hit: "-6", delay: { base: 16, min: 7 }, img: "giant_club" },
    "giant spiked club": { category: "maces", name: "hand axe", damage: "22", hit: "-7", delay: { base: 22, min: 7 }, img: "spiked_giant_club" },

    spear: { category: "polearms", name: "spear", damage: "6", hit: "+4", delay: { base: 11, min: 6 }, img: "spear" },
    trident: { category: "polearms", name: "spear", damage: "9", hit: "+1", delay: { base: 13, min: 6 }, img: "trident" },
    halberd: { category: "polearms", name: "spear", damage: "13", hit: "-3", delay: { base: 15, min: 7 }, img: "halberd" },
    scythe: { category: "polearms", name: "spear", damage: "14", hit: "-4", delay: { base: 20, min: 7 }, img: "scythe" },
    "demon trident": { category: "polearms", name: "spear", damage: "12", hit: "+1", delay: { base: 13, min: 6 }, img: "demon_trident" },
    trishula: { category: "polearms", name: "spear", damage: "13", hit: "+0", delay: { base: 13, min: 6 }, img: "trishula" },
    glaive: { category: "polearms", name: "spear", damage: "15", hit: "-3", delay: { base: 17, min: 7 }, img: "glaive" },
    bardiche: { category: "polearms", name: "spear", damage: "18", hit: "-6", delay: { base: 20, min: 7 }, img: "bardiche" },

    quarterstaff: { category: "staves", name: "spear", damage: "10", hit: "+3", delay: { base: 13, min: 6 }, img: "quarterstaff" },
    lajatang: { category: "staves", name: "spear", damage: "16", hit: "-3", delay: { base: 14, min: 7 }, img: "lajatang" },
    staff: { category: "staves", name: "spear", damage: "5", hit: "+5", delay: { base: 12, min: 6 }, img: "staff" },

    /*
    "hunting sling": { category: "slings", name: "triple_sword", damage: "5", hit: "+2", delay: { base: 12, min: 6 }, img: "ranged/sling" },
    fustibalus: { category: "slings", name: "triple_sword", damage: "8", hit: "-1", delay: { base: 14, min: 7 }, img: "ranged/fustibalus" },

    shortbow: { category: "bows", name: "triple_sword", damage: "9", hit: "+2", delay: { base: 13, min: 6 }, img: "ranged/shortbow" },
    longbow: { category: "bows", name: "triple_sword", damage: "15", hit: "0", delay: { base: 17, min: 7 }, img: "ranged/longbow" },

    "hand crossbow": { category: "crossbows", name: "triple_sword", damage: "12", hit: "+5", delay: { base: 15, min: 10 }, img: "ranged/hand_crossbow" },
    arbalest: { category: "crossbows", name: "triple_sword", damage: "18", hit: "+2", delay: { base: 19, min: 10 }, img: "ranged/arbalest" },
    "triple crossbow": { category: "crossbows", name: "triple_sword", damage: "22", hit: "+0", delay: { base: 23, min: 10 }, img: "ranged/triple_crossbow" },

    stone: { category: "throwing", name: "triple_sword", damage: "2", hit: "+0", delay: { base: 11, min: 7 }, },
    boomerang: { category: "throwing", name: "triple_sword", damage: "6", hit: "+0", delay: { base: 13, min: 7 }, },
    javelin: { category: "throwing", name: "triple_sword", damage: "11", hit: "+0", delay: { base: 15, min: 7 }, },
    "large rock": { category: "throwing", name: "triple_sword", damage: "20", hit: "+0", delay: { base: 20, min: 7 }, },
    */
};


$("#data").on("change paste keyup", function() {
    parseData();
    calculate();
    return true;
});

$("#skills").on("change paste keyup", function() {
    calculate();
    return true;
});


var weapons;

function parseData()
{
    var data = $('textarea#data').val();

    try {
        var str = parseInt(/Str:\s+(\d+)/.exec(data)[1]);
        $('#strength').val(str);
    }
    catch (err) {
    }

    var lines = data.split('\n');

    weapons = [];
    for(var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.match(/Dungeon Overview/)) {
            break;
        }

        parseSkill(line);

        if (line.match(/^\s*[a-z]\s+\-\s+/)) {
            // inventory item - try to parse as weapon
            try {
                var weapon = /^\s*[a-z]\s+\-\s+(.*)$/.exec(line)[1];
                var w = parseWeapon(weapon);
                if (w != null) {
                    weapons.push(w);
                }
            }
            catch(err) {
            }
        }
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
            $('#fighting').val(val);
        else if (name == "Short Blades")
            $('#short_blades').val(val);
        else if (name == "Long Blades")
            $('#long_blades').val(val);
        else if (name == "Axes")
            $('#axes').val(val);
        else if (name == "Maces & Flails")
            $('#maces').val(val);
        else if (name == "Polearms")
            $('#polearms').val(val);
        else if (name == "Staves")
            $('#staves').val(val);
    }
    catch (err) {
    }
}

function parseWeapon(s) {
    var weapon = {
        enchantment: 0,
        brand: ""
    }
    weapon["name"] = s;

    try {
        weapon["enchantment"] = parseInt(/([\+\-][0-9]+)\s/.exec(s)[1]);
    } catch(err) {}
    
    for (var t in weaponData) {
        if (s.includes(t)) {
            weapon["type"] = t;
            break;
        }   
    }

    if (weapon["type"] == null) {
        return null;
    }

    weapon["brand"] = parseBrand(s);

    return weapon;
}

function parseBrand(s) {
    var m = /(freeze|flame|elec|holy|protect|distort|pain|drain|speed|vamp|antimagic|disrupt)/.exec(s);
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

function calculate()
{
    for(var i = 0; i < weapons.length; i++) {
        calcDamage(weapons[i]);
    }

    $('#stats').empty();
    $('#weapons > tbody:last-child').empty();

    for(var i = 0; i < weapons.length; i++) {
        var weap = weapons[i];

        var row = "<tr>";
        row += "<td>" + weaponToString(weap) + "</td>";

        row += "<td>";
        if (weap["delay"] != null) {
            if (weap["brand"] == "speed")
                row += weap["delay"].toFixed(2);
            else
                row += weap["delay"].toFixed(1);
        }
        row += "</td>";

        if (weap["damage_per_hit"] == null) {
            row += "<td></td><td></td><td></td>";
        }
        else {
            row += "<td>" + weap["damage_per_hit"]["base"].toFixed(1) + "</td>";
            row += "<td>" + weap["damage_per_hit"]["brand"].toFixed(1) + "</td>";
            row += "<td>" + weap["damage_per_hit"]["total"].toFixed(1) + "</td>";
        }

        if (weap["damage_per_turn"] == null) {
            row += "<td></td><td></td><td></td>";
        }
        else {
            row += "<td>" + weap["damage_per_turn"]["base"].toFixed(1) + "</td>";
            row += "<td>" + weap["damage_per_turn"]["brand"].toFixed(1) + "</td>";
            row += "<td>" + weap["damage_per_turn"]["total"].toFixed(1) + "</td>";
            row += "</tr>";
        }

        $('#weapons > tbody:last-child').append(row);
    }
}

function weaponToString(w) {
    var s = ""
    s += enchantmentToString(w["enchantment"]) + " ";
    s += w["type"]
    if (w["brand"] != "") {
        s += " (" + w["brand"] + ")";
    }
    return s;
}

function enchantmentToString(e) {
    if (e < 0)
        return e.toString();
    else
        return "+" + e.toString();
}

function calcDamage(weapon)
{
    weapon["delay"] = 1.0;

    var data = weaponData[weapon["type"]];
    if (data == null) {
        return;
    }

    var str = parseFloat($('#strength').val());
    var fighting = parseFloat($('#fighting').val());
    var weaponSkill = parseFloat($('#'+data["category"]).val());

    var strModifier = 1.0;
    if (str > 10) {
        // (39+((1d(str-8)-1)*2))/39
        // avg = (39 + str-9)/39 = (str + 30) / 39
        strModifier = (str + 30.0) / 39.0;
    }
    else if (str < 10) {
        // (39-((1d(12-str)-1)*3))/39
        // avg = (39-(12-str)/2*3)/39
        strModifier = (39-3/2*(12-str)) / 39.0;
    }

    var damage = data["damage"] * strModifier;

    // at this point random2 is applied and returns a number between 0 and the full potential damage
    // so average is half
    damage *= 0.5;

    // weapon skill modifier
    // [2499 + 1d(100 * weapon_skill +1)]/2500
    // avg = (2499 + (100*weapon_skill + 2) /2)/2500
    //     = (2500 + 50*weapon_skill)/2500
    //     = 1 +  (weapon_skill/50)
    var weaponSkillMod = 1.0 + (weaponSkill/50.0);


    // fighting skill modifier
    //(3999 + 1d(100 * fighting_skill +1))/4000
    // avg = (3999 + (100*fighting_skill+2)/2)/4000
    //     = 1.0 + 50*fighting_skill/4000
    //     = 1.0 + fighting_skill/80
    var fightingMod = 1.0 + (fighting/80.0);

    var damage_per_hit = {}
    damage_per_hit["base"] = damage * weaponSkillMod * fightingMod;

    // slaying/enchantment
    var slaying = 0; // TODO
    var effective_enchant = weapon["enchantment"] + slaying;
    // adds a random amount between 0 and eff. enchantment, so average is half
    damage_per_hit["base"] += effective_enchant / 2.0;

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

    damage_per_hit["total"] = damage_per_hit["base"] + damage_per_hit["brand"];
    weapon["damage_per_hit"] = damage_per_hit;


    var base_delay = data["delay"]["base"] / 10.0;
    var min_delay = data["delay"]["min"] / 10.0;

    //var delay = base_delay;
    var delay = base_delay - (0.1 * Math.floor(weaponSkill/2.0));
    delay = Math.max(delay, min_delay);
    if (weapon["brand"] == "speed") {
        delay = 2.0/3.0 * delay;
    }
    weapon["delay"] = delay;


    var damage_per_turn = {}
    damage_per_turn["base"] = damage_per_hit["base"] / delay;
    damage_per_turn["brand"] = damage_per_hit["brand"] / delay;
    damage_per_turn["total"] = damage_per_hit["total"] / delay;
    weapon["damage_per_turn"] = damage_per_turn;
}

