<template>
  <div>
    <a-card title="邀请码管理">
      <div>
        <a-input-number v-model:value="count" :min="1" :max="10000" />
        &nbsp;
        <a-button type="primary" @click="add">添加</a-button>
      </div>

      <a-divider />

      <div>
        <a-table
          :pagination="false"
          bordered
          :columns="columns"
          :data-source="list"
        >
          <template #status="{ record }">
            {{ record.user ? '已使用' : '未使用' }}
          </template>
          <template #actions="{ record }">
            <a-button
              @click="remove(record)"
              size="small"
              type="danger"
            >
              删除
            </a-button>
          </template>
        </a-table>
      </div>

      <flex-end style="margin-top: 24px">
        <a-pagination
          v-model:current="curPage"
          :pageSize="20"
          :total="total"
          @change="setPage"
        ></a-pagination>
      </flex-end>
    </a-card>
  </div>
</template>

<script src="./index.js"></script>