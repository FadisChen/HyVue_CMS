## 關於此專案

- 專案名稱: HyVue CMS
- 框架版本號: HyVue CMS v1.0.1
- Vuetify 版本: v3.6.9

- UI 設計師:
- 切版設計師:
- 關於此專案: 以 Vue3 + Vuetify3 搭建 根據常用頁面 整理一份後台系統頁面
  相關文件請參閱
  [HyVue CMS 文件](https://hywebu00.github.io/HyVue_CMS_doc/#/)
  <br/>
  <br/>

## 組件代號系統

為了提高開發效率和組件重用性，本專案實施了組件代號系統。每種組件類型都被分配了唯一的代號，方便在開發過程或AI生成時進行引用。

### 如何使用組件代號

在創建新頁面或使用AI生成組件時，可以通過引用組件代號來快速指定所需的組件：

```
請使用F01表單和T02表格創建一個訂單頁面
```

完整的組件代號列表請參考 [components-catalog.md](./components-catalog.md)。

### 主要組件分類

- **表單組件 (F)** - 如文字表單(F01)、日期選擇(F02)等
- **表格組件 (T)** - 如標準表格(T01)、帶圖片表格(T02)等
- **卡片組件 (C)** - 如標準卡片(C01)、圖文卡片(C02)等
- **圖表組件 (CH)** - 如面積圖(CH01)、圓餅圖(CH02)等
- **佈局組件 (L)** - 如8-4佈局(L01)、6-6佈局(L06)等
- **媒體組件 (M)** - 如照片媒體庫(M01)、媒體分類(M02)等
- **導航組件 (N)** - 如樹狀導航(N01)、標籤導航(N02)等
- **互動組件 (I)** - 如手風琴面板(I01)、彈出菜單(I02)等

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint

# pnpm
pnpm lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
