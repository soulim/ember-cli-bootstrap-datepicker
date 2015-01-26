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
        multidate: this.get('multidate'),
        multidateSeparator: this.get('multidateSeparator'),
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
      if (this.get('multidate')) {
        // split datesIsoString by multidate separator
        var multidateSeparator = this.get('multidateSeparator') || ',';
        var dateIsoStrings = value.split( multidateSeparator );
        // generate array of date objecs
        var dateObjects = dateIsoStrings.map( function(dateIsoString) {
          return new Date(dateIsoString);
        });
        // set datepickers internal date
        element.datepicker('setDates', dateObjects);
        // update datepicker view
        element.datepicker('update');
      }
      else {
        element.datepicker('update', new Date(value));
      }
    }
  }.on('didInsertElement'),

  teardownBootstrapDatepicker: function() {
    this.$().datepicker('remove');
  }.on('willDestroyElement'),

  didChangeDate: function(event) {
    var isoDate = null;

    if (event.date) {
      if (this.get('multidate')) {
         // set value to array if multidate
         isoDate = this.$().datepicker('getUTCDates').map(function(date) {
           return date.toISOString();
         });
      }
      else {
         isoDate = this.$().datepicker('getUTCDate').toISOString();
      }
    }

    this.set('value', isoDate);
  }
});
