import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElAside,
  ElAvatar,
  ElButton,
  ElCheckbox,
  ElCol,
  ElContainer,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElRadio,
  ElRow,
  ElSelect,
  ElSubmenu,
  ElTabPane,
  ElTabs
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElHeader,
  ElMain,
  ElAside,
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
