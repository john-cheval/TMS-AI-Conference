export const accordionVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4 },
      opacity: { duration: 0.2, delay: 0.1 },
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4 },
      opacity: { duration: 0.2 },
    },
  },
};
