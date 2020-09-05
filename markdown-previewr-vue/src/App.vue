<template>
  <div id="app">
    <NavBar />
    <div class="body mx-4">
      <Heading />
      <PageBody />
      
      
    </div>
    
  </div>
</template>

<script>
// import MarkdownInput from './components/MarkdownInput'
import Heading from "./components/Heading";
import NavBar from './components/NavBar'
// import Previewer from './components/Previewer'
import PageBody from './components/PageBody'

export default {
  name: 'App',
  components: {
    NavBar,
    Heading,
    // MarkdownInput,
    // Previewer,
    PageBody
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
