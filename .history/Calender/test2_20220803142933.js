jQuery(document).ready(function() {
    jQuery('.datetimepicker').datepicker({
        timepicker: true,
        language: 'en',
        range: true,
        multipleDates: true,
        multipleDatesSeparator: " - "
    });
    $('#event-form').on('submit', function(e) {
        e.preventDefault();

        $form = $(e.currentTarget);

        $title = $form.find('#event-title');
        $location = $form.find('#event-location');
        $details = $form.find('#event-details');
        $ID = '_' + Math.random().toString(36).substr(2, 9)
        events.push({
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
                        timezone: 'local',
                        defaultView: 'month',
                        allDayDefault: false,
                        allDaySlot: false,
                        slotEventOverlap: true,
                        slotDuration: "01:00:00",
                        slotLabelInterval: "01:00:00",
                        snapDuration: "00:15:00",
                        contentHeight: 700,
                        scrollTime: "8:00:00",
                        axisFormat: 'h:mm a',
                        timeFormat: 'h:mm A()',
                        selectable: true,
                        events: function(start, end, timezone, callback) {
                            let arr = parselocalstorage('events')
                            callback(arr);
                        },
                        eventColor: '#dec5c9',
                        eventClick: function(calEvent, jsEvent) {

                            renderPopup(jsEvent, calEvent.start, calEvent.end, calEvent);


                        },
                        eventRender: function(event, element) {
                            element.append(`<span class='I_delete'><i class="fa fa-remove fa-2x"></i></span>`);
                            element.append(`<span class='I_edit'><i class="fa fa-edit fa-2x"></i></span>`);
                            element.find(".I_delete").click(function() {
                                $('#calendar-popup').hide();
                                if (confirm('are you sure want to delete event?')) {
                                    $('#calendar').fullCalendar('removeEvents', event._id);
                                    var index = events.map(function(x) { return x.id; }).indexOf(event.id);
                                    events.splice(index, 1);
                                    localStorage.setItem('events', JSON.stringify(events));

                                    events = parselocalstorage('events')

                                }
                            });

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