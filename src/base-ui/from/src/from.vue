<template>
  <div class="hy-from">
    <el-form :label-width="labeWidth">
      <el-row>
        <template v-for="item in fromItems" :key="item.lable">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :urles="item.rules"
              :style="itemStyle"
            >
              <!-- 普通input -->
              <template
                v-if="item.type === 'password' || item.type === 'input'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                />
              </template>
              <!-- 多选 -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <!-- 时间 -->
              <template v-else-if="item.type === 'detepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFromItem } from '../type'
export default defineComponent({
  props: {
    // 表单列表
    fromItems: {
      type: Array as PropType<IFromItem[]>,
      default: () => []
    },
    // 标题宽度
    labeWidth: {
      type: String,
      default: '100px'
    },
    // 内边距
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px 10px 0' })
    },
    // 响应式布局
    colLayout: {
      type: Object,
      default: () => ({
        // >= 1920  4
        xl: 6,
        // >= 1200  8
        lg: 8,
        // >= 992  12
        md: 12,
        // >=768
        sm: 24,
        // <678
        xs: 24
      })
    }
  }
})
</script>

<style scoped lang="less">
.hy-from {
  padding-top: 22px;
}
</style>
