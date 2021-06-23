var weaponData = {
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

    /*
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

$("#enemy_ac").on("change paste keyup", function() {
    calculate();
    return true;
});


var weapons = [];

function reset()
{
    weapons = [];

    $('#strength').val(10);

    $('#fighting').val(0);
    $('#short_blades').val(0);
    $('#long_blades').val(0);
    $('#axes').val(0);
    $('#maces').val(0);
    $('#polearms').val(0);
    $('#staves').val(0);
    $('#unarmed').val(0);
}

function parseData()
{
    reset();

    var data = $('textarea#data').val();
    var lines = data.split('\n');

    for(var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.match(/spell levels/)) {
            break;
        }

        var str = /Str:\s*(\d+)/.exec(line);
        if (str && str.length >= 2) {
            $('#strength').val(parseInt(str[1]));
        }

        // unarmed
        if (weapons.length == 0) {
            var claws = line.match(/claws [1-3]/);
            if (claws != null) {
                weapons.push(parseWeapon(claws[0]));
            }
            else if (line.match(/Inventory/)) {
                // standard unarmed (fist, tentacle, etc.)
                weapons.push(parseWeapon("unarmed"));
            }
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
        else if (name == "Unarmed Combat")
            $('#unarmed').val(val);
    }
    catch (err) {
    }
}

function parseWeapon(s) {
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

    weapon["ref_data"] = weaponData[weapon["type"]];

    try {
        weapon["enchantment"] = parseInt(/([\+\-][0-9]+)\s/.exec(s)[1]);
    } catch(err) {}
    
    weapon["brand"] = parseBrand(s);

    weapon["description"] = weaponToString(weapon);

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
        row += "<td>" + weap["description"] + "</td>";

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
    var wtype = w["type"];
    if (wtype == "unarmed") {
        return wtype;
    }
    else if (wtype.match(/^claws/)) {
        return "unarmed (" + wtype + ")";
    }
    else {
        var s = ""
        s += numStringWithSign(w["enchantment"]) + " ";
        s += wtype
        if (w["brand"] != "") {
            s += " (" + w["brand"] + ")";
        }
        return s;
    }
}

function numStringWithSign(e) {
    return (e<0?"":"+") + e.toString();
}

function calcDamage(weapon)
{
    var refData = weapon["ref_data"];
    if (refData == null) {
        return;
    }

    var unarmed = (refData["category"] == "unarmed");

    var str = parseFloat($('#strength').val());
    var fighting = parseFloat($('#fighting').val());
    var weaponSkill = parseFloat($('#'+refData["category"]).val());
    var enemy_ac = parseInt($('#enemy_ac').val());

    // base damage
    var max_damage = refData["damage"];
    if (unarmed) {
        max_damage += weaponSkill;
    }
    
    // strength modifier
    var strModifier = 1.0;
    if (str > 10) {
        // [39 + (random2(you.strength() - 9) * 2)] / 39
        // avg = (39 + str-9)/39
        //     = (str + 30) / 39
        strModifier = (str + 30.0) / 39.0;
    }
    else if (str < 10) {
        // [39 - (random2(11 - you.strength()) * 3)] / 39
        // avg = [39-((11-str)*3/2)]/39
        //     = 1 - (11-str)/26
        strModifier = 1.0 - ((11-str)/26.0);
    }
    max_damage *= strModifier;
    max_damage = Math.floor(max_damage);

    var weaponSkillMod = 1.0;
    if (!unarmed) {
        // weapon skill modifier
        // [2500 + (random2(you.skill(wpn_skill, 100) + 1))] / 2500
        // avg = 1 + 100*weapon_skill/2/2500
        //     = 1 + (weapon_skill/50)
        weaponSkillMod += (weaponSkill/50.0);
    }

    // fighting skill modifier
    // [30 * 100 + (random2(you.skill(SK_FIGHTING, 100) + 1))] / (30 * 100)
    // avg = 1 + fighting_skill/2/30
    //     = 1 + fighting_skill/60
    var fightingMod = 1.0 + (fighting/60.0);

    // slaying/enchantment
    var slaying = 0; // TODO
    var effective_enchant = weapon["enchantment"] + slaying;
    var slay_bonus_min = Math.min(effective_enchant, 0)
    var slay_bonus_max = Math.max(effective_enchant, 0)

    // damage is randomized, as is slaying bonus, and protection provided by enemy ac
    // work out the average
    var sum = 0;
    var count = 0;
    for (var dam = 0; dam <= max_damage; dam++) {
        var damage = Math.floor(dam * weaponSkillMod * fightingMod);
        for (var slay_bonus = slay_bonus_min; slay_bonus <= slay_bonus_max; slay_bonus++) {
            for (var saved = 0; saved <= enemy_ac; saved++) {
                count++;
                sum += Math.max(0, damage + slay_bonus - saved);
            }
        }
    }
    var avg_damage = sum/count;

    var damage_per_hit = {}
    damage_per_hit["base"] = avg_damage;


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


    // calculate delay
    var base_delay = refData["delay"]["base"] / 10.0;
    var min_delay = refData["delay"]["min"] / 10.0;

    var delay = base_delay;
    if (unarmed) {
        delay -= weaponSkill * (base_delay - min_delay) / 27.0;
    }
    else {
        delay -= 0.1 * Math.floor(weaponSkill/2.0);
    }
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

