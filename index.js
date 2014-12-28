/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-bootstrap-datepicker',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/bootstrap-datepicker/js/bootstrap-datepicker.js');
    app.import(app.bowerDirectory + '/bootstrap-datepicker/css/datepicker.css');
  }
};
