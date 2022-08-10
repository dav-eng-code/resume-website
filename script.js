/*
 *Check for name
 */
myName=''
if (window.location.hash){
    hash=window.location.hash
    if (/v.*r/.test(hash)){
        myName=hash.replace('#','').replace('dB','d B')
        myName=myName.replace('v','avi')
        myName=myName.substr(0,7)+'u'+myName.substr(7,8)
        myName=myName.concat('ani')
    }
    else {myName='dav-eng-code';hash=''}
}else {myName='dav-eng-code';hash=''}
console.log(myName)

if (document.querySelector('.my-name')){
console.log(document.querySelector('.my-name').textContent)
document.querySelector('.my-name').textContent=myName}

/*
 *Navigation Bar
 */
navList = document.createElement('ul')
document.querySelector('nav').appendChild(navList)
navListRefs = [
    "index.html"+hash,
    "index.html"+hash,
    //"index.html#projects",
    "about.html"+hash,
    //"#contact",
    "https://github.com/dav-eng-code/"
]

navListItems = [
    myName,
    'Home',
    //'Projects',
    'About',
    //'Contact',
    'GitHub'
]
if(hash!=''){
    navListRefs.push('https://linkedin.com/in/'+myName.replace(' ',''))
    navListItems.push('Linkedin')
    console.log(navListRefs)
    console.log(navListItems)
    linksN=2
} else {
    linksN=1
}

for (i = 0; i < navListRefs.length; i++) {
    listItem=document.createElement('li')
    itemLink=document.createElement('a')
    itemLink.setAttribute('href',navListRefs[i])
    if(i>=navListRefs.length-linksN){
        itemLink.setAttribute('target','_blank')
    }
    itemText=document.createTextNode(navListItems[i])
    itemLink.appendChild(itemText)
    navList.appendChild(listItem)
    listItem.appendChild(itemLink)
}

/*
 * Open to work statement
 */
if (hash!=''){
    contactPara1=document.createElement('p')
    contactPara2=document.createElement('p')
    contactText1=document.createTextNode('Open to relevant opportunities in Japan, around Tokyo or Tsukuba')
    contactText2=document.createTextNode('Currently based in the UK')
    contactPara1.appendChild(contactText1)
    contactPara2.appendChild(contactText2)
    contactSection=document.querySelector('#role_text')
    contactSection.appendChild(contactPara1)
    contactSection.appendChild(contactPara2)
}

/*
 * Form input formatting
 */
inputElements = document.querySelectorAll('input')
inputElements.forEach(element => {
    element.addEventListener('change', function (event) {
        if (event.target.value.length > 0) {
            event.target.style.backgroundColor = '#d2f9db';
            event.target.style.borderColor = '';
        } else {
            event.target.style.backgroundColor = 'white';
            event.target.style.borderColor = 'red';
        }
    })
})

document.querySelectorAll('.technologies input').forEach(item => {
    item.checked = false;
})

/*
 *define skills items to add
 */

let allSkills = {
    'HTML': true,
    'CSS': true,
    'JavaScript': true,
    'Project Management in Technical Environment': true,
    'Excellent Written Communication': true,
    'Windows': true,
    'Linux (Fedora)': true,
    'React': true,
    'TypeScript': false,
    /*'Node.js': false,
    'Next.js': false,*/
    'Vue.js': false,
    'Angular': false,
    /*'Rx.js': false,*/
    'Python': true,
    'Flask': true,
    'SQLAlchemy ': true,
    'AWS ': true,
    'PostgreSQL ': true,
    'Java': true,
    'Team Leadership': true,
    'Over 8 Years experience in Engineering': true,
    'Familiarity with ISO9001': true
}

skillsList = Object.keys(allSkills);
console.log(skillsList)

/**need importance selector with high, medium, low 
 * that appears when the checkbox is ticked */

/*
 * create skills checkboxes
 */
createSkillsListItem = function createSkillsListItem(skill) {
    listItem = document.createElement('li')
    labelItem = document.createElement('label')
    labelText = document.createTextNode(skill)
    cbItem = document.createElement('input')
    cbItem.setAttribute('type', 'checkbox')
    cbItem.setAttribute('name', skill)
    listItem.appendChild(labelItem)
    labelItem.appendChild(labelText)
    labelItem.appendChild(cbItem)
    return listItem
}


