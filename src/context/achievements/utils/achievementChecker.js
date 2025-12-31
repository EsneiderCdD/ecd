export function checkNewlyUnlockedAchievements(achievementsConfig, currentProgress, currentUnlockedIds) {
    const newlyUnlocked = [];

    Object.values(achievementsConfig).forEach(achievement => {
        if (currentUnlockedIds.includes(achievement.id)) return;

        if (achievement.condition(currentProgress)) {
            newlyUnlocked.push(achievement);
        }
    });

    return newlyUnlocked;
}
