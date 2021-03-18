<template>
  <div>
    <a-card>
      <h2>考研信息列表</h2>
      <a-divider/>
      <space-between>
        <div class="search">
          <a-input-search
            placeholder="根据姓名搜索"
            enter-button
          />
        </div>
        <a-button @click="show = true">添加一条</a-button>
      </space-between>
      <a-divider/>


      <a-table :columns="columns" :data-source="dataSource">


      </a-table>


    </a-card>
    <add-one
      v-model:show="show"

    />
  </div>
</template>

<style lang="scss" scoped>
@import "./index.css";

</style>

<script src="./index.js">

</script>
