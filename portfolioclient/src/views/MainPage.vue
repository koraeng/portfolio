<template>
  <div id="MainPage_Div">
    <div class="MainPage_Main">
      <div class="MenuBtn">
        <p v-on:click="OpenMenu"></p>
      </div>

      <div class="MainPage_Menu_List">
        <ul>
          <li @click="openAbout">
            About
            <p>Its' about my career, ability.<br />Click here to more</p>
          </li>
          <li>
            WEB Project
            <p>Its' about my careerm ability.<br />Click here to discover</p>
          </li>

          <li>
            Design Project
            <p>Its' about signage, other design works.<br />Click here to discover</p>
          </li>

          <li>
            Contact
            <p>Wanna Contact with me?<br />Click here to contact</p>
          </li>
        </ul>
      </div>

      <div class="MainPage_Tit">
        <h3>YERIN<br />PORTFOLIO</h3>
      </div>

      <div class="MainPage_Overview">
        <h4>Overview</h4>
        <p>
          안녕하세요. '낭만'을 항해하는 웹개발자 한예린입니다.<br />
          이 포트폴리오에서는 퍼블리셔를 꿈꾸며 준비한, 저의 노력의 결과인 작업물들을 보실
          수 있습니다.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/css/mainpage.css";
@import url("https://fonts.googleapis.com/css2?family=Grand+Hotel&family=Noto+Sans+KR:wght@100;300;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap");
</style>

<script></script>
