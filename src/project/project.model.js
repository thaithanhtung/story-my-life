import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: String,
  image: String,
  level_count: Number,
  create_date: Date,
  update_date: Date,
  start_date: Date,
  end_date: Date,
});

const Project = mongoose.model('projects', ProjectSchema);

export { Project };
