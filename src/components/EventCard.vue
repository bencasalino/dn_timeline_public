<template>
  <div class="event-card-component-wrapper">
    <div class="container-fluid">
      <div class="event_month">JULY</div>
      <div v-bind:key="field.event" v-for="field in data.event" v-if="field.event_year == '2018'" class="row EventCard">
        <div class="col-3 timeline">
          <div class="line-vertical"></div>
          <div class="line-horizontal"></div>
          <div class="circle">
          </div>
          <!-- image if/else -->
            <img class="event-icon"
            src="../assets/images/drafted_player.svg" v-show="field.event_type =='Drafted'"/>
            <img class="event-icon" src="../assets/images/trade.svg" v-show="field.event_type =='Trade'">
        </div>
        <div class="col-9 events-list">
          <div class="event-header">
            <div class="event-date">
              <p>{{ field.event_date }}, {{ field.event_year }} </p>
            </div>
              <p class="event-type">{{ field.event_type }} </p>
            <div class="event-link">
              <a :href="field.event_link">VIEW</a>
            </div>
          </div>
          <div class="event-body">
            <p class="event-text">
              {{field.event_text}}
            </p>
          </div>
        </div>
        </div>
      </div>
          <div class="container-fluid">
      <div class="event_month">AUGUST</div>
      <div v-bind:key="field.event" v-for="field in data.event" v-if="field.event_year == '2017'" class="row EventCard">
        <div class="col-3 timeline">
          <div class="line-vertical"></div>
          <div class="line-horizontal"></div>
          <div class="circle">
          </div>
          <!-- image if/else -->
            <img class="event-icon"
            src="../assets/images/drafted_player.svg" v-show="field.event_type =='Drafted'"/>
            <img class="event-icon" src="../assets/images/trade.svg" v-show="field.event_type =='Trade'">
        </div>
        <div class="col-9 events-list">
          <div class="event-header">
            <div class="event-date">
              <p>{{ field.event_date }}, {{ field.event_year }} </p>
            </div>
              <p class="event-type">{{ field.event_type }} </p>
            <div class="event-link">
              <a :href="field.event_link">VIEW</a>
            </div>
          </div>
          <div class="event-body">
            <p class="event-text">
              {{field.event_text}}
            </p>
          </div>
        </div>
        </div>
      </div>
      <div>
      </div>
    </div>
</template>

<script>
export default {
  name: "EventCard",
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      fetch("http://localhost:3000")
        .then(res => res.json())
        .then(data => {
          this.data = data;
          console.log(data);
        });
    }
  }
};
</script>



</script>


<style scoped>
/* wrapper */
.timeline {
  color: white;
  position: relative;
}

/* left */
.circle {
  color: white;
  background-color: #fec524;
  /* background-image: url("../assets/images/trade.svg"); */
  /* background-size: 65%; */
  background-repeat: no-repeat, repeat;
  background-position: center;
  position: absolute;
  top: 20px;
  left: 20px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  z-index: 0;
}
.event-icon {
  background-color: #fec524;
  position: absolute;
  top: 30px;
  left: 30px;
  height: 30px;
  width: 30px;
  z-index: 10;
}
.line-vertical {
  background-color: #1d428a;
  color: white;
  position: absolute;
  top: 0%;
  left: 42px;
  height: 100%;
  width: 5px;
}
.line-horizontal {
  color: white;
  background-color: #fec524;
  position: absolute;
  top: 41px;
  left: 50px;
  height: 10px;
  width: 500px;
}

/* right */
.events-list {
  padding-right: 5%;
  padding-left: 0;
  padding-top: 30px;
}
.event-header {
  display: flex;
  justify-content: space-between;
  color: #1d428a;
  background-color: #fec524;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
}
.event-date,
.event-link {
  display: inline-block;
  color: #1d428a;
  background-color: #fec524;
}
.event-date > p {
  background-color: #fec524;
  color: #1d428a;
}
.event-type {
  background-color: #fec524;
  color: #1d428a;
  font-weight: bold;
}

a {
  color: #1d428a;
  background-color: #fec524;
}
.event-body {
  background-color: #1d428a;
  /* height: 50px; */
  color: white;
  padding: 10px;
  line-height: 1.3em;
  margin-bottom: 30px;
}
.event-text {
  background-color: #1d428a;
}

.event_month {
  background-color: #1d428a;
  color: white;
  /* width: 100px; */
  width: 100%;
  font-size: 2em;
  text-align: center;
}
</style>
