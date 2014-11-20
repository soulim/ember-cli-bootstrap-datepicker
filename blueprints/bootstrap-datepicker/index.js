module.exports = {
  afterInstall: function() {
    return this.addBowerPackageToProject('bootstrap-datepicker');
  }
};
