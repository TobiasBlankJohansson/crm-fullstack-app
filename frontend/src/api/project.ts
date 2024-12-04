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
  const response = await axios.post(
    `${path}/api/projects`,
    {
      project: newProject.name,
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
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Project Alpha",
          id: "00000000-0000-4000-8000-000000000000",
        },
        {
          title: "Project Beta",
          id: "00000000-0000-4000-8000-000000000001",
        },
        {
          title: "Project Gamma",
          id: "00000000-0000-4000-8000-000000000002",
        },
      ]);
    }, 0);
  });
};
