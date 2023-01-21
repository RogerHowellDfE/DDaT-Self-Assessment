
const model = {};
allSkillNames.forEach(value => {
    model[value] = null;
})


const skillsTableContainerElem = document.getElementById('skills_table_container');
const tables = skillsTableContainerElem.getElementsByTagName('table');
const table = tables[0];


const skillsSelectionContainerElem = document.getElementById('skill_selection_container');

const rolesToView = [...allRoleNames]
    .reverse()
    // .filter((value, index) => index % 2)
    .filter((value, index) => value.indexOf('Management') === -1)
;


window.addEventListener("load", (event) => {

    console.info('model (BEFORE loading hash)', model);

    const url = new URL(window.location);
    if(url.hash[0] === '#') {
        const parsedModel = JSON.parse(decodeURI(url.hash.slice(1)));
        Object.keys(model)
            .filter(key => model.hasOwnProperty(key))
            .forEach(key => model[key] = parsedModel[key]);
    }

    url.hash = JSON.stringify(model);

    console.log("page is fully loaded");
    console.info('model (AFTER loading hash)', model);

    updateSkillsTable(table, model, rolesToView);
    updateSkillSelectionRadios(skillsSelectionContainerElem, model);
});

window.addEventListener("hashchange", (event) => {

    console.info('model (BEFORE loading hash)', model);

    const url = new URL(window.location);
    if(url.hash[0] === '#') {
        const parsedModel = JSON.parse(decodeURI(url.hash.slice(1)));
        Object.keys(model)
            .filter(key => model.hasOwnProperty(key))
            .forEach(key => model[key] = parsedModel[key]);
    }

    url.hash = JSON.stringify(model);

    console.log("page is fully loaded");
    console.info('model (AFTER loading hash)', model);

    updateSkillsTable(table, model, rolesToView);
    updateSkillSelectionRadios(skillsSelectionContainerElem, model);
});





function updateSkillsTable(tableElem, model, _roles) {
    const tableHead = tableElem.tHead;
    const tableBody = tableElem.tBodies[0];

    // tableHead.innerHTML = '';
    // tableBody.innerHTML = '';

    let theadInnerHtml = '';
    theadInnerHtml += '<th>' + '' + '</th>';
    theadInnerHtml += '<th>' + 'GENERIC' + '</th>';
    theadInnerHtml += _roles
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
            rowHtml += _roles
                .map(roleName => {
                    const role = rolesAndMappedSkillLevelsLookup.find(value => value.title === roleName);

                    const skillDescriptor = role.skills.find(value => value.name === skill);
                    const skillDescriptorLevel = skillDescriptor.level || null;
                    if (skillDescriptorLevel === null) {
                        return '<td class="text-center">' + '<em class="text-muted">No skill level specified</em>' + '</td>';
                    } else {
                        const softwareDeveloperSkillLevelDescriptor = softwareDeveloperSkillLevelDescriptorsLookup[skill];
                        const find = softwareDeveloperSkillLevelDescriptor.find(value => value.skillLevel === skillDescriptorLevel);
                        const skillDescription = find.description || '<em>No description given for level</em>';

                        let style = '';
                        const selectedSkillLevel = model[skill];
                        if(selectedSkillLevel === skillDescriptorLevel) {
                            style += ' background-color: #749F82;'
                        }
                        if(allSkillLevelNames.indexOf(selectedSkillLevel) > allSkillLevelNames.indexOf(skillDescriptorLevel)) {
                            style += ' background-color: #C4DFAA;'
                        }

                        return '' +
                            '<td style="' + style + '">' +
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
}


function getIdForSkillName(skillName) {
    const regex = /[^a-zA-Z0-9]/gi;
    return skillName.replaceAll(regex, '_');
}

function updateSkillSelectionRadios(elem, model) {
    elem.innerHTML += allSkillNames
        .map((skillName, index) => {
            const itemNumber = index + 1;

            const skillGenericDescription = skillsLookup[skillName];
            const skillNameAsIdPrefix = getIdForSkillName(skillName);

            let html = `
        <div class="row mb-5">
            <div class="col-12">
                <h3 class="sticky-top py-3">(${itemNumber}) ${skillName}.</h3>
                <div class="row">
                    <p>
                        <strong>General Overview:</strong> ${skillGenericDescription}
                    </p>
                </div>
                <div class="row">
                ${
                allSkillLevelNames
                    .map(allSkillLevelName => {
                        const description = softwareDeveloperSkillLevelDescriptorsLookup[skillName]
                            .find(value1 => value1.skillLevel === allSkillLevelName)
                            .description;

                        const isSelected = model[skillName] === allSkillLevelName;
                        const s = `
                                <div class="col-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio"
                                               data-skill-display-name="${skillName}"
                                               data-skill-level-name="${allSkillLevelName}"
                                               name="${skillNameAsIdPrefix}_radioOptions"
                                               id="${skillNameAsIdPrefix}_radio_${allSkillLevelName}"
                                               value="${allSkillLevelName}"
                                               ${description === null ? ' disabled' : ''}
                                               ${isSelected ? 'checked' : '' }>
                                        <label class="form-check-label" for="${skillNameAsIdPrefix}_radio_${allSkillLevelName}">
                                            <strong title="${skillLevelsLookup[allSkillLevelName]}">${allSkillLevelName}.</strong>
                                            ${description || 'Not Specified'}
                                        </label>
                                    </div>
                                </div>
                            `;

                        return s;
                    })
                    .join('')
            }
                </div>
            </div>
        </div>`;

            return html;
        })
        .join('');


    elem
        .querySelectorAll('input[type="radio"]')
        .forEach(inputRadioElem => {
            inputRadioElem.addEventListener('change', event => {
                // console.info(event);
                // console.info(event.target);
                // console.info(event.target.dataset);
                // console.info();
                model[event.target.dataset.skillDisplayName] = event.target.dataset.skillLevelName;
                // console.info('model', model);

                updateSkillsTable(table, model, rolesToView);

                const url = new URL(window.location);
                url.hash = JSON.stringify(model);
                history.pushState(model, '', url);
            })
        });
}





