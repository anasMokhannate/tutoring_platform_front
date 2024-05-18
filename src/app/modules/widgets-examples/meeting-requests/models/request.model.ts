// src/app/modules/widgets-examples/meeting-requests/models/request.model.ts
export interface Request {
    id: number;
    studentName: string;
    requestType: string;  // e.g., 'Psychologist Support', 'Course Session'
    description: string;
    status: 'Pending' | 'Accepted' | 'Denied';  // Request status
  }
  