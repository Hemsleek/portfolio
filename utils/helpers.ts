export const scrollToElement = (elId: string) => {
  document.getElementById(elId)?.scrollIntoView({ behavior: "smooth" });
};
