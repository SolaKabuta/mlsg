$(document).ready(function () {
    $(".banner").css({
        opacity: 0,
        transform: "translateX(30px)",
        transition: "0.6s",
    });

    setTimeout(function () {
        $(".banner").css({
            opacity: 1,
            transform: "translateX(0px)",
        });
    }, 1000); // <- parenthèse fermée ici correctement
});
