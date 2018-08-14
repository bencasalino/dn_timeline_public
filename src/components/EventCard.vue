<template>
  <div id="event-card-component-wrapper">
    <div class="jumper">
      <a name="july"> </a></div>
      <section id="Section1">
        <div class="container-fluid">


        </div>
      </section>
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
      fetch(
        "http://localhost:3000"
      )
        .then(res => res.json())
        .then(data => {
          this.data = data;
          console.log(data);
        });
    }
  }
};
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
  border-bottom: 2px solid white;
}
.event-icon {
  background-color: #fec524;
  position: absolute;
  top: 30px;
  left: 30px;
  height: 30px;
  width: 30px;
  z-index: 1;
}
.arrow {
  position: absolute;
  top: 0px;
  left: 36px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #1d428a;
  border-top: 10px solid #1d428a;
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
  padding-right: 7%;
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
  border-bottom: 2px solid white;
  /* border-right: 2px solid white; */
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
  text-decoration: none;
}
a:hover {
  color: white;
  background-color: #fec524;
  text-decoration: none;
}
.event-body {
  background-color: #0e2240;
  height: 200px;
  color: white;
  padding: 10px;
  line-height: 1.3em;
  margin-bottom: 30px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 2px solid white;
  border-right: 2px solid white;
}
.event-text {
  background-color: #0e2240;
}

.event_month {
  margin-bottom: 85px;
  border-left: 2px solid white;
  border-right: 2px solid white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #1d428a;
  color: white;
  /* width: 100px; */
  width: 100%;
  font-size: 2em;
  text-align: center;
}

#event-card-component-wrapper {
  z-index: -10;
}
/* div {
    height:800px;
    background:red;
} */
#octtext {
  margin:0;
   background-color: #1d428a;
  /* padding:30px 0; */
    /* color:red; */

  transition:all 1s linear
}
#octtext.view {
  background-color: #0e2240;
  padding:30px;
  color:#fec524;
}
</style>
