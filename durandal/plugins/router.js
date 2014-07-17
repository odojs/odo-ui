// Generated by CoffeeScript 1.7.1
(function() {
  define('odo/durandal/plugins/router', ['knockout', 'plugins/router', 'durandal/app'], function(ko, router, app) {
    var isRouterEnabled, oldNavigate, subscription;
    subscription = null;
    router.updateDocumentTitle = function(instance, instruction) {
      var update;
      if (subscription != null) {
        subscription.dispose();
        subscription = null;
      }
      update = function() {
        var parts;
        parts = [];
        if (instance.title != null) {
          parts.push(ko.unwrap(instance.title));
        }
        if (instruction.config.title != null) {
          parts.push(instruction.config.title);
        }
        if (app.title != null) {
          parts.push(app.title);
        }
        parts = parts.filter(function(part) {
          return part !== '';
        });
        return document.title = parts.join(' - ');
      };
      update();
      if ((instance.title != null) && ko.isObservable(instance.title)) {
        return subscription = instance.title.subscribe(function() {
          return update();
        });
      }
    };
    isRouterEnabled = true;
    router.disable = function() {
      return isRouterEnabled = false;
    };
    router.enable = function() {
      return isRouterEnabled = true;
    };
    router.currentInstruction = null;
    router.guardRoute = function(instance, instruction) {
      if ((router.currentInstruction != null) && !isRouterEnabled) {
        return router.currentInstruction.fragment;
      }
      router.currentInstruction = instruction;
      return true;
    };
    oldNavigate = router.navigate;
    router.currentTransition = null;
    router.transition = function(fragment, transition) {
      router.currentTransition = transition;
      return oldNavigate(fragment);
    };
    return router.on('router:navigation:composition-complete', function() {
      return router.currentTransition = null;
    });
  });

}).call(this);
