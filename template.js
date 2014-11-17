Template.fullcalendar.rendered = function() {
    console.log(this.data);
    this.$(this.firstNode).fullCalendar(this.data);
};