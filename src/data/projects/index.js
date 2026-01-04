import { martinaData } from './martinaClandestina';
import { misterSoldoData } from './misterSoldo';
import { psicotranspersonalData } from './psicotranspersonal';
import { framerMotionData } from './framerMotionLab';
import { trainItData } from './trainIt';
import { guauData } from './guau';
import { kromeeData } from './kromee';
import { portafolioData } from './portafolio';

// Projects Aggregation
const allProjects = [
    martinaData,
    misterSoldoData,
    psicotranspersonalData,
    framerMotionData,
    trainItData,
    guauData,
    portafolioData,
    kromeeData,

];

// Summaries List
export const projectsList = allProjects.map(project => project.summary);

// Details Dictionary
export const projectDetailFiles = allProjects.reduce((acc, project) => {
    acc[project.id] = project.details;
    return acc;
}, {});