/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-bootstrap-datepicker',

  included: function(app) {
    this._super.included(app);

    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {
      app.import(app.bowerDirectory + '/bootstrap-datepicker/dist/js/bootstrap-datepicker.js');
      app.import(app.bowerDirectory + '/bootstrap-datepicker/dist/css/bootstrap-datepicker.css');
    }
  }
};

