# Ember CLI datepicker

The addon provides you a `bootstrap-datepicker` input component. It can be used in Ember CLI applications.

The input component is based on [bootstrap-datepicker library](https://github.com/eternicode/bootstrap-datepicker). The datepicker input field extends [`Ember.TextField`](http://emberjs.com/api/classes/Ember.TextField.html). That means you have all attribute bindings available on `Ember.TextField`.

## Installation

```bash
npm install --save-dev ember-cli-bootstrap-datepicker
ember generate bootstrap-datepicker
```

## Usage

```handlebars
{{bootstrap-datepicker value=expiresAt}}
```

The component supports many options of the bootstrap-datepicker library:

* **autoclose**, default value `true`
* **format**, default value `dd.mm.yyyy`
* **language**, default value `en`
* **todayBtn**, default value `false`
* **todayHighlight**, default value `false`
* **weekStart**, default value 1 (Monday)

Let me show you how to use all these options.

Autoclose:

```handlebars
{{bootstrap-datepicker value=expiresAt autoclose=false}}
```

Format:

```handlebars
{{bootstrap-datepicker value=expiresAt format="dd/mm/yy"}}
```

language:

Default locale is `en`. When you need another language, you should import a locale file, e.g.

```javascript
// Brocfile.js

app.import('bower_components/bootstrap-datepicker/js/locales/bootstrap-datepicker.de.js');
```

```handlebars
{{bootstrap-datepicker value=expiresAt language="de"}}
```

todayBtn:

```handlebars
{{bootstrap-datepicker value=expiresAt todayBtn=true}}
```

todayHighlight:

```handlebars
{{bootstrap-datepicker value=expiresAt todayHighlight=true}}
```

weekStart:

```handlebars
{{bootstrap-datepicker value=expiresAt weekStart=0}}
```

All options at once:

```handlebars
{{bootstrap-datepicker value=expiresAt autoclose=false format="dd/mm/yy" language="de" todayBtn=true todayHighlight=true weekStart=0}}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
