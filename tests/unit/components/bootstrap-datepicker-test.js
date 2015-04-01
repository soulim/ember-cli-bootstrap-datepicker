import { test, moduleForComponent } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('bootstrap-datepicker', 'bootstrap-datepicker component');

test('should be an input tag', function() {
  expect(1);

  equal('INPUT', this.$().prop('tagName'));
});

test('should display empty input field when no date is set', function(){
  expect(1);

  var component = this.subject({
    value: null
  });

  equal(this.$().val(), '');
});


test('should display date with default format when no format is set', function(){
  expect(1);

  var component = this.subject({
    value: new Date(2014, 11, 31)
  });

  equal(this.$().val(), '12/31/2014');
});

test('should display date with custom format when format is set', function(){
  expect(1);

  var component = this.subject({
    value: new Date(2014, 11, 31),
    format: 'dd.M.yy'
  });

  equal(this.$().val(), '31.Dec.14');
});

test('should set dates provided by value (multidate, default multidateSeparator)', function(){
  expect(2);

  var component = this.subject({
    value: [new Date(2015, 0, 13), new Date(2015, 0, 7), new Date(2015, 0, 15)],
    multidate: true
  });

  equal(this.$().val(), '01/13/2015,01/07/2015,01/15/2015', 'should set value as input field value');
  equal(this.$().datepicker('getDates').length, 3, 'should set internal datepicker dates by value');
});

test('should set dates provided by value (multidate, multidateSeparator provided)', function(){
  expect(2);

  var component = this.subject({
    value: [new Date(2015, 0, 13), new Date(2015, 0, 7), new Date(2015, 0, 15)],
    multidate: true,
    multidateSeparator: ';'
  });

  equal(this.$().val(), '01/13/2015;01/07/2015;01/15/2015', 'should set value as input field value using multidate separator');
  equal(this.$().datepicker('getDates').length, 3, 'should set internal datepicker dates by value');
});
