// Avatar
let avatar = document.getElementById("avatarImage");
let preAvatar = avatar.src;

function myAvatar(isMouseHover) {
    if (isMouseHover) {
        avatar.src = "https://icons.veryicon.com/png/System/iOS%207/Users%20User%20Female.png"
    } else {
        avatar.src = preAvatar;
    }
}

avatar.onmouseover = function () { myAvatar(true); };
avatar.onmouseleave = function () { myAvatar(false); };

// Contact
let ulContact = document.querySelectorAll(".ul-contact");
let phoneValue = document.getElementById("phone");
let emailValue = document.getElementById("email");
let addressValue = document.getElementById("address");
let websiteValue = document.getElementById("website");

let preContactList = [phoneValue.textContent, emailValue.textContent, addressValue.textContent, websiteValue.textContent];
let myContactList = ["+96655802799", "Ashwag.Alharthi@hotmail.com", "Ryiadh", "githttps://github.com/AshwagAlharthi"];


function myContact(isMouseHover) {
    if (isMouseHover) {
        phoneValue.textContent = myContactList[0];
        emailValue.textContent = myContactList[1];
        addressValue.textContent = myContactList[2];
        websiteValue.textContent = myContactList[3];
    } else {
        phoneValue.textContent = preContactList[0];
        emailValue.textContent = preContactList[1];
        addressValue.textContent = preContactList[2];
        websiteValue.textContent = preContactList[3];
    }
}

ulContact.forEach(item => {
    item.onmouseover = function () { myContact(true); };
    item.onmouseleave = function () { myContact(false); };
})

// Education
let educations = document.querySelectorAll(".education-container")
const listItems = document.querySelectorAll('.ul-contact li');
let eduYear1 = document.getElementById("edu-year1");
let eduUni1 = document.getElementById("edu-uni1");
let eduDgr1 = document.getElementById("edu-dgr1");

let eduYear2 = document.getElementById("edu-year2");
let eduUni2 = document.getElementById("edu-uni2");
let eduDgr2 = document.getElementById("edu-dgr2");
let eduDgr2Gpa = document.getElementById("edu-dgr2-gpa");

let preEdu1 = [eduYear1.textContent, eduUni1.textContent, eduDgr1.textContent];
let preEdu2 = [eduYear2.textContent, eduUni2.textContent, eduDgr2.textContent, eduDgr2Gpa.textContent];

let myEduList = ["2016 - 2021", "Taif University", "Bachelor of Computer Science"];

function myEdu(isMouseHover) {
    if (isMouseHover) {
        eduYear1.textContent = myEduList[0];
        eduUni1.textContent = myEduList[1];
        eduDgr1.textContent = myEduList[2];
        eduYear2.textContent = '';
        eduUni2.textContent = '';
        eduDgr2.textContent = '';
        eduDgr2Gpa.textContent = '';
        eduDgr2.style.listStyleType = 'none';
        eduDgr2Gpa.style.listStyleType = 'none';
    } else {
        eduYear1.textContent = preEdu1[0];
        eduUni1.textContent = preEdu1[1];
        eduDgr1.textContent = preEdu1[2];
        eduYear2.textContent = preEdu2[0];
        eduUni2.textContent = preEdu2[1];
        eduDgr2.textContent = preEdu2[2];
        eduDgr2Gpa.textContent = preEdu2[3];
        eduDgr2.style.listStyleType = '';
        eduDgr2Gpa.style.listStyleType = '';
    }
}

educations.forEach(item => {
    item.onmouseover = function () { myEdu(true); };
    item.onmouseleave = function () { myEdu(false); };
})

// skills
let preSkills = {};
let ulSkills = document.querySelector('.ul-skills');
let skillsList = ulSkills.querySelectorAll('li');

skillsList.forEach(item => {
    preSkills[item.id] = item.textContent;
});

let mySkillsList = {
    'skill1': 'SQL',
    'skill2': 'PL-SQ',
    'skill3': 'HTML-CSS',
    'skill4': 'JavaScript',
    'skill5': 'Problem Solving',
    'skill6': 'Highly Organized',
    'skill7': 'Teamwork',
};

function mySkills(isMouseHover) {
    skillsList.forEach(li => {
        li.textContent = isMouseHover ? mySkillsList[li.id] : preSkills[li.id];
    });
}

