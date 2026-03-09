<template>
  <div>
    <MapComponent
      :center="[105, 35]"
      :zoom="3.5"
      width="100%"
      height="80vh"
      @map-loaded="handleMapLoaded"
    />
    <div 
      v-if="tooltip.show" 
      class="tooltip"
      :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
    >
      {{ tooltip.name2 }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import MapComponent from '@/components/map.vue';
import { useDeckOverlay } from '@/composables/useDeckOverlay.js';
import { GeoJsonLayer } from '@deck.gl/layers';

const center = [105, 35];
const tooltip = ref({ show: false, x: 0, y: 0, name2: '', nlName: '' });

let deckMap = null;
let geojsonData = null;

onMounted(async () => {
  try {
    const response = await fetch('/ChinaEBus/china_city.geojson');
    const data = await response.json();
    geojsonData = data;
    
    if (deckMap) {
      updateDeckMap();
    }
  } catch (error) {
    console.error('Error loading GeoJSON:', error);
  }
});

const handleMapLoaded = (map) => {
  deckMap = useDeckOverlay(map);
  if (geojsonData) {
    updateDeckMap();
  }
};

const updateDeckMap = () => {
  deckMap.setProps({
    layers: [
      new GeoJsonLayer({
        id: 'china-cities',
        data: geojsonData,
        filled: true,
        stroked: true,
        lineWidthMinPixels: 1,
        getFillColor: [0, 100, 200, 150],
        getLineColor: [255, 255, 255, 100],
        getLineWidth: 1,
        pickable: true,
        autoHighlight: true,
        highlightColor: [255, 200, 0, 200],
        
        onHover: info => {
          if (info.object) {
            let name2 = info.object.properties.NAME_2 || '未知';
            const nlName = info.object.properties.NL_NAME_2 || '';
            // 如果有下划线，将 "省_市" 格式转换为 "市, 省" 格式
            if (name2.includes('_')) {
              const parts = name2.split('_');
              if (parts.length === 2) {
                name2 = `${parts[1]}, ${parts[0]}`;
              }
            }
            tooltip.value = {
              show: true,
              x: info.x,
              y: info.y,
              name2: name2,
              nlName: nlName
            };
            document.body.style.cursor = 'pointer';
          } else {
            tooltip.value.show = false;
            document.body.style.cursor = 'default';
          }
        },
        
        onClick: info => {
          if (info.object) {
            const name2 = info.object.properties.NAME_2;
            if (name2) {
              // 将单引号替换为 _apos_ 以匹配文件名格式
              const fileName = name2.replace(/'/g, "_apos_");
              const url = `/ChinaEBus/map/city/${encodeURIComponent(fileName)}.html`;
              window.open(url, '_blank');
            }
          }
        }
      })
    ]
  });
};

onUnmounted(() => {
  if (deckMap) {
    deckMap.finalize();
  }
});
</script>

<style scoped>
.tooltip {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 1000;
  pointer-events: none;
}
</style>
