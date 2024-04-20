import { Message } from "@/model/User.model";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessags?: boolean;
  messages?: Array<Message>;
}
