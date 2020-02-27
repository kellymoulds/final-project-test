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

    $(document).on('click', '#down-arrow', (event) => {
        window.scrollBy(0, 700);
    });

    $(document).on('click', '#up-arrow', (event) => {
        window.scrollBy(0, -700);
    });

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

    // CHANGE FONT AND BACKGROUND COLOR OF NAV WHEN CHANGING PAGES - NEED TO DO

    $(document).on('scroll', (event) => {

        const scrollPosition = $(document).scrollTop();

        // if (scrollPosition <= 800) {
        //     // $('#nav-bar').removeClass('.home-page');
        //     console.log('were on home page');
        // } else if (scrollPosition > 800) {
        //     console.log('were on about page');
        // } else if (scrollPosition > 1600) {
        //     console.log('were on portfolio page');
        // } else if (scrollPosition > 2300) {
        //     console.log('were on resume page');
        // } else if (scrollPosition > 3050) {
        //     console.log('were on contact page');
        // } else {
        //     console.log('else');
        // }
        if (scrollPosition < 750) {
            $('#nav-bar').css('background-color', '#F8EDF8');
        } else if (scrollPosition >= 750 && scrollPosition < 1500) {
            // about page
            $('#nav-bar').css('background-color', '#FEEBE0');
        } else if (scrollPosition >= 1500 && scrollPosition < 2250) {
            // portfolio page
            $('#nav-bar').css('background-color', '#EFF6E5');
        } else if (scrollPosition >= 2250 && scrollPosition < 3000) {
            // resume page
            $('#nav-bar').css('background-color', '#DAF3EA');
        } else if (scrollPosition >= 3000) {
            // contact page
            $('#nav-bar').css('background-color', '#E1F5FA');
        }

    });



    //
    //PORTFOLIO PAGE - POP UP FUNCTIONALITY
    //

    $(document).on('click', '#portfolio-1', (event) => {
        $('#portfolio-pop-up-1').fadeIn('slow');
    });

    $(document).on('click', '#x-icon-1', (event) => {
        $('#portfolio-pop-up-1').fadeOut('slow');

    });

    $(document).on('click', '#portfolio-2', (event) => {
        $('#portfolio-pop-up-2').fadeIn('slow');
    });

    $(document).on('click', '#x-icon-2', (event) => {
        $('#portfolio-pop-up-2').fadeOut('slow');

    });

    $(document).on('click', '#portfolio-3', (event) => {
        $('#portfolio-pop-up-3').fadeIn('slow');
    });

    $(document).on('click', '#x-icon-3', (event) => {
        $('#portfolio-pop-up-3').fadeOut('slow');

    });



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