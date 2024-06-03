"use client";

import React from "react";
import {Button, Input, Link, Divider, User, Checkbox} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import PrimaryButton from "@/lib/components/button/PrimaryButton";
import WalletIcon from "@/public/icon/wallet.svg";

export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="pt-[100px] relative flex h-screen w-screen">
      {/* Right side */}
      <div
        className="relative hidden w-1/2 p-2 flex-col-reverse lg:flex"
      >
        <div className="w-full h-full p-2 bg-white/5 rounded-md">
          <div
            className="w-full h-full rounded-md"
            style={{
              backgroundImage:
                "url('/login.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          > </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
          <div className="w-full text-left">
            <p className="pb-2 text-xl font-medium">Sign In</p>
            <p className="text-small text-default-500">Log in to your account to continue</p>
          </div>

          <form className="flex w-full flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <Input
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="underlined"
            />
            <Input
              endContent={
                <button type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Password"
              name="password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="underlined"
            />
            <div className="flex items-center justify-between px-1 py-2">
              <Checkbox name="remember" size="sm">
                Remember for 15 days
              </Checkbox>
              <Link className="text-default-500" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
            <PrimaryButton className="w-full" text="Login" />
          </form>

          <div className="flex w-full items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="shrink-0 text-tiny text-default-500">OR</p>
            <Divider className="flex-1" />
          </div>

          <div className="flex w-full flex-col gap-2">
            <Button
              startContent={<Icon icon="flat-color-icons:google" width={24} />}
              variant="bordered"
            >
              Continue with Google
            </Button>
            <Button
              startContent={<WalletIcon className="text-default-500" width={24} />}
              variant="bordered"
            >
              Sign Up with Wallet
            </Button>
          </div>

          <p className="text-center text-small">
            Need to create an account?&nbsp;
            <Link href="/signup" size="sm">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}