// Generated by CoffeeScript 1.7.1
(function() {
  define('transitions/back', ['durandal/system', 'transitions/velocity'], function(system, Velocity) {
    return function(context) {
      system.extend(context, {
        inAnimation: 'slideInLeft',
        outAnimation: 'slideOutRight'
      });
      return new Velocity().create(context);
    };
  });

}).call(this);
