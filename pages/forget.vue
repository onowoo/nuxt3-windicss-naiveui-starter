<template>
    <div class="box relative h-[600px] p-[25px] bg-[#ecf0f3] rounded-[12px] overflow-hidden">
        <form class="flex justify-center items-center flex-col w-[100%] h-[100%]" id="a-form" method="" action="">
          <h2 class="form_title title">重置密码</h2>
          <input class="form__input" type="text" placeholder="用户名" />
          <input class="form__input" type="text" placeholder="电子邮箱" />
          <input class="form__input" type="text" placeholder="手机号" />
          <input class="form__input" type="password" placeholder="密码" />
          <input class="form__input" type="password" placeholder="确认密码密码" />
          <button class="form__button button submit" @click="subSignUp()">立即重置</button>
        </form>
      </div>
  </template>
    
  
  <script setup>
  definePageMeta({
    layout: "login",
    middleware: ["only-visitor"],
  });
  </script>
  
  <style scoped>
  .box {
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  }
  .form__input {
    width: 350px;
    height: 40px;
    margin: 4px 0;
    padding-left: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;
    font-family: "Montserrat", sans-serif;
    background-color: #ecf0f3;
    transition: 0.25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  }
  .form__input:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
  }
  
  .title {
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #181818;
  }
  
  
  .button {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #4b70e2;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
  }

  </style>