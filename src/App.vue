<template>
  <div class="news-container">
    <div v-for="(card, index) in displayedCards" :key="index" class="news-card">
      <div class="card-header">
        <div class="github-title">
          <div class="title-icon">
            <span class="github-icon">{ }</span>
            GitHub <span class="highlight">趋势</span>
          </div>
          <div class="subtitle-text">
            GitHub 今天有什么热门项目🔥
          </div>
        </div>
        <div class="date">
          <span class="date-weekday">{{ card.weekday }}</span>
          <div class="date-details">
            <div class="date-number">{{ card.month }}.{{ card.day }}</div>
            <div class="date-year">{{ card.year }}</div>
          </div>
        </div>
      </div>
      <div class="card-subtitle">
      </div>
      <div class="projects">
        <div v-for="(project, pIndex) in card.projects" :key="pIndex" class="project-item">
          <div class="project-icon">
            <span v-if="!project.iconUrl">{{ project.icon }}</span>
            <img v-else :src="project.iconUrl" :alt="project.name">
          </div>
          <div class="project-content">
            <h3 class="project-name">{{ project.name }}</h3>
            <a :href="project.url" class="project-url">{{ project.url }}</a>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-stats">
              <span class="lang">{{ project.language }}</span>
              <span class="stars">⭐ {{ project.stars }}</span>
              <span class="forks">🔱 {{ project.forks }}</span>
              <span class="trending">⭐ +{{ project.trending }}</span>
            </div>
            <p class="project-summary">{{ project.summary }}</p>
          </div>
        </div>
      </div>
      <div class="card-footer">
      </div>
    </div>
  </div>
</template>

<script>
import { newsData } from './data'

export default {
  name: 'App',
  data() {
    return {
      cards: newsData
    }
  },
  computed: {
    displayedCards() {
      return this.cards
    }
  }
}
</script>

<style>
@import './style.css';
</style>
