import Ember from 'ember';

export default Ember.Mixin.create({
  value: null,

  setupBootstrapDatepicker: Ember.on('didInsertElement', function() {
    var self = this;

    this.$().
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
          self._didChangeDate(event);
        });
      });

    this._updateDatepicker();
  }),

  teardownBootstrapDatepicker: Ember.on('willDestroyElement', function() {
    this.$().datepicker('remove');
  }),

  didChangeValue: Ember.observer('value', function() {
    this._updateDatepicker();
  }),

  _didChangeDate: function(event) {
    var value = null;

    if (event.date) {
      if (this.get('multidate')) {
        value = this.$().datepicker('getDates');
      } else {
        value = this.$().datepicker('getDate');
      }
    }

    this.set('value', value);
  },

  _updateDatepicker: function() {
    var self = this,
        element = this.$(),
        value = this.get('value'),
        dates = [];

    switch (Ember.typeOf(value)) {
      case 'array':
        dates = value;
        break;
      case 'date':
        dates = [value];
        break;
      default:
        dates = [null];
    }
    dates = dates.map(function(date) {
      return (Ember.isNone(date)) ? null : self._resetTime(date);
    });

    element.datepicker
           .apply(element, Array.prototype.concat.call(['update'], dates));
  },

  // HACK: Have to reset time to 00:00:00 because of the bug in
  //       bootstrap-datepicker
  //       Issue: http://git.io/qH7Hlg
  _resetTime: function(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date;
  }
});
