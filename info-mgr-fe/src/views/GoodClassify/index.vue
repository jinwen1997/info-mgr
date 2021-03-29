<template>
  <div>
    <a-card :title="$$.PAGE_META.CLASSIFY.PAGE_TITLE">
      <div>
        <a-input
          v-model:value="title"
          :placeholder="$$.PAGE_META.CLASSIFY.ADD_FORM_INPUT_PLACEHOLDER"
          style="width: 200px;"
        />
        &nbsp;
        <a-button @click="add" type="primary">添加</a-button>
      </div>

      <a-divider />

      <div>
        <a-table
          bordered
          :data-source="list"
          :columns="columns"
          :pagination="false"
        >
          <template #actions="{ record }">
            <a-button
              size="small"
              @click="updateTitle(record)"
            >
              修改
            </a-button>
            &nbsp;
            <a-button
              size="small"
              @click="remove(record)"
              type="danger"
            >
              删除
            </a-button>
          </template>
        </a-table>
      </div>
    </a-card>
  </div>
</template>

<script src="./index.jsx"></script>
