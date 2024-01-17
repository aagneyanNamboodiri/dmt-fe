import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormInput = ({ field, fieldLabel, type }) => (
  <FormItem>
    <FormLabel>{fieldLabel}</FormLabel>
    <FormControl>
      <Input type={type} {...field} />
    </FormControl>
    <FormMessage />
  </FormItem>
);

export default FormInput;
