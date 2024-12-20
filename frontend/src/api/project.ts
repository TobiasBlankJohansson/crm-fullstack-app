import { ProjectInfo } from "@/components/dashboard/page/customer/create/AddProject";
import axios from "axios";
import { UUID } from "crypto";

const path = import.meta.env.VITE_BACKEND_URL;

export type projectObject = {
  id: string;
  name: string;
  duration: string;
  customers: string[];
  notes: string[];
  sales: sales[];
};

export type sales = {
  name: string;
  sale: string;
};

export type CreateProjectDto = {
  name: string;
  duration: string;
  customers: string[];
  notes: string[];
};

export const getProject = async (): Promise<projectObject[]> => {
  const response = await axios.get(`${path}/api/projects`);
  return await response.data;
};

export const createProject = async (
  newProject: CreateProjectDto
): Promise<boolean> => {
  console.log(newProject);
  const response = await axios.post(
    `${path}/api/projects`,
    {
      name: newProject.name,
      duration: newProject.duration,
      customers: newProject.customers,
      notes: newProject.notes,
    },
    {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status >= 200 && response.status < 300) {
    return true;
  } else {
    throw new Error(`Unexpected response status: ${response.data}`);
  }
};

export const updateProject = async (
  updatedProject: projectObject
): Promise<projectObject> => {
  const response = await axios.put(
    `${path}/api/projects/${updatedProject.id}`,
    {
      project: updatedProject.name,
      duration: updatedProject.duration,
      customers: updatedProject.customers,
      notes: updatedProject.notes,
      sales: updatedProject.sales,
    },
    {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(`Unexpected response status: ${response.status}`);
  }
};

export const deleteProject = async (projectId: UUID): Promise<boolean> => {
  const response = await axios.delete(`${path}/api/projects/${projectId}`);
  if (response.status >= 200 && response.status < 300) {
    return true;
  } else {
    throw new Error(`Unexpected response status: ${response.status}`);
  }
};

export const getProjectSelection = async (): Promise<ProjectInfo[]> => {
  const response = await axios.get(`${path}/api/projects/select`);
  return await response.data;
};
