<template>
  <div id="event-card-component-wrapper">

    <div class="jumper">    <a name="july"> </a></div>
          <section id="Section1"></section>
    <div class="container-fluid">
     <div class="event_month" id="scroll-to3"
      > <h1 id="thisthing3">OCTOBER</h1></div>
      <div v-bind:key="field.event" v-for="field in data.event" v-show="field.event_tag == '072018'" class="row EventCard">
        <div class="col-3 timeline">

          <!-- <div class="arrow"></div> -->
          <div class="line-vertical"></div>
          <div class="line-horizontal"></div>
          <div class="circle">
          </div>
            <img class="event-icon"
            src="../assets/images/drafted_player.svg" v-show="field.event_type =='Drafted'"/>
            <img class="event-icon" src="../assets/images/trade.svg" v-show="field.event_type =='Trade'">
            <img class="event-icon" src="../assets/images/drafted_player.svg" v-show="field.event_type =='Draft'">
            <img class="event-icon" src="../assets/images/contract_ext.svg" v-show="field.event_type =='Contract'">
            <img class="event-icon" src="../assets/images/statline.svg" v-show="field.event_type =='Playoffs'">
        </div>
        <div class="col-9 events-list">
          <div class="event-header">
            <div class="event-date">
                <p> {{ field.event_month }} {{ field.event_day }}, {{ field.event_year }} - <span class="event-type">{{ field.event_type }} </span> </p>
            </div>
            <div class="event-link">
              <a :href="field.event_link">VIEW
              </a>
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
      <!-- JUNE -->
      <div class="jumper">
          <a name="june"> </a>
      </div>
        <section id="Section2"></section>
      <a name="june"> </a>
      <div class="container-fluid">
      <div class="event_month" id="scroll-to2"
      > <h1 id="thisthing2">OFFSEASON</h1></div>
      <div v-bind:key="field.event" v-for="field in data.event" v-show="field.event_tag == '062018'" class="row EventCard">
        <div class="col-3 timeline">
          <!-- <div class="arrow"></div> -->
          <div class="line-vertical"></div>
          <div class="line-horizontal"></div>
          <div class="circle">
          </div>
            <img class="event-icon"
            src="../assets/images/drafted_player.svg" v-show="field.event_type =='Drafted'"/>
            <img class="event-icon" src="../assets/images/trade.svg" v-show="field.event_type =='Trade'">
            <img class="event-icon" src="../assets/images/drafted_player.svg" v-show="field.event_type =='Draft'">
            <img class="event-icon" src="../assets/images/contract_ext.svg" v-show="field.event_type =='Contract'">
            <img class="event-icon" src="../assets/images/statline.svg" v-show="field.event_type =='Playoffs'">
        </div>
        <div class="col-9 events-list">
          <div class="event-header">
            <div class="event-date">
                <p> {{ field.event_month }} {{ field.event_day }}, {{ field.event_year }} - <span class="event-type">{{ field.event_type }} </span> </p>
            </div>
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
      <!-- APRIL MAY  -->
            <div class="jumper">
          <a name="may"> </a>
                </div>
                <!-- <h1 id="scroll-to">I am The H1</h1> -->
                  <section id="Section3"></section>
      <div class="container-fluid">
        <div class="event_month" id="scroll-to"
      > <h1 id="thisthing">PLAYOFFS</h1></div>
      <div v-bind:key="field.event" v-for="field in data.event" v-show="field.event_tag == '052018'" class="row EventCard">
        <div class="col-3 timeline">
          <!-- <div class="arrow"></div> -->
          <div class="line-vertical"></div>
          <div class="line-horizontal"></div>
          <div class="circle">
          </div>
            <img class="event-icon"
            src="../assets/images/drafted_player.svg" v-show="field.event_type =='Drafted'"/>
            <img class="event-icon" src="../assets/images/trade.svg" v-show="field.event_type =='Trade'">
            <img class="event-icon" src="../assets/images/drafted_player.svg" v-show="field.event_type =='Draft'">
            <img class="event-icon" src="../assets/images/contract_ext.svg" v-show="field.event_type =='Contract'">
            <img class="event-icon" src="../assets/images/statline.svg" v-show="field.event_type =='Playoffs'">
        </div>
        <div class="col-9 events-list">
          <div class="event-header">
            <div class="event-date">
                <p> {{ field.event_month }} {{ field.event_day }}, {{ field.event_year }} - <span class="event-type">{{ field.event_type }} </span> </p>
            </div>
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
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus!
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisiciquidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicquidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicng elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias possimus accusamus perferendis ad eos explicabo eligendi est delectus illum pariatur sed, perspiciatis nisi odio aliquid ratione quia, hic quidem temporibus!
      </p>
         <div class="event_month" id="scroll-to"
      > <h1>APRIL</h1></div>

<div>Scroll Down</div>
<!-- <h1 id="scroll-to">I am The H1</h1> -->
<div>After div</div>
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
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //     withCredentials: true,
        //     mode: "no-cors",
        //     "Access-Control-Allow-Origin": null
        //   }
        // }
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
#thisthing {
  margin:0;
   background-color: #1d428a;
  /* padding:30px 0; */
    /* color:red; */

  transition:all 2s linear
}
#thisthing.view {
  background-color: #0e2240;
  padding:30px;
  color:#fec524;
}
#thisthing2 {
  margin:0;

   background-color: #1d428a;
  /* padding:30px 0; */
    /* color:red; */
  transition:all 2s linear
}
#thisthing2.view {
  background-color: #0e2240;
  color:#fec524;
    padding:30px;
}
#thisthing3 {
  margin:0;
   background-color: #1d428a;
  /* padding:30px 0; */
    /* color:red; */

  transition:all 2s linear
}
#thisthing3.view {
  background-color: #0e2240;
  color:#fec524;
    padding:30px;
}
</style>