results = false
skillCount = 4
formSection = document.querySelector('#form')
mouseoverAddRow = true

//if (document.querySelectorAll('.row1').length!=0)
{document.querySelector('.row1').addEventListener('mouseover', event => {
    if (document.getElementsByName('company')[0].value != '') {
        setTimeout(() => {
            if (mouseoverAddRow) { addRowToForm() }
        }, 2000)
        mouseoverAddRow = false
    }

})}

function addRowToForm() {
    if (skillCount < skillsList.length) {
        let row = document.createElement('ul')
        row.setAttribute('class', 'technologies addedRow')
        formSection.appendChild(row)
        for (let i = 0; i <= 3; i++) {
            if (skillCount < skillsList.length) {
                newSkillsItem = createSkillsListItem(skillsList[skillCount])
                row.appendChild(newSkillsItem)
                skillCount++
            }
        }
        row.style.color = 'var(--theme-colour-background1)';
        [...row.childNodes].map(a => a.childNodes[0].style.paddingTop = '10px');
        setTimeout(() => { row.classList.toggle('colourChange') }, 10)
    } else if (results != true) {
        results = createResultsSection()
    }
}

/*row2 = null;
count = 0
results = false

document.querySelectorAll('input').forEach(element => {
    element.addEventListener('focusout', function (event) {
        console.log('here!!!')
        for (let i = 0; i <= 4; i++) {
            console.log('and here', i)
            reqsList = document.querySelector('#form .technologies')
            newSkillsItem = createSkillsListItem(skillsList[count])
            console.log('list:', reqsList.textContent, 'item:', newSkillsItem.textContent)
            console.log(reqsList.textContent.includes(newSkillsItem.textContent))
            if (row2 === null && count < skillsList.length && !reqsList.textContent.includes(newSkillsItem.textContent)) {
                //reqsList = document.querySelector('#form .technologies')
                reqsList.appendChild(newSkillsItem)
            } else { count++ }
            if (results != true && count > skillsList.length / 3) {
                results = createResultsSection()

            }
            count++
        }

    })
})*/

selectedSkills = []
let n = 0;

skillsSelector = function skillsSelector(event) {
    setTimeout(() => { addRowToForm(), mouseoverAddRow = false }, 500)

    console.log('event firing', n)
    n++
    if (event.target.checked && !selectedSkills.includes(event.target.parentNode.textContent)) {
        selectedSkills.push(event.target.parentNode.textContent)
        console.log('***********')
        console.log(event.target)
        console.log(event.target.parentNode.textContent)
        console.log(selectedSkills)
        updateResults('add', event.target.parentNode.textContent) //if selected skill is true, then change the corresponding item in the results resultsSection
    } else if (selectedSkills.includes(event.target.parentNode.textContent)) {
        console.log('here')
        selectedSkills = selectedSkills.filter(item => item != event.target.parentNode.textContent)
        console.log(selectedSkills)
        updateResults('remove', event.target.parentNode.textContent)
    }
}

//add event handler for selection of a role requirement ("skill")
allTheLiInputItems = document.querySelectorAll('li input')
allTheLiInputItems.forEach(element => {
    addEventListener('change', skillsSelector)
})

//results list needs to be updatable prior to having a results section
resultsList = document.createElement('ul');

