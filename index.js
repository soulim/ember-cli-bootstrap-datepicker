'use strict';

const path = require('path');
const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-bootstrap-datepicker',

  included: function(app) {
    this._super.included(app);

    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {
      app.import(path.join(this.treePaths.vendor, 'bootstrap-datepicker.js'));
      app.import(path.join(this.treePaths.vendor, 'bootstrap-datepicker.css'));
    }
  },

  treeForVendor(vendorTree) {
    let jsDir = path.dirname(require.resolve('bootstrap-datepicker'));
    let cssDir = path.resolve(jsDir, '..', 'css');
    let localesDir = path.resolve(jsDir, '..', 'locales');

    // If there's no vendor directory (it apparently get stripped if empty when
    // publishin to npm), the vendorTree is undefined and mergeTrees() gets
    // grumpy if one of the trees passed in isn't a broccoli node.
    let trees = [];
    if (vendorTree) {
      trees.push(vendorTree);
    }
    trees.push(
      new Funnel(jsDir, { files: [ 'bootstrap-datepicker.js' ] }),
      new Funnel(cssDir, { files: [ 'bootstrap-datepicker.css' ] }),
      new Funnel(localesDir, { destDir: 'bootstrap-datepicker-locales' })
    );

    return mergeTrees(trees);
  }
};
