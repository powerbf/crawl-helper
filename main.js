
// decrement value when left arrow clicked
$(document).on('click', '.bi-caret-left-fill', function () {
    var valElmt = $(this).parent().children(".number-val").first();
    var oldVal = parseInt(valElmt.text());
    var newVal = oldVal - 1;
    
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
    var oldVal = parseInt(valElmt.text());
    var newVal = oldVal + 1;
    
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

$("select").on("change", function() {
    updateResults();
    return true;
});

// enable tooltips
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip()
})

populateSpeciesSelector();

parseData();
updateResults();


