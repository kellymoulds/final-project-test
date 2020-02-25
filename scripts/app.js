$(() => {

    $(window).on('load', () => {
        $("body").addClass('all-loaded');
    });

    $(document).ready(function() {
        $(this).scrollTop(0);
    });

});