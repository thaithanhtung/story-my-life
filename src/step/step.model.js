import mongoose from 'mongoose';

const StepSchema = new mongoose.Schema({
    name: String,
    image: String,
    create_date: String,
    update_date: String,
    category: String,
    start_date: String,
    end_date: String,
    color: String,
    icon: String,
    text: String,
    project_id: String
});

const StepDb = mongoose.model('steps', StepSchema);

export { StepDb };
