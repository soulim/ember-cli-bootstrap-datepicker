import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',

  setupBootstrapDatepicker: function() {
    var self = this,
        element = this.$(),
        value = this.get('value');

    element.
      datepicker({
        autoclose: this.get('autoclose') || true,
        format: this.get('format') || 'dd.mm.yyyy',
        weekStart: this.get('weekStart') || 1,
        todayHighlight: this.get('todayHighlight') || false,
        todayBtn: this.get('todayBtn') || false
      }).
      on('changeDate', function(event) {
        Ember.run(function() {
          self.didSelectDate(event);
        });
      });

    if (value) {
      element.datepicker('setDate', new Date(value));
    };
  }.on('didInsertElement'),

  teardownBootstrapDatepicker: function() {
    // no-op
  }.on('willDestroyElement'),

  didSelectDate: function(event) {
    var date = this.$().datepicker('getUTCDate');
    this.set('value', date.toISOString());
  }
});
