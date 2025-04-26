<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '組件庫說明']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2>HyVue CMS 元件庫說明文件</h2>
    <p class="mb-4">本文檔整理了HyVue CMS系統中所有可用的元件，以便於開發者參考和使用。元件按類型分類，並包含元件名稱、代號和用途說明。</p>
    <v-divider class="mt-3 mb-4"></v-divider>

    <h3 class="text-h5 mb-3">元件庫總覽</h3>

    <!-- 表單組件 -->
    <v-expansion-panels class="mb-6">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h4 class="text-h6 text-primary font-weight-bold">表單組件 (F)</h4>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-table>
            <thead>
              <tr>
                <th>代號</th>
                <th>名稱</th>
                <th>用途</th>
                <th>對應文件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>F01</td>
                <td>文字標準表單</td>
                <td>用於輸入文字的基本表單元素</td>
                <td>src/views/admin/formComponent.vue</td>
              </tr>
              <tr>
                <td>F02</td>
                <td>日期選擇表單</td>
                <td>用於選擇日期的表單元素，帶有日期選擇器</td>
                <td>src/views/admin/formComponent.vue</td>
              </tr>
              <tr>
                <td>F03</td>
                <td>單選核取表單</td>
                <td>單選按鈕組，用於從多個選項中選擇一個</td>
                <td>src/views/admin/formComponent.vue</td>
              </tr>
              <tr>
                <td>F04</td>
                <td>複選核取表單</td>
                <td>複選框組，用於從多個選項中選擇多個</td>
                <td>src/views/admin/formComponent.vue</td>
              </tr>
              <tr>
                <td>F05</td>
                <td>下拉選單</td>
                <td>用於從下拉列表中選擇一個或多個選項</td>
                <td>src/views/admin/formComponent.vue</td>
              </tr>
            </tbody>
          </v-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- 表格組件 -->
    <v-expansion-panels class="mb-6">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h4 class="text-h6 text-primary font-weight-bold">表格組件 (T)</h4>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-table>
            <thead>
              <tr>
                <th>代號</th>
                <th>名稱</th>
                <th>用途</th>
                <th>對應文件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T01</td>
                <td>標準資料表格</td>
                <td>用於顯示結構化數據的表格</td>
                <td>src/views/admin/tableComponent.vue</td>
              </tr>
              <tr>
                <td>T02</td>
                <td>帶圖片的表格</td>
                <td>包含圖片列的數據表格</td>
                <td>src/views/admin/tableComponent.vue</td>
              </tr>
              <tr>
                <td>T03</td>
                <td>可排序表格</td>
                <td>支持排序功能的數據表格</td>
                <td>src/components/dataTable.vue</td>
              </tr>
            </tbody>
          </v-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- 卡片組件 -->
    <v-expansion-panels class="mb-6">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h4 class="text-h6 text-primary font-weight-bold">卡片組件 (C)</h4>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-table>
            <thead>
              <tr>
                <th>代號</th>
                <th>名稱</th>
                <th>用途</th>
                <th>對應文件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C01</td>
                <td>標準卡片</td>
                <td>基本信息展示卡片，包含標題、內容和操作區</td>
                <td>src/views/admin/cardComponent.vue</td>
              </tr>
              <tr>
                <td>C02</td>
                <td>圖文卡片</td>
                <td>同時包含圖像和文字的卡片</td>
                <td>src/views/admin/cardComponent.vue</td>
              </tr>
              <tr>
                <td>C03</td>
                <td>照片網格卡片</td>
                <td>以網格形式展示照片的卡片組</td>
                <td>src/views/admin/cardComponent.vue</td>
              </tr>
            </tbody>
          </v-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- 圖表組件 -->
    <v-expansion-panels class="mb-6">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h4 class="text-h6 text-primary font-weight-bold">圖表組件 (CH)</h4>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-table>
            <thead>
              <tr>
                <th>代號</th>
                <th>名稱</th>
                <th>用途</th>
                <th>對應文件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CH01</td>
                <td>面積圖</td>
                <td>顯示數據趨勢的面積圖表</td>
                <td>src/components/chart/areaChart.vue</td>
              </tr>
              <tr>
                <td>CH02</td>
                <td>圓餅圖</td>
                <td>顯示比例分布的圓餅圖表</td>
                <td>src/components/chart/pieChart.vue</td>
              </tr>
              <tr>
                <td>CH03</td>
                <td>長條圖</td>
                <td>比較不同類別數據的長條圖表</td>
                <td>src/components/chart/barChart.vue</td>
              </tr>
              <tr>
                <td>CH04</td>
                <td>折線圖</td>
                <td>顯示數據變化趨勢的折線圖表</td>
                <td>src/components/chart/lineChart.vue</td>
              </tr>
              <tr>
                <td>CH05</td>
                <td>長條+折線組合圖</td>
                <td>結合長條圖和折線圖的複合圖表</td>
                <td>src/components/chart/lineAndBarChart.vue</td>
              </tr>
            </tbody>
          </v-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- 佈局組件 -->
    <v-expansion-panels class="mb-6">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h4 class="text-h6 text-primary font-weight-bold">佈局組件 (L)</h4>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-table>
            <thead>
              <tr>
                <th>代號</th>
                <th>名稱</th>
                <th>用途</th>
                <th>對應文件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>L01</td>
                <td>8-4 分割佈局</td>
                <td>以 8:4 比例分割的兩列佈局</td>
                <td>src/views/admin/systemComponent.vue</td>
              </tr>
              <tr>
                <td>L02</td>
                <td>9-3 分割佈局</td>
                <td>以 9:3 比例分割的兩列佈局</td>
                <td>src/views/admin/systemComponent.vue</td>
              </tr>
              <tr>
                <td>L03</td>
                <td>3-9 分割佈局</td>
                <td>以 3:9 比例分割的兩列佈局</td>
                <td>src/views/admin/systemComponent.vue</td>
              </tr>
              <tr>
                <td>L04</td>
                <td>4-4-4 分割佈局</td>
                <td>三等分的三列佈局</td>
                <td>src/views/admin/systemComponent.vue</td>
              </tr>
              <tr>
                <td>L05</td>
                <td>3-3-3-3 分割佈局</td>
                <td>四等分的四列佈局</td>
                <td>src/views/admin/systemComponent.vue</td>
              </tr>
              <tr>
                <td>L06</td>
                <td>6-6 分割佈局</td>
                <td>兩等分的兩列佈局</td>
                <td>src/views/admin/systemComponent.vue</td>
              </tr>
              <tr>
                <td>L07</td>
                <td>12 全寬佈局</td>
                <td>單列全寬佈局</td>
                <td>src/views/admin/systemComponent.vue</td>
              </tr>
              <tr>
                <td>L08</td>
                <td>3-6-3 分割佈局</td>
                <td>側邊欄-內容-側邊欄的三列佈局</td>
                <td>src/views/admin/systemComponent.vue</td>
              </tr>
            </tbody>
          </v-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- 其他組件 -->
    <v-expansion-panels class="mb-6">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h4 class="text-h6 text-primary font-weight-bold">其他組件</h4>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <!-- 導航組件 (N) -->
          <h5 class="text-h6 mb-2">導航組件 (N)</h5>
          <v-table class="mb-6">
            <thead>
              <tr>
                <th>代號</th>
                <th>名稱</th>
                <th>用途</th>
                <th>對應文件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>N01</td>
                <td>樹狀導航</td>
                <td>顯示層級結構的樹狀導航菜單</td>
                <td>src/components/TreeItem.vue</td>
              </tr>
              <tr>
                <td>N02</td>
                <td>標籤導航</td>
                <td>基於標籤的水平導航</td>
                <td>v-chip-group 組件</td>
              </tr>
              <tr>
                <td>N03</td>
                <td>分頁器</td>
                <td>用於分頁顯示內容的控制元件</td>
                <td>v-pagination 組件</td>
              </tr>
            </tbody>
          </v-table>

          <!-- 媒體組件 (M) -->
          <h5 class="text-h6 mb-2">媒體組件 (M)</h5>
          <v-table class="mb-6">
            <thead>
              <tr>
                <th>代號</th>
                <th>名稱</th>
                <th>用途</th>
                <th>對應文件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>M01</td>
                <td>照片媒體庫</td>
                <td>用於瀏覽和管理照片媒體庫</td>
                <td>src/views/admin/mediaPhotoComponent.vue</td>
              </tr>
              <tr>
                <td>M02</td>
                <td>媒體分類瀏覽</td>
                <td>用於按分類瀏覽媒體資源</td>
                <td>src/views/admin/mediaPhotoComponent.vue</td>
              </tr>
              <tr>
                <td>M03</td>
                <td>媒體資料夾</td>
                <td>用於組織媒體資源的資料夾系統</td>
                <td>src/views/admin/mediaPhotoComponent.vue</td>
              </tr>
            </tbody>
          </v-table>

          <!-- 互動組件 (I) -->
          <h5 class="text-h6 mb-2">互動組件 (I)</h5>
          <v-table>
            <thead>
              <tr>
                <th>代號</th>
                <th>名稱</th>
                <th>用途</th>
                <th>對應文件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I01</td>
                <td>手風琴面板</td>
                <td>可折疊展開的內容面板</td>
                <td>v-expansion-panels 組件</td>
              </tr>
              <tr>
                <td>I02</td>
                <td>彈出菜單</td>
                <td>點擊後顯示的下拉菜單</td>
                <td>v-menu 組件</td>
              </tr>
              <tr>
                <td>I03</td>
                <td>批次操作菜單</td>
                <td>用於批次處理項目的操作菜單</td>
                <td>src/views/admin/tableComponent.vue</td>
              </tr>
            </tbody>
          </v-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <h3 class="text-h5 mb-3">使用說明</h3>

    <!-- 元件引入方式 -->
    <v-card class="mb-6">
      <v-card-title>元件引入方式</v-card-title>
      <v-card-text>
        <v-code>
          <pre>
