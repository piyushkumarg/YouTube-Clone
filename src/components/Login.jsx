import React from 'react'
import { TextInput, Button, Group, Select, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link } from 'react-router-dom';

function Login() {
    const form = useForm({
      initialValues: {
        email: "",
        password: "",
      },

      validate: {
        email: (value) =>
          /^\S+@\S+$/.test(value) ? null : "Please enter valid email",
        password: (value) => {
          if (value.length < 8) {
            return "Password must be greater than 8 characters";
          }
          if (
            !/\d/.test(value) ||
            !/[a-zA-Z]/.test(value) ||
            !/[!@#$%^&*]/.test(value)
          ) {
            return "Password must contain letters, numbers, and special characters";
          }
          return null;
        },
      },
    });
      const handleSubmit = async (values) => {
        try {
          console.log(values);
           console.log("Form submitted successfully!");
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };
  return (
    <div className="bg-black text-gray-100 h-screen flex items-center justify-center">
      <div className="border-2 border-gray-900 p-8 rounded-xl max-w-full ">
        <form
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
          className="space-y-4  md:w-[300px] "
        >
          <TextInput
            variant="filled"
            styles={{
              input: { background: "rgb(17 24 39)", color: "#ffffff" },
            }}
            withAsterisk
            label="Email"
            placeholder="Write your Email"
            {...form.getInputProps("email")}
          />

          <TextInput
            variant="filled"
            withAsterisk
            styles={{
              input: { background: "rgb(17 24 39)", color: "#ffffff" },
            }}
            label="Password"
            placeholder="Write your password"
            {...form.getInputProps("password")}
          />

          <Button type="submit" fullWidth>
            Submit
          </Button>
        </form>
        <div className="pt-4">
          Don't have account{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login