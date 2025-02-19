<template>
  <div>
    <MainHeader />
    <main>
      <div id="app" class="inside">
        <BookList />
      </div>
    </main>
  </div>
</template>
<!-- 
In Vue 3, a <template> must have only one root element. 
This means that everything inside your <template> must be 
wrapped in a single parent element, such as a <div>.

Why is this needed?
Vue’s virtual DOM works with a single tree structure. 
If your template has multiple root elements, Vue 
wouldn’t know which one represents the component’s 
main structure. 
-->

<script>
import MainHeader from './components/MainHeader.vue'
import BookList from './components/BookList.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    BookList,
  },
}
</script>
