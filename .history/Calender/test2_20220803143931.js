var eventRender = []
eventRender = parselocalstorage('events')
var renderPopup = function(jsEvent, start, end, calEvent) {
    var $popup = $('#calendar-popup');
    var $eventForm = $('#event-form');
    $event = $('#event');
    var $selectedElmt = $(jsEvent.target);

    var relativeStartDay = start.calendar(null, { lastDay: '[yesterday]', sameDay: '[today]' });
    var endNextDay = '';

    if (relativeStartDay === 'yesterday') {
        endNextDay = '[Today at] ';
    } else if (relativeStartDay === 'today') {
        endNextDay = '[Tomorrow at] ';
    } else {
        endNextDay = 'dddd ';
    }

    $('.start-time').html(
        ' <p><i class="fa fa-play" aria-hidden="true"></i>' + (start.isSameOrBefore(moment()) ? 'Started' : 'Starts') + '</p>' +
        '<time datetime="' + start.format() + '">' +
        start.calendar(null, {
            lastWeek: 'L LT',
            nextWeek: 'dddd LT',
            sameElse: 'L LT'
        }) +
        '</time>'
    );
    $('.end-time').html(
        '<p><i class="fa fa-stop" aria-hidden="true"></i> ' +
        (end.isSameOrBefore(moment()) ? 'Ended' : 'Ends') +
        (end.isSame(start, 'day') ? ' at' : '') +
        '</p>' +
        '<time datetime="' + end.format() + '">' +
        end.calendar(start, {
            sameDay: 'LT',
            nextDay: endNextDay + 'LT',
            nextWeek: 'dddd LT',
            sameElse: 'L LT'
        }) +
        '</time>'
    );

    if (calEvent) {
        $eventForm.hide();

        $event.children('header').html(`<i class="fa fa-calendar-o"></i>` + calEvent.title);
        $event.find('.location').text(calEvent.location ? calEvent.location : '(No location information.)');
        $event.find('.details').text(calEvent.details ? calEvent.details : '');

        $event.show();
    } else {
        $event.hide();
        $('#event-start').val(start.format('YYYY-MM-DD[T]HH:mm'));
        $('#event-end').val(end.format('YYYY-MM-DD[T]HH:mm'));
        $eventForm.show();
    }

    var leftPosition = 0;
    var $prong = $('.prong');
    var prongPos = 0;

    if ($selectedElmt.hasClass('fc-highlight')) {
        leftPosition = $selectedElmt.offset().left - $popup.width() + ($selectedElmt.width() / 2);
        if (leftPosition <= 0) {
            leftPosition = 5;
            prongPos = $popup.width() - $selectedElmt.offset().left - 30
        } else {
            prongPos = 15;
        }

        $popup.css('left', leftPosition);
        $prong.css({
            'left': '',
            'right': prongPos,
            'float': 'right'
        });
    } else {
        leftPosition = jsEvent.originalEvent.pageX - $popup.width() / 2;
        if (leftPosition <= 0) {
            leftPosition = 5;
        }
        prongPos = jsEvent.originalEvent.pageX - leftPosition - ($prong.width() * 1.7);

        $popup.css('left', leftPosition);
        $prong.css({
            'left': prongPos,
            'float': 'none',
            'right': ''
        });
    }

    var topPosition = (calEvent ? jsEvent.originalEvent.pageY : $selectedElmt.offset().top) - $popup.height() - 15;

    if ((topPosition <= window.pageYOffset) &&
        !((topPosition + $popup.height()) > window.innerHeight)) {
        $popup.css('top', jsEvent.originalEvent.pageY + 15);
        $prong.css('top', -($popup.height() + 12))
            .children('div:first-child').removeClass('bottom-prong-dk').addClass('top-prong-dk')
            .next().removeClass('bottom-prong-lt').addClass('top-prong-lt');
    } else {
        $popup.css('top', topPosition);
        $prong.css({ 'top': 0, 'bottom': 0 })
            .children('div:first-child').removeClass('top-prong-dk').addClass('bottom-prong-dk')
            .next().removeClass('top-prong-lt').addClass('bottom-prong-lt');
    }

    $popup.show();
    $popup.find('input[type="text"]:first').focus();
}
jQuery(document).ready(function() {
    jQuery('.datetimepicker').datepicker({
        timepicker: true,
        language: 'en',
        range: true,
        multipleDates: true,
        multipleDatesSeparator: " - "
    });
    $('#event-form').on('submit', function(eventRender) {
        eventRender.preventDefault();

        $form = $(eventRender.currentTarget);

        $title = $form.find('#event-title');
        $location = $form.find('#event-location');
        $details = $form.find('#event-details');
        $ID = '_' + Math.random().toString(36).substr(2, 9)
        eventRender.push({
            id: $ID,
            title: $title.val(),
            start: $form.find('#event-start').val(),
            end: $form.find('#event-end').val(),
            location: $location.val(),
            details: $details.val()
        });

        $title.val('');
        $location.val('');
        $details.val('');

        $form.parent().blur().hide();
        localStorage.setItem('events', JSON.stringify(events));
        $('#calendar').fullCalendar('refetchEvents');

    });

});

