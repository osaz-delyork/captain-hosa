// //* Target Date Must be Like Below
// //var date = new Date("June 15, 2016 12:45:00");

// // Just for running purpose
// //=======================================
// var eventDate = new Date('2020-09-27 22:00:00');
// eventDate.setDate(eventDate.getDate());
// eventDate.setHours(0,0,0,0)
// //======================================
// var now   = new Date();

// var countdown = (now.getTime() - eventDate.getTime()) / 1000;

// 	var clock = $('#clock1').FlipClock(countdown, {
// 		clockFace: 'HourlyCounter',
// 		countdown: false,
// 		showSeconds: true
// 	});

var clock = $('.clock').FlipClock({
    clockFace: 'DailyCounter',
    countdown: true,
    showSeconds: true
});

// input your custom Date below
var eventDate = new Date('2021-08-21 00:00:00');


var dif = (eventDate.getTime() / 1000) - ((new Date().getTime())/1000);

var end = Math.max(0, dif);

clock.setTime(end);
clock.start();


// PQINA
function handleTickInit(tick) {

    // uncomment to set labels to different language
    /*
    var locale = {
        YEAR_PLURAL: 'Jaren',
        YEAR_SINGULAR: 'Jaar',
        MONTH_PLURAL: 'Maanden',
        MONTH_SINGULAR: 'Maand',
        WEEK_PLURAL: 'Weken',
        WEEK_SINGULAR: 'Week',
        DAY_PLURAL: 'Dagen',
        DAY_SINGULAR: 'Dag',
        HOUR_PLURAL: 'Uren',
        HOUR_SINGULAR: 'Uur',
        MINUTE_PLURAL: 'Minuten',
        MINUTE_SINGULAR: 'Minuut',
        SECOND_PLURAL: 'Seconden',
        SECOND_SINGULAR: 'Seconde',
        MILLISECOND_PLURAL: 'Milliseconden',
        MILLISECOND_SINGULAR: 'Milliseconde'
    };

    for (var key in locale) {
        if (!locale.hasOwnProperty(key)) { continue; }
        tick.setConstant(key, locale[key]);
    }
    */

    // format of due date is ISO8601
    // https://en.wikipedia.org/wiki/ISO_8601

    // '2018-01-31T12:00:00'        to count down to the 31st of January 2018 at 12 o'clock
    // '2019'                       to count down to 2019
    // '2018-01-15T10:00:00+01:00'  to count down to the 15th of January 2018 at 10 o'clock in timezone GMT+1

    // create the countdown counter
    var counter = Tick.count.down('2021-08-21T00:00:00+01:00');

    counter.onupdate = function(value) {
      tick.value = value;
    };

    counter.onended = function() {
        // redirect, uncomment the next line
        // window.location = 'my-location.html'

        // hide counter, uncomment the next line
        // tick.root.style.display = 'none';

        // show message, uncomment the next line
        // document.querySelector('.tick-onended-message').style.display = '';
    };
}


// Navbar
function toggleNavbarBg() {
    if(window.scrollY > window.innerHeight) {
        document.querySelector('.olu-navbar').classList.add('nav-scroll')
    }else{
        document.querySelector('.olu-navbar').classList.remove('nav-scroll')
    }
}
window.addEventListener('scroll',toggleNavbarBg)

document.addEventListener('DOMContentLoaded',toggleNavbarBg)

// Embedded Video Player


function autoPlay(params) {
    let player = document.querySelector('#coronationPlayer')
    let modal = document.querySelector('#playerModal')
    let modalShow = document.querySelector('shown.bs.modal')
    let modalHide = document.querySelector('hide.bs.modal')
    let videoSrc = player.getAttribute('src')
    player.removeAttribute('src')

    console.log(Array.from(modal.classList))
    if(Array.from(modal.classList).includes('show')){
        console.log('ture')
    } else if(Array.from(modal.classList).includes('hide')) {
        console.log('false')
    }
}

// autoPlay()
$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#coronationPlayer").attr('src');
    
    /* Remove iframe src attribute on page load to
    prevent autoplay in background */
    $("#coronationPlayer").attr('src', '');
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    $("#playerModal").on('shown.bs.modal', function(){
        $("#coronationPlayer").attr('src', url);
    });
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#playerModal").on('hide.bs.modal', function(){
        $("#coronationPlayer").attr('src', '');
    });

    // $(".modal-backdrop").on('click', function() {
    //     console.log('i am clicked!!!!')
    //     $("#coronationPlayer").attr('src', '');
    //     $(this).hide();
    // })

    // document.querySelector('.modal-backdrop').addEventListener('click', function() {
    //     alert('Clicked!!!')
    // })
});