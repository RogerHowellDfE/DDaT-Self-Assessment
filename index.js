

const skillsTableContainerElem = document.getElementById('skills_table_container');
const tables = skillsTableContainerElem.getElementsByTagName('table');
const table = tables[0];

const tableHead = table.tHead;
const tableBody = table.tBodies[0];


var theadInnerHtml = '';
theadInnerHtml += '<th>' + '' + '</th>';
theadInnerHtml += '<th>' + 'GENERIC' + '</th>';
rolesAndMappedSkillLevelsLookup.forEach((role, index) => theadInnerHtml += '<th>' + role.title + '</th>');
tableHead.innerHTML = theadInnerHtml;

var tbodyInnerHtml = '';
Object.keys(skillsLookup).forEach((skill, index) => {
    tbodyInnerHtml += '<tr>';
    tbodyInnerHtml += '<th>' + skill + '</th>';
    tbodyInnerHtml += '<td>' + skillsLookup[skill] + '</td>';
    rolesAndMappedSkillLevelsLookup.forEach((role, index) => {
        const skillDescriptors = role.skills.find(value => value.name === skill);

        if(skillDescriptors.level === '' || skillDescriptors.level === null || skillDescriptors.level === undefined) {
            tbodyInnerHtml += '<td>' + '<em class="text-muted">No skill level specified</em>' + '</td>';
        } else {
            console.info(skillDescriptors);
            console.info(role.skills);
            const softwareDeveloperSkillLevelDescriptor = softwareDeveloperSkillLevelDescriptorsLookup[skill];
            console.info('softwareDeveloperSkillLevelDescriptor', softwareDeveloperSkillLevelDescriptor);
            const find = softwareDeveloperSkillLevelDescriptor.find(value => value.skillLevel === skillDescriptors.level);
            console.info('find', find);
            const skillDescription = find.description || '<em>No description given for level</em>';
            tbodyInnerHtml += '<td>' + '<strong>' + skillDescriptors.level + ': ' + '</strong>' + skillDescription + '</td>';
        }
    });
    tbodyInnerHtml += '</tr>';
});
tableBody.innerHTML = tbodyInnerHtml;
