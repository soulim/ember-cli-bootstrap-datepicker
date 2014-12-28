import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../helpers/start-app';
import Ember from 'ember';

var App;

moduleForComponent('bootstrap-datepicker', 'bootstrap-datepicker component', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('...', function() {
  expect(0);
});
