//JP Tabs ///////////////////////////////// JP Tabs /////////////////////////////////
$(function($) {

    $.fn.tabs = function(options) {

        var tabsThis = $(this);

        $(this).wrapInner('<div class="tabs-container">');

        $(this).find('.tab:first-child').addClass('selected_tab');

        $(this).each(function() {
            var content = $(this).find('.selected_tab').attr('data-tab');

            $('.' + content).addClass('selected-content');
            $('.' + content).children().css('opacity', '0').fadeTo('slow', 1);

        });

        $(this).find('.tab').click(function(e) {
            e.preventDefault();

            var myDiv = $(this).attr('data-tab');
            var parent = $(this).parent().parent();
            $(parent).find('div').removeClass('selected-content');
            $(parent).find('.' + myDiv).addClass('selected-content').children().css('opacity', '0').fadeTo('slow', 1);
            $(parent).find('li').removeClass('selected_tab');
            $(this).addClass('selected_tab');


        });

        function hash() {
            var getHash = window.location.hash.substring(1);
            
            var findInDataTab = $(tabsThis).find('ul').find("[data-tab='" + getHash  + "']");
            
            var openTab = $(findInDataTab).attr('data-tab');
                      
            if (openTab === getHash) {

                $('.' + openTab).parent().find('div').removeClass('selected-content');
                $('.' + openTab).addClass('selected-content').children().css('opacity', '0').fadeTo('slow', 1);
                $('.' + openTab).parent().find('li').removeClass('selected_tab');
                $('.' + openTab).parent().find('li[ data-tab=' + getHash + ']').addClass('selected_tab');

            }
            
        }
        
        if(window.location.hash){
         hash();
        }

        $(window).on('hashchange', function() {
            hash();
        });

    };
    $('.tabs').tabs();
}(window.jQuery));