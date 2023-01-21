const skillsTableContainerElem = document.getElementById('skills_table_container');
const tables = skillsTableContainerElem.getElementsByTagName('table');
const table = tables[0];

const tableHead = table.tHead;
const tableBody = table.tBodies[0];

tableHead.innerHTML = '';
tableBody.innerHTML = '';

let theadInnerHtml = '';
theadInnerHtml += '<th>' + '' + '</th>';
theadInnerHtml += '<th>' + 'GENERIC' + '</th>';
theadInnerHtml += allRoleNames
    .map(roleName => '<th>' + roleName + '</th>')
    .join('');
tableHead.innerHTML = theadInnerHtml;

let tbodyInnerHtml = '';
tbodyInnerHtml += allSkillNames
    .map(skill => {
        const genericSkillDescription = skillsLookup[skill];

        let rowHtml = '';
        rowHtml += '<tr>';
        // rowHtml += '<th>' + skill + '<br/>' + '<br/>' + '<em style="font-weight: normal;">' + skillsLookup[skill] + '</em>' + '</th>';
        rowHtml += '<th>' + skill + '</th>';
        rowHtml += '<td>' + genericSkillDescription + '</td>';
        rowHtml += rolesAndMappedSkillLevelsLookup
            .map((role, index) => {
                const skillDescriptor = role.skills.find(value => value.name === skill);
                const skillDescriptorLevel = skillDescriptor.level || null;
                if (skillDescriptorLevel === null) {
                    return '<td class="text-center">' + '<em class="text-muted">No skill level specified</em>' + '</td>';
                } else {
                    const softwareDeveloperSkillLevelDescriptor = softwareDeveloperSkillLevelDescriptorsLookup[skill];
                    const find = softwareDeveloperSkillLevelDescriptor.find(value => value.skillLevel === skillDescriptorLevel);
                    const skillDescription = find.description || '<em>No description given for level</em>';
                    return '' +
                        '<td>' +
                        '<strong>' + skillDescriptorLevel + ': ' + '</strong>' +
                        '<small>' + skillDescription + '</small>' +
                        '</td>';
                }
            })
            .join('');
        rowHtml += '</tr>';

        return rowHtml;
    })
    .join('');

tableBody.innerHTML = tbodyInnerHtml;
