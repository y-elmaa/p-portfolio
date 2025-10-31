import { z } from "zod";


const EmailSchema = z.object({
  name: z.string().min(1,"Le nom est requis"),
  email: z.string().email("E-mail invalide"),
  subject: z.string().min(1, "Le sujet est requis"),
  message: z.string().min(1, "Le message est requis"),
});

export default EmailSchema;
