<template>
    <v-content fluid>
        <v-container id="container" fluid class="grey darken-3 mb-4">
            <v-layout justify-center>
                <div class="display-2 text-xs-center  mt-5">
                    Gallery
                </div>
            </v-layout>
        </v-container>
        <v-container justify-center align-center>
            <v-flex xs12>              
                    <iframe src="https://snapwidget.com/embed/696258" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; "></iframe>
            </v-flex>
        </v-container>
    </v-content>
</template>


<script>


export default {
  
  data () {
    return {
      
    }
  }
}
</script>



<style scoped>
#header {
    margin-top: 6vw;;
}
#container {
    margin-top: 150px;
    height: 200px;
}
</style>
