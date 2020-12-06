/**
 * Ipsum.js - Lightweight jQuery Dummy Text Generator
 * https://github.com/Bitkindle/Ipsum.js
 *
 * Copyright 2016 Bitkindle
 * Released under the MIT license
 *
 */
Ipsum = {

    init: function()
    {
        $('[data-ipsum]').each(function () {
            $(this).text(Ipsum.returnString($(this).data('ipsum')));
        });
    },

    returnString: function (count) {
        var string = 'Ipsum ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ' +
            'labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
            'Stet clita kasd gubergren, no sea takimata sanctus est Ipsum ipsum dolor sit amet.';

        if (count > string.length) {

            var loop = Math.round(parseFloat(count / string.length));

            for ($i = 0; $i < loop; $i++) {
                string = string + ' ' + string;
            }

            return string.substring(0, count);

        } else {

            return string.substring(0, count);

        }
    }

};

$(document).ready(function() {
    Ipsum.init();
});
