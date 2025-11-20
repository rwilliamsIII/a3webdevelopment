const shadows = {
  light: [
    "0 0px 24px rgb(34 42 53 / 0.06)",
    "0 1px 1px rgb(0 0 0 / 0.02)",
    "0 0px 0px 1px rgb(34 42 53 / 0.08)",
    "0 0px 4px rgb(34 42 53 / 0.02)",
    "inset 0 1px 0px rgb(255 255 255 / 0.01)"
  ].join(','),

  dark: [
    "0 0px 24px rgb(34 42 53 / 0.06)",
    "0 1px 1px rgb(0 0 0 / 0.05)",
    "0 0px 0px 1px rgb(255 255 255 / 0.05)",
    "0 0px 4px rgb(34 42 53 / 0.08)",
    "0 16px 68px rgb(47 48 55 / 0.05)",
    "inset 0 1px 0px rgb(255 255 255 / 0.1)"
  ].join(',')
};

export const navStyles = {
  // blured bg
  header: "fixed left-0 right-0 z-50 flex justify-center select-none",

  container: {
    base: "duration-700 ease-in-out transform-gpu transition-[transform,width]",
    scrolled: "w-[85%] md:min-w-[auto] md:w-[75%] md:min-w-[700px] lg:w-[40%] lg:min-w-[800px]",
    default: "lg:min-w-[800px] w-[1300px] max-w-full"
  },

  nav: {
    base: "w-full z-50 rounded-full transform-gpu transition-[transform,backdrop-filter,box-shadow] duration-500",
    scrolled: [
      "bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(20,20,20,0.85)]",
      "backdrop-blur-[10px]",
      "translate-y-5",
    ].join(" "),
    default: "bg-transparent translate-y-2 shadow-none",
    shadows
  },

  content: {
    base: "flex items-center justify-between mx-auto max-w-[1370px] transform-gpu transition-[padding] duration-500 ease-in",
    scrolled: "px-6 py-2.5",
    default: "px-6 py-2.5"
  },

  link: "cursor-pointer transition-opacity",
  button: "hover:opacity-70 transition-opacity"
};