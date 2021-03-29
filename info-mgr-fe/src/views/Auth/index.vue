<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img src="https://ncstatic.clewm.net/rsrc/2020/1016/02/4757e4910cb527fc040d019a93ded74f.png?x-oss-process=image/resize,w_750/format,gif/sharpen,100/quality,Q_80/interlace,1/auto-orient,1" alt="">
      <h2 class="title">{{ $$.SITE_NAME }} 后台</h2>
    </div>

    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登入">
          <div class="item">
            <a-input
              size="large"
              placeholder="账户"
              v-model:value="loginForm.account"
            >
              <template
                v-slot:prefix
              >
                <UserOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input
              size="large"
              placeholder="密码"
              v-model:value="loginForm.password"
            >
              <template
                v-slot:prefix
              >
                <LockOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a href="javascript:;" @click="forgetPassword">忘记密码</a>
          </div>

          <div class="item">
            <a-button
              size="large"
              type="primary"
              @click="login"
            >
              登入
            </a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input
              size="large"
              placeholder="账户"
              v-model:value="regForm.account"
            >
              <template
                v-slot:prefix
              >
                <UserOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input
              size="large"
              placeholder="密码"
              v-model:value="regForm.password"
            >
              <template
                v-slot:prefix
              >
                <LockOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input
              size="large"
              placeholder="邀请码"
              v-model:value="regForm.inviteCode"
            >
              <template
                v-slot:prefix
              >
                <MailOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-button
              @click="register"
              size="large"
              type="primary"
            >
              注册
            </a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script src="./index.jsx"></script>

<style lang="scss" scpoed>
  @import './index.scss';
</style>
