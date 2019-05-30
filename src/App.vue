<template>
  <v-app id="inspire" dark>
    <v-toolbar id="toolbar" absolute app flat> 
      <v-toolbar-items >
        <v-btn flat href="/#/" router >Home</v-btn>
        <v-btn flat href="/#/join" router>Offers</v-btn>
        <v-btn flat href="/#/gallery" router>Gallery</v-btn>
      </v-toolbar-items>
        <v-spacer></v-spacer>
          <router-link :to="{ path: '/'}" replace>
            <img id="logo" src="./assets/logo1.png" height="200px" class="ml-5" alt="">     
          </router-link>      
        <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn flat href="/#/parents"  router>For parents</v-btn>
            <v-btn flat href="/#/about"  router>About us</v-btn>
            <v-btn flat href="/#/contact"  router>Contact</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      <router-view>
        <v-content>   
        </v-content>
      </router-view>
    <v-footer absolute app tile flat height="auto" class="blue darken-3 white--text" >
      <v-container fluid>
        <v-layout justify-center align-center>
          <v-flex xs12 lg4>         
            <v-card class="blue darken-3 white--text" flat>        
              <v-card-text class="white--text" >
                <div class="display-1 ml-5 ">Follow Us!</div>
              </v-card-text>
              <v-card-text>
                <v-btn href="https://www.facebook.com/eSportEsbjerg/#" router class="ml-5 white--text blue darken-3" icon flat>
                  <v-icon class="fab fa-facebook" size="36px"></v-icon>
                </v-btn>
                <v-btn href="https://www.instagram.com/esport_esbjerg/" router class="ml-4 white--text blue darken-3" icon flat>
                  <v-icon class="fab fa-instagram" size="36px"></v-icon>
                </v-btn>
                <v-btn href="https://twitter.com/eSport_Esbjerg" router class="ml-4 white--text blue darken-3" icon flat>
                  <v-icon class="fab fa-twitter" icon size="36 px"></v-icon>
                </v-btn>
              </v-card-text>                          
            </v-card>
          </v-flex>
        <v-flex xs12 lg4>
          <v-card-text >
            <div class="display-1 mr-5">Subscribe to our Newsletter</div>
            <div class="title mt-3 mr-5">Receive news and updates once per Month</div>        
          </v-card-text>
            <v-text-field class="mx-3"
              box
              label="Email"
              prepend-inner-icon="email"
            ></v-text-field>
            <v-btn class="mb-1 ml-3" large color="blue darken-2">Subscribe</v-btn>
          </v-flex>              
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

</script>

<style scoped>
  #toolbar {
   background: none; 
  }
  #footer{
    height: 80px;
  }
  #logo {
    margin-top: 120px;
  }

</style>

