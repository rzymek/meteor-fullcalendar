[FullCalendar](http://fullcalendar.io/) JQuery plugin packaged for Meteor 1.0

### Instalation ###

    meteor add rzymek:fullcalendar

### Usage ###
Template:

    <template name="myTemplate">
        <div class="calendar"></div>
    </template>
    
Client JS:

    Template.myTemplate.rendered = function() {
        this.$('.calendar').fullCalendar({
            // put your fullcalendar options and callbacks here
        });
    }
