jQuery(document).ready(function() {
    jQuery('.datetimepicker').datepicker({
        timepicker: true,
        language: 'en',
        range: true,
        multipleDates: true,
        multipleDatesSeparator: " - "
    });
    jQuery("#add-event").submit(function() {
        alert("Submitted");
        var values = {};
        $.each($('#add-event').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });
        console.log(
            values
        );
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
                        $(function() {
                                calendar.render();
                                // $('#calendar').fullCalendar()

                                /* ADDING EVENTS */
                                var currColor = '#3c8dbc' //Red by default
                                    //Color chooser button
                                var colorChooser = $('#color-chooser-btn')
                                $('#color-chooser > li > a').click(function(e) {
                                    e.preventDefault()
                                        //Save color
                                    currColor = $(this).css('color')
                                        //Add color effect to button
                                    $('#add-new-event').css({
                                        'background-color': currColor,
                                        'border-color': currColor
                                    })
                                })
                                $('#add-new-event').click(function(e) {
                                    e.preventDefault()
                                        //Get value and make sure it is not null
                                    var val = $('#new-event').val()
                                    if (val.length == 0) {
                                        return
                                    }

                                    //Create events
                                    var event = $('<div />')
                                    event.css({
                                        'background-color': currColor,
                                        'border-color': currColor,
                                        'color': '#fff'
                                    }).addClass('external-event')
                                    event.html(val)
                                    $('#external-events').prepend(event)

                                    //Add draggable funtionality
                                    ini_events(event)

                                    //Remove event from text input
                                    $('#new-event').val('')
                                })
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