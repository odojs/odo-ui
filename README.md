# Odo - whatever you want it to be
A Durandaljs framework for creating awesome things.

Install via bower

```zsh
bower install --save odo
```

[Status and current work on Trello](https://trello.com/board/odo/4f7b3e995aa70d786202e667)

## Goals
1. Easy to install, use, modify, adapt and refactor
2. Modular and lightweight components that are useful independently
3. Strong cohesion where things change at the same rate, loose coupling where things change at a different rate
4. Few concepts needed in any one area of the code to keep mental effort of development low

Odo hopefully follows these goals and also makes it easy to write applications that follow these goals.

## Techniques
- [UI composition](http://www.udidahan.com/2012/06/23/ui-composition-techniques-for-correct-service-boundaries/)
- [Single-page applications](http://www.johnpapa.net/spa/)
- [Dependency injection](http://martinfowler.com/articles/injection.html)

---

# Get started
Fork [odo example](https://github.com/tcoats/odo-example) (out of date at the moment - contact me to update)

# Technologies
## Front end
- [Durandaljs](http://durandaljs.com/) (single page app)
- [Knockoutjs](http://knockoutjs.com/) (mvvm in browser)
- [Knockoutjs Validation](https://github.com/Knockout-Contrib/Knockout-Validation) (validation)
- [jQuery](http://jquery.com/) (dom manipulation)
- [Bootstrap](http://getbootstrap.com/) (scaffolding)
- [Velocity](http://velocityjs.org/) (animations)
- [Mousetrap](http://craig.is/killing/mice) (keyboard shortcuts)

# Frontend infrastructure
## Durandal
The durandal folder provides several enhancements to the infrastructure provided by [durandal](http://durandaljs.com/).

See the [durandal front end folder](https://github.com/tcoats/odo/tree/master/public/durandal) for more information.

## Href
A utility to decompose the current url into it's pieces - protocol, subdomain, domain, etc.

## Humanize
A collection of formatting functions to make things human readable. It does things like `[1, 2, 3] => "1, 2, and 3"`.

## Inject
A wrapper for [injectinto](https://github.com/tcoats/injectinto), a dependency injection technique useful for providing extension points for cross app integration.



