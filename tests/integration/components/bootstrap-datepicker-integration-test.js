import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('bootstrap-datepicker', 'BootstrapDatepickerComponent', {
  integration: true
});

test('triggers specified action on focusout event', function (assert) {
  assert.expect(1);

  this.render(hbs`
    {{bootstrap-datepicker focus-out="focusOutAction"}}
  `);

  var actionIsTriggered = false;
  this.on('focusOutAction', () => {
    actionIsTriggered = true;
  });

  this.$('input.ember-text-field').trigger('focusout');

  assert.ok(actionIsTriggered, 'action is triggered on focusout');
});

test('triggers specified action on focusin event', function (assert) {
  assert.expect(1);

  this.render(hbs`
    {{bootstrap-datepicker focus-in="focusInAction"}}
  `);

  var actionIsTriggered = false;
  this.on('focusInAction', () => {
    actionIsTriggered = true;
  });

  this.$('input.ember-text-field').trigger('focusin');

  assert.ok(actionIsTriggered, 'action is triggered on focusin');
});

test('triggers changeDate action when date selection changes', function(assert) {
  assert.expect(1);

  this.set('myDate', null);

  var actionIsTriggered = false;
  this.on('myAction', () => {
    actionIsTriggered = true;
  });

  this.render(hbs`
    {{bootstrap-datepicker value=myDate changeDate="myAction"}}
  `);

  var input = this.$('input.ember-text-field');
  input.datepicker('setDate', new Date());

  assert.ok(actionIsTriggered, 'action is triggered');
});

test('triggers clearDate action when date selection is cleared', function(assert) {
  assert.expect(1);

  this.set('myDate', new Date());

  var actionIsTriggered = false;
  this.on('myAction', () => {
    actionIsTriggered = true;
  });

  this.render(hbs`
    {{bootstrap-datepicker value=myDate clearDate="myAction"}}
  `);

  var input = this.$('input.ember-text-field');
  input.datepicker('setDate', null);

  assert.ok(actionIsTriggered, 'action is triggered');
});

test('triggers show action when date datepicker is displayed', function(assert) {
  assert.expect(1);

  var actionIsTriggered = false;
  this.on('myAction', () => {
    actionIsTriggered = true;
  });

  this.render(hbs`
    {{bootstrap-datepicker show="myAction"}}
  `);

  this.$('input.ember-text-field').trigger('show');

  assert.ok(actionIsTriggered, 'action is triggered');
});
