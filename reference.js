/*
 * https://www.gov.uk/guidance/skill-levels-for-digital-data-and-technology-roles
 */
const skillLevels = {
    'Awareness' : 'You know about the skill and have an appreciation of how it is applied in the environment.',
    'Working' : 'You can apply your knowledge and experience of the skill, including tools and techniques. You can adopt those most appropriate for the environment.',
    'Practitioner' : 'You know how to share your knowledge and experience of this skill with others, including tools and techniques. You can define those most appropriate for the environment.',
    'Expert' : 'You have both knowledge and experience in the application of this skill. You are a recognised specialist and adviser in this skill including user needs, generation of ideas, methods and tools. You can lead or guide others in best-practice use.',
};


/*
 * https://www.gov.uk/guidance/software-developer
 */
const skills = {
    'Availability and capacity management':             'You can define, analyse, plan, forecast, measure, maintain and improve all aspects of the availability of services, including power. You can control and manage service availability to meet business needs cost-effectively, including managing the capability, functionality and sustainability of service components (such as hardware, software, network resources, and software or infrastructure as a service).',
    'Development process optimisation':                 'You can identify opportunities for improving the development process, make these improvements and evaluate their success. You can work with others to select and implement tools and practices to build confidence and reduce risk in each stage of the software development life cycle (from planning and prioritisation through to build, test, deployment and monitoring).',
    'Development process optimisation (management)':    'You can create strategies for optimising the development process. You can influence and build consensus with stakeholders to ensure that the required technical improvements are aligned with business objectives. You can iterate on the development of standards and policies, working with delivery teams to ensure that these policies are producing the required outcome and continue to be attainable, applicable and fit for purpose.',
    'Information security':                             'You can maintain the security, confidentiality and integrity of information systems through compliance with relevant legislation and regulations. You can design, implement and operate controls and management strategies to allow this.',
    'Modern standards approach':                        'You can apply a modern standards approach throughout automation and testing.',
    'Programming and build (software engineering)':     'You can use agreed security standards and specifications to design, create, test and document new or amended software.',
    'Prototyping':                                      'You can apply technical knowledge and experience to create or design workable prototypes, both programs and physical outputs. You can understand parameters, restrictions and synergies.',
    'Service support':                                  'You can maintain and support services.',
    'Systems design':                                   'You can create the specification and design of systems to meet defined business needs. You can work with business and technology stakeholders to translate business problems into technical designs. You can visualise the ideal user service and come up with design ideas and possible design approaches. You can effectively explore different approaches to solving problems.',
    'Systems integration':                              'You can identify integration points between systems and processes, designing data contracts and communication between the components. You can make use of modern design patterns that reduce risk and complexity where possible. You can perform integration tests as part of the development process, drawing on suitable testing frameworks and methodologies.',
    'User focus':                                       'You can understand users and identify who they are and what their needs are, based on evidence. You can translate user stories and propose design approaches or services to meet these needs. You can engage in meaningful interactions and relationships with users. You can show that you put users first and can manage competing priorities.',
};


/*
 * https://www.gov.uk/guidance/software-developer
 */
