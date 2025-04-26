<template>
  <v-container class="container">
    <v-breadcrumbs :items="['首頁', '員工管理', '員工列表']"></v-breadcrumbs>
    <v-divider class="pt-1 mb-3"></v-divider>
    <h2>員工列表</h2>
    <v-divider class="mt-3 mb-4"></v-divider>
    
    <!-- flex-4-8 佈局 -->
    <v-row>
      <!-- 左側樹狀導航 [N01] -->
      <v-col cols="12" md="4">
        <v-card class="pa-2" style="height: 100%">
          <h4 class="text-h6 text-primary font-weight-bold">部門結構</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          
          <!-- 使用 TreeItem 元件實現樹狀結構 -->
          <ul class="tree-root">
            <tree-item :model="treeData" @node-click="handleNodeClick"></tree-item>
          </ul>
        </v-card>
      </v-col>
      
      <!-- 右側員工列表表格 -->
      <v-col cols="12" md="8">
        <v-card class="pa-2">
          <h4 class="text-h6 text-primary font-weight-bold">員工清單</h4>
          <v-divider class="pt-2 mb-2"></v-divider>
          
          <v-table>
            <thead class="bg-thead">
              <tr>
                <th class="text-left">部門</th>
                <th class="text-left">姓名</th>
                <th class="text-left">員工編號</th>
                <th class="text-left">職稱</th>
                <th class="text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee in paginatedEmployees" :key="employee.id">
                <td>{{ employee.department }}</td>
                <td>{{ employee.name }}</td>
                <td>{{ employee.employeeId }}</td>
                <td>{{ employee.title }}</td>
                <td>{{ employee.email }}</td>
              </tr>
            </tbody>
          </v-table>
          
          <!-- 圓形分頁樣式 -->
          <div class="text-center my-4">
            <v-pagination
              v-model="page"
              :length="totalPages"
              :total-visible="7"
              rounded
              active-color="primary"
              color="primary"
            ></v-pagination>
          </div>
        </v-card>
        
        <!-- 底部標籤式部門過濾 -->
        <div class="text-center mt-4">
          <v-chip-group
            v-model="selectedDepartment"
            column
            @update:model-value="filterByDepartment"
          >
            <v-chip
              filter
              variant="outlined"
              :value="'all'"
              color="primary"
            >
              全部
            </v-chip>
            <v-chip
              v-for="dept in departments"
              :key="dept"
              filter
              variant="outlined"
              :value="dept"
              color="primary"
            >
              {{ dept }}
            </v-chip>
          </v-chip-group>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import TreeItem from '@/components/TreeItem.vue';

// 模擬從API獲取的員工數據
const employees = ref([]);
const filteredEmployees = ref([]);
const page = ref(1);
const itemsPerPage = 10;
const selectedDepartment = ref('all');

// 構建樹狀結構數據
const treeData = ref({
  name: '所有部門',
  children: []
});

// 當樹節點被點擊時處理
function handleNodeClick(node) {
  if (node && node.type === 'department') {
    selectedDepartment.value = node.id;
    filterByDepartment();
  }
}

// 更新樹狀數據
function updateTreeData() {
  if (employees.value.length === 0) return;
  
  // 統計每個部門的人數
  const deptCountMap = {};
  const departments = [];
  
  employees.value.forEach(emp => {
    if (!deptCountMap[emp.department]) {
      deptCountMap[emp.department] = 0;
      departments.push(emp.department);
    }
    deptCountMap[emp.department]++;
  });
  
  // 構建樹狀結構
  const children = departments.map(deptName => {
    // 獲取該部門的所有員工
    const deptEmployees = employees.value
      .filter(emp => emp.department === deptName)
      .map(emp => ({
        name: `${emp.name} (${emp.title})`,
        id: emp.id,
        type: 'employee',
        employeeData: emp
      }));
    
    return {
      name: `${deptName} (${deptCountMap[deptName]})`,
      id: deptName,
      type: 'department',
      children: deptEmployees
    };
  });
  
  treeData.value = {
    name: '所有部門',
    children: children
  };
}

// 獲取唯一部門列表
const departments = computed(() => {
  const deptSet = new Set(employees.value.map(emp => emp.department));
  return [...deptSet];
});

// 分頁處理
const totalPages = computed(() => {
  return Math.ceil(filteredEmployees.value.length / itemsPerPage);
});

const paginatedEmployees = computed(() => {
  const start = (page.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredEmployees.value.slice(start, end);
});

// 按部門過濾
function filterByDepartment() {
  if (selectedDepartment.value === 'all') {
    filteredEmployees.value = [...employees.value];
  } else {
    filteredEmployees.value = employees.value.filter(
      emp => emp.department === selectedDepartment.value
    );
  }
  // 重置頁碼
  page.value = 1;
}

// 生成隨機員工數據
function generateEmployeeData() {
  const departments = ['研發部', '行銷部', '人資部', '財務部', '客服部'];
  const titles = ['部門主管', '資深工程師', '工程師', '專員', '助理', '實習生'];
  const firstNames = ['王', '李', '張', '陳', '林', '許', '黃', '吳', '楊', '趙'];
  const lastNames = ['小明', '大勇', '美玲', '家豪', '雅婷', '志強', '佳蓉', '建宏', '俊傑', '雅芳'];
  
  const data = [];
  
  // 生成50筆以上員工資料
  for (let i = 1; i <= 57; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = firstName + lastName;
    const department = departments[Math.floor(Math.random() * departments.length)];
    const title = titles[Math.floor(Math.random() * titles.length)];
    const employeeId = `EMP${String(i).padStart(4, '0')}`;
    
    data.push({
      id: i,
      name,
      department,
      employeeId,
      title,
      email: `${name.toLowerCase()}@hyvue-company.com`
    });
  }
  
  return data;
}

// 生命週期鉤子
onMounted(() => {
  // 模擬API調用
  setTimeout(() => {
    const data = generateEmployeeData();
    employees.value = data;
    filteredEmployees.value = [...data];
    updateTreeData();
  }, 500);
});

// 確保初始加載時過濾正確應用
watch(employees, () => {
  filterByDepartment();
  updateTreeData();
}, { immediate: true });
</script>

<style scoped>
.bg-thead {
  background-color: #f5f5f5;
}

.tree-root {
  list-style-type: none;
  padding-left: 0;
}
</style> 