ulSkills.onmouseover = function () { mySkills(true); };
ulSkills.onmouseout = function () { mySkills(false); };

// Languages
let ulLang = document.querySelectorAll(".ul-languages");
let language1 = document.getElementById("lang1");
let language2 = document.getElementById("lang2");
let language3 = document.getElementById("lang3");
let language4 = document.getElementById("lang4");

let preLangList = [language1.textContent, language2.textContent, language3.textContent, language4.textContent];
let myLangList = ["Arabic", "English"];

function myLang(isMouseHover) {
    if (isMouseHover) {
        language1.textContent = myLangList[0];
        language2.textContent = myLangList[1];
        language3.textContent = '';
        language4.textContent = '';
        language3.style.listStyleType = 'none';
        language4.style.listStyleType = 'none';
    } else {
        language1.textContent = preLangList[0];
        language2.textContent = preLangList[1];
        language3.textContent = preLangList[2];
        language4.textContent = preLangList[3];
        language3.style.listStyleType = '';
        language4.style.listStyleType = '';
    }
}

ulLang.forEach(item => {
    item.onmouseover = function () { myLang(true); };
    item.onmouseleave = function () { myLang(false); };
})

// Name
let nameDiv = document.querySelector(".name-content");
let nameElement = document.getElementById("name");
let majorElement = document.getElementById("major");
let preInfo = {
    name: nameElement.innerHTML,
    major: majorElement.textContent
};

let myInfo = {
    name: 'ASHWAG <span class="light-font">ALHARTHI</span>',
    major: "COMPUTER SCIENCE"
}

function myNameAndMajor(isMouseHover) {
    if (isMouseHover) {
        nameElement.innerHTML = myInfo.name;
        majorElement.textContent = myInfo.major;
    } else {
        nameElement.innerHTML = preInfo.name;
        majorElement.textContent = preInfo.major;
    }
}

nameDiv.onmouseover = function () { myNameAndMajor(true); };
nameDiv.onmouseleave = function () { myNameAndMajor(false); };

// Profile
let profile = document.getElementById("profileText");
let preProfile = profile.textContent;
let myProfileText = "I am Ashwag Mubarak Alharthi. I have a bachelor degree in Computer Science with First Honors. I am Intersting in Web Development, and I hope to be a professional in that. "

function myProfile(isMouseHover) {
    if (isMouseHover) {
        profile.textContent = myProfileText;
    } else {
        profile.textContent = preProfile;
    }
}

profile.onmouseover = function () { myProfile(true); };
profile.onmouseleave = function () { myProfile(false); };

// Work Experience
let workDiv = document.querySelector(".li-ul-wExperience");

let work = document.getElementById("work1");
let job = document.getElementById("job1");
let task1 = document.getElementById("task1");
let task2 = document.getElementById("task2");
let task3 = document.getElementById("task3");
let preWork = {
    work1: work.innerHTML,
    job1: job.textContent,
    task1: [task1.textContent,
    task2.textContent,
    task3.textContent]
};
let myAllWork = {
    work1: 'Front End <span class="wExperience-span">Present</span>',
    job1: 'Front End Developer',
    task1: [
        'Design Websites',
        'Make Websites interactive.',
        'Design Enhancements.'
    ]
};

function myWork1(isMouseHover) {
    if (isMouseHover) {
        work.innerHTML = myAllWork.work1;
        job.textContent = myAllWork.job1;
        task1.textContent = myAllWork.task1[0];
        task2.textContent = myAllWork.task1[1];
        task3.textContent = myAllWork.task1[2];

    } else {
        work.innerHTML = preWork.work1;
        job.textContent = preWork.job1;
        task1.textContent = preWork.task1[0];
        task2.textContent = preWork.task1[1];
        task3.textContent = preWork.task1[2];
    }
}

workDiv.onmouseover = function () { myWork1(true); };
workDiv.onmouseleave = function () { myWork1(false); };

// 

let workDiv2 = document.querySelector("#workScetion2");

let work2 = document.getElementById("work2");
let job2 = document.getElementById("job2");
let task21 = document.getElementById("task21");
let task22 = document.getElementById("task22");
let task23 = document.getElementById("task23");
let preWork2 = {
    work2: work2.innerHTML,
    job2: job2.textContent,
    task2: [task21.textContent,
    task22.textContent,
    task23.textContent]
};
let myAllWork2 = {
    work2: 'Oracle SQL / PL-SQL <span class="wExperience-span">2022 - 2023</span>',
    job2: 'SQL / PL-SQL ',
    task2: [
        'creating reports.',
        'Designing forms',
        'Manipulating with database'
    ]
};

