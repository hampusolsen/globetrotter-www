/**
 * Media Queries
 */

const size = {
  phone: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px"
};

const formatMediaQuery = (size: string) => `@media (max-width: ${size})`;

export const media = {
  phone: formatMediaQuery(size.phone),
  tablet: formatMediaQuery(size.tablet),
  laptop: formatMediaQuery(size.laptop),
  desktop: formatMediaQuery(size.desktop)
};

/**
 * Calculates view height in pixels for mobile devices to used with styled-components, e.g.:
 *
 * height: ${calcViewHeight(20)}px;
 *
 * @param percent Desired percent as positivt integer
 * @returns Amount of pixels based on the provided view height percent;
 */
export const calcViewHeight = (percent: number): number =>
  window.innerHeight * 0.01 * percent;

/**
 *  Colors
 */

export const color = {
  lightgreen: "#318253",
  green: "#1E4F32",
  darkgreen: "#043619",
  lightyellow: "#F9E19B",
  yellow: "#DEB42A",
  darkyellow: "#91751C",
  lightblue: "#D1E4F1",
  blue: "#3E5E96",
  darkblue: "#13222D",
  lightred: "#DE817A",
  red: "#DE4337",
  darkred: "#922B24",
  smokewhite: "#F7F7F7",
  lightgrey: "#F2F2F2",
  grey: "#333333",
  darkgrey: "#222222",
  black: "#111111"
};

/**
 *  Fonts
 */

export const font = {
  button: {
    size: {
      phone: 0.76
    }
  },
  bread: {
    family: "Roboto",
    size: {
      phone: 0.85,
      tablet: 0.92,
      laptop: 1,
      desktop: 1.2
    }
  },
  heading: {
    family: "Nunito",
    size: {
      phone: 0.85,
      tablet: 0.92,
      laptop: 1,
      desktop: 1.2
    }
  },
  display: {
    family: "Yeseva",
    size: {
      phone: 0.85,
      tablet: 0.92,
      laptop: 1,
      desktop: 1.2
    }
  }
};
