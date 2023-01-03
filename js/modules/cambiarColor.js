class Color {
  //cambias las variables css a claras
  static cambiarClaro() {
    document.documentElement.style.setProperty(
      "--VeryLightGray",
      "hsl(0, 0%, 98%)"
    );
    document.documentElement.style.setProperty(
      "--VeryLightGrayishBlue",
      "hsl(236, 33%, 92%)"
    );
    document.documentElement.style.setProperty(
      "--VeryLightGrayishBlue",
      "hsl(233, 11%, 84%)"
    );
    document.documentElement.style.setProperty(
      "--DarkGrayishBlue",
      "hsl(236, 9%, 61%)"
    );
    document.documentElement.style.setProperty(
      "--VeryDarkGrayishBlue",
      "hsl(235, 19%, 35%)"
    );
    document.documentElement.style.setProperty(
      "--boxshadow",
      "rgb(255, 255, 255)"
    );
  }
  //cambias las variables css a oscuro
  static cambiarOscuro() {
    document.documentElement.style.setProperty(
      "--VeryLightGray",
      "hsl(235, 21%, 11%)"
    );
    document.documentElement.style.setProperty(
      "--VeryLightGrayishBlue:",
      "hsl(235, 24%, 19%)"
    );
    document.documentElement.style.setProperty(
      "--VeryLightGrayishBlue",
      "hsl(234, 39%, 85%)"
    );
    document.documentElement.style.setProperty(
      "--DarkGrayishBlue",
      "hsl(234, 11%, 52%)"
    );
    document.documentElement.style.setProperty(
      "--VeryDarkGrayishBlue",
      "hsl(233, 14%, 35%)"
    );
    document.documentElement.style.setProperty(
      "--boxshadow",
      "hsl(236deg 7% 27%)"
    );
  }
}

export default Color;
