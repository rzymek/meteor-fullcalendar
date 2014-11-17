[FullCalendar](http://fullcalendar.io/) JQuery plugin packaged for Meteor 1.0

### Instalation ###

    meteor add rzymek:fullcalendar

### Usage ###

    {{> fullcalendar }}

Options to FullCalendar can be passed as attributes:

    {{> fullcalendar defaultView='agendaWeek'}}
    
If you want to have options defines in JS (or have them reactive), you can do:

    <template name="example">
        {{>fullcalendar options}}
    </template>

    Template.example.helpers({
        options: function() {
            return {
                defaultView: 'basicWeek'
            };
        }
    });
