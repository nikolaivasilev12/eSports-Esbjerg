<template>
    <v-content>
        <v-container id="container" fluid color="gray darken-3">
            <v-layout justify-center align-center>
                <v-flex xs12 lg10>               
                        <v-img :src="require('../assets/cs_go.jpg')" height="500px" aspect-ratio="1.9" class="mb-5"></v-img>
                        <div class="headline mb-2" >
                          Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter video game developed 
                          by Hidden Path Entertainment and Valve Corporation. It is the fourth game in the Counter-Strike series 
                          and was released for Microsoft Windows, OS X, Xbox 360, and PlayStation 3 on August 21, 2012, while the 
                          Linux version was released in 2014. The game pits two teams against each other: the Terrorists and the 
                          Counter-Terrorists. Both sides are tasked with eliminating the other while also completing separate objectives. 
                          The Terrorists, depending on the game mode, must either plant the bomb or defend the hostages, while the 
                          Counter-Terrorists must either prevent the bomb from being planted, defuse the bomb, or rescue the hostages. 
                          There are nine game modes, all of which have distinct characteristics specific to that mode. The game also has 
                          matchmaking support that allows players to play on dedicated Valve servers, as well as allowing members of the community 
                          to host their own servers with custom maps and game modes. A battle-royale game-mode, "Danger Zone", was introduced in 2018.
                        </div>                         
                </v-flex>
            </v-layout>         
        </v-container>
         <v-container id="container2" fluid class="grey darken-3 mb-5">
            <v-layout justify-center>
                <div class="display-2 text-xs-center mt-5">
                    Training Schedule
                </div>
            </v-layout>            
        </v-container> 
            <v-layout justify-center class="mb-5">
                    <v-flex lg8 xs10>
                    <v-sheet height="400">
                        <v-calendar
                        ref="calendar"
                        :now="today"
                        :value="today"
                        color="primary"
                        type="week"
                        class="px-5"
                        >
                        <template v-slot:dayHeader="{ date }">
                            <template v-for="event in eventsMap[date]">
                            <div
                                v-if="!event.time"
                                :key="event.title"
                                class="my-event"
                                @click="open(event)"
                                v-html="event.title"
                            ></div>
                            </template>
                        </template>
                        <template v-slot:dayBody="{ date, timeToY, minutesToPixels }">
                            <template v-for="event in eventsMap[date]">
                            <div
                                v-if="event.time"
                                :key="event.title"
                                :style="{ top: timeToY(event.time) + 'px', height: minutesToPixels(event.duration) + 'px' }"
                                class="my-event with-time"
                                @click="open(event)"
                                v-html="event.title"
                            ></div>
                            </template>
                        </template>
                        </v-calendar>
                    </v-sheet>
                    </v-flex>
                </v-layout>
    </v-content>
</template>

<script>
  export default {
    data: () => ({
      today: '2019-05-28',
      events: [
        {
          title: 'CS:GO Practice',
          date: '2019-05-27'
        },
        {
          title: 'CS:GO Practice',
          date: '2019-05-29'
        },
        {
          title: 'CS:GO Practice',
          date: '2019-05-31'
        },
      ]
    }),
    computed: {
      
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
    mounted () {
      this.$refs.calendar.scrollToTime('08:00')
    },
    methods: {
      open (event) {
        alert(event.title)
      }
    }
  }
</script>

 <style scoped>
 #container {
    margin-top: 150px;
}
 .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
    left: 4px;
    margin-right: 8px;
    position: relative;

  }
  #container2 {
    height: 200px;
}
 </style>
 