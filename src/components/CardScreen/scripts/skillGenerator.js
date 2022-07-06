export const skillGenerator = (skills) => {
    const skillsKeys = Object.keys(skills)
    const skillsValue = Object.values(skills)

    const skillsRender = skillsValue.map((skill, index) => {
        const defineSkillText = (skillKey) => {
            switch (skillKey) {
                case 'singByEar':
                    return 'Sing by ear'
                case 'playByEar':
                    return 'Play by ear'
                case 'readSheetMusic':
                    return 'Read sheet music'
                default:
                    return
            }
        }
        if (skill === true) {
            const convertedSkillKey = defineSkillText(skillsKeys[index])
            return convertedSkillKey

        } else {
            return
        }
    })
    const removeAllUndefined = skillsRender.filter((el) => el !== undefined);
    return removeAllUndefined
}