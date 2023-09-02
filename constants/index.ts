export const footerLinks = [
    {
        title: 'About',
        links: [
            { name: 'How it works', href: '/about' },
            { name: 'Featured', href: '/featured' },
            { name: 'Hire me', href: '/contact' },
        ],
    },
    {
        title: 'Linux Distros',
        links: [
            { name: 'Ubuntu', href: 'https://ubuntu.com/' },
            { name: 'Fedora', href: 'https://getfedora.org/' },
            { name: 'Arch', href: 'https://archlinux.org/' },
        ],
    },
    {
        title: 'Links',
        links: [
            { name: 'Developer', href: 'https://www.github.com/jackbullen' },
            { name: 'Bean dip', href: 'https://www.spendwithpennies.com/easy-bean-dip/' },
        ],
    },
]

export const subjectList = [ {"subject":"ATWP","title":"Academic and Technical Writing Program (ATWP)"},{"subject":"AGEI","title":"Ageing (AGEI)"},{"subject":"ASL","title":"American Sign Language (ASL)"},{"subject":"ANTH","title":"Anthropology (ANTH)"},{"subject":"AE","title":"Art Education (AE)"},{"subject":"AHVS","title":"Art History and Visual Studies (AHVS)"},{"subject":"ARTS","title":"Arts (ARTS)"},{"subject":"ACAN","title":"Arts of Canada (ACAN)"},{"subject":"ASTR","title":"Astronomy (ASTR)"},{"subject":"BIOC","title":"Biochemistry (BIOC)"},{"subject":"BCMB","title":"Biochemistry and Microbiology (BCMB)"},{"subject":"BIOL","title":"Biology (BIOL)"},{"subject":"BME","title":"Biomedical Engineering (BME)"},{"subject":"CS","title":"Canadian Studies (CS)"},{"subject":"CHEM","title":"Chemistry (CHEM)"},{"subject":"CYC","title":"Child and Youth Care (CYC)"},{"subject":"CIVE","title":"Civil Engineering (CIVE)"},{"subject":"COM","title":"Commerce (COM)"},{"subject":"CE","title":"Community Engagement (CE)"},{"subject":"CSC","title":"Computer Science (CSC)"},{"subject":"CW","title":"Creative Writing (En'owkin Centre) (CW)"},{"subject":"ED-P","title":"Curriculum and Instruction Studies (ED-P)"},{"subject":"EDCI","title":"Curriculum and Instruction Studies (EDCI)"},{"subject":"DHUM","title":"Digital Humanities (DHUM)"},{"subject":"DSST","title":"Disability Studies (DSS)"},{"subject":"EOS","title":"Earth and Ocean Sciences (EOS)"},{"subject":"ECON","title":"Economics (ECON)"},{"subject":"EDUC","title":"Education (EDUC)"},{"subject":"ED-D","title":"Educational Psychology and Leadership Studies (ED-D)"},{"subject":"ECE","title":"Electrical and Computer Engineering (ECE)"},{"subject":"ENGR","title":"Engineering (ENGR)"},{"subject":"ENSH","title":"English (ENSH)"},{"subject":"ENT","title":"Entrepreneurship (ENT)"},{"subject":"ER","title":"Environmental Restoration (ER)"},{"subject":"ES","title":"Environmental Studies (ES)"},{"subject":"EUS","title":"European Studies (EUS)"},{"subject":"EPHE","title":"Exercise Science, Physical and Health Education (EPHE)"},{"subject":"FA","title":"Fine Arts (FA)"},{"subject":"FRAN","title":"French and Francophone Studies (FRAN)"},{"subject":"GNDR","title":"Gender Studies (GNDR)"},{"subject":"GEOG","title":"Geography (GEOG)"},{"subject":"GMST","title":"Germanic Studies (GMST)"},{"subject":"GDS","title":"Global Development Studies (GDS)"},{"subject":"GREE","title":"Greek (GREE)"},{"subject":"GRS","title":"Greek and Roman Studies (GRS)"},{"subject":"HLTH","title":"Health (HLTH)"},{"subject":"HINF","title":"Health Information Science (HINF)"},{"subject":"HS","title":"Health and Society (HS)"},{"subject":"HSTR","title":"History (HSTR)"},{"subject":"HDCC","title":"Human Dimensions of Climate Change (HDCC)"},{"subject":"HSD","title":"Human and Social Development (HSD)"},{"subject":"HUMA","title":"Humanities (HUMA)"},{"subject":"ICDG","title":"Indigenous Community Development and Governance (ICDG)"},{"subject":"IED","title":"Indigenous Education (IED)"},{"subject":"IGOV","title":"Indigenous Governance (IGOV)"},{"subject":"INGH","title":"Indigenous Health Studies (INGH)"},{"subject":"IS","title":"Indigenous Studies (IS)"},{"subject":"ISP","title":"Intercultural Studies and Practice (ISP)"},{"subject":"IB","title":"International Business (IB)"},{"subject":"INTS","title":"International Health Studies (INTS)"},{"subject":"ITAL","title":"Italian (ITAL)"},{"subject":"LATI","title":"Latin (LATI)"},{"subject":"LAS","title":"Latin American Studies (LAS)"},{"subject":"LAW","title":"Law (LAW)"},{"subject":"LING","title":"Linguistics (LING)"},{"subject":"MRNE","title":"Marine Science (MRNE)"},{"subject":"MATH","title":"Mathematics (MATH)"},{"subject":"MECH","title":"Mechanical Engineering (MECH)"},{"subject":"MDIA","title":"Media Studies (MDIA)"},{"subject":"MEDS","title":"Medical Science (MEDS)"},{"subject":"MEDI","title":"Medieval Studies (MEDI)"},{"subject":"MICR","title":"Microbiology (MICR)"},{"subject":"MUS","title":"Music (MUS)"},{"subject":"NURS","title":"Nursing (NURS)"},{"subject":"PAAS","title":"Pacific and Asian Studies (PAAS)"},{"subject":"PHIL","title":"Philosophy (PHIL)"},{"subject":"PHYS","title":"Physics (PHYS)"},{"subject":"POLI","title":"Political Science (POLI)"},{"subject":"PORT","title":"Portuguese (PORT)"},{"subject":"PSYC","title":"Psychology (PSYC)"},{"subject":"ADMN","title":"Public Administration (ADMN)"},{"subject":"RCS","title":"Religion, Culture and Society (RCS)"},{"subject":"SCIE","title":"Science (SCIE)"},{"subject":"SMGT","title":"Service Management (SMGT)"},{"subject":"SLST","title":"Slavic Studies (SLST)"},{"subject":"SJS","title":"Social Justice Studies (SJS)"},{"subject":"SOSC","title":"Social Science (SOSC)"},{"subject":"SOCW","title":"Social Work (SOCW)"},{"subject":"SOCI","title":"Sociology (SOCI)"},{"subject":"SENG","title":"Software Engineering (SENG)"},{"subject":"SPAN","title":"Spanish (SPAN)"},{"subject":"STAT","title":"Statistics (STAT)"},{"subject":"TS","title":"Technology and Society (TS)"},{"subject":"THEA","title":"Theatre (THEA)"},{"subject":"TCA","title":"Transformative Climate Action (TCA)"},{"subject":"VKUR","title":"Valerie Kuehne Undergraduate Research Award (VKUR)"},{"subject":"VIRS","title":"Visiting International Research Studies (VIRS)"},{"subject":"ART","title":"Visual Arts (ART)"},{"subject":"WRIT","title":"Writing (WRIT)"} ]

export const sampleRequirement = {
    oneOf1: {
        allOf1: {1: "CSC320"},
        allOf2: {1: "MATH110", 2: "STAT254"},
        allOf3: {1: "MATH222"}
    },
    minStanding: {
        year: {1: "third"}
    }
}

export const terms = [
    {title: "term", name: "Term", value: ""},
    {
        title: "term",
        name: "Fall 2023",
        value: "202309",
    },
    {
        title: "term",
        name: "Spring 2024",
        value: "202401",
    }
]

export const years = [
    {
        title: "level",
        name: "Year",
        value: ""
    },
    {
        title: "level",
        name: "First Year", 
        value: "1"
    },
    {
        title: "level",
        name: "Second Year", 
        value: "2"
    },
    {
        title: "level",
        name: "Third Year",
        value: "3"
    },
    {
        title: "level",
        name: "Fourth Year",
        value: "4"
    },
    {
        title: "level",
        name: "Graduate",
        value: "5"
    }
    ]