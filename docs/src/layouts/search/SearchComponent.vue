<template>
  <div class="search-container">
    <div class="search-wrapper">
      <el-autocomplete
        v-model="searchQuery"
        :fetch-suggestions="querySearchAsync"
        placeholder="Search for a state or county..."
        @select="handleSelect"
        clearable
        class="search-input"
        :loading="loading"
      >
        <template #suffix>
          <el-icon>
            <search />
          </el-icon>
        </template>
        <template #default="{ item }">
          <div class="suggestion-item">
            <span class="state" v-if="item.type === 'state'">{{ item.value }}</span>
            <span class="county" v-else>{{ item.value }}, {{ item.state }}</span>
          </div>
        </template>
      </el-autocomplete>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


const emit = defineEmits(['select'])

const searchQuery = ref('')
const loading = ref(false)


</script>

<style scoped>
.search-container {
  max-width: 100%;
}

.search-wrapper {
  position: relative;
}

.search-input :deep(.el-input__wrapper) {
  border-radius: 8px;
  box-shadow: 0 0 0 1px var(--el-border-color);
  padding: 0 12px;
  transition: box-shadow 0.2s;
}

.search-input :deep(.el-input__wrapper:hover),
.search-input :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px var(--el-color-primary);
}

.search-input :deep(.el-autocomplete__loading-indicator) {
  right: 2.5rem;
  color: var(--el-color-primary);
}

.suggestion-item {
  padding: 8px 12px;
}

.suggestion-item .state {
  font-weight: 600;
}

.suggestion-item .county::before {
  content: "•";
  margin: 0 6px;
  color: var(--el-border-color);
}
</style>