import Ember from 'ember';

export default Ember.Mixin.create({
  value: null,

  setupBootstrapDatepicker: function() {
    var self = this,
        element = this.$(),
        value = this.get('value');

    element.
      datepicker({
        autoclose: this.get('autoclose'),
        calendarWeeks: this.get('calendarWeeks'),
        clearBtn: this.get('clearBtn'),
        daysOfWeekDisabled: this.get('daysOfWeekDisabled'),
        endDate: this.get('endDate'),
        forceParse: this.get('forceParse'),
        format: this.get('format'),
        keyboardNavigation: this.get('keyboardNavigation'),
        language: this.get('language'),
        minViewMode: this.get('minViewMode'),
        orientation: this.get('orientation'),
        startDate: this.get('startDate'),
        startView: this.get('startView'),
        todayBtn: this.get('todayBtn'),
        todayHighlight: this.get('todayHighlight'),
        weekStart: this.get('weekStart')
      }).
      on('changeDate', function(event) {
        Ember.run(function() {
          self.didChangeDate(event);
        });
      });

    if (value) {
      element.datepicker('update', new Date(value));
    }
  }.on('didInsertElement'),

  teardownBootstrapDatepicker: function() {
    this.$().datepicker('remove');
  }.on('willDestroyElement'),

  didChangeDate: function(event) {
    var isoDate = null;

    if (event.date) {
      isoDate = this.$().datepicker('getUTCDate').toISOString();
    }

    this.set('value', isoDate);
  }
});
