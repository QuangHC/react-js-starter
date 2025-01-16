import { extendTheme } from '@chakra-ui/react';
import {baseTheme} from "@chakra-ui/icons";
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const Text = {
  variants: {
    'with-400': {
      fontSize: '14px',
      fontWeight: '400',
      color: 'white',
    },
  },
};
const Button = {
  sizes: {
    xl: {
      w: "125px",
      fontSize: "xl",
      p: "10px",
    },
  },
};
const breakpoints = {
  sm: "30em",   // 480px
  md: "60em",   // Custom width for md, e.g., 960px
  lg: "62em",   // 992px
  xl: "80em",   // 1280px
};
const sizes = {
  sm: defineStyle({
    maxW: '45ch',
    p: '4',
  }),
  md: defineStyle({
    maxW: 'container.sm',
    p: '6',
    fontSize: 'lg',
  }),
  lg: defineStyle({
    maxW: '200px',
    p: '8',
    fontSize: 'xl',
  }),
}
const containerTheme = defineStyleConfig({ sizes })
const radii = {
  ...baseTheme.radii,
  "4xl": "40px",
  "5xl": "50px",
};
const components = {
  Text,
  Button,
  Container: containerTheme
};

const theme = extendTheme({
  fonts: {},
  components,
  breakpoints,
  radii,
});

export default theme;