&lt;script setup&gt;
// 引入基礎元件
import DataTable from '@/components/dataTable.vue';
import TreeItem from '@/components/TreeItem.vue';

// 引入圖表元件
import PieChart from '@/components/chart/pieChart.vue';
import LineChart from '@/components/chart/lineChart.vue';
&lt;/script&gt;
          </pre>
        </v-code>
      </v-card-text>
    </v-card>

    <!-- 元件代號使用規範 -->
    <v-card class="mb-6">
      <v-card-title>元件代號使用規範</v-card-title>
      <v-card-text>
        <p>本系統支援通過元件代號組合來動態生成頁面。開發者可以使用以下格式描述頁面結構：</p>
        <v-code>
          <pre>
請使用L06佈局(6-6)，左側放置F01表單(文字標準表單)和F02表單(日期選擇)，
右側放置F04表單(複選核取表單)，並在頂部添加N02導航(標籤導航)
          </pre>
        </v-code>
        <p>此描述將生成一個包含標籤導航和兩列佈局，左側有文字表單和日期選擇表單，右側有複選框組的頁面。</p>
      </v-card-text>
    </v-card>

    <!-- 表單元件變體使用說明 -->
    <v-card class="mb-6">
      <v-card-title>使用範例</v-card-title>
      <v-card-text>
        <p>在描述需求時，可以明確指定所需的組件類型及其佈局：</p>
        <h5 class="text-subtitle-1 mb-2">數據分析頁面範例</h5>
        <v-code>
          <pre>
請使用L04佈局(4-4-4)，分別放置CH02圓餅圖、CH03長條圖和CH04折線圖，
在底部使用L07佈局(全寬)放置T01表格(標準資料表格)
          </pre>
        </v-code>
        <h5 class="text-subtitle-1 mb-2">媒體瀏覽頁面範例</h5>
        <v-code>
          <pre>
請使用L03佈局(3-9)，左側放置N01導航(樹狀導航)，右側上方使用L07佈局(全寬)
放置F01表單(文字標準表單)作為搜索欄，下方使用C03組件(照片網格卡片)
          </pre>
        </v-code>
        <p>這種明確的描述方式可以幫助系統準確理解需求，並生成符合預期的頁面元件。開發者可以參考 src/views/admin 目錄下的組件展示文件作為實際實現的參考。</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
};
</script>

<style scoped>
.v-code {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 16px;
  margin: 8px 0;
  overflow-x: auto;
}
</style> 