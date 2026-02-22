export const colors: Colors = {
  neutralColor: "#292929",
  accentColor: "#736485",
  textColor: "#2b2b2b",
  secondText: "#3F3F3F",
  boxShadow: "0 3px 7px 0 rgba(0, 0, 0, 0.25)",
  background: "#fafafa",
  foreground: "#ffffff",
  elementBg: "#fafafa",
  iconColor: "#f0f0f0",
  iconBgColorHover: "#645477",
  iconBg: "#736485",
  white: "#fafafa",
};
const darkColors: Colors = {
  neutralColor: "#292929",
  accentColor: "#9b79c5",
  textColor: "#ffffe2",
  secondText: "#bebebefa",
  boxShadow:
    "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);",
  background: "#212121",
  foreground: "#181818",
  elementBg: "#272a2d",
  iconColor: "#272a2d",
  iconBgColorHover: "#d6d6d6",
  iconBg: "#f0f0f0",
  white: "#fafafa",
};
export const themedColors = {
  light: colors,
  dark: darkColors,
};

export interface Colors {
  neutralColor: string;
  accentColor: string;
  textColor: string;
  secondText: string;
  boxShadow: string;
  background: string;
  elementBg: string;
  iconColor: string;
  iconBgColorHover: string;
  iconBg: string;
  foreground: string;
  white: string;
}
