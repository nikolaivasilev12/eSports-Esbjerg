<template>
    <v-content>
        <v-container id="container" fluid color="gray darken-3">
            <v-layout justify-center align-center>
                <v-flex xs12 lg10>               
                        <v-img :src="require('../assets/fortnite.png')" height="500px" aspect-ratio="1.9" class="mb-5"></v-img>
                        <div class="headline mb-2" >
                          In Fortnite, players collaborate to survive in an open-world environment, by battling other 
                          characters who are controlled either by the game itself, or by other players. Violence is
                          cartoonish and it's made so that it doesn't disturb younger players by any way.The single-player or 
                          co-operative mode (played with friends) involves fighting off zombie-like creatures. But Fortnite’s 
                          most popular mode is its standalone free-to-play multiplayer platform, Fortnite Battle Royale, in which 
                          up to 100 players enter an online game, competing individually or as part of squads of up to four, to 
                          be the last player standing within a ever-decreasing battle arena.
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
          title: 'Fortnite Practice',
          date: '2019-05-28'
        },
        {
          title: 'Fortnite Practice',
          date: '2019-05-30'
        },
        {
          title: 'Fortnite Practice',
          date: '2019-06-01'
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
 