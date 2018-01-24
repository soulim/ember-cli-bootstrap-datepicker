# Ember CLI datepicker add-on

[![Build Status](https://travis-ci.org/soulim/ember-cli-bootstrap-datepicker.svg?branch=master&style=flat)](https://travis-ci.org/soulim/ember-cli-bootstrap-datepicker)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-bootstrap-datepicker.svg)](http://emberobserver.com/addons/ember-cli-bootstrap-datepicker)
[![Code Climate](https://codeclimate.com/github/soulim/ember-cli-bootstrap-datepicker/badges/gpa.svg)](https://codeclimate.com/github/soulim/ember-cli-bootstrap-datepicker)

The add-on provides you a date input component based on amazing bootstrap-datepicker library. It supports popup and inline mode, and can be used in Ember CLI applications.

It doesn't have any external dependecy except bootstrap-datepicker.

[Online demo](http://sul.im/ember-cli-bootstrap-datepicker)

## Installation

* `git clone <repository-url>` this repository
* `cd new-addon`
* `npm install`

## Usage

Basic example:

```handlebars
{{bootstrap-datepicker value=expiresAt}}
```

Use separate component for inline mode:

```handlebars
{{bootstrap-datepicker-inline value=expiresAt}}
```

The component supports many options of the bootstrap-datepicker library. Feel free to take a look into
[bootstrap-datepicker docs on Read the Docs](https://bootstrap-datepicker.readthedocs.io/en/latest/) for more
in-depth information.

Let me show you how to use them :sparkles:

### Available options

#### autoclose

Whether or not to close the datepicker immediately when a date is selected.

Type: `Boolean`
Default: `false`

```handlebars
{{bootstrap-datepicker value=expiresAt autoclose=true}}
```

#### calendarWeeks

Whether or not to show week numbers to the left of week rows.

Type: `Boolean`
Default: `false`

```handlebars
{{bootstrap-datepicker value=expiresAt calendarWeeks=true}}
```

#### clearBtn

If true, displays a “Clear” button at the bottom of the datepicker to clear the input value. If “autoclose” is also
set to true, this button will also close the datepicker.

Type: `Boolean`
Default: `false`

```handlebars
{{bootstrap-datepicker value=expiresAt clearBtn=true}}
```

#### datesDisabled

Array of date strings or a single date string formatted in the given date format

Type: `Array` or `String`
Default: `""` or `[]`

```handlebars
{{bootstrap-datepicker value=expiresAt datesDisabled="1,14"}}
```

#### daysOfWeekDisabled

Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be
comma-separated. Example: disable weekends: `'06'` or `'0,6'` or `[0,6]`.

Type: `Array` or `String`
Default: `""` or `[]`

```handlebars
{{bootstrap-datepicker value=expiresAt daysOfWeekDisabled="1,2"}}
```

#### endDate

The latest date that may be selected; all later dates will be disabled.

Type: `Date` or `String`
Default: `Infinity` (end of time)

```handlebars
{{bootstrap-datepicker value=expiresAt endDate="01/01/2018"}}
```

#### forceParse

Whether or not to force parsing of the input value when the picker is closed. That is, when an invalid date
is left in the input field by the user, the picker will forcibly parse that value, and set the input’s value
to the new, valid date, conforming to the given format.

Type: `Boolean`
Default: `true`

```handlebars
{{bootstrap-datepicker value=expiresAt forceParse=false}}
```

#### format

The date format, combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy.

* d, dd: Numeric date, no leading zero and leading zero, respectively. Eg, 5, 05.
* D, DD: Abbreviated and full weekday names, respectively. Eg, Mon, Monday.
* m, mm: Numeric month, no leading zero and leading zero, respectively. Eg, 7, 07.
* M, MM: Abbreviated and full month names, respectively. Eg, Jan, January
* yy, yyyy: 2- and 4-digit years, respectively. Eg, 12, 2012.

Type: `String`
Default: `'mm/dd/yyyy'`

```handlebars
{{bootstrap-datepicker value=expiresAt format="dd.mm.yy"}}
```

#### keyboardNavigation

Whether or not to allow date navigation by arrow keys.

Type: `Boolean`
Default: `true`

```handlebars
{{bootstrap-datepicker value=expiresAt keyboardNavigation=false}}
```

#### language

The IETF code (eg “en” for English, “pt-BR” for Brazilian Portuguese) of the language to use for month and day
names. These will also be used as the input’s value (and subsequently sent to the server in the case of form
submissions). If a full code (eg “de-DE”) is supplied the picker will first check for an “de-DE” language and
if not found will fallback and check for a “de” language. If an unknown language code is given, English will
be used.

When you need another language, you should import a locale file using your ember-cli-build.js. Just import `vendor/bootstrap-datepicker-locales/bootstrap-datepicker.<LANGUAGE_CODE>.js`, e.g.:

```javascript
// ember-cli-build.js
app.import('vendor/bootstrap-datepicker-locales/bootstrap-datepicker.de.js');
```

Type: `String`
Default: `'en'`

```handlebars
{{! somewhere in template }}
{{bootstrap-datepicker value=expiresAt language="de"}}
```

#### minViewMode

Set a minimum limit for the view mode. Accepts: “days” or 0, “months” or 1, “years” or 2, “decades” or 3, and
“centuries” or 4. Gives the ability to pick only a month, a year or a decade. The day is set to the 1st for “months”,
and the month is set to January for “years”, the year is set to the first year from the decade for “decades”, and
the year is set to the first from the millennium for “centuries”.

Type: `Number` or `String`
Default: `0` or `'days'`

```handlebars
{{bootstrap-datepicker value=expiresAt minViewMode="months"}}
```

#### orientation

A space-separated string consisting of one or two of “left” or “right”, “top” or “bottom”, and “auto” (may be
omitted); for example, “top left”, “bottom” (horizontal orientation will default to “auto”), “right” (vertical
orientation will default to “auto”), “auto top”. Allows for fixed placement of the picker popup.

“orientation” refers to the location of the picker popup’s “anchor”; you can also think of it as the location of
the trigger element (input, component, etc) relative to the picker.

“auto” triggers “smart orientation” of the picker. Horizontal orientation will default to “left” and left offset
will be tweaked to keep the picker inside the browser viewport; vertical orientation will simply choose “top” or
“bottom”, whichever will show more of the picker in the viewport.

Type: `String`
Default: `'auto'`

```handlebars
{{bootstrap-datepicker value=expiresAt orientation="right"}}
```

#### startDate

The earliest date that may be selected; all earlier dates will be disabled.

Type: `Date` or `String`
Default: `-Infinity` (beginning of time)

```handlebars
{{bootstrap-datepicker value=expiresAt startDate="01/01/2014"}}
```

#### startView

The view that the datepicker should show when it is opened. Accepts values of 0 or “month” for month view (the
default), 1 or “year” for the 12-month overview, 2 or “decade” for the 10-year overview, 3 or “century” for the
10-decade overview, and 4 or “millennium” for the 10-century overview. Useful for date-of-birth datepickers.

Type: `Number` or `String`
Default: `0` or `'month'`

```handlebars
{{bootstrap-datepicker value=expiresAt startView="decade"}}
```

#### todayBtn

If true or “linked”, displays a “Today” button at the bottom of the datepicker to select the current date.
If true, the “Today” button will only move the current date into view; if “linked”, the current date will
also be selected.

Type: `Boolean` or `String`
Default: `false`

```handlebars
{{bootstrap-datepicker value=expiresAt todayBtn=true}}
```

#### todayHighlight

If true, highlights the current date.

Type: `Boolean`
Default: `false`

```handlebars
{{bootstrap-datepicker value=expiresAt todayHighlight=true}}
```

#### weekStart

Day of the week start. 0 (Sunday) to 6 (Saturday)

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
