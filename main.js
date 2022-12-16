
// decrement value when left arrow clicked
$(document).on('click', '.bi-caret-left-fill', function () {
    var valElmt = $(this).parent().children(".number-val").first();
    var oldVal = parseFloat(valElmt.text());
    var newVal = Math.ceil(oldVal) - 1;
    
    var min = valElmt.attr('min');
    if (typeof min !== 'undefined' && min !== false) {
        newVal = Math.max(newVal, min);
    }

    if (newVal != oldVal) {
        valElmt.text(newVal);
        updateResults();
    }
});

// increment value when right arrow clicked
$(document).on('click', '.bi-caret-right-fill', function () {
    var valElmt = $(this).parent().children(".number-val").first();
    var oldVal = parseFloat(valElmt.text());
    var newVal = Math.floor(oldVal) + 1;
    
    var max = valElmt.attr('max');
    if (typeof max !== 'undefined' && max !== false) {
        newVal = Math.min(newVal, max);
    }

    if (newVal != oldVal) {
        valElmt.text(newVal);
        updateResults();
    }
});

$("#data").on("change paste keyup", function() {
    parseData();
    updateResults();
    return true;
});

$("#species").on("change", function() {
    // if species changes then unarmed attack could change
    defaultUnarmed();
    return true;
});

$("select").on("change", function() {
    updateResults();
    $(this).blur();
    return true;
});

// enable tooltips
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip()
})

$("#combat_tab").on("click", function() {
    showCombatTab();
    return true;
});

$("#spells_tab").on("click", function() {
    showSpellsTab();
    return true;
});

function showCombatTab()
{
    // hide spell-related stuff
    $("#spells_tab").removeClass("active");
    $("#int_container").hide();
    $("#spell_skills").hide();
    $("#spells").hide();

    // show combat-related stuff
    $("#combat_tab").addClass("active");
    $("#dex_container").show();
    $("#fighting_container").show()
    $("#slaying_container").show()
    $("#enemy_ac_container").show()
    $("#combat_skills").show();
    $("#weapons").show();

    updateResults();
}

function showSpellsTab()
{
    // hide combat-related stuff
    $("#combat_tab").removeClass("active");
    $("#dex_container").hide()
    $("#fighting_container").hide()
    $("#slaying_container").hide()
    $("#enemy_ac_container").hide()
    $("#combat_skills").hide();
    $("#weapons").hide();

    // show spell-related stuff
    $("#spells_tab").addClass("active");
    $("#int_container").show()
    $("#spell_skills").show();
    $("#spells").show();

    updateResults();
}

populateVersionSelector();
populateSpeciesSelector();
populateBodyArmourSelector();

parseData();
showCombatTab();
