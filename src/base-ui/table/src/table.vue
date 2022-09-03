<template>
  <div>
    <div class="content">
      <!-- 1头部插槽 -->
      <div class="header">
        <slot name="header">
          <div name="title">{{ title }}</div>
          <div class="handler">
            <slot name="headerHandler"></slot>
          </div>
        </slot>
      </div>
      <!-- 2内容的插槽 -->
      <el-table
        :data="listData"
        border
        style="width: 100%"
        stripe
        @selection-change="handlesSelectionChange"
      >
        <!-- 全选 -->
        <template v-if="showSelectColumn">
          <el-table-column type="selection" align="center"></el-table-column>
        </template>
        <!-- 序号 -->
        <template v-if="showIndexColumn">
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="60"
          ></el-table-column>
        </template>
        <!-- 基本数据 -->
        <template v-for="item in propList" :key="item.prop">
          <el-table-column v-bind="item" align="center">
            <template #default="scope">
              <slot :name="item.slotName" :row="scope.row">
                {{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <!-- 3页脚插槽 -->
      <div class="footer">
        <slot name="footer">
          <el-pagination
            v-model:currentPage="currentPage4"
            v-model:page-size="pageSize4"
            :page-sizes="[100, 200, 300, 400]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Object,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '默认标题'
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    const handlesSelectionChange = (value: any) => {
      console.log(value)
      emit('selectionChange', value)
    }
    return { handlesSelectionChange }
  }
})
</script>

<style scoped lang="less">
.content {
  border-top: 20px solid #f5f5f5;
  padding: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
}
</style>
