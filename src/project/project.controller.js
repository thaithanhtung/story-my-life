import { Project } from './project.model';
import { StepDb } from '../step/step.model';

import { stepController } from '../step/step.controller';

const projectController = {
  getProjects: async () => Project.find(),

  getProjectById: async (id) => {
    const project = await Project.findById(id).exec();
    const steps = await stepController.getStepByProjectId(id)
    const {
      name,
      create_date,
      update_date,
      start_date,
      end_date,
      level_count,
    } = project;
    return {
      id,
      name,
      create_date,
      update_date,
      start_date,
      end_date,
      level_count,
      steps,
    };
  },

  createProject: async ({ name, steps }) => {
    const newProject = await new Project({
      name,
      create_date: Date.now(),
      start_date: Date.now(),
      end_date: Date.now(),
      level_count: 3
    });
    const project = await newProject.save();

    const createSteps = [];

    if (steps && steps.length > 0) {
      steps.forEach((element) => {
        new Promise((resolve) => {
          stepController
            .createStep({
              ...element,
              project_id: project.id,
            })
            .then((data) => {
              console.log('create step sucssess', data);
              resolve(data);
            });
        });
        createSteps.push(createSteps);
      });
    }

    console.log('createSteps', createSteps);
    const dataSteps = await Promise.all([createSteps]);
    console.log('dataSteps', dataSteps);

    return project;
  },

  updateProject: async (project) => {
    const {
      id,
      name,
      image,
      level_count,
      start_date,
      end_date,
      steps,
    } = project;
    const projectUpdate = await Project.findByIdAndUpdate(id, {
      name,
      image,
      level_count,
      start_date,
      end_date,
      update_date: Date().now(),
    });
    return { ...projectUpdate };
  },

  deleteProject: async (id) => {
    const project = await Project.findById(id).remove().exec();
    return { id };
  },
};

export { projectController };
