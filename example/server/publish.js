Meteor.publish('events', function (start, end) {
    return Events.find({
        $or: [
            {date: {$gte: start}},
            {date: {$lte: end}}
        ]
    });
});