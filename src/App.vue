<template>
  <div id="app">
    <div id="nav">
      <div class="pure-flexbox-wrapper">
        <div class="navleft-top">
           <a href="">
            <img class="arrow-icons" src="./assets/arrow-pointing-to-left.svg" alt="">
          </a>
          <a class="month-nav-jump" href=""><h6 id="offseason">OFFSEASON</h6></a>
          <a class="month-nav-jump" href=""><h6 id="oct">OCT</h6></a>
          <a class="month-nav-jump" href="#july">NOV</a>
          <a class="month-nav-jump" href="#june">DEC</a>
          <a class="month-nav-jump" href="#may">JAN</a>
          <a class="month-nav-jump" href="">FEB</a>
          <a class="month-nav-jump" href="">MAR</a>
          <a class="month-nav-jump" href="">APR</a>
          <a class="month-nav-jump" href=""><h6 id="playoffs">PLAYOFFS</h6></a>
          <a href="">
            <img class="arrow-icons" src="./assets/arrow-pointing-to-right.svg" alt="">
          </a>
          </div>


      <div class="navleft">
        <h1>SEASON YEAR:</h1>
          <div class="btn-group">
          <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          2018-19'
          </button>
          <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
          </div>
          </div>
        </div>
      <div class="left"></div>
      </div>
<div class="pure-flexbox-wrapper-right">
        <div class="right"></div>
      <div class="navright">
       <h6> ABOUT / NAME</h6>
    </div>
      </div>
            </div>
    <!-- <router-view/> -->
    <div class="main-view">
      <EventCard/>
    </div>


</div>
</template>
<script src="./assets/js/jquery-3.3.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="./assets/js/jquery.js"></script>

<script>

import EventCard from "@/components/EventCard";
import $ from 'jquery'

export default {
  name: "App",
  components: {
    EventCard
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Anton|Bungee|Passion+One|Teko");

#app {
  font-family: "Teko", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  z-index: -99;
}

#nav {
  position: fixed;
  width: 100%;
  z-index: 100;
  /* display: inline-flex; */
  color: #1d428a;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.navleft {
  /* float: left; */
  /* height: 200px; */
  padding-left: 40px;
  /* color: #1d428a; */
  background-color: #fec524;
  width: 350px;
  display: inline-flex;
  color: #1d428a;
}
.navleft div {
  /* color: #1d428a; */
  background-color: #fec524;
}
.navleft-top {
  background-color: #fec524;
  /* color: #1d428a; */
}
.navleft-top a {
  background-color: #fec524;
  color: #1d428a;
}
.left {
  /* width: 200px; */
  height: 43px;
  background: transparent;
  /* margin:15px; */
  position: relative;
  display: inline-block;
}
.left:after {
  content: "";
  position: absolute;
  top: -24px;
  left: 17px;
  width: 0;
  height: 0;
  border-top: 90px solid #fec524;
  border-right: 80px solid transparent;
  display: inline-block;
}
.navleft h1 {
  background-color: transparent;
  margin-top: 10px;
  /* font-size: 14px; */
}
.btn-group {
  color: #1d428a;
  z-index:999;
  /* width: 40px; */
}
.btn {
  background-color: red;
  color: #1d428a;
  font-size: 30px;
    z-index:999;
}
.btn-group > .btn:first-child {
  font-size: 28px;
}
.main-view {
  z-index: -1000;
  /* padding-top: 90px; */
    padding-left: 5%;
  padding-right: 5%;
}

.navright {
  background-color: #fec524;
  height: 48px;
  width: 180px;
}
.navright h6 {
  background-color: #fec524;
  color: #1d428a;
}
.navright a {
  color: #1d428a;
}

.arrow-icons {
  height: 15px;
  color: white;
  background-color: transparent;
  padding-left: 5px;
  padding-right: 5px;
}
.btn-wrapper {
  background-color: #fec524;
  color: #1d428a;
  font-size: 22px;
  padding-top: 18px;
}
.month-nav-jump {
  padding-left: 5px;
  padding-right: 5px;
}
.right {
  /* width: 200px; */
  /* height: 43px; */
  background-color: #fec524;
  /* margin:15px; */
  position: relative;
  /* display: inline-block; */
}
.right:before {
  content: "";
  position: absolute;
  top: 0;
  left: -50px;
  width: 0;
  height: 0;
  border-bottom: 48px solid #fec524;
  border-left: 50px solid transparent;
  display: inline-block;
}
.pure-flexbox-wrapper {
  /* position: fixed; */
  background-color: #fec524;
}
.pure-flexbox-wrapper-right {
  background-color: transparent;
}
/* section {
    width: 100%;
    height: 343px;
    position: relative;
}

#Section1 {
    background: red;
}

#Section2 {
    background: blue;
}

#Section3 {
    background: orange;
} */
h6 {
  margin:0;
  /* padding:30px 0; */
  /* transition:all 1s linear; */
  display:inline;
    background-color: transparent;
}
h6.view {
  background-color: transparent;
  color:white;
}
</style>
