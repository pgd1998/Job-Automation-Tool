import { JobsApplied, JobBoardsCreds, UserCred } from '../models/schema'; 
import { Request, Response } from 'express';

interface ReqRes{
    req:Request;
    res:Response;
}

export const updateJobsApplied = async ({ req, res }: ReqRes):Promise<void> => {
    const { company,role,appliedDate } = req.body;
    try {
        const response = await JobsApplied.findOne({ company, role });
        if (response) {
            res.status(400).json({ message: "Job already applied! Check once" });
            return;
        }

        const newCompany = new JobsApplied({ company, role, appliedDate });
        await newCompany.save();
        res.status(200).json({message:"Jobs applied data updated"})
       
   }
   catch(error) {
       res.status(500).json({message:'Server Error',error})
    }
}

export const jobBoards = async ({ req, res }: ReqRes):Promise<void> => {
    const { jobBoard, username, password } = req.body;
    try {
        const response = await JobBoardsCreds.findOne({ jobBoard, username });
        if (response) {
            res.status(400).json({ message: "Credentials for the job board already exists" });
            return;
        }
        const newJobBoardCred = new JobBoardsCreds({ jobBoard, username, password });
        await newJobBoardCred.save();
        res.status(200).json({message:"Jobs board credentials data updated"})
    }
    catch (error) {
        res.status(500).json({message:'Server Error',error})
    }
}