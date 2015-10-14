    Template.body.helpers({
        events: function () {
            var fc = $('.fc');
            return function (start, end, tz, callback) {
                //subscribe only to specified date range
                Meteor.subscribe('events', start.toDate(), end.toDate(), function () {
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
        },
        onEventClicked: function() {
            return function(calEvent, jsEvent, view) {
                alert("Event clicked: "+calEvent.title);
            }
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
    'click .addEvent': function () {
        Events.insert({
            date: new Date()
        })
    },
    'click .removeEvent':function() {
        var event = Events.findOne();
        if(event) {
            Events.remove(event._id);
        }
    }
});

