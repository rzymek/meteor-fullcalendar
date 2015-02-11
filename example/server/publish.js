Meteor.publish('events', function (start, end) {
    return Events.find();/*{
        $and: [
            {date: {$gte: start}},
            {date: {$lte: end}}
        ]
    });
    */
});