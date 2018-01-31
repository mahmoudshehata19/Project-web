/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//like button en de dropdownm mobiel filter op de homepage 
$(function () {
    $(".favourite").click(function () {
        var zwart = 'fotos/like-zwart.png';
        var rood = 'fotos/like-rood.png';

        if ($(this).children("img").attr('src') == zwart) {
            $(this).children("img").attr('src', rood);
        } else {
            $(this).children("img").attr('src', zwart);
        }
    });
    $(".filter-btn").click(function () {

        var open = 'fotos/pijl.png';
        var dicht = 'fotos/pijl.png';

        $('.filter').toggleClass("showFilter");
        $(this).children("img").toggleClass('flip');

    });

    //Add button op de verhalen pagina's veranderd van wit naar geel
    $(".addBtn").click(function () {
        var wit = 'fotos/voegtoe-wit.png';
        var geel = 'fotos/voegtoe-geel.png';

        if ($(this).children("img").attr('src') == wit) {
            $(this).children("img").attr('src', geel);
        } else {
            $(this).children("img").attr('src', wit);
        }
    });

    // Download button op de verhalen pagina's de button is toegevoegd als drie afbeeldingen download, downloaden en gedownload als de gebruiker er op download klikt veranderd het afbeelding naar downloaden en na 2 seconde krijgt hij het afbeelding gedownload te zien.

    $(".dlBtn").click(function () {
        var start = 'fotos/download.png';
        var progress = 'fotos/45.png';
        var finish = 'fotos/gedownload.png';

        if ($(this).children("img").attr('src') == start) {
            console.log("test");
            $(this).children("img").attr('src', progress);
            window.setTimeout(function () {
                console.log("timer");
                $('.dlBtn').children("img").attr('src', finish);
                console.log("end timer");
            }, 2000);
        } else {
            $(this).children("img").attr('src', start);
        }
    });
});
