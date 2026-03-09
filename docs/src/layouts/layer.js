import { Layer, LayerGroup } from '@/composables/useLayerGroup.ts'
import { GeoJsonLayer } from '@deck.gl/layers'

import { useColorBandStore } from '@/stores/colorBandStore'
import { createNormalizer } from '@/utils/normalizer';
import { hexToRgbaArray } from '@/utils/color';
import { useMapStore } from '@/stores/mapStore';

