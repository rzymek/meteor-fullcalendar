Package.describe({
    name: 'rzymek:fullcalendar',
    summary: "Full-sized drag & drop event calendar (jQuery plugin)",
    version: "3.8.0",
    git: "https://github.com/rzymek/meteor-fullcalendar.git"
});

Package.onUse(function(api) {
    api.versionsFrom('1.6');
    api.use([
        'momentjs:moment@2.8.4',
        'templating'
    ], 'client');
    api.addFiles([
        'template.html',
        'template.js',
        'fullcalendar/dist/fullcalendar.js',
        'fullcalendar/dist/fullcalendar.css',
        'fullcalendar/dist/locale-all.js',
        'fullcalendar/dist/gcal.js',
    ], 'client');
});
