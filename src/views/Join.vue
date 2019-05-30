<template>
    <v-content>
        <v-container id="container" fluid class="grey darken-3 mb-3">
            <v-layout justify-center>
                <div class="display-2 text-xs-center mt-5">
                    Our Offers
                </div>
            </v-layout>
        </v-container>
        <v-container fluid>
            <v-layout align-center justify-center column>                  
                    <v-layout justify-center row>                             
                <v-flex xs12 lg4>
                    <v-card class="mr-5 mt-3 mb-5 pt-5 pa-5" height="750px">
                        <v-flex xs12>
                            <div class="text-xs-center mt-5 mb-5">
                                <v-icon x-large class="fas fa-gamepad" icon flat ></v-icon>   
                            </div>   
                            <v-card-text class="headline font-weight-medium text-xs-center ">
                                100 DKK /Year
                            </v-card-text>
                            <v-card-text class="display-1 font-weight-bold text-xs-center mt-4">
                                Basic
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center mt-3">
                                Discounts at club events
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center">
                                Offers from eSport Esbjerg's partners
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center">
                                Esport-grade gaming hardware
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center">
                                Discord and TeamSpeak Access
                            </v-card-text>
                            <div class="text-xs-center">
                                <v-btn :loading="loading" large class="mt-3" color="blue darken-2">
                                    Buy Package
                                </v-btn>
                            </div>
                        </v-flex>                    
                    </v-card>
                </v-flex>
                <v-flex xs12 lg4>
                    <v-card class="mr-5 mt-3 mb-5 pa-5 "  height="750px">
                        <v-flex xs12>
                            <div class="text-xs-center mt-5 mb-5">
                                <v-icon x-large class="fas fa-gamepad" icon flat ></v-icon>   
                            </div>   
                            <v-card-text class="headline font-weight-medium text-xs-center ">
                                300 DKK / 6 Month
                            </v-card-text>
                            <v-card-text class="display-1 font-weight-bold text-xs-center mt-4">
                                Medium
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center mt-3">
                                All the benefits of Basic
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center">
                                Sport workout
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center">
                                Stress Excercise
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center mb-4 ">
                                Professional training
                            </v-card-text>
                            <div class="text-xs-center">
                                <v-btn :loading="loading" large class="mt-5" color="blue darken-2">
                                    Buy Package
                                </v-btn>
                            </div>
                        </v-flex>                    
                    </v-card>
                </v-flex>
                <v-flex xs12 lg4>
                    <v-card class="mr-5 mt-3 mb-5 pa-5"  height="750px">
                        <v-flex xs12>
                            <div class="text-xs-center mt-5 mb-5" >
                                <v-icon x-large class="fas fa-gamepad" icon flat ></v-icon>   
                            </div>   
                            <v-card-text class="headline font-weight-medium text-xs-center ">
                                500 DKK/ 6 Months
                            </v-card-text>
                            <v-card-text class="display-1 font-weight-bold text-xs-center mt-4">
                                Premium
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center mt-3">
                               All benefits of Basic
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center">
                                Member offers
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center">
                                Discount at club events
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center mb-4">
                                Professional training
                            </v-card-text>
                            <div class="text-xs-center">
                                <v-btn :loading="loading" large class="mt-5" color="blue darken-2">
                                    Buy Package
                                </v-btn>
                            </div>
                        </v-flex>                    
                    </v-card>
                </v-flex>
                </v-layout>
                
               
                    <div id="headline" class="text-xs-center display-3 mb-5">
                        Buy a gaming pc
                    </div>                   
               
                <v-layout>
                 <v-flex xs4>
                    <v-card class=" mt-3 mb-5 pa-3 mx-5">
                        <v-img :src="require('../assets/aero.png')" class="mt-5" height="25vw" >
                        </v-img>
                        <v-flex>  
                            <v-card-text class="display-1 font-weight-bold text-xs-center mt-5 mb-2">
                                eSport Esbjerg Baseline
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                GPU: Nvidia GTX 1060 6BG
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center ">
                                CPU: Ryzen 5 2600 3.4GHz
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                RAM: 16GB DDR4 3000MHz
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Disk space: 480GB SSD
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Case: AeroCool Cyclon
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                PSU: 650W Modular RGB
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Cooler: Arctic 150W TDP
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Windows 10 Home
                            </v-card-text>
                            <v-card-text class="title font-weight-bold text-xs-center">
                                Price: 8.825 DKK
                            </v-card-text>
                            <div class="text-xs-center">
                                <v-btn :loading="loading" large class="mt-4 mb-4" color="blue darken-2">
                                    Order Now
                                </v-btn>
                            </div>

                        </v-flex>                    
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-card class="mt-3 mb-5 pa-3 ml-5">
                        <v-img :src="require('../assets/azza.png')" class="mt-5" height="25vw"  >
                        </v-img>
                        <v-flex >  
                            <v-card-text id="Luxus" class=" display-1 font-weight-bold text-xs-center mt-5 mb-2">
                                eSport Esbjerg Luxus
                            </v-card-text>
                            <v-card-text class="title font-weight-regular mt-5 text-xs-center">
                                GPU: Nvidia RTX 2070 8GB
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center ">
                                CPU: Intel i5 9600K 3.7GHz
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                RAM: 16GB DDR4 3000MHz
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Disk space: 480GB SSD
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Case: AZZA Blaze 231G
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                PSU: 650W Modular RGB
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Cooler: Arctic 150W TDP
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Windows 10 Home
                            </v-card-text>
                            <v-card-text class="title font-weight-bold text-xs-center">
                                Price: 11.975 DKK
                            </v-card-text>
                            <div class="text-xs-center">
                                <v-btn :loading="loading" large class="mt-4 mb-4" color="blue darken-2">
                                    Order Now
                                </v-btn>
                            </div>

                        </v-flex>                    
                    </v-card>
                </v-flex>
                 <v-flex xs4>
                    <v-card class="mt-3 mb-5 pa-3 mx-5">
                        <v-img :src="require('../assets/cm.png')" class="mt-5" height="25vw" >
                        </v-img>
                        <v-flex >  
                            <v-card-text class="display-1 font-weight-bold text-xs-center mt-5 mb-2">
                                eSport Esbjerg Extreme
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                GPU: Nvidia RTX 2080 8GB
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center ">
                                CPU: Ryzen 7 2700x 3.7GHz
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                RAM: 16GB DDR4 3000MHz
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Disk space: 128GB M.2 SSD + 1TB SSD
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Case: CM MB520 RGB
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                PSU: 650W Modular RGB
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Cooler:CM MasterLiquid 240
                            </v-card-text>
                            <v-card-text class="title font-weight-regular text-xs-center">
                                Windows 10 Home
                            </v-card-text>
                            <v-card-text class="title font-weight-bold text-xs-center">
                                Price: 16.600 DKK
                            </v-card-text>
                            <div class="text-xs-center">
                                <v-btn :loading="loading" large class="mt-2 mb-4" color="blue darken-2">
                                    Order Now
                                </v-btn>
                            </div>

                        </v-flex>                    
                    </v-card>
                </v-flex>
                </v-layout>
                <v-flex xs12>
                    <div id="headline" class="text-xs-center display-3 mb-4">
                        Join Our LAN Party
                    </div>                   
                </v-flex>
                <v-flex xs12>
                    <v-card class="mt-3 mb-5 pa-5">
                        <v-flex xs12> 
                            <v-card-text class="display-2 font-weight-medium text-xs-center ">
                               ELP
                            </v-card-text>
                            <v-card-text class="display-1 font-weight-bold text-xs-center mt-4">
                                Esbjerg LAN PARTY
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center mt-3">
                                Kvaglundhallen 6-8 September 2019
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center">
                                Price: 150DKK
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center">
                                Esport-grade gaming hardware
                            </v-card-text>
                            <v-card-text class="title font-weight-light text-xs-center">
                                Professional training
                            </v-card-text>
                            <div class="text-xs-center">
                                <v-btn :loading="loading" large class="mt-4" color="blue darken-2">
                                    Sign up
                                </v-btn>
                            </div>
                        </v-flex>                    
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<style scoped>
#headline {
    margin-top:6vw;
}
#Luxus {
    width: 400px;
}
#container {
    margin-top: 150px;
    height: 200px;
}
</style>

