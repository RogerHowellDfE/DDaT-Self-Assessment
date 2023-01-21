

const skillsTableContainerElem = document.getElementById('skills_table_container');
const tables = skillsTableContainerElem.getElementsByTagName('table');
const table = tables[0];

const tableHead = table.tHead;
const tableBody = table.tBodies[0];


var theadInnerHtml = '';
theadInnerHtml += '<th>' + '' + '</th>';
theadInnerHtml += '<th>' + 'GENERIC' + '</th>';
roles.forEach((role, index) => theadInnerHtml += '<th>' + role.title + '</th>');
tableHead.innerHTML = theadInnerHtml;

var tbodyInnerHtml = '';
Object.keys(skills).forEach((skill, index) => {
    tbodyInnerHtml += '<tr>';
    tbodyInnerHtml += '<th>' + skill + '</th>';
    tbodyInnerHtml += '<td>' + skills[skill] + '</td>';
    roles.forEach((role, index) => {
        const skillDescriptors = role.skills.find(value => value.name === skill);

        if(skillDescriptors.level === '' || skillDescriptors.level === null || skillDescriptors.level === undefined) {
            tbodyInnerHtml += '<td>' + 'level not specified' + '</td>';
        } else {
            console.info(skillDescriptors);
            console.info(role.skills);
            const softwareDeveloperSkillLevelDescriptor = softwareDeveloperSkillLevelDescriptors[skill];
            console.info('softwareDeveloperSkillLevelDescriptor', softwareDeveloperSkillLevelDescriptor);
            const find = softwareDeveloperSkillLevelDescriptor.find(value => value.skillLevel === skillDescriptors.level);
            console.info('find', find);
            const skillDescription = find.description;
            tbodyInnerHtml += '<td>' + '<strong>' + skillDescriptors.level + ': ' + '</strong>' + skillDescription + '</td>';
        }
    });
    tbodyInnerHtml += '</tr>';
});
tableBody.innerHTML = tbodyInnerHtml;
