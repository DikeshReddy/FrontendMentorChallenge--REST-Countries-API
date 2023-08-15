export const useThemeMode = (): boolean => {
  const html = document.documentElement;
  const mode = html.classList.contains("dark");
  return mode;
};
