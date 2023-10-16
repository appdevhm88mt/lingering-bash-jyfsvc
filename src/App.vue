<template>
  <div id="app">
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<script>
import VueFroala from 'vue-froala-wysiwyg';

export default {
  name: 'app',
  data () {
    return {
      config: {
        events: {
          'initialized': function () {
            console.log(this);
          }
        }
      },
      model: 'Edit Your Content Here!'
    }
  }
}
</script>
