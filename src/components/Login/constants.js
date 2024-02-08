import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const FORMSCHEMA = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const FORM_DEFAULTS = {
  resolver: zodResolver(FORMSCHEMA),
  defaultValues: {
    username: "",
  },
};
