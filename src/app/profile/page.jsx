import React from "react";
import { auth } from "../../lib/auth/auth";
import { headers } from "next/headers";
import Image from "next/image";

import EditProfile from "../../components/profile/EditProfile";

import {
  Card,
  CardContent,
} from "../../components/ui/card";

import { Badge } from "../../components/ui/badge";

import {
  Mail,
  CheckCircle,
  Calendar,
  Clock,
} from "lucide-react";

import {
  MotionDiv,
  fadeInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "../../components/ui/MotionDiv";

export async function generateMetadata() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const name = session?.user?.name;

  return {
    title: name ? `${name} — কোরবানি হাট` : "My Profile",
  };
}

const MyProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { image, name, email, emailVerified, createdAt, updatedAt } = user;

  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((i) => i[0].toUpperCase())
    .join("");

  return (
    <section className="min-h-screen bg-muted/30 pt-10 pb-12 px-4">
      <MotionDiv
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-5"
      >

        {/* PROFILE CARD */}
        <MotionDiv variants={fadeInUpVariants}>
          <Card className="overflow-hidden border border-primary/10 shadow-sm pt-0">

            {/* Banner */}
            <div className="h-32 bg-linear-to-r from-primary/90 via-primary to-primary/70" />

            <CardContent className="px-8 pb-7">

              {/* Avatar */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12">

                <MotionDiv
                  variants={staggerItemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="relative w-24 h-24"
                >

                  {image ? (
                    <Image
                      src={image}
                      alt={name}
                      width={96}
                      height={96}
                      className="rounded-2xl border-4 border-background shadow-md object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-2xl border-4 border-background shadow-md bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                      {initials}
                    </div>
                  )}

                  {emailVerified && (
                    <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-1 shadow border">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </MotionDiv>

                {/* Desktop Edit */}
                <MotionDiv
                  variants={staggerItemVariants}
                  className="hidden md:block"
                >
                  <EditProfile user={user} />
                </MotionDiv>
              </div>

              {/* NAME */}
              <MotionDiv
                variants={staggerItemVariants}
                className="mt-4 space-y-1"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl font-bold text-foreground">
                    {name}
                  </h1>

                  {emailVerified && (
                    <Badge className="bg-primary/10 text-primary border border-primary/20">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  {email}
                </p>
              </MotionDiv>

              {/* Mobile Edit */}
              <MotionDiv
                variants={staggerItemVariants}
                className="md:hidden my-4"
              >
                <EditProfile user={user} />
              </MotionDiv>

            </CardContent>
          </Card>
        </MotionDiv>

        {/* INFO GRID */}
        <MotionDiv
          variants={staggerContainerVariants}
          className="grid sm:grid-cols-2 gap-4"
        >

          {/* Account */}
          <MotionDiv
            variants={staggerItemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="border border-primary/10 h-full">
              <CardContent className="p-6 space-y-4">

                <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  Account Info
                </h2>

                <div className="space-y-4">

                  <div className="flex gap-3">
                    <Mail className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Email
                      </p>
                      <p className="font-semibold text-sm">
                        {email}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Status
                      </p>

                      <p
                        className={`font-semibold text-sm ${
                          emailVerified
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {emailVerified
                          ? "Email Verified"
                          : "Not Verified"}
                      </p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </MotionDiv>

          {/* Activity */}
          <MotionDiv
            variants={staggerItemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="border border-primary/10 h-full">
              <CardContent className="p-6 space-y-4">

                <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  Activity
                </h2>

                <div className="space-y-4">

                  <div className="flex gap-3">
                    <Calendar className="w-4 h-4 text-primary mt-1" />

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Member Since
                      </p>

                      <p className="font-semibold text-sm">
                        {new Date(createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-4 h-4 text-primary mt-1" />

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Last Updated
                      </p>

                      <p className="font-semibold text-sm">
                        {new Date(updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </MotionDiv>

        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default MyProfile;