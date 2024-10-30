import {Router} from 'express';
import { updateJobsApplied } from '../controller/jobControllers';

const router = Router();

router.route('/updateJobsApplied').post(updateJobsApplied);
// router.route('/jobBoards').post(jobBoards);

export default router;