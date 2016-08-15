# Ember CLI datepicker add-on

[![Build Status](https://travis-ci.org/soulim/ember-cli-bootstrap-datepicker.svg?branch=master&style=flat)](https://travis-ci.org/soulim/ember-cli-bootstrap-datepicker)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-bootstrap-datepicker.svg)](http://emberobserver.com/addons/ember-cli-bootstrap-datepicker)
[![Code Climate](https://codeclimate.com/github/soulim/ember-cli-bootstrap-datepicker/badges/gpa.svg)](https://codeclimate.com/github/soulim/ember-cli-bootstrap-datepicker)

The add-on provides you a date input component based on amazing bootstrap-datepicker library. It supports popup and inline mode, and can be used in Ember CLI applications.

It doesn't have any external dependecy except bootstrap-datepicker.

[Online demo](http://sul.im/ember-cli-bootstrap-datepicker)

## Installation

If you are using Ember CLI 0.2.3 or higher, just run within your project directory:

```bash
ember install ember-cli-bootstrap-datepicker
```

If your Ember CLI version is greater than 0.1.5 and less than 0.2.3, run the following within your project directory:

```bash
ember install:addon ember-cli-bootstrap-datepicker
```

When your Ember CLI version is below 0.1.5, please run within your project directory:

```bash
npm install --save-dev ember-cli-bootstrap-datepicker
ember generate bootstrap-datepicker
```

## Usage

Basic example:

```handlebars
{{bootstrap-datepicker value=expiresAt}}
```

Use separate component for inline mode:

```handlebars
{{bootstrap-datepicker-inline value=expiresAt}}
```

The component supports many options of the bootstrap-datepicker library. Let me show you how to use them :sparkles:

### Available options

#### autoclose

Type: `Boolean`
Default: `false`

```handlebars
{{bootstrap-datepicker value=expiresAt autoclose=true}}
```

#### calendarWeeks

Type: `Boolean`
Default: `false`

```handlebars
{{bootstrap-datepicker value=expiresAt calendarWeeks=true}}
```

#### clearBtn

Type: `Boolean`
Default: `false`

```handlebars
{{bootstrap-datepicker value=expiresAt clearBtn=true}}
```

#### daysOfWeekDisabled

Type: `Array` or `String`
Default: `""` or `[]`

```handlebars
{{bootstrap-datepicker value=expiresAt daysOfWeekDisabled="1,2"}}
```

#### endDate

Type: `Date` or `String`
Default: `Infinity` (end of time)

```handlebars
{{bootstrap-datepicker value=expiresAt endDate="01/01/2018"}}
```

#### forceParse

Type: `Boolean`
Default: `true`

```handlebars
{{bootstrap-datepicker value=expiresAt forceParse=false}}
```

#### format

Type: `String`
Default: `'mm/dd/yyyy'`

```handlebars
{{bootstrap-datepicker value=expiresAt format="dd.mm.yy"}}
```

#### keyboardNavigation

Type: `Boolean`
Default: `true`

```handlebars
{{bootstrap-datepicker value=expiresAt keyboardNavigation=false}}
```

#### language

Type: `String`
Default: `'en'`

When you need another language, you should import a locale file using your Brocfile.js. Just import `bower_components/bootstrap-datepicker/js/locales/bootstrap-datepicker.<LANGUAGE_CODE>.js`, e.g.:

```javascript
// Brocfile.js
app.import('bower_components/bootstrap-datepicker/js/locales/bootstrap-datepicker.de.js');
```
```handlebars
{{! somewhere in template }}
{{bootstrap-datepicker value=expiresAt language="de"}}
```

#### minViewMode

Type: `Number` or `String`
Default: `0` or `'days'`

```handlebars
{{bootstrap-datepicker value=expiresAt minViewMode="months"}}
```

#### orientation

Type: `String`
Default: `'auto'`

```handlebars
{{bootstrap-datepicker value=expiresAt orientation="right"}}
```

#### startDate

Type: `Date` or `String`
Default: `-Infinity` (beginning of time)

```handlebars
{{bootstrap-datepicker value=expiresAt startDate="01/01/2014"}}
```

#### startView

Type: `Number` or `String`
Default: `0` or `'month'`

```handlebars
{{bootstrap-datepicker value=expiresAt startView="decade"}}
```

#### todayBtn

Type: `Boolean` or `String`
Default: `false`

> If true or “linked”, displays a “Today” button at the bottom of the datepicker to select the current date. If true, the “Today” button will only move the current date into view; if “linked”, the current date will also be selected. [More...](http://bootstrap-datepicker.readthedocs.org/en/latest/options.html#todaybtn)

```handlebars
{{bootstrap-datepicker value=expiresAt todayBtn=true}}
```

#### todayHighlight

Type: `Boolean`
Default: `false`

```handlebars
{{bootstrap-datepicker value=expiresAt todayHighlight=true}}
```

#### weekStart

Type: `Number`
Default: `0` (Sunday)


```handlebars
{{bootstrap-datepicker value=expiresAt weekStart=1}}
```

### Actions

#### changeDate

The changeDate action is triggered when the selected date changes. It can be specified like this:


```handlebars
{{bootstrap-datepicker changeDate="changeDateAction"}}
```

The action can be handled by a parent component, controller or route:

```javascript
actions: {
  changeDateAction(date) {
    // do sth with the new date
  }
}
```

### changeMonth

The changeMonth action is triggered when the view month changes (e.g. user click on "prev"/"next" buttons).
Action called has new view date as first argument.

```handlebars
{{bootstrap-datepicker changeMonth="changeMonthAction"}}
```

```javascript
actions: {
  changeDateAction(date) {
    // do sth with the new view date
  }
}
```

#### clearDate

The clearDate action is triggered when the date is cleared (e.g. when the "clear" button is clicked).


```handlebars
{{bootstrap-datepicker clearDate="clearDateAction"}}
```

The action can be handled by a parent component, controller or route:

```javascript
actions: {
  clearDateAction() {
    // do sth
  }
}
```

#### focus-in & focus-out

The focus-in and focus-out actions are triggered when the respective focus events occur on the input field.

```handlebars
{{bootstrap-datepicker focus-in="focusInAction" focus-out="focusOutAction"}}
```

The actions can be handled by a parent component, controller or route:

```javascript
actions: {
  focusInAction(component, event) {
    // handle event
  },
  focusOutAction(component, event) {
    // handle event
  }
}
```

#### hide & show

The hide and show actions are triggered when the datepicker is either hidden or displayed.

```handlebars
{{bootstrap-datepicker hide="hideAction" show="showAction"}}
```

The actions can be handled by a parent component, controller or route:

```javascript
actions: {
  hideAction() {
    // datepicker is hidden
  },
  showAction() {
    // datepicker is shown
  }
}
```


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Credits

The add-on is based on [bootstrap-datepicker](https://github.com/eternicode/bootstrap-datepicker).


## License

[MIT License](https://github.com/soulim/ember-cli-bootstrap-datepicker/blob/master/LICENSE.md)
