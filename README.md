# Ember CLI datepicker

The addon provides you a `bootstrap-datapicker` input component. It can be used in Ember CLI applications.

The input component is based on [bootstrap-datepicker library](https://github.com/eternicode/bootstrap-datepicker).

## Installation

```bash
npm install --save-dev npm install --save-dev ember-cli-bootstrap-datepicker
ember generate bootstrap-datepicker
```

## Usage

```handlebars
{{bootstrap-datepicker value=expiresAt}}
```

The component supports many options of the bootstrap-datepicker library:

* **autoclose**, default value `true`
* **format**, default value `dd.mm.yyyy`
* **weekStart**, default value 1 (Monday)
* **todayHighlight**, default value `false`
* **todayBtn**, default value `false`

Let me show you how to use all these options.

Autoclose:

```handlebars
{{bootstrap-datepicker value=expiresAt autoclose=false}}
```

Format:

```handlebars
{{bootstrap-datepicker value=expiresAt format='dd/mm/yy'}}
```

weekStart:

```handlebars
{{bootstrap-datepicker value=expiresAt weekStart=0}}
```

todayHighlight:

```handlebars
{{bootstrap-datepicker value=expiresAt todayHighlight=true}}
```

todayBtn:

```handlebars
{{bootstrap-datepicker value=expiresAt todayBtn=true}}
```

All options at once:

```handlebars
{{bootstrap-datepicker value=expiresAt autoclose=false format='dd/mm/yy' weekStart=0 todayHighlight=true todayBtn=true}}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
