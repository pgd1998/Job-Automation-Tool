import mongoose, { Schema,Document } from 'mongoose';

// As it is TS should extend Document for better typesafety
interface JobApplied extends Document{
    company: string;
    role: string;
    appliedDate: Date;
}

interface JobBoardsLoginCreds extends Document{
    jobBoard: string;
    username: string;
    password: string;
}

interface UsersLogin extends Document{
    name: string;
    email: string;
    password: string;
}

const jobsAppliedSchema: Schema = new Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    appliedDate: { type: Date, default: Date.now }
});

const jobBoardsLoginCredsSchema: Schema = new Schema({
    jobBoard: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const usersLoginSchema: Schema=new Schema({
    name: { type: String, required: true },
    email:{type:String,required:true},
    password: { type: String, required: true }
})

const JobsApplied = mongoose.model<JobApplied>('JobsApplied', jobsAppliedSchema);
const JobBoardsCreds = mongoose.model<JobBoardsLoginCreds>('JobBoardsCreds', jobBoardsLoginCredsSchema);
const UserCred = mongoose.model<UsersLogin>('UserCred', usersLoginSchema);

export { JobsApplied, JobBoardsCreds,UserCred };