//create results section
createResultsSection = function createResultsSection() {
    console.log('createResultsSection, results= ', results)
    resultsSection = document.createElement('div');
    resultsHeading = document.createElement('h3');
    resultsHeading.appendChild(document.createTextNode('Results'));
    resultsSection.appendChild(resultsHeading)
    resultsSection.appendChild(resultsList)
    document.querySelector('#form').appendChild(resultsSection);
    resultsSection.style.width = '100%'

    if (typeof resultsStatement == 'undefined') {
        console.log('creation of results statement')
        if (typeof resultsScore == 'undefined') { resultsScore = '' }
        resultsStatement = document.createElement('h2')
        resultsStatementText = document.createTextNode(resultsScore)
        resultsStatement.setAttribute('id', 'results_text')
        resultsStatement.appendChild(resultsStatementText)
        resultsStatementInput=document.createElement('input')
        resultsStatementInput.setAttribute('type','hidden')
        resultsStatementInput.setAttribute('name','results_text')
        resultsStatementInput.setAttribute('value',resultsScore)
        resultsSection.appendChild(resultsStatement)
        resultsSection.appendChild(resultsStatementInput)

        console.log('added results statement')
        console.log('resultsSection:', resultsSection)

        feedbackHeading=document.createElement('p')
        feedbackHeading.appendChild(document.createTextNode('Please confirm if you would be interested in receiving an application, or otherwise please provide feedback. Please mention which skills and experience are of most interest. Thank you.'))
        resultsSection.appendChild(feedbackHeading)
        feedbackInput=document.createElement('textarea')
        feedbackInput.setAttribute('class','feedback')
        feedbackInput.setAttribute('name','feedback_text')
        resultsSection.appendChild(feedbackInput)

        console.log('added feedback area')

        submitButton=document.createElement('button')
        submitButton.setAttribute('type','submit')
        submitButtonText=document.createTextNode('Submit')
        submitButton.appendChild(submitButtonText)
        resultsSection.appendChild(submitButton)

        console.log('added submit button')
    } else if (results) {
        document.getElementById('results_text').textContent = resultsScore;
    }


    return true
}

resultsMatch = 0
resultsAll = 0
/*rather than going through full list each time, try to just add element that has been ticked*/

/*need to check listed skills selected against actual skills*/
updateResults = function updateResults(action, name) {
    console.log('all li input items when updateResults is run', allTheLiInputItems)
    if (action === 'add') {
        selectedSkills.forEach(skill => {
            console.log(resultsList.childNodes)
            console.log(resultsList.textContent)
            if (!resultsList.textContent.includes(skill)) {
                listItem = document.createElement('li')
                labelItem = document.createElement('label')
                labelItem.setAttribute('id', 'id_' + skill)
                labelText = document.createTextNode(skill)
                //cbItem = document.createElement('input')
                //cbItem.setAttribute('type', 'checkbox')
                //cbItem.setAttribute('name', skill)
                resultsList.appendChild(listItem)
                listItem.appendChild(labelItem)
                labelItem.appendChild(labelText)
                //labelItem.appendChild(cbItem)

                //find the key in the right case
                skillsKey = skillsList.filter(key => key.toLowerCase() === skill.toLowerCase())
                //check if skill value is true
                if (allSkills[skillsKey]) {
                    labelItem.style.color = 'green'
                    resultsMatch++
                }
                else {
                    labelItem.style.color = 'orange'
                }
                resultsAll++
            }
            console.log('resultsMatch:', resultsMatch)
            console.log('resultsAll gone up:', resultsAll)
        })
    } else if (action === 'remove') {
        skillItem = document.getElementById('id_' + name)
        if (skillItem) {
            skillItem.parentNode.remove()
        }
        skillsKey = skillsList.filter(key => key.toLowerCase() === name.toLowerCase())
        console.log('allSkills', allSkills, 'skillsKey', skillsKey)
        if (allSkills[skillsKey]) {
            resultsMatch--
        }
        resultsAll--

        console.log('resultsMatch:', resultsMatch)
        console.log('resultsAll gone down:', resultsAll)
    }
    resultsScore = 'Match for this role:   ' + Math.round(resultsMatch / resultsAll * 100) + '%';
    console.log('results:', resultsScore)
    if (results) {
        console.log('updating results score text')
        document.getElementById('results_text').textContent = resultsScore;
    }


}

/*
 * start with entry of name/company/contact details? * 
 * list skills with option to select them
 * option to select importance and/or required years of expereience
 * start with tech skills
 * list transferable skills including:
 * - line management
 * - project management
 * - quality documentation/familiarity with ISO9001
 * - review of technical documents
 * - presenting skills
 * - training and mentoring
 * start loading comparison results while still giving option to
 *  select more technologies, and/or input addition requirements?
 * provide choice to either invite application/submit contact details/get in touch
 *  or provide feedback (main reason for not proceeding)
*/



/*
 * change style height along with transition when loading new form content
*/