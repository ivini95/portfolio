/* const projectImages = document.getElementsByClassName("containerProject")
const projectInfos = document.getElementsByClassName("containerInfo")

var countProjectInfo = 0

for (let projectInfo of projectInfos) {
    countProjectInfo += 1
    projectInfo.id = "projectInfo" + countProjectInfo
} 


function openInfo(id){
    projectInfos[id - 1].style.display = "block"
}


function closeInfoProject(){
    for (let projectInfo of projectInfos) {
        countProjectInfo += 1
        projectInfo.style.display = "none"
    } 
} */



const AllProjects = document.getElementsByClassName("project")

function changeProjectsView(type){

    let projects = [];
    
    for (let project of AllProjects) {
        projects.push(project)
    }

    for (let project of projects){
        if (!project.className.includes(type)) {
            project.classList.add("animate__animated", "animate__bounceOutLeft"); 
            
            setTimeout(() => {
                project.style.display = 'none'
            }, 500);
            
        }else {
            console.log(project);
            setTimeout(() => {
            project.style.display = 'block'
            project.classList.remove("animate__animated", "animate__bounceOutLeft");
            project.classList.add("animate__animated", "animate__bounceInLeft");
            }, 500);
            
            
        }
    }
    
}


const projectImages = document.getElementsByClassName("containerProject");
const projectInfos = document.getElementsByClassName("containerInfo");

let countProjectInfo = 0;

for (let projectInfo of projectInfos) {
    countProjectInfo += 1;
    projectInfo.id = "projectInfo" + countProjectInfo;
} 

function openInfo(id) {
    const info = projectInfos[id - 1];
    
    info.classList.add("visible", "animate__animated", "animate__bounceInRight");
    info.classList.remove("animate__bounceOutRight");
}

async function closeInfoProject(id) {
    
        
        const info = projectInfos[id - 1];
        info.classList.add("animate__animated",  "animate__bounceOutRight");
        setTimeout(() => {
            info.classList.remove("visible", "animate__bounceInRight","animate__bounceOutRight");
        }, 500);
        
}
