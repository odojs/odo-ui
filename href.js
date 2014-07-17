// Generated by CoffeeScript 1.7.1
(function() {
  define('odo/href', [], function() {
    var chunks, domain, protocol, rootdomain, subdomain, url;
    chunks = window.location.href.split('://');
    protocol = chunks[0];
    chunks = chunks.slice(1).join('').split('/');
    domain = chunks[0];
    url = '/' + chunks.slice(1).join('/');
    chunks = domain.split('.');
    subdomain = chunks[0];
    rootdomain = chunks.slice(1).join('.');
    return {
      protocol: protocol,
      domain: domain,
      url: url,
      subdomain: subdomain,
      rootdomain: rootdomain
    };
  });

}).call(this);
