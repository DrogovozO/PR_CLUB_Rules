(function IIFE() {
    'use strict';
    var $overlayDialogPaster = $('.overlay1'),
        $overlayDialogSteril = $('.overlay2');

    $('.modal-link-paster').on('click', function () {
        $overlayDialogPaster.show();
    });

    $('.modal-link-steril').on('click', function () {
        $overlayDialogSteril.show();
    });
    $('.close').on('click', function () {
        $overlayDialogPaster.hide();
        $overlayDialogSteril.hide();
    });
})();
