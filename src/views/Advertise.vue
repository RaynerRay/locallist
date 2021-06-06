<template>
    <div class="join ">
        <br>
        
        <v-row>
            
            <v-col>
                <v-card class="ma-8" max-width="350" flat color="#f7f7f7">
        <v-row justify="center">
            
                <h1 class="mt-4 ">LOCALLIST</h1><br>
                
           </v-row>
           <v-row justify="center">
            <p class="mt-4 ma-8"> 
               Advertise on growing platform , we made it easy, simply fill in the form 
               & we'll get back to you.

            </p>
           </v-row>
           </v-card>
        </v-col>
        
        <v-col cols="12" sm="7">
        <v-card
                class="mx-0"
                max-width="600"
                flat
            >
            <v-container>
                
                <v-form ref="form" 
                    action="https://formsubmit.co/31f61508b7d909bac570e27e5e70c25d" method="POST"
                >

                    <v-text-field
                    name="name"
                    type="name"
                    :rules="nameRules"
                    label="Company or Service Name"
                    required
                    outlined
                    ></v-text-field>

                <v-row>
                    <v-col>
                        <v-text-field
                        name="email"
                        type="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        outlined
                        ></v-text-field>
                    </v-col>

                    <v-col>
                        <v-text-field
                        name="phone"
                        type="phone"
                        :rules="phoneRules"
                        label="Phone Number"
                        required
                        outlined
                        ></v-text-field>
                    </v-col>
                </v-row> 
                <v-row>
                    <v-col>
                        <v-text-field
                        name="location"
                        type="location"
                        label="Location"
                        required
                        outlined
                        ></v-text-field>
                    </v-col>

                    <v-col>
                        <v-text-field
                        name="website"
                        type="website"
                        label="Website (if available)"
                        outlined
                        ></v-text-field>
                    </v-col>
                </v-row> 

                <v-textarea
                    name="description"
                    type="description"
                    label="Duration of advert + extra notes"
                    required
                    outlined
                ></v-textarea> 
                    

                    <v-row justify="center">
                        <v-btn
                            color="red"
                            class="mr-4 white--text"
                            type="submit"
                            to="/"
                            >
                            Back
                        </v-btn>
                    
                    
                        <v-btn
                            color="green"
                            class="mr-4 white--text"
                            type="submit"
                        >
                            Send
                        </v-btn>
                    </v-row>
                </v-form>
                <br>

               

            </v-container>
            </v-card>

            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.join {
    background-color: #f7f7f7;
}
</style>