const softwareDeveloperSkillLevelDescriptors = {
    'Availability and capacity management': [
        {skillLevel: 'Awareness',     description: 'You can show an awareness of availability and capacity management processes. (Skill level: awareness)'},
        {skillLevel: 'Working',       description: 'You can manage service components to ensure they meet business needs and performance targets. (Skill level: working)'},
        {skillLevel: 'Practitioner',  description: 'You can ensure the correct implementation of standards and procedures. You can identify capacity issues, and stipulate and instigate the required changes. You can initiate remedial action. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: ''},
    ],
    'Development process optimisation': [
        {skillLevel: 'Awareness',     description: 'You can explain the importance of developing process efficiency and the common ways in which processes are optimised. You can support specific activities to improve development processes. You can spot or identify obvious deficiencies. (Skill level: awareness)'},
        {skillLevel: 'Working',       description: 'You can identify process optimisation opportunities with guidance and contribute to the implementation of proposed solutions. (Skill level: working)'},
        {skillLevel: 'Practitioner',  description: 'You can analyse current processes. You can identify and implement opportunities to optimise processes. You can lead and develop a team of experts to deliver service improvements. You can help to evaluate and establish requirements for the implementation of changes by setting policy and standards. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: ''},
    ],
    'Development process optimisation (management)': [
        {skillLevel: 'Awareness',     description: ''},
        {skillLevel: 'Working',       description: 'You can work under guidance to identify process optimisation opportunities. You can contribute to the implementation of proposed solutions. (Skill level: working)'},
        {skillLevel: 'Practitioner',  description: 'You can analyse current processes. You can identify and implement opportunities to optimise processes. You can lead and develop a team of experts to deliver service improvements. You can help to evaluate and establish requirements for the implementation of changes by setting policy and standards. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: 'You can set the strategy and manage resource allocation for solution development programmes. You can work with client functions to establish business requirements and identify, propose, initiate and lead these programmes. (Skill level: expert)'},
    ],
    'Information security': [
        {skillLevel: 'Awareness',     description: 'You can discuss information security and the security controls that can be used to mitigate security threats within solutions and services. (Skill level: awareness)'},
        {skillLevel: 'Working',       description: 'You can demonstrate an understanding of information security and the types of security controls that can be used to mitigate security threats within solutions and services. (Skill level: working)'},
        {skillLevel: 'Practitioner',  description: 'You can understand information security. You can design solutions and services with security controls embedded, specifically engineered with mitigation of security threats as a core feature. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: 'You can demonstrate in-depth knowledge of information security. You can design, quality review and quality assure solutions and services with security controls embedded, specifically engineered with mitigation of security threats as a core feature. (Skill level: expert)'},
    ],
    'Modern standards approach': [
        {skillLevel: 'Awareness',     description: 'You can understand the importance of adopting a modern standards approach. (Skill level: awareness)'},
        {skillLevel: 'Working',       description: 'You can explain the most important principles of a modern standards approach and how they apply to the work you are undertaking. You can apply these principles under guidance. (Skill level: working)'},
        {skillLevel: 'Practitioner',  description: 'You can competently apply a modern standards approach and guide others to do so. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: 'You can demonstrate a strong understanding of the most appropriate modern standards and practices, and how they are applied. You can coach and guide others in these standards. (Skill level: expert)'},
    ],
    'Programming and build (software engineering)': [
        {skillLevel: 'Awareness',     description: ''},
        {skillLevel: 'Working',       description: 'You can design, code, test, correct and document simple programs or scripts under the direction of others. (Skill level: working)'},
        {skillLevel: 'Practitioner',  description: 'You can collaborate with others when necessary to review specifications. You can use the agreed specifications to design, code, test and document programs or scripts of medium-to-high complexity, using the right standards and tools. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: 'You can advise on the right way to apply standards and methods to ensure compliance. You can maintain technical responsibility for all the stages and iterations of a software development project. You can provide technical advice to stakeholders and set the team-based standards for programming tools and techniques. (Skill level: expert)'},
    ],
    'Prototyping': [
        {skillLevel: 'Awareness',     description: 'You can explain what prototyping is, and why and when to use it. You can understand how to work in an open and collaborative environment (by pair working, for example). (Skill level: awareness)'},
        {skillLevel: 'Working',       description: 'You can understand when to use a specific prototyping technique or method. You can show the value of prototyping to your team. (Skill level: working)'},
        {skillLevel: 'Practitioner',  description: 'You can approach prototyping as a team activity, actively soliciting prototypes and testing with others. You can establish design patterns and iterate them. You can use a variety of prototyping methods and choose the most appropriate. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: 'You can use a variety of prototyping methods. You can share best practice and coach others. You can look at strategic service design end to end. (Skill level: expert)'},
    ],
    'Service support': [
        {skillLevel: 'Awareness',     description: 'You can help with the investigation and resolution of infrastructure problems, undertaking specific activities under direction. (Skill level: awareness)'},
        {skillLevel: 'Working',       description: 'You can help fix faults following agreed procedures. You can carry out agreed maintenance tasks on infrastructure. (Skill level: working)'},
        {skillLevel: 'Practitioner',  description: 'You can identify, locate and fix faults. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: ''},
    ],
    'Systems design': [
        {skillLevel: 'Awareness',     description: 'You can assist as part of a team in the design of components of larger systems. (Skill level: awareness)'},
        {skillLevel: 'Working',       description: 'You can translate logical designs into physical designs. You can produce detailed designs. You can effectively document all work using required standards, methods and tools, including prototyping tools where appropriate. You can design systems characterised by managed levels of risk, manageable business and technical complexity, and meaningful impact. You can work with well-understood technology and identify appropriate patterns. (Skill level: working)'},
        {skillLevel: 'Practitioner',  description: 'You can design systems characterised by medium levels of risk, impact, and business or technical complexity. You can select appropriate design standards, methods and tools, and ensure they are applied effectively. You can review the systems designs of others to ensure the selection of appropriate technology, efficient use of resources and integration of multiple systems and technology. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: 'You can design systems characterised by high levels of risk, impact, and business or technical complexity. You can control system design practice within an enterprise or industry architecture. You can influence industry-based models for the development of new technology applications. You can develop effective implementation and procurement strategies, consistent with business needs. You can ensure adherence to relevant technical strategies, policies, standards and practices. (Skill level: expert)'},
    ],
    'Systems integration': [
        {skillLevel: 'Awareness',     description: 'You can talk about the process of integrating systems and the challenges of designing, building and testing interfaces between systems. (Skill level: awareness)'},
        {skillLevel: 'Working',       description: 'You can build and test simple interfaces between systems. You can work on more complex integration as part of a wider team. (Skill level: working)'},
        {skillLevel: 'Practitioner',  description: 'You can define the integration build. You can co-ordinate build activities across systems. You can understand how to undertake and support integration testing activities. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: ''},
    ],
    'User focus': [
        {skillLevel: 'Awareness',     description: 'You can show an awareness or understanding of user experience analysis and its principles. You can explain the purpose of user stories and the focus on user needs. (Skill level: awareness)'},
        {skillLevel: 'Working',       description: ''},
        {skillLevel: 'Practitioner',  description: 'You can collaborate with user researchers and can represent users internally. You can explain the difference between user needs and the desires of the user. You can champion user research to focus on all users. You can prioritise and define approaches to understand the user story, guiding others in doing so. You can offer recommendations on the best tools and methods to use. (Skill level: practitioner)'},
        {skillLevel: 'Expert',        description: ''},
    ],
};


/*
 * https://www.gov.uk/guidance/software-developer
 */
const roles = [
    { title: 'Principal Software Developer - Management',       skills: [ { name: 'Availability and capacity management', level: 'Practitioner' },      { name: 'Development process optimisation', level: null },            { name: 'Development process optimisation (management)', level: 'Expert' },         { name: 'Information security', level: 'Expert' },          { name: 'Modern standards approach', level: 'Expert' },          { name: 'Programming and build (software engineering)', level: 'Practitioner' },     { name: 'Prototyping', level: 'Expert' },          { name: 'Service support', level: 'Practitioner' },    { name: 'Systems design', level: 'Expert' },          { name: 'Systems integration', level: 'Practitioner' },      { name: 'User focus', level: 'Practitioner' },        ]},
    { title: 'Lead Software Developer - Management',            skills: [ { name: 'Availability and capacity management', level: 'Practitioner' },      { name: 'Development process optimisation', level: null },            { name: 'Development process optimisation (management)', level: 'Practitioner' },   { name: 'Information security', level: 'Practitioner' },    { name: 'Modern standards approach', level: 'Expert' },          { name: 'Programming and build (software engineering)', level: 'Practitioner' },     { name: 'Prototyping', level: 'Practitioner' },    { name: 'Service support', level: 'Practitioner' },    { name: 'Systems design', level: 'Practitioner' },    { name: 'Systems integration', level: 'Practitioner' },      { name: 'User focus', level: 'Practitioner' },     ]},
    { title: 'Senior Software Developer - Management',          skills: [ { name: 'Availability and capacity management', level: 'Practitioner' },      { name: 'Development process optimisation', level: null },            { name: 'Development process optimisation (management)', level: 'Working' },        { name: 'Information security', level: 'Practitioner' },    { name: 'Modern standards approach', level: 'Practitioner' },    { name: 'Programming and build (software engineering)', level: 'Practitioner' },     { name: 'Prototyping', level: 'Practitioner' },    { name: 'Service support', level: 'Practitioner' },    { name: 'Systems design', level: 'Practitioner' },    { name: 'Systems integration', level: 'Practitioner' },      { name: 'User focus', level: 'Practitioner' },     ]},
    { title: 'Principal Software Developer',                    skills: [ { name: 'Availability and capacity management', level: 'Working' },           { name: 'Development process optimisation', level: 'Practitioner' },  { name: 'Development process optimisation (management)', level: null },             { name: 'Information security', level: 'Expert' },          { name: 'Modern standards approach', level: 'Expert' },          { name: 'Programming and build (software engineering)', level: 'Expert' },           { name: 'Prototyping', level: 'Expert' },          { name: 'Service support', level: 'Practitioner' },    { name: 'Systems design', level: 'Expert' },          { name: 'Systems integration', level: 'Practitioner' },      { name: 'User focus', level: 'Practitioner' },     ]},
    { title: 'Lead Software Developer',                         skills: [ { name: 'Availability and capacity management', level: 'Working' },           { name: 'Development process optimisation', level: 'Working' },       { name: 'Development process optimisation (management)', level: null },             { name: 'Information security', level: 'Practitioner' },    { name: 'Modern standards approach', level: 'Expert' },          { name: 'Programming and build (software engineering)', level: 'Expert' },           { name: 'Prototyping', level: 'Practitioner' },    { name: 'Service support', level: 'Practitioner' },    { name: 'Systems design', level: 'Practitioner' },    { name: 'Systems integration', level: 'Practitioner' },      { name: 'User focus', level: 'Practitioner' },     ]},
    { title: 'Senior Software Developer',                       skills: [ { name: 'Availability and capacity management', level: 'Working' },           { name: 'Development process optimisation', level: 'Working' },       { name: 'Development process optimisation (management)', level: null },             { name: 'Information security', level: 'Practitioner' },    { name: 'Modern standards approach', level: 'Practitioner' },    { name: 'Programming and build (software engineering)', level: 'Practitioner' },     { name: 'Prototyping', level: 'Practitioner' },    { name: 'Service support', level: 'Practitioner' },    { name: 'Systems design', level: 'Practitioner' },    { name: 'Systems integration', level: 'Practitioner' },      { name: 'User focus', level: 'Practitioner' },     ]},
    { title: 'Software Developer',                              skills: [ { name: 'Availability and capacity management', level: 'Working' },           { name: 'Development process optimisation', level: 'Awareness' },     { name: 'Development process optimisation (management)', level: null },             { name: 'Information security', level: 'Practitioner' },    { name: 'Modern standards approach', level: 'Practitioner' },    { name: 'Programming and build (software engineering)', level: 'Practitioner' },     { name: 'Prototyping', level: 'Practitioner' },    { name: 'Service support', level: 'Working' },         { name: 'Systems design', level: 'Working' },         { name: 'Systems integration', level: 'Working' },           { name: 'User focus', level: 'Practitioner' },     ]},
    { title: 'Junior Software Developer',                       skills: [ { name: 'Availability and capacity management', level: 'Awareness' },         { name: 'Development process optimisation', level: null },            { name: 'Development process optimisation (management)', level: null },             { name: 'Information security', level: 'Working' },         { name: 'Modern standards approach', level: 'Working' },         { name: 'Programming and build (software engineering)', level: 'Working' },          { name: 'Prototyping', level: 'Working' },         { name: 'Service support', level: 'Working' },         { name: 'Systems design', level: 'Awareness' },       { name: 'Systems integration', level: 'Awareness' },         { name: 'User focus', level: 'Awareness' },        ]},
    { title: 'Apprentice Software Developer',                   skills: [ { name: 'Availability and capacity management', level: 'Awareness' },         { name: 'Development process optimisation', level: null },            { name: 'Development process optimisation (management)', level: null },             { name: 'Information security', level: 'Awareness' },       { name: 'Modern standards approach', level: 'Awareness' },       { name: 'Programming and build (software engineering)', level: 'Working' },          { name: 'Prototyping', level: 'Awareness' },       { name: 'Service support', level: 'Awareness' },       { name: 'Systems design', level: null },              { name: 'Systems integration', level: null },                { name: 'User focus', level: 'Awareness' },        ]},
]






