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
    value: '2014-12-31T00:00:00.000Z'
  });

  equal(this.$().val(), '12/31/2014');
});

test('should display date with custom format when format is set', function(){
  expect(1);

  var component = this.subject({
    value: '2014-12-31T00:00:00.000Z',
    format: 'dd.M.yy'
  });

  equal(this.$().val(), '31.Dec.14');
});
