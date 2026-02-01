// Utility functions for loading and working with CV data

import type { CVData, Experience, Project } from './types';
import cvData from '../content/cv.json';

/**
 * Get the complete CV data
 */
export function getCVData(): CVData {
  return cvData as CVData;
}

/**
 * Format a date string (YYYY-MM) to readable format (Mon YYYY)
 */
export function formatDate(dateString: string | null): string {
  if (!dateString) return 'Present';

  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);

  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}

/**
 * Calculate duration between two dates
 */
export function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months = (end.getFullYear() - start.getFullYear()) * 12 +
                 (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  } else if (remainingMonths === 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  } else {
    return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  }
}

/**
 * Get recent experience (last N items)
 */
export function getRecentExperience(count: number = 3): Experience[] {
  const data = getCVData();
  return data.experience.slice(0, count);
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  const data = getCVData();
  return data.projects.filter(project => project.featured);
}

/**
 * Get current position (experience with no end date)
 */
export function getCurrentPosition(): Experience | null {
  const data = getCVData();
  return data.experience.find(exp => exp.endDate === null) || null;
}

/**
 * Get total years of experience
 */
export function getTotalYearsOfExperience(): number {
  const data = getCVData();

  if (data.experience.length === 0) return 0;

  // Get the earliest start date
  const startDates = data.experience.map(exp => new Date(exp.startDate));
  const earliestDate = new Date(Math.min(...startDates.map(d => d.getTime())));

  // Calculate years from earliest to now
  const now = new Date();
  const years = now.getFullYear() - earliestDate.getFullYear();

  return years;
}

/**
 * Group experience by country
 */
export function getExperienceByCountry(): Record<string, Experience[]> {
  const data = getCVData();
  const byCountry: Record<string, Experience[]> = {};

  data.experience.forEach(exp => {
    // Extract country from location (assumes "City, Country" format)
    const country = exp.location.split(',').pop()?.trim() || 'Unknown';

    if (!byCountry[country]) {
      byCountry[country] = [];
    }

    byCountry[country].push(exp);
  });

  return byCountry;
}
