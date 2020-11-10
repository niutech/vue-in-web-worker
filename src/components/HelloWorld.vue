<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This is a demo app of Vue.js running in Web Worker using <a href="https://github.com/ampproject/worker-dom" target="_blank" rel="noopener">WorkerDOM</a>, bundled by <a href="https://rollupjs.org/" target="_blank" rel="noopener">Rollup.js</a>.
    </p>
    <h3>Benchmarks</h3>
    <ul>
      <li><a href="https://niutech.github.io/js-repaint-perfs/vue2/index.html" target="_blank" rel="noopener">DBMON Vue.js 2</a></li>
      <li><a href="https://niutech.github.io/js-repaint-perfs/vue2/workerdom.html" target="_blank" rel="noopener">DBMON Vue.js 2 in Web Worker</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
