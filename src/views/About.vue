<template>
  <v-content>
    <v-container id="container" fluid class="grey darken-3">
            <v-layout justify-center>
                <div id="headline" class="display-2 text-xs-center  mt-5">
                    About us
                </div>
            </v-layout>
        </v-container>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex xs12 md10>
          
          <div class=" display-1 font-weight-bold text-xs-left mt-5 ml-5">
            Our story
          </div>
          <div id="paragraph" class=" headline text-xs-left mt-3 mb-5 ml-5">
             Esport means electronic sport, ie. computer games on a competition level, which involves firm training, participation in tournaments and championships, qualifications and finals.
             Esport Esbjerg wants to contribute to the positive development of young people's hobbies, and also put Esbjerg on the map for this relatively new form of sport, which has now been recognized by both DGI and the Olympic Games as a real sport at competition level.
             Esport Esbjerg wants to coordinate and help with all eSport activities in the Southwest of Denmark, whether it be small LAN parties, major tournaments, fixed training, registration etc. 
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid class="grey darken-3">
      <v-layout justify-center align-center wrap>         
          <div class="text-xs-center display-1  mt-5">
            Join Esports Esbjerg Today!
          </div>        
      </v-layout>
      <v-layout justify-center align-center wrap>
          <v-btn href="/#/join" large router color="blue darken-2 mt-4 mb-5">
            join us!
          </v-btn>
      </v-layout>
    </v-container>
  </v-content>
</template>

<style scoped>
#container {
    margin-top: 150px;
    height: 200px;
}
#paragraph {
  max-width: 55vw;
}
</style>
