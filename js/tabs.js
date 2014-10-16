/*!
 * Copyright 2014, Jeffrey Poland
 * Released under the MIT License.
 * http://jquery.org/license
 * Title: Tabs
*/

$(function($) {

    $.fn.tabs = function(options) {

        var tabsThis = $(this);

        $(this).wrapInner('<div class="tabs-container">');

        $(this).find('.tab:first-child').addClass('selected_tab');

        $(this).each(function() {
            var content = $(this).find('.selected_tab').attr('data-tab');

            $('.' + content).addClass('selected-content');
            $('.' + content).children().css('display', 'none');
            $('.' + content).children().fadeIn();

        });

        $('.tab').click(function(e) {
            e.preventDefault();

            var myDiv = $(this).attr('data-tab');
            var parent = $(this).parent().parent();
            $(parent).find('div').removeClass('selected-content');
            $(parent).find('.' + myDiv).addClass('selected-content');
            $(parent).find('.' + myDiv).children().css('display', 'none');
            $(parent).find('.' + myDiv).children().fadeIn();
            $(parent).find('li').removeClass('selected_tab');
            $(this).addClass('selected_tab');


        });

        function hash() {
            var p = window.location.hash.substring(1);
            
            var h = $(tabsThis).find('ul').find("[data-tab='" + p  + "']");
            
            var i = $(h).attr('data-tab');
            
          

            if (i === p) {

                $('.' + i).parent().find('div').removeClass('selected-content');
                $('.' + i).addClass('selected-content');
                $('.' + i).addClass('selected-content').children().css('display', 'none');
                $('.' + i).addClass('selected-content').children().fadeIn();
                $('.' + i).parent().find('li').removeClass('selected_tab');
                $('.' + i).parent().find('li[ data-tab=' + p + ']').addClass('selected_tab');

            }
            
        }
        hash();

        $(window).on('hashchange', function() {
            hash();
        });

    };
    $('.tabs').tabs();
}(window.jQuery));