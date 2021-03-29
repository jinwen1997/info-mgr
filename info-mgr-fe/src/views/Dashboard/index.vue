<template>
  <div>
    <a-spin :spinning="loading">
      <a-card>
        <div class="list">
          <div class="item">
            <div class="count">{{ _.BASE_INFO.LEFT.CONTENT(baseInfo.total.good) }}</div>
            <div class="title">{{ _.BASE_INFO.LEFT.TITLE }}</div>
          </div>
          <div class="item">
            <div class="count">{{ _.BASE_INFO.CENTER.CONTENT(baseInfo.total.user) }}</div>
            <div class="title">{{ _.BASE_INFO.CENTER.TITLE }}</div>
          </div>
          <div class="item">
            <div class="count">{{ _.BASE_INFO.RIGHT.CONTENT(baseInfo.total.log) }}</div>
            <div class="title">{{ _.BASE_INFO.RIGHT.TITLE }}</div>
          </div>
        </div>
      </a-card>
    </a-spin>

    <div class="table-list">
      <div class="left">
        <goods
          simple
        />
      </div>
      <div class="right">
        <log
          simple
        />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
