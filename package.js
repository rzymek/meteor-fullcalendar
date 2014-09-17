Package.describe({
  summary: "Full-sized drag & drop event calendar (jQuery plugin)",
  version: "2.1.1",
  git: "https://github.com/rzymek/meteor-fullcalendar.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.use('jquery-ui', 'client');
  api.use('mrt:moment', 'client');
  api.addFiles([
      'fullcalendar/dist/fullcalendar.js',
      'fullcalendar/dist/fullcalendar.css',
      'fullcalendar/dist/lang-all.js',
      'fullcalendar/dist/gcal.js',
  ],'client');
});
