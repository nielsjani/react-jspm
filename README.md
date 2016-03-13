# ReactJs with jspm

Other stuff used:
* bootstrap
* sass (css preprocessor) : node-sass used, so no Ruby install needed
* karma
* jasmine
* babel transpiling to es5
* eslint
* browser-sync
* gulp tasks (but called from npm scripts)
* ...

## Dev setup

* install NodeJs
* clone this git repo
* npm run setup

## Dev commands

* npm run prepare (tasks: clean, sass)
* npm run test (tasks: 'prepare' tasks + eslint, karma)
* npm run dev (tasks: 'test' tasks + watch, serve)
* npm run build (tasks: 'test' tasks + bundle/minify js to dist folder)

## To Do's

* Eslint goes crazy about declared but unused properties, eg: the React imports on almost every page. Fixed a few errors, but eslint globals and react do not seem to be friends.
* Possibly fixed: during npm run setup/npm run dev a few dependencies are not found. Missing the 'estraverse-fb' module has caused errors on my build several times, but other random missing stuff has popped up too. 'npm install'-ing the missing stuff fixed the problems, but this is just a temporary fix
* testing phase goes crazy during the watch task. Something about too many windows open at once
* existing (regular old karma tests) are not picked up during npm run dev 
* no React testing infrastructure yet (need to take a look at that Jest library) -Does already have Karma/Jasmine, though
* bootstrap css is present, but integrated via index.html. Maybe we should try to put those into the gulp config?
## example shim configuration

* reason
  * the package.json of bootstrap-bower was't properly configured for jspm
  * so that jspm doesn't know that it has to load its angular dependency first when doing the sfx bundle
  * can be fixed for your own project by doing an override like this ...

```shell
jspm install angular-bootstrap=github:angular-ui/bootstrap-bower@~1.2.4 -o "{ registry: 'jspm', main: 'ui-bootstrap-tpls', 'format': 'cjs', dependencies: { angular: '1.5.0' }, shim: { 'ui-bootstrap-tpls': { deps: ['angular'] } } }"
```

## License

The MIT License