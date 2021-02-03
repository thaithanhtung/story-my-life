import { StepDb } from './step.model';

const stepController = {
  // getStepBy: async () => Project.find(),

  getStepByProjectId: async (projectId) => {
    const steps = await StepDb.find({ project_id: projectId }).exec();
    console.log('steps====>', steps);
    return steps;
  },

  createStep: async (dataStep) => {
    const {
      name,
      image,
      category,
      start_date,
      end_date,
      color,
      icon,
      text,
      project_id,
    } = dataStep;

    console.log('dataStep', dataStep);
    const newStep = await new StepDb({
      name,
      image,
      create_date: Date.now(),
      update_date: Date.now(),
      category,
      start_date,
      end_date,
      color,
      icon,
      text,
      project_id,
    });
    const step = await newStep.save();
    return step;
  },

  // updateProject: async (project) => {
  //   const { id, name, image, level_count, start_date, end_date } = project;
  //   const projectUpdate = await Project.findByIdAndUpdate(id, {
  //     name,
  //     image,
  //     level_count,
  //     start_date,
  //     end_date,
  //     update_date: Date().now(),
  //   });

  //   return { ...projectUpdate };
  // },

  // deleteProject: async (id) => {
  //   const project = await Project.findById(id).remove().exec();
  //   return { id };
  // },
};

export { stepController };
