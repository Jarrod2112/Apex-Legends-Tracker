<template>
  <section class="search">
      <h1>Track Player stats</h1>
    <!-- "v-on" to handle event's, "prevent" form from submitting to file. -->
      <form v-on:submit.prevent="onSubmit">
          <div class="form-group">
              <label for="platform">Platform</label>
             <!-- "v-model" bind input to data. -->
              <select name="platform" id="platform" v-model="platform">
                <option value="psn">Playstation</option>
                <option value="xb1">Xbox</option>  
                <option value="Origin">Origin</option>     
              </select>
          </div>
          <div class="form-group">
              <label for="gamertag">Gamertag</label>
              <input type="text" name="text" v-model="gamertag" id="gamertag" 
              placeholder="OriginID, Xbox Live gamertag, PSN ID, etc" />
          </div>
         <div class="form-group">
             <input type="submit" value="Submit" class="btn" />
         </div>
      </form>
  </section>
</template>

<script>

// links and returns platform & gamertag from form group above.
export default {
name: 'Search',
data() {
    return {
        
        platform:"psn",
        gamertag: ""
        };
    },
    // Display octane.png image in backround before.
    //Called synchronously immediately after the instance has been initialized.
    beforeCreate() {
        document.body.className = "body-bg-image";
    },
    methods: {
        // If gamertag is not entered show display box with messag for 3 seconds.
        onSubmit() {
            if(!this.gamertag) {
                this.$toasted.show("Please enter a gamertag", {
                duration: 3000,
                icon: "exclamation-circle"
                });
           //Redirect to profile page while having access to platform and gamertag.
           } else {
                this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
            }
        }
    }

};
</script>

<style>

</style>