import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'please provide company'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'please provide position'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    jobType: {
      type: String,
      enum: ['fulltime', 'parttime', 'remote', 'internship'],
      default: 'fulltime',
    },
    description: {
      type: String,
      required: [true, 'please provide description'],
      maxlength: 1000,
    },
    jobLocation: {
      type: String,
      default: 'my city',
      required: true,
    },
    skills: {
      type: [
        {
          type: String,
          unique: true,
        },
      ],
      required: [true, 'Please provide skills required for this job'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);
export default mongoose.model('Job', JobSchema);
