$(document).ready(function () {
    $(".record").on("click", function () {
        document.getElementById('Fmin').play();
        $('#Fmin').prop("volume", .8);
        $(".record").addClass('rotate');
    })
});


//var drums1 = document.getElementById('drums1');
//drums1("record".addEventListener('click', function () {
//    drums1.play();
//    drums1.volume = .5;
//});