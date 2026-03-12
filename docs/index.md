---
layout: page
---

<Header />

> Explore China's Electric Bus Interactive Map: <a href="map/china-city.html" target="_blank" rel="noopener noreferrer">Click Here</a>

The burden of bus electrification varies markedly across Chinese cities, with the annualized total cost ranging from 0.01% to 1.2% of city-level GDP and the annual electricity demand accounting for 0.6% to 17.83% of industrial electricity consumption.
To analyse electrification performance across Chinese cities, we classified cities into three categories based on bus network length: large, medium and small. Differences in network scale and topology across these categories further shape infrastructure deployment and cost–benefit performance.

<Figure :src="imageSrc1" />

> Fig. 1 | Representative typologies of urban bus networks across Chinese cities. a, Chinese cities are classified into three groups according to bus network length, revealing substantial inter-city variation in network scale. b, Representative bus networks from the three classes—Shanghai, Xiamen and Lhasa—illustrate marked differences in network extent, route structure and charging-station deployment. 

Large networks have a much higher charging station density, about 2.5 times that of medium and small networks. Medium networks show the lowest cost, emissions, infrastructure and vehicle intensity per kilometre, indicating the highest cost-effectiveness for bus electrification. Small networks have the highest emissions per kilometre, likely due to sparser charging facilities and more deadheading for charging, whereas large networks have the highest values for other input-related cost indicators.

<Figure :src="imageSrc2" />

> Fig. 2 | Key electrification indicators by city class

Under technology improvement scenarios, electrification strategies diverge across bus networks of different sizes: large networks show greater potential to reduce charger deployment, whereas medium-sized networks can achieve larger reductions in the required fleet size.

<Figure :src="imageSrc3" />

> Fig. 3 | Median values of electrification indicators in what-if scenarios by city class


<Footer />

<script setup>
import Header from '@/home/header.vue'
import Figure from '@/home/figure.vue'
import Footer from '@/home/footer.vue'

import imageSrc1 from '@/home/assets/image1.png'
import imageSrc2 from '@/home/assets/image2.png'
import imageSrc3 from '@/home/assets/image3.png'

</script>


<style scoped>

/* 增加超链接样式支持 */
a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* 基础内容容器 */
.vp-doc {
  max-width: 80%;
  margin: 0 auto;
  font-family: var(--vp-font-family-base);
}

/* 二级标题优化 */
h2 {
  max-width: 80%;
  font-size: 2.2rem;
  line-height: 1.4;
  color: var(--vp-c-text-1);
  margin: 2.5rem auto 1.5rem;
  font-weight: 650;
  position: relative;
  padding-bottom: 0.5rem;
}

/* 段落文本优化 */
p {
  max-width: 80%;
  font-size: 1.2rem;
  line-height: 1.85;
  color: var(--vp-c-text-2);
  margin: 0 auto 1.6rem;
  letter-spacing: 0.02em;
}

/* 引用块高级优化 */
blockquote {
  border-left: 2px solid var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
    padding: 1.5rem 2rem;
    margin: 1.5rem auto;
    max-width: 80%;
}

blockquote p {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
    color: var(--vp-c-text-2);
    margin: 0;
    position: relative;
    z-index: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .vp-doc,
  h2,
  p,
  blockquote {
    max-width: 90%;
  }
  
  h2 {
    font-size: 1.8rem;
    margin: 2rem auto 1.2rem;
  }
  
  p {
    font-size: 1.1rem;
  }
  
  blockquote {
    padding: 1.2rem 1.5rem;
  }
  
  blockquote p {
    font-size: 1.1rem;
  }
}
</style>