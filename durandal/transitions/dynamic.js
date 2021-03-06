// Generated by CoffeeScript 1.7.1
(function() {
  define('transitions/dynamic', ['plugins/router', 'q'], function(router, Q) {
    return function(context) {
      var dfd, view;
      dfd = Q.defer();
      if (router.currentTransition != null) {
        requirejs(['transitions/' + router.currentTransition], function(transition) {
          return transition(context).then(function() {
            return dfd.resolve();
          });
        });
      } else {
        if (context.scrolltop == null) {
          context.scrolltop = true;
        }
        if (context.activeView != null) {
          $(context.activeView).hide();
        }
        if (context.child != null) {
          context.triggerAttach();
          view = $(context.child).show();
          if ((context.scrolltop != null) && $(window).scrollTop() > view.offset().top) {
            $('html, body').css({
              scrollTop: view.offset().top
            });
          }
          view.find('[autofocus],.autofocus').first().focus();
        }
        dfd.resolve();
      }
      return dfd.promise;
    };
  });

}).call(this);
