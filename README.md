[FullCalendar](http://fullcalendar.io/) JQuery plugin packaged for Meteor 1.0

### Instalation ###

    meteor add rzymek:fullcalendar

### Usage ###

    {{> fullcalendar }}

Options to FullCalendar can be passed as attributes:

    {{> fullcalendar defaultView='agendaWeek'}}
    
If you want to have options defined in JS (or have them reactive), you can do:

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


### Updating fullcalendar ###

To update fullcalendar version run

    ./update.sh
This will update to the newest fullcalendar's tag.
To update to a specific version do

    ./update.sh 2.2.6

If you want me to publish a new package version just [create an issue](issues/new).
In case you can't wait to use a new fullcalendar version in your project, you can update the package locally:

    cd your_meteor_project
    mkdir -p packages
    git clone https://github.com/rzymek/meteor-fullcalendar packages/rzymek:fullcalendar
    ./packages/rzymek:fullcalendar/update.sh

