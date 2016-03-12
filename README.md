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

* Imports do not always work. Importing local files seems to be ok, but eg the react-router import in app.js returns an undefined. What causes this?
* Eslint goes crazy about declared but unused properties, eg: the React imports on almost every page. Ive disabled the linting on every JS file we've got so far, but there must be a better solution
* during npm run setup/npm run dev a few dependencies are not found. Missing the 'estraverse-fb' module has caused errors on my build several times, but other random missing stuff has popped up too. 'npm install'-ing the missing stuff fixed the problems, but this is just a temporary fixed
* during npm run dev, some other problems are printed out (too many windows open, unexpected characters-errors on the html tags in the jsx files, ...). The app does start up though
*no testing infrastructure yet (need to take a look at that Jest library)

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