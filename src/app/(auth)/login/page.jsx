"use client";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "../../../components/ui/field";
import { Input } from "../../../components/ui/input";
import {
  fadeInUpVariants,
  MotionDiv,
} from "./../../../components/ui/MotionDiv";
import { useState } from "react";
import {
  AlertCircleIcon,
  Eye,
  EyeClosed,
  Loader2,
  Lock,
  Mail,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Alert, AlertTitle } from "../../../components/ui/alert";
import { authClient, signInGoogle } from "../../../lib/auth/auth-client";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";

const Google = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="w-6 h-6"
  >
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.3 5.4-6.2 6.9l6.2 5.2C39.1 36.5 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
    />
  </svg>
);

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await authClient.signIn.email(
        {
          email: data.email,
          password: data.password,
          callbackURL: "/",
        },
        {
          onSuccess: () => {
            reset();
            router.push("/");
          },
          onError: (ctx) => {
            setError(ctx.error?.message || "লগইন ব্যর্থ হয়েছে");
          },
        },
      );
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <section className="flex items-center justify-center w-full py-10">
      <MotionDiv
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full border p-8 rounded-2xl shadow-sm bg-white"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldSet className="w-full gap-4">
            <FieldGroup>
              <FieldTitle className="flex-col items-center w-full gap-1">
                <h2 className="text-primary text-3xl font-black mb-2">
                  স্বাগতম
                </h2>
                <p className="text-muted-foreground text-sm">
                  আপনার অ্যাকাউন্টে প্রবেশ করুন
                </p>
              </FieldTitle>

              {error && (
                <Alert
                  variant="destructive"
                  className="border-red-200 bg-red-50 text-red-700 rounded-xl py-2"
                >
                  <AlertCircleIcon className="w-4 h-4" />
                  <AlertTitle className="text-sm">{error}</AlertTitle>
                </Alert>
              )}

              {/* Email */}
              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  ইমেইল
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="info@gmail.com"
                  {...register("email", {
                    required: "ইমেইল দিতে হবে",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "সঠিক ইমেইল ঠিকানা দিন",
                    },
                  })}
                />
                {errors.email && (
                  <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                    <AlertCircleIcon className="w-3 h-3" />{" "}
                    {errors.email.message}
                  </p>
                )}
              </Field>

              {/* Password */}
              <div className="relative w-full space-y-1.5">
                <div className="flex items-center justify-between">
                  <FieldLabel
                    htmlFor="password"
                    className="flex items-center gap-1.5"
                  >
                    <Lock className="w-3.5 h-3.5 text-primary" />
                    পাসওয়ার্ড
                  </FieldLabel>
                </div>
                <Input
                  id="password"
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "পাসওয়ার্ড দিতে হবে",
                    minLength: {
                      value: 8,
                      message: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে",
                    },
                    pattern: {
                      value: /^(?=.*[a-zA-Z])(?=.*\d).+$/,
                      message: "পাসওয়ার্ডে অক্ষর ও সংখ্যা উভয়ই থাকতে হবে",
                    },
                  })}
                />
                {errors.password && (
                  <p className="flex items-center gap-1 text-xs text-red-500">
                    <AlertCircleIcon className="w-3 h-3" />{" "}
                    {errors.password.message}
                  </p>
                )}
                <button
                  className="absolute top-8 right-3 opacity-40 hover:opacity-70 transition-opacity"
                  type="button"
                  onClick={() => setShowPass((p) => !p)}
                >
                  {showPass ? <EyeClosed size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </FieldGroup>

            {/* Submit */}
            <Button className="w-full font-bold" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                "লগইন করুন"
              )}
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex-1 border-t" />
              <span>অথবা</span>
              <div className="flex-1 border-t" />
            </div>

            {/* Google */}
            <Button
              onClick={async () => await signInGoogle()}
              type="button"
              variant="secondary"
              className="w-full gap-2"
            >
              <Google />
              Google দিয়ে লগইন
            </Button>

            {/* Register link */}
            <p className="text-center text-sm">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/register"
                className="text-primary font-semibold hover:underline"
              >
                রেজিস্ট্রেশন করুন
              </Link>
            </p>
          </FieldSet>
        </form>
      </MotionDiv>
    </section>
  );
};

export default Login;
