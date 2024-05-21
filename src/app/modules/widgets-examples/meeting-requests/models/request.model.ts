// Update your Request model to include 'Approved' if it should be allowed
export interface Request {
  id: number;
  studentName: string;
  requestType: string;
  description: string;
  status: 'Pending' | 'Accepted' | 'Denied' | 'Completed' | 'Scheduled' | 'Cancelled' | 'Approved'; // Add 'Approved' here
}
