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

test('triggers hide action when date datepicker is hidden', function(assert) {
  assert.expect(1);

  var actionIsTriggered = false;
  this.on('myAction', () => {
    actionIsTriggered = true;
  });

  this.render(hbs`
    {{bootstrap-datepicker hide="myAction"}}
  `);

  this.$('input.ember-text-field').trigger('hide');

  assert.ok(actionIsTriggered, 'action is triggered');
});

test('triggers changeMonth when month is changed', function(assert) {
  assert.expect(6);

  var lastDate;
  this.on('myAction', (date) => {
    assert.ok(true, 'action is triggered');
    lastDate = date;
  });

  this.render(hbs`
    {{bootstrap-datepicker-inline changeMonth="myAction"}}
  `);

  // there are several not visibile datepickers having .next; only trigger the visible one
  this.$('.next:visible').trigger('click');
  assert.ok(lastDate instanceof Date, 'date is passed to action as argument');
  // by default view date is today; so after a click on "next" it should be a date in the next month
  assert.equal(lastDate.getMonth(), new Date().getMonth() + 1, 'passed date is correct');

  this.$('.prev:visible').trigger('click');
  assert.ok(lastDate instanceof Date, 'date is passed to action as argument');
  assert.equal(lastDate.getMonth(), new Date().getMonth(), 'passed date is correct');
});
