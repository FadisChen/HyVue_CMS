# HyVue CMS 元件庫說明文件

本文檔整理了HyVue CMS系統中所有可用的元件，以便於開發者參考和使用。元件按類型分類，並包含元件名稱、代號和文件路徑信息。

## 元件庫總覽

### 基礎UI元件

| 組件類型 | 名稱 | 代號 | 路徑 |
|---------|------|------|------|
| 表格 | 數據表格 | data-table | src/components/dataTable.vue |
| 表格 | 服務器數據表格 | data-table-server | src/components/dataTableServer.vue |
| 日期選擇器 | 日期選擇模態框 | datepicker-modal | src/components/datepickerModal.vue |
| 導航 | 功能導航列表 | function-navigation | src/components/functionNavigation.vue |
| 樹形控件 | 樹形項目 | tree-item | src/components/TreeItem.vue |

### 圖表元件

| 組件類型 | 名稱 | 代號 | 路徑 |
|---------|------|------|------|
| 圖表 | 餅圖 | pie-chart | src/components/chart/pieChart.vue |
| 圖表 | 區域圖 | area-chart | src/components/chart/areaChart.vue |
| 圖表 | 柱狀圖 | bar-chart | src/components/chart/barChart.vue |
| 圖表 | 線柱混合圖 | line-bar-chart | src/components/chart/lineAndBarChart.vue |
| 圖表 | 折線圖 | line-chart | src/components/chart/lineChart.vue |

### 頁面佈局元件

| 組件類型 | 名稱 | 代號 | 路徑 |
|---------|------|------|------|
| 佈局 | 管理員佈局 | admin-layout | src/views/layout/adminLayout.vue |
| 佈局 | 首頁佈局 | index-layout | src/views/layout/indexPage.vue |
| 佈局 | 登錄頁面 | login-layout | src/views/layout/loginPage.vue |
| 佈局 | 頁面視圖 | page-view | src/views/layout/pageView.vue |

### 功能頁面元件

| 組件類型 | 名稱 | 代號 | 路徑 |
|---------|------|------|------|
| 頁面 | 新聞添加頁面 | add-news | src/views/admin/addNewsComponent.vue |
| 頁面 | 卡片展示頁面 | card-display | src/views/admin/cardComponent.vue |
| 頁面 | 圖表展示頁面 | chart-display | src/views/admin/chartComponent.vue |
| 頁面 | 元件展示頁面 | component-display | src/views/admin/Component.vue |
| 頁面 | 預設頁面 | default-page | src/views/admin/defaultComponent.vue |
| 頁面 | 表單展示頁面 | form-display | src/views/admin/fromComponent.vue |
| 頁面 | 媒體照片頁面 | media-photo | src/views/admin/mediaPhotoComponent.vue |
| 頁面 | 系統管理頁面 | system-manage | src/views/admin/systemComponent.vue |
| 頁面 | 表格展示頁面 | table-display | src/views/admin/tableComponent.vue |
| 頁面 | 小工具展示頁面 | widget-display | src/views/admin/widgetComponent.vue |

## 使用說明

### 元件引入方式

```vue
<script setup>
// 引入基礎元件
import DataTable from '@/components/dataTable.vue';
import DatepickerModal from '@/components/datepickerModal.vue';

// 引入圖表元件
import PieChart from '@/components/chart/pieChart.vue';
import LineChart from '@/components/chart/lineChart.vue';
</script>
```

### 元件代號使用規範

未來系統將支援通過元件代號組合來動態生成頁面。開發者可以使用以下格式描述頁面結構：

```
[admin-layout]
  [function-navigation]
  [page-view]
    [data-table]
    [pie-chart]
    [datepicker-modal]
```

此描述將生成一個包含導航、數據表格、餅圖和日期選擇器的管理頁面。 