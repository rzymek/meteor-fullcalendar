Template.body.helpers({
    options: function () {
        return {
            id: 'myid2',
            class: 'myCalendars',
            lang: 'pl',
            height: 300,
            defaultView: 'basicWeek',
            events: function (start, end, tz, callback) {
                callback([{
                        title: new Date().toGMTString(),
                        start: new Date()
                    }]);
            }
        };
    },
    cal1Events: function () {
        return function (start, end, tz, callback) {
            callback([{
                    title: new Date().toISOString(),
                    start: new Date(),
                    allDay: true
                }]);
        };
    }
});
Template.body.events({
    'click .refresh': function (e, template) {
        //template.$('#myid2').fullCalendar('refetchEvents');
        template.$('.myCalendars').fullCalendar('refetchEvents');
    }
});
