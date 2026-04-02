import { trainItData } from './trainIt';
import { guauData } from './guau';
import { swaplyArData } from './swaplyAr';
import { portafolioData } from './portafolio';

// Projects Aggregation
const allProjects = [
    trainItData,
    guauData,
    portafolioData,
    swaplyArData,
];

// Summaries List
export const projectsList = allProjects.map(project => project.summary);

// Details Dictionary
export const projectDetailFiles = allProjects.reduce((acc, project) => {
    acc[project.id] = project.details;
    return acc;
}, {});

// Complete Project Data (to check isComingSoon flag)
export const allProjectsData = allProjects.reduce((acc, project) => {
    acc[project.id] = project;
    return acc;
}, {});