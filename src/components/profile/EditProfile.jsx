"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { authClient } from "../../lib/auth/auth-client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Alert, AlertDescription } from "../ui/alert";

import { Edit, InfoIcon } from "lucide-react";

const EditProfile = ({ user }) => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      image: user?.image || "",
    },
  });

  const onSubmit = async (data) => {
    setServerError("");

    const { error } = await authClient.updateUser(
      {
        name: data.name,
        image: data.image,
      },
      {
        onSuccess: () => {
          toast.success("Profile Updated Successfully!");
          router.refresh();
        },
        onError: (ctx) => {
          setServerError(
            ctx?.error?.message || "Something went wrong. Please try again.",
          );
        },
      },
    );

    if (error) {
      setServerError(error.message);
    }
  };

  return (
    <Dialog>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-white flex gap-2">
          <Edit />
          Edit Profile
        </Button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="sm:max-w-lg rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-primary flex items-center gap-2">
            <Edit />
            প্রোফাইল এডিট করুন
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-3">
          {/* Error */}
          {serverError && (
            <Alert variant="destructive">
              <InfoIcon />
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          )}

          {/* Name */}
          <div className="space-y-2">
            <Label>নাম</Label>
            <Input
              placeholder="আপনার নাম লিখুন"
              {...register("name", {
                required: "নাম দিতে হবে",
              })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Image */}
          <div className="space-y-2">
            <Label>ছবি URL</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              {...register("image")}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <DialogTrigger asChild>
              <Button variant="outline">বন্ধ করুন</Button>
            </DialogTrigger>
            <DialogTrigger asChild>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </DialogTrigger>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
