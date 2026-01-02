import { martinaData } from './martinaClandestina';
import { misterSoldoData } from './misterSoldo';
import { psicotranspersonalData } from './psicotranspersonal';
import { framerMotionData } from './framerMotionLab';
import { trainItData } from './trainIt';
import { guauData } from './guau';

// Projects Aggregation
const allProjects = [
    martinaData,
    misterSoldoData,
    psicotranspersonalData,
    framerMotionData,
    trainItData,
    guauData
];

// Summaries List
export const projectsList = allProjects.map(project => project.summary);

// Details Dictionary
export const projectDetailFiles = allProjects.reduce((acc, project) => {
    acc[project.id] = project.details;
    return acc;
}, {});