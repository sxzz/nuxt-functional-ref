<script setup lang="ts">
const count = ref(1)
const double = computed(() => count() * 2)

const inc = () => {
  count.set(count() + 1)
}
</script>

<template>
  <div>
    <p>
      count: {{ count }}
      <button @click="inc">+</button>
    </p>
    <p>double: {{ double }}</p>
  </div>
</template>