(function() {
    'use strict';
    // ------------------------------------------------------- //
    // Calendar
    // ------------------------------------------------------ //
    jQuery(function() {
        // page is ready
        jQuery('#calendar').fullCalendar({
            themeSystem: 'bootstrap4',
            // emphasizes business hours
            businessHours: false,
            defaultView: 'month',
            // event dragging & resizing
            editable: true,
            // header
            header: {
                left: 'title',
                center: 'month,agendaWeek,agendaDay',
                right: 'today prev,next'
            },
            events: [{
                    title: 'Barber',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-05-05',
                    end: '2020-05-05',
                    className: 'fc-bg-default',
                    icon: "circle"
                },
                {
                    title: 'Flight Paris',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-08-08T14:00:00',
                    end: '2020-08-08T20:00:00',
                    className: 'fc-bg-deepskyblue',
                    icon: "cog",
                    allDay: false
                },
                {
                    title: 'Team Meeting',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-07-10T13:00:00',
                    end: '2020-07-10T16:00:00',
                    className: 'fc-bg-pinkred',
                    icon: "group",
                    allDay: false
                },
                {
                    title: 'Meeting',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-08-12',
                    className: 'fc-bg-lightgreen',
                    icon: "suitcase"
                },
                {
                    title: 'Conference',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-08-13',
                    end: '2020-08-15',
                    className: 'fc-bg-blue',
                    icon: "calendar"
                },
                {
                    title: 'Baby Shower',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-08-13',
                    end: '2020-08-14',
                    className: 'fc-bg-default',
                    icon: "child"
                },
                {
                    title: 'Birthday',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-09-13',
                    end: '2020-09-14',
                    className: 'fc-bg-default',
                    icon: "birthday-cake"
                },
                {
                    title: 'Restaurant',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-10-15T09:30:00',
                    end: '2020-10-15T11:45:00',
                    className: 'fc-bg-default',
                    icon: "glass",
                    allDay: false
                },
                {
                    title: 'Dinner',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-11-15T20:00:00',
                    end: '2020-11-15T22:30:00',
                    className: 'fc-bg-default',
                    icon: "cutlery",
                    allDay: false
                },
                {
                    title: 'Shooting',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-08-25',
                    end: '2020-08-25',
                    className: 'fc-bg-blue',
                    icon: "camera"
                },
                {
                    title: 'Go Space :)',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-12-27',
                    end: '2020-12-27',
                    className: 'fc-bg-default',
                    icon: "rocket"
                },
                {
                    title: 'Dentist',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                    start: '2020-12-29T11:30:00',
                    end: '2020-12-29T012:30:00',
                    className: 'fc-bg-blue',
                    icon: "medkit",
                    allDay: false
                }
            ],

            eventRender: function(event, element) {
                if (event.icon) {
                    element.find(".fc-title").prepend("<i class='fa fa-" + event.icon + "'></i>");
                }
            },
            dayClick: function() {
                jQuery('#modal-view-event-add').modal();
            },
            eventClick: function(event, jsEvent, view) {
                jQuery('.event-icon').html("<i class='fa fa-" + event.icon + "'></i>");
                jQuery('.event-title').html(event.title);
                jQuery('.event-body').html(event.description);
                jQuery('.eventUrl').attr('href', event.url);
                jQuery('#modal-view-event').modal();
            },

        })
    });

})(jQuery);