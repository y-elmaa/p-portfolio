import z from "zod";
import EmailSchema from "../components/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormData = z.infer<typeof EmailSchema>;

export const useContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(EmailSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/send-email", data);

      alert("message Sent!");
      form.reset();
    } catch (error) {
      alert("Failed to send.");
      console.error(error);
    }
  };
  return { ...form, onSubmit };
};
