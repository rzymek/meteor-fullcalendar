Template.body.helpers({
    events: function () {
        var fc = $('.fc');
        return function (start, end, tz, callback) {
            //subscribe only to specified date range
            Meteor.subscribe('events', start, end, function () {
                //trigger event rendering when collection is downloaded
                fc.fullCalendar('refetchEvents');
            });

            //find all, because we've already subscribed to a specific range
            var events = Events.find().map(function (it) {
                return {
                    title: it.date.toISOString(),
                    start: it.date,
                    allDay: true
                };
            });
            callback(events);
        };
    }
});
Template.body.rendered = function () {
    var fc = this.$('.fc');
    this.autorun(function () {
        //1) trigger event re-rendering when the collection is changed in any way
        //2) find all, because we've already subscribed to a specific range
        Events.find();
        fc.fullCalendar('refetchEvents');
    });
};

Template.body.events({
    'click .refresh': function (e, template) {
        //template.$('#myid2').fullCalendar('refetchEvents');
        template.$('.myCalendars').fullCalendar('refetchEvents');
    }
});

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
    }
});
