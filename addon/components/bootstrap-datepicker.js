import Component from '@ember/component';
import DatepickerSupport from 'ember-cli-bootstrap-datepicker/components/datepicker-support';

export default Component.extend(DatepickerSupport, {
  instrumentDisplay: '{{input type="text"}}',

  classNames: ['ember-text-field'],

  tagName: 'input',

  attributeBindings: [
    'accesskey',
    'autocomplete',
    'autofocus',
    'contenteditable',
    'contextmenu',
    'dir',
    'disabled',
    'draggable',
    'dropzone',
    'form',
    'hidden',
    'id',
    'lang',
    'list',
    'max',
    'min',
    'name',
    'placeholder',
    'readonly',
    'required',
    'spellcheck',
    'step',
    'tabindex',
    'title',
    'translate',
    'type'
  ],

  type: 'text'
});
