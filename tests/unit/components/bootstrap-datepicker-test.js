import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

moduleForComponent('bootstrap-datepicker', 'BootstrapDatepickerComponent', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('is an input tag', function(assert) {
  assert.equal(this.$().prop('tagName'), 'INPUT');
});

test('displays empty input field when no date is set', function(assert) {
  this.subject({
    value: null
  });

  assert.equal(this.$().val(), '');
});

test('displays date with default format when no format is set', function(assert) {
  this.subject({
    value: new Date(2014, 11, 31)
  });

  assert.equal(this.$().val(), '12/31/2014');
});

test('displays date with custom format when format is set', function(assert) {
  this.subject({
    value: new Date(2014, 11, 31),
    format: 'dd.M.yy'
  });

  assert.equal(this.$().val(), '31.Dec.14');
});

test('resets date when input is cleared', function(assert) {
  this.subject({
    value: new Date(2014, 11, 31)
  });

  assert.ok(this.$().datepicker('getDate'), 'initial value is set');

  this.$().val('');
  this.$().datepicker('update');

  assert.equal(this.$().datepicker('getDate'), null, 'value is reset when input is cleared');
});

test('should use customParser if provided', function(assert) {
  assert.expect(1);

  this.subject({
    value: '2015-09-14T16:59:01+02:00',
    customParser: function(value) {
      return new Date(value);
    }
  });

  assert.equal(this.$().val(), '09/14/2015');
});

test('sets dates provided by value (multidate, default multidateSeparator)', function(assert) {
  this.subject({
    value: [new Date(2015, 0, 13), new Date(2015, 0, 7), new Date(2015, 0, 15)],
    multidate: true
  });

  assert.equal(this.$().val(), '01/13/2015,01/07/2015,01/15/2015', 'sets value as input field value');
  assert.equal(this.$().datepicker('getDates').length, 3, 'sets internal datepicker dates by value');
});

test('sets dates provided by value (multidate, multidateSeparator provided)', function(assert) {
  this.subject({
    value: [new Date(2015, 0, 13), new Date(2015, 0, 7), new Date(2015, 0, 15)],
    multidate: true,
    multidateSeparator: ';'
  });

  assert.equal(this.$().val(), '01/13/2015;01/07/2015;01/15/2015', 'sets value as input field value using multidate separator');
  assert.equal(this.$().datepicker('getDates').length, 3, 'sets internal datepicker dates by value');
});

test('updates startDate', function(assert) {
  var startDate = new Date(2015, 2);
  var newStartDate = new Date(2015, 3);

  var component = this.subject({
    value: new Date(2015, 4),
    startDate: startDate
  });

  assert.equal(this.$().data('datepicker').o.startDate.getMonth(), startDate.getMonth(), 'sets initial startDate');

  component.set('startDate', newStartDate);
  assert.equal(this.$().data('datepicker').o.startDate.getMonth(), newStartDate.getMonth(), 'updates startDate');
});

test('updates format', function(assert) {
  var format = 'mm/yyyy';
  var newFormat = 'yyyy';

  var component = this.subject({
    value: new Date(2015, 4),
    format: format
  });

  assert.equal(this.$().data('datepicker').o.format, format, 'sets initial format');

  component.set('format', newFormat);

  assert.equal(this.$().data('datepicker').o.format, newFormat, 'updates format');
});

test('updates minViewMode', function(assert) {
  var minViewMode = 'years';
  var yearsViewModeNumber = 2;
  var newMinViewMode = 'months';
  var monthsViewModeNumber = 1;

  var component = this.subject({
    value: new Date(2015, 4),
    minViewMode: minViewMode
  });

  assert.equal(this.$().data('datepicker').o.minViewMode, yearsViewModeNumber, 'sets initial minViewMode');

  component.set('minViewMode', newMinViewMode);

  assert.equal(this.$().data('datepicker').o.minViewMode, monthsViewModeNumber, 'updates minViewMode');
});
