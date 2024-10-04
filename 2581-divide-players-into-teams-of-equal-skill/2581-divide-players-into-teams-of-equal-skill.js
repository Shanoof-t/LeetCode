/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    skill.sort((a, b) => a - b)
    const teamSkill = skill[0] + skill[skill.length - 1]
    let chem = skill[0] * skill[skill.length - 1]
    for (let i = 1; i < skill.length / 2; i++) {
        if (skill[i] + skill[skill.length - 1 - i] !== teamSkill) return -1
        chem += skill[i] * skill[skill.length - 1 - i]
    }
    return chem
};

