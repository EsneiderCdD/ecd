import { useState, useEffect } from "react";

export function useContributionNav(file) {
    const [currentContributionIndex, setCurrentContributionIndex] = useState(0);

    useEffect(() => {
        setCurrentContributionIndex(0);
    }, [file]);

    const handlePreviousContribution = () => {
        if (file?.contributions && currentContributionIndex > 0) {
            setCurrentContributionIndex(currentContributionIndex - 1);
        }
    };

    const handleNextContribution = () => {
        if (file?.contributions && currentContributionIndex < file.contributions.length - 1) {
            setCurrentContributionIndex(currentContributionIndex + 1);
        }
    };

    const currentContribution = file?.type === "Dinámico" && file.contributions
        ? file.contributions[currentContributionIndex]
        : null;

    const showContributionNavigation = file?.type === "Dinámico" && file.contributions && file.contributions.length > 1;

    return {
        currentContributionIndex,
        currentContribution,
        showContributionNavigation,
        handlePreviousContribution,
        handleNextContribution
    };
}