function myWork2(isMouseHover) {
    if (isMouseHover) {
        work2.innerHTML = myAllWork2.work2;
        job2.textContent = myAllWork2.job2;
        task21.textContent = myAllWork2.task2[0];
        task22.textContent = myAllWork2.task2[1];
        task23.textContent = myAllWork2.task2[2];

    } else {
        work2.innerHTML = preWork2.work2;
        job2.textContent = preWork2.job2;
        task21.textContent = preWork2.task2[0];
        task22.textContent = preWork2.task2[1];
        task23.textContent = preWork2.task2[2];
    }
}

workDiv2.onmouseover = function () { myWork2(true); };
workDiv2.onmouseleave = function () { myWork2(false); };

// 


let workDiv3 = document.querySelector("#workScetion3");

let work3 = document.getElementById("work3");
let job3 = document.getElementById("job3");
let task31 = document.getElementById("task31");
let task32 = document.getElementById("task32");
let preWork3 = {
    work3: work3.innerHTML,
    job3: job3.textContent,
    task3: [task31.textContent,
    task32.textContent]
};
let myAllWork3 = {
    work3: 'Oracle SQL <span class="wExperience-span">2021 - 2022</span>',
    job3: 'SQL ',
    task3: [
        'working with tables',
        'testing'
    ]
};

function myWork3(isMouseHover) {
    if (isMouseHover) {
        work3.innerHTML = myAllWork3.work3;
        job3.textContent = myAllWork3.job3;
        task31.textContent = myAllWork3.task3[0];
        task32.textContent = myAllWork3.task3[1];
    } else {
        work3.innerHTML = preWork3.work3;
        job3.textContent = preWork3.job3;
        task31.textContent = preWork3.task3[0];
        task32.textContent = preWork3.task3[1];
    }
}

workDiv3.onmouseover = function () { myWork3(true); };
workDiv3.onmouseleave = function () { myWork3(false); };

// Reference
let refDiv1 = document.querySelector(".left-details");
let refName1 = document.getElementById("refName1");
let refJob1 = document.getElementById("refJob1");
let phoneNum1 = document.getElementById("phoneNum1");
let email1 = document.getElementById("email1");

let preRef1 = [refName1.textContent,
refJob1.textContent,
phoneNum1.textContent,
email1.textContent
];
let myRefList1 = ["Mohammed Abdullah",
    "Manager of Web Dev.",
    "+966 555888550",
    "Mo.Abdullah@gmail.com"
];
function myRef1(isMouseHover) {
    if (isMouseHover) {
        refName1.textContent = myRefList1[0];
        refJob1.textContent = myRefList1[1];
        phoneNum1.textContent = myRefList1[2];
        email1.textContent = myRefList1[3];
    } else {
        refName1.textContent = preRef1[0];
        refJob1.textContent = preRef1[1];
        phoneNum1.textContent = preRef1[2];
        email1.textContent = preRef1[3];
    }
}

refDiv1.onmouseover = function () { myRef1(true); };
refDiv1.onmouseleave = function () { myRef1(false); };

// 
let refDiv2 = document.querySelector(".right-details");
let refName2 = document.getElementById("refName2");
let refJob2 = document.getElementById("refJob2");
let phoneNum2 = document.getElementById("phoneNum2");
let email2 = document.getElementById("email2");

let preRef2 = [refName1.textContent,
refJob1.textContent,
phoneNum1.textContent,
email1.textContent
];
let myRefList2 = ["Ahmed Salem",
    "SQL Admin.",
    "+966 556688442",
    "Ahmed.sa@gmail.com"
];
function myRef2(isMouseHover) {
    if (isMouseHover) {
        refName2.textContent = myRefList2[0];
        refJob2.textContent = myRefList2[1];
        phoneNum2.textContent = myRefList2[2];
        email2.textContent = myRefList2[3];
    } else {
        refName2.textContent = preRef2[0];
        refJob2.textContent = preRef2[1];
        phoneNum2.textContent = preRef2[2];
        email2.textContent = preRef2[3];
    }
}

refDiv2.onmouseover = function () { myRef2(true); };
refDiv2.onmouseleave = function () { myRef2(false); };
