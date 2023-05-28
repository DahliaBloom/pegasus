<script setup>
import standardAvatar from '@/assets/standard-avatar.png'

defineProps({
  data: Object
})
</script>

<template>
  <a :href="data.url" target="_blank">
    <div class="stats shadow-2xl">
      <div class="stat">
        <div class="stat-figure">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img :src="data.avatar ?? standardAvatar" />
            </div>
          </div>
        </div>
        <div class="stat-value">{{ data.name ?? data.username }}</div>
        <div class="stat-title text-right">{{ data.username }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Followers</div>
        <div class="stat-value text-right">{{ data.followers }}</div>
      </div>
      <div class="stat">
        <flag :iso="data.country.split('/').pop()" class="stat-figure rounded-xl text-6xl" />
      </div>
    </div>
  </a>
</template>
