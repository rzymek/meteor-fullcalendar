Package.describe({
    name: 'rzymek:fullcalendar',
    summary: "Full-sized drag & drop event calendar (jQuery plugin)",
    version: "2.4.0",
    git: "https://github.com/rzymek/meteor-fullcalendar.git"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.2.2');
    api.use([
        'momentjs:moment@2.8.4',
        'templating'
    ], 'client');
    api.addFiles([
        'fullcalendar/dist/fullcalendar.js',
        'fullcalendar/dist/fullcalendar.css',
        'fullcalendar/dist/lang-all.js',
        'fullcalendar/dist/gcal.js',
        'template.html',
        'template.js'
    ], 'client');
});
