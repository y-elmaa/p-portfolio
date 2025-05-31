import z from "zod";
import EmailSchema from "../components/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";

type FormData = z.infer<typeof EmailSchema>;

export const useContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(EmailSchema),
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/send-email", data);

      setStatusMessage("message Sent!");
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      setStatusMessage("Failed to send.");
      setIsSuccess(false);
      console.error(error);
    }
  };
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);
  return { ...form, onSubmit, statusMessage, isSuccess };
};
