import { z } from "zod";
import { email } from "zod/v4";

const EmailSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export default EmailSchema;
