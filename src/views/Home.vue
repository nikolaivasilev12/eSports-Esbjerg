<template>
  <v-content>
    <v-container fluid>
      <v-layout justify-center align-center>
        <v-flex xs12 lg10>
          <v-card>
            <v-img :src="require('../assets/keyboard.jpeg')" aspect-ratio="1.9" > 
              <v-layout column>
                <v-flex xs12>
                  <div id="headline" class="display-3 font-weight-medium ml-5 pl-5 text-sm-left">
                    Esports Esbjerg
                  </div>
                   <div id="h_paragraph" class="display-1 font-weight-light ml-5 pl-5 pt-2 text-sm-left" >
                    Your local gaming community
                    made for true gaming lovers.
                  </div>
                </v-flex>
                   <v-felx xs12>
                    <div id="h_button">
                      <v-btn large color="blue darken-2" class="right" href="/#/about" router>Read more</v-btn>
                    </div>
                  </v-felx>
              </v-layout>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl fluid class="blue darken-3 my-5">
      <v-layout justify-center align-center row wrap>
        <v-flex xs12 > 
          <v-card tile color="blue darken-3" width="100%" max-height="25vw" flat class="mt-4 mr-5">          
            <div id="section_text" class="text-xs-center display-2" width="100%">
              Games
            </div>
          </v-card>   
        </v-flex> 
      </v-layout>      
        <v-layout justify-center align-center row wrap>        
          <v-flex xs12 md4>
            <v-img  :src="require('../assets/cs_go.jpg')" id="team_1" class="my-5" contain aspect-ratio="2">
              <v-flex xs11>
                <v-btn large href="/#/team_cs" router id="team_button" class="right mr-4" color="blue darken-2">
                  Read More
                </v-btn>
              </v-flex>
            </v-img>
          </v-flex>
          <v-flex xs12 md4>
            <v-img :src="require('../assets/fort.jpg')" id="team_2" class="my-5" contain aspect-ratio="2">
              <v-flex xs11>
                <v-btn large href="/#/team_fortnite" id="team_button" class="right mr-4" color="blue darken-2">
                  Read More
                </v-btn>
              </v-flex>
            </v-img>
          </v-flex>         
          <v-flex xs12 md4>
            <v-img :src="require('../assets/fifa.jpeg')" id="team_3" class="my-5" contain aspect-ratio="2">
              <v-flex xs11>
                <v-btn large id="team_button" class="right mr-4" color="blue darken-2">
                  Coming Soon
                </v-btn>
              </v-flex>
            </v-img>
          </v-flex>
        </v-layout>      
    </v-container>
    <v-container fluid>
      <v-layout justify-center align-center row>
        <v-flex xs8> 
          <div id="instagram" class="display-1 ml-5 mb-2">
            Instagram
          </div>
          <div class="mb-5">
          <iframe src="https://snapwidget.com/embed/696208" class="snapwidget-widget ml-5" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; "></iframe>
          </div>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs6>
          <div class="mt-5">
          <a class="twitter-timeline" data-width="700" data-height="800" data-theme="dark" data-chrome="transparent" href="https://twitter.com/eSport_Esbjerg?ref_src=twsrc%5Etfw">Tweets by eSport_Esbjerg</a>
         </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container id="container" fluid class="grey darken-3 mt-5">
      <v-layout justify-center align-center column>
        <v-flex xs12>
          <div class="display-1 text-xs-center mt-5 mb-4">
            Chose eSports Esbjerg to help you dominate
            the gaming world and start your epic adventure now!
          </div>
        </v-flex>
        <v-flex xs12> 
          <v-btn href="/#/join" router large color="blue darken-2 mb-4">
            Join Now!
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>


<script>

</script>


<style scoped>
#headline {
  margin-top:30vw;
}
#h_paragraph {
  max-width: 30vw;
}
#h_button {
  position: relative;
  padding: 0vw 4.5vw 0 0 ;
  bottom: 3vw;
}
#section {
  margin-top: 4vw;
  width: 100%;
}
#team_button {
  position: relative;
  margin-top: 12vw; 
}
.snapwidget-widget {
 max-width: 700px;
}
.twitter-timeline {
  max-width: 500px;
}
#instagram {
  margin-top: 3vw;
}

</style>

