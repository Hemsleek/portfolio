export const scrollToElement = (elId: string) => {
  document.getElementById(elId)?.scrollIntoView({ behavior: "smooth" });
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
