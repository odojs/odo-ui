// Generated by CoffeeScript 1.7.1
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define('odo/durandal/plugins/widget', ['plugins/widget'], function(widget) {
    widget.convertKindToModulePath = function(kind) {
      if (__indexOf.call(kind, '/') >= 0) {
        return kind;
      }
      return "local/widgets/" + kind;
    };
    return widget.convertKindToViewPath = function(kind) {
      if (__indexOf.call(kind, '/') >= 0) {
        return kind;
      }
      return "local/widgets/" + kind;
    };
  });

}).call(this);
