---
layout: page
---
<h1 class="city-map-title">
    Electric Bus Scenarios in 200+ Chinese Cities
    <small>Click a City in the Map to Visualize its Electric Bus Scenario</small>
</h1>

<ChinaCityMap />

<script setup>
    import ChinaCityMap from '@/components/ChinaCityMap.vue'
</script>

<style scoped>
.city-map-title {
    font-size: 1.5em;
    color: var(--vp-c-brand-1);
    text-align: center;
    margin-top: 5px;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
    border-bottom: 0 !important;
    line-height: 1.3;
}
.city-map-title small {
    font-size: 0.6em;
    display: block;
    margin-top: 0px;
    margin-bottom: 1px;
    color: var(--vp-c-text-2);
    line-height: 1.2;
}
:deep(.vp-doc > div) {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
}
</style>
