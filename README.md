# rs-popover

[![Build Status](http://img.shields.io/travis/rackerlabs/rs-popover/master.svg)](https://travis-ci.org/rackerlabs/rs-popover)
[![Code Climate](http://img.shields.io/codeclimate/github/rackerlabs/rs-popover.svg)](https://codeclimate.com/github/rackerlabs/rs-popover)
[![Coverage](http://img.shields.io/codeclimate/coverage/github/rackerlabs/rs-popover.svg)](https://codeclimate.com/github/rackerlabs/rs-popover)

Angular directive for [Canon](http://rackerlabs.github.io/canon) popovers.

## Requirements

- AngularJS v1.3 or higher
- Canon v1.1 or higher
- jQuery v1.9 or higher

## Installation

This package is not currently published to either NPM or Bower. Once the API
stabilizes, the built files will be published. Until then, you can install 
directly from the GitHub repository.

To install with Bower, add the following line to dependencies in your bower.json:

```
"rs-popover": "https://github.com/rackerlabs/rs-popover.git"
```

Once you have installed the package, you'll need to:

1. Include `rs-popover.js` or `rs-popover.min.js` in your application.
2. Add `rs.popover` to your main module's list of dependencies.

## Usage



### `rs-popover`

This directive defines a popover and can be used as either an element or an
attribute. All instances of this attribute must have a unique `id` attribute.

```
<rs-popover id="myPopover">
  This is popover content!
</rs-popover>
```

#### Attributes

##### `id`

Type: `String`, Required

Accepts any unique string used to identity this popover. This attribute is 
required and must be unique across all other elements on the page.

##### `on-open`

Type: `Expression`, Default: `''`

Accepts the name of a function to be called when the popover is opened. This 
function should return a promise. A loading pattern will be displayed until the
promise returned by this method is resolved. This attribute is optional.

### `rs-popover-form`

This directive defines a popover that contains a form and can be used as either 
an element or an attribute. All instances of this attribute must have a unique 
`id` attribute.

```
<rs-popover-form id="myPopoverForm">
  <div class="rs-control-group">
    <label>Label</label>
    <div class="rs-controls">
      <input type="text">
    </div>
  </div>
</rs-popover-form>
```

#### Attributes

##### `id`

Type: `String`, Required

Accepts any unique string used to identity this popover. This attribute is 
required and must be unique across all other elements on the page.

##### `on-open`

Type: `Expression`, Default: `''`

Accepts the name of a function to be called when the popover is opened. This 
function should return a promise. A loading pattern will be displayed until the
promise returned by this method is resolved. This attribute is optional.

##### `on-save`

Type: `Expression`, Default: `''`

Accepts the name of a function to be called when the popover's form is 
submitted. This function should return a promise. The save and cancel buttons
will be disabled until the promise returned by this method is resolved. When the
promise resolved, the popover will be closed. When the promise throws an error, 
the buttons will be enabled and an error message will be displayed. This 
attribute is optional.

### `rs-popover-trigger`

This directive toggles a popover's visibility and can only be used as an 
attribute.

```
<button rs-popover-trigger="myPopover" 
        rs-popover-target="myTarget" 
        rs-popover-attach="top-left"
        rs-popover-data="{ id: 'object-id' }">Toggle Me!</button>
```

#### Attributes

##### `rs-popover-trigger`

Type: `String`, Required

Accepts the ID of the popover it should toggle. If this attribute is used inside
of a popover, it defaults to toggling the containing popover.

##### `rs-popover-target`

Type: `String`

Accepts the ID of the element at which the popover should point. If this 
attribute is not provided, the popover will point at the popover trigger.

##### `rs-popover-attach`

Type: `String`, Default: `top-left`

Specifies how the popover will be oriented in relation to the target.

- `attach="left-top"` - Position the target to the left of the popover.
- `attach="top-left"` - Position the target to the top left of the popover.

##### `rs-popover-data`

Type: `Object`, Default: `{}`

Accepts an object that will be passed to the `on-open` and `on-save` hooks
exposed by the popover.

### Programmatic Control

In addition to the `rs-popover-trigger` directive for toggling popover 
visibility, this package also provides a service that can be used to control 
popovers programmatically.

```
angular.module('my.module').controller('MyController', function (registry) {
  $scope.toggle = function (e) {
    registry.popover('somepopoverid').toggle(e.target, 'top-left');
  };

  $scope.show = function (e) {
    registry.popover('somepopoverid').open(e.target, 'top-left');
  };

  $scope.hide = function () {
    registry.popover('somepopoverid').close();
  };
});
```

## License

rs-popover is released under the [MIT License](LICENSE).

