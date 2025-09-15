"use client";
import React, { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormRow from "../FormRow";
import TextElement from "@/components/shared/Inputs/TextElement";
import NumberElement from "@/components/shared/Inputs/NumberElement";
import TextAreaElement from "@/components/shared/Inputs/TextAreaElement";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiGooglegemini } from "react-icons/si";
import { SectionOnePropsTyps } from "@/types/common";
import ai from "@/assets/shared/ai_small_24.svg";
import Image from "next/image";
import { toast } from "sonner";
import ReCaptcha from "@/utils/ReCaptcha";

type FormData = {
  fullName: string;
  email: string;
  company: string;
  contact: number;
  comments: string;
};

interface RecaptchaRefType {
  resetCaptcha: () => void;
}

const BecomeSponsorForm = ({
  small_title,
  heading,
  isOpppotunity = false,
}: SectionOnePropsTyps) => {
  const recaptchaRef = useRef<RecaptchaRefType>(null);
  const [token, setToken] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>();

  const handleToken = useCallback((recaptchaToken: string | null) => {
    if (recaptchaToken) {
      setToken(recaptchaToken);
    } else {
      setToken("");
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log(data, "This is the form data");
      console.log("reCAPTCHA Token:", token);

      // Show a success toast notification
      toast.success("Form submitted successfully!");

      // Reset the form and reCAPTCHA widget
      reset();
      if (recaptchaRef.current) {
        recaptchaRef.current.resetCaptcha();
      }
      setToken("");
    } catch (error) {
      // Handle any submission errors
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" pt-5 md:pt-8 lg:pt-12 xl:pt-16 pb-10 md:pb-16 lg:pb-20 section-wrapper"
    >
      <div
        className={`${
          isOpppotunity ? "bg-tms-light-blue" : "bg-tms-blue"
        } py-8 md:py-10 lg:py-12 xl:py-16 px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-[72px]  rounded-2xl`}
      >
        {" "}
        <div>
          <p
            className={`text-base font-bold leading-6 ${
              isOpppotunity ? "text-black" : " text-white"
            } flex items-center gap-x-2.5`}
          >
            {isOpppotunity ? (
              <Image
                src={ai}
                alt="TMS AI"
                width={24}
                height={24}
                className="w-full h-auto object-cover max-w-[24px]"
              />
            ) : (
              <SiGooglegemini />
            )}

            {small_title}
          </p>
          <h3
            className={`main-heading-2 ${
              isOpppotunity ? "text-inherit" : "!text-white"
            } mt-3 md:mt-4 mb-5 md:mb-4`}
          >
            {heading}
          </h3>
        </div>
        <div className=" flex flex-col gap-y-2.5 md:gap-y-3 lg:gap-y-5">
          <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
            <TextElement
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Your Name"
              register={register}
              errors={errors}
              rules={{
                required: "Name is required.",
              }}
              isBlue={isOpppotunity}
            />

            <TextElement
              label="Email Address"
              name="email"
              type="email"
              placeholder="Your Email"
              register={register}
              errors={errors}
              rules={{
                required: "Email is required.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address.",
                },
              }}
              isBlue={isOpppotunity}
            />
          </FormRow>
          <FormRow className="md:flex-row flex-col gap-y-2.5 md:gap-y-2.5 md:gap-x-3 lg:gap-x-5">
            <div className="flex-1">
              <TextElement
                label="company"
                name="company"
                type="text"
                placeholder="Your Company"
                register={register}
                errors={errors}
                rules={{
                  required: "Company is required.",
                }}
                isBlue={isOpppotunity}
              />
            </div>

            <div className="flex-1">
              <NumberElement
                label="Contact Number"
                name="contact"
                type="number"
                setValue={setValue}
                placeholder="Contact Number"
                register={register}
                errors={errors}
                rules={{
                  required: "Number is required.",
                  min: {
                    value: 5,
                    message: "The minimum value should be 5.",
                  },
                  // max: {
                  //   value: 15,
                  //   message: "The maximum value should be 15.",
                  // },
                  pattern: {
                    value: /^\d+$/,
                    message: "Please enter a valid number.",
                  },
                }}
                isBlue={isOpppotunity}
              />
            </div>
          </FormRow>
          <TextAreaElement
            label="Comments"
            name="comments"
            placeholder="Additional Comments"
            register={register}
            errors={errors}
            rows={3}
            rules={{
              required: "comments is required.",
            }}
            isBlue={isOpppotunity}
          />

          <div className="mt-4 md:mt-6 flex justify-center ">
            <ReCaptcha
              siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              callback={handleToken}
              ref={recaptchaRef}
            />
          </div>
          <button
            type="submit"
            className={`${
              isOpppotunity
                ? "text-white bg-tms-purple"
                : "text-tms-purple bg-white"
            } text-sm md:text-base lg:text-lg leading-5 font-semibold flex gap-x-2   items-center group  rounded-sm py-3 md:py-4 px-5 md:px-6 w-fit  mx-auto mt-4- md:mt-6-`}
            disabled={!token}
          >
            Send Enquiry{" "}
            <MdOutlineKeyboardArrowRight className="text-xl text-tms-purple- group-hover:translate-x-1 group-hover:text-tms-blue- transition-all duration-300 ease-in-out" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default BecomeSponsorForm;
