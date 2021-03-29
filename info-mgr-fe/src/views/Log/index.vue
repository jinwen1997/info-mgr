<template>
  <div>
   <a-spin :spinning="loading">
    <a-card
      :title="simple ? $$.PAGE_META.DASHBOARD.RECENT.RIGHT_TITLE : ''"
    >
      <div v-if="!simple">
        <h2>操作日志</h2>

        <a-divider />
      </div>

      <div>
        <a-table
          bordered
          :columns="columns"
          :data-source="list"
          :pagination="false"
          :scroll="{ x: 'max-content' }"
        >
          <template #createdAt="{ record }">
            {{ formatTimestamp(record.meta.createdAt) }}
          </template>
          <template v-if="!simple" #action="{ record }">
            <a href="javascript:;" @click="remove(record)">删除</a>
          </template>
        </a-table>
      </div>

      <flex-end v-if="!simple" style="margin-top: 24px">
        <a-pagination
          v-model:current="curPage"
          :pageSize="20"
          :total="total"
          @change="setPage"
        />
      </flex-end>

    </a-card>
   </a-spin>
  </div>
</template>

<script src="./index.js"></script>
