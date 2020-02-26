$(() => {



    // WAIT TILL EVERYTHING IS LOADED TO SHOW SITE

    $(window).on('load', () => {
        $("body").addClass('all-loaded');
    });

    // SCROLL HOME ON REFRESH

    $(document).ready(function() {
        $(this).scrollTop(0);
    });

    //
    //NAVIGATION ARROWS
    //

    //UP-ARROW APPEARS ON ALL BUT HOME SCREEN

    $(document).on('scroll', (event) => {

        const scrollPosition = $(document).scrollTop();

        console.log(scrollPosition);

        if (scrollPosition > 700) {
            $('#up-arrow').fadeIn('slow');
        } else if (scrollPosition <= 700) {
            $('#up-arrow').fadeOut('slow');
        } else {
            $('#up-arrow').fadeIn('slow');
        }
    });

    //NAV ARROW (SCROLL) FUNCTIONALITY


    //REMOVE DOWN ARROW ON CONTACT (LAST) PAGE

    $(document).on('scroll', (event) => {

        const scrollPosition = $(document).scrollTop();

        console.log(scrollPosition);

        if (scrollPosition <= 2900) {
            $('#down-arrow').fadeIn('slow');
        } else if (scrollPosition > 2900) {
            $('#down-arrow').fadeOut('slow');
        } else {
            $('#down-arrow').fadeIn('slow');
        }
    });

    // CHANGE FONT AND BACKGROUND COLOR OF NAV WHEN CHANGING PAGES

    $(document).on('scroll', (event) => {

        const scrollPosition = $(document).scrollTop();

        if (scrollPosition > 750) {
            $('#nav-bar').addClass('about-page');
            // } else {
            //     $('#up-arrow').fadeOut('slow');
            // }
        }
    });

    //
    //PORTFOLIO PAGE - POP UP FUNCTIONALITY
    //


    //
    //CONTACT PAGE - FORM INTERACTIVITY
    //

    //ON CLICK (FOCUS), REMOVE PLACEHOLDER TEXT

    $(document).on('focus', '.contact-form-input', (event) => {
        // console.log('form is working');
        let selection = $(event.currentTarget);
        $(selection).attr('placeholder', '');
    });

    //ON SUBMIT, REMOVE CONTENT FROM CONTACT FORM INPUTS
    //ALSO MAKE A THANK YOU PAGE POP UP

    $(document).on('click', '#hello-btn', (event) => {
        // let values = $('#name-input').val();
        // console.log($('input').val());
        $('.contact-form-input').val();
        // console.log('button works');

    });

});