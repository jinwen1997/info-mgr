<template>
  <div>
    <a-card
      :title="simple ? $$.PAGE_META.DASHBOARD.RECENT.LEFT_TITLE : ''"
    >
      <div v-if="!simple">
        <h2>{{ $$.PAGE_META.TOPIC_MGR.PAGE_TITLE }}</h2>

        <a-divider />

        <space-between>
          <div class="search">
            <a-input-search
              :placeholder="`根据${$$.KEYWORD}搜索`"
              enter-button
              v-model:value="keyword"
              @search="onSearch"
            />

            <a v-if="isSearch" href="javascript:;" @click="backAll">返回</a>
          </div>

          <div>
            <a-button
              @click="show = true"
              v-only-admin
            >
              添加一条
            </a-button>
            &nbsp;
            <a-upload
              @change="onUploadChange"
              action="http://localhost:3000/upload/file"
              :headers="headers"
            >
            <!-- :headers="headers" -->
              <a-button type="primary">上传 Excel 添加</a-button>
            </a-upload>
          </div>
        </space-between>

        <a-divider />
      </div>

      <a-table
        :columns="columns"
        :data-source="list"
        :pagination="false"
        bordered
        :scroll="{ x: 'max-content' }"
      >
        <template #producedDate="data">
          {{ formatTimestamp(data.record.producedDate) }}
        </template>

        <template #classify="{ record }">
          {{ getClassifyTitleById(record.classify) }}
        </template>

        <template #count="data">
          <a href="javascript:;" @click="updateCount('IN_COUNT', data.record)">入库</a>
          {{ data.record.count }}
          <a href="javascript:;" @click="updateCount('OUT_COUNT', data.record)">出库</a>
        </template>

        <template #actions="record" v-if="!simple">
          <a href="javascript:;" @click="toDetail(record)">详情</a>
          &nbsp;
          <a v-only-admin href="javascript:;" @click="update(record)">编辑</a>
          &nbsp;
          <a v-only-admin href="javascript:;" @click="remove(record)">删除</a>
        </template>
      </a-table>
      <flex-end v-if="!simple" style="margin-top: 24px;">
        <a-pagination
          v-model:current="curPage"
          :total="total"
          :page-size="10"
          @change="setPage"
        />
      </flex-end>
    </a-card>

    <add-one
      v-model:show="show"
      :classifyList="goodClassifyList"
      @getList="getList"
    />

    <update
      v-model:show="showUpdateModal"
      :good="curEditGood"
      @update="updateCurGood"
    />
  </div>
</template>

<script src="./index.jsx"></script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
