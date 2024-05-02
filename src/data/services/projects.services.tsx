import Project from "../entities/project/entityProject";

export async function getProjects(): Promise<Project[]> {
    const projectJson = await fetch("../entities/project/projects.json", { mode: "no-cors" });
    debugger
    const projectData = await projectJson.json();
    return projectData;
}