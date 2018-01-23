'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css.map', {
    destDir: 'assets'
  });

  app.import(app.bowerDirectory + '/bootstrap-datepicker/dist/locales/bootstrap-datepicker.de.min.js');

  return app.toTree();
};
