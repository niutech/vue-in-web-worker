# [Vue.js in Web Worker](https://niutech.github.io/vue-in-web-worker/)

This is a starter app of Vue.js working in Web Worker using [WorkerDOM](https://github.com/ampproject/worker-dom), bundled by [Rollup.js](https://rollupjs.org/). This allows Vue.js to offload its work to a background thread and send updates back to the main thread asynchronously, which should greatly increase rendering performance. See this [blog post](https://amphtml.wordpress.com/2018/08/21/workerdom/) for details.

## Benchmarks

Compare these rendering performance tests:
 - [DBMON Vue.js 2](https://niutech.github.io/js-repaint-perfs/vue2/index.html)
 - [DBMON Vue.js 2 in Web Worker](https://niutech.github.io/js-repaint-perfs/vue2/workerdom.html)

## Developing

Develop you Vue.js app as always, using `main.js` as an entry point. In `index.html`, add a wrapper around `#app` pointing to `main.js` and inject `worker-dom.js` library like this:

    <main src="dist/main.js">
      <div id="app"></div>
    </main>
    <script src="dist/worker-dom.js"></script>

## Building

First run `npm install` to set up the project. To build the files in `dest` folder, run `npm run build` or `rollup -c`. Then start the local web server e.g. `python -m http.server` and go to [http://localhost:8000](http://localhost:8000). Your `index.html` page should load `worker-dom.js`, which should asynchronously fetch and load both `worker.mjs` and `main.js` modules into Web Worker.

## License

© 2021 Jerzy Głowacki under Apache Lincese 2.0
