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