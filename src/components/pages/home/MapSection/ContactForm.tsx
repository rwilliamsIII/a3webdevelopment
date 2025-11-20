"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import ReCAPTCHA from "react-google-recaptcha"
import { Button } from "@/components/ui/button"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const [captchaError, setCaptchaError] = useState("")
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [formData, setFormData] = useState<FormValues | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onInitialSubmit = (data: FormValues) => {
    setFormData(data)
    setShowCaptcha(true)
  }

  const onCaptchaSubmit = async () => {
    if (!captchaValue) {
      setCaptchaError("Please complete the captcha verification")
      return
    }

    if (!formData) return

    setCaptchaError("")
    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
      reset()
      setCaptchaValue(null)
      setShowCaptcha(false)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
    if (value) {
      setCaptchaError("")
    }
  }

  return (
    <div
      className="backdrop-blur-xs rounded-lg shadow-xl p-3 sm:p-4 md:p-6 w-full max-w-md mx-auto md:mx-0 relative overflow-hidden"
      style={{
        backgroundColor: "var(--form-bg, rgba(var(--background), 0.5))",
        borderColor: "var(--accent-4)",
        borderWidth: "1px",
        borderStyle: "solid",
      }}
    >
      <h3
        className="text-lg sm:text-xl font-light tracking-wide mb-3 sm:mb-4 uppercase"
        style={{ color: "var(--foreground)" }}
      >
        <span className="font-bold">Get</span> in Touch
      </h3>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-6"
        >
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-3 backdrop-blur-md"
            style={{
              backgroundColor: "var(--accent-5, rgba(var(--foreground), 0.05))",
              borderColor: "var(--accent-4, rgba(var(--foreground), 0.1))",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "var(--foreground)" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h4
            className="text-xl font-light mb-2 tracking-wide"
            style={{ color: "var(--foreground)" }}
          >
            Message Sent
          </h4>
          <p
            className="mb-4 text-sm max-w-sm mx-auto"
            style={{ color: "var(--accent-3)" }}
          >
            {"Thank you for reaching out. We'll get back to you soon."}
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 rounded-sm transition-all duration-300 font-medium tracking-wide text-sm"
            style={{
              backgroundColor: "var(--accent-1)",
              color: "var(--background)",
            }}
          >
            Send Another Message
          </motion.button>
        </motion.div>
      ) : showCaptcha ? (
        <div className="flex flex-col gap-4">
          <div className="pt-1">
            <p className="text-neutral-900 dark:text-zinc-400 mb-3 text-sm">
              {"Please verify you're not a robot:"}
            </p>
            <ReCAPTCHA
              size="normal"
              sitekey={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              }
              onChange={handleCaptchaChange}
              theme="dark"
            />
            {captchaError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 text-xs text-neutral-900 dark:text-zinc-400 italic"
              >
                {captchaError}
              </motion.p>
            )}
          </div>

          <div className="pt-1 flex gap-3">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowCaptcha(false)}
              className="w-1/2 px-4 py-2 text-sm font-medium tracking-wide rounded-md transition-all duration-300 border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCaptchaSubmit}
              disabled={isSubmitting || !captchaValue}
              className={`w-1/2 px-4 py-2 text-sm font-medium tracking-wide rounded-md transition-all duration-300 ${
                isSubmitting || !captchaValue
                  ? "bg-zinc-800 text-neutral-900 dark:text-zinc-400 cursor-not-allowed"
                  : "bg-[var(--white)] text-black hover:bg-zinc-100"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-3 w-3 text-neutral-900 dark:text-zinc-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  SENDING
                </span>
              ) : (
                "CONFIRM & SEND"
              )}
            </motion.button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onInitialSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:gap-3 gap-4 md:gap-y-0">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider text-neutral-900 dark:text-neutral-900 dark:text-zinc-400 mb-1 font-medium"
              >
                Full Name
              </label>
              <motion.div whileTap={{ scale: 0.995 }} className="relative">
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className={`w-full px-3 py-2 text-sm border rounded-md bg-zinc-300 dark:bg-zinc-800 text-neutral-900 dark:text-[var(--white)] placeholder:text-neutral-500 dark:placeholder:text-zinc-500 focus:outline-hidden focus:ring-1 focus:ring-neutral-600 dark:focus:ring-[var(--white)] transition-all duration-200 ${
                    errors.name ? "border-neutral-400 dark:border-zinc-500" : "border-neutral-300 dark:border-zinc-700"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-neutral-900 dark:text-neutral-900  italic"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </motion.div>
            </div>

            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-neutral-900 dark:text-zinc-400 mb-1 font-medium"
              >
                Email Address
              </label>
              <motion.div whileTap={{ scale: 0.995 }} className="relative">
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`w-full px-3 py-2 text-sm border rounded-md bg-zinc-300 dark:bg-zinc-800 text-neutral-900 dark:text-[var(--white)] placeholder:text-neutral-500 dark:placeholder:text-zinc-500 focus:outline-hidden focus:ring-1 focus:ring-neutral-600 dark:focus:ring-[var(--white)] transition-all duration-200 ${
                    errors.email ? "border-neutral-400 dark:border-zinc-500" : "border-neutral-300 dark:border-zinc-700"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-neutral-900 dark:text-zinc-400 italic"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </motion.div>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider text-neutral-900 dark:text-zinc-400 mb-1 font-medium"
            >
              Your Message
            </label>
            <motion.div whileTap={{ scale: 0.995 }} className="relative">
              <textarea
                id="message"
                {...register("message")}
                rows={3}
                className={`w-full px-3 py-2 text-sm border rounded-md bg-zinc-300 dark:bg-zinc-800 text-neutral-900 dark:text-[var(--white)] placeholder:text-neutral-500 dark:placeholder:text-zinc-500 focus:outline-hidden focus:ring-1 focus:ring-neutral-600 dark:focus:ring-[var(--white)] transition-all duration-200 ${
                  errors.message ? "border-neutral-400 dark:border-zinc-500" : "border-neutral-300 dark:border-zinc-700"
                }`}
                placeholder="How can we help you?"
              ></textarea>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-xs text-neutral-900 dark:text-zinc-400 italic"
                >
                  {errors.message.message}
                </motion.p>
              )}
            </motion.div>
          </div>

          <div className="pt-1">
            <Button
              variant={"default"}
              type="submit"
              className="w-full"
              style={{
                backgroundColor: "var(--accent-1)",
                color: "var(--background)",
              }}
            >
              CONTINUE
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
