export const fusion = {
  border: {
    none:   'none',
    white:  '2px solid #fff',
    black:  '2px solid #000',
    light:  '2px solid #f2f2f2',
    dark:   '2px solid #3f4447',
    blue:   '2px solid #015085',
    red:    '2px solid #ef4747',
    orange: '2px solid #dc8264',
    green:  '2px solid #3e7859',
    purple: '2px solid #5a466e',
    yellow: '2px solid #f0bb20',
    brown:  '2px solid #996633',
    gray:   '2px solid #a6a6a6',
    clear:  '2px solid transparent'
  },
  colorIndex: {
    primary:'#015085',
    secondary: '#5a466e',
    white:  '#fff',
    black:  '#000',
    light:  '#f2f2f2',
    dark:   '#3f4447', /* 063, 068, 071 */
    blue:   '#015085', /* 001, 080, 133 */
    red:    '#ef4747', /* 239, 071, 071 */
    orange: '#dc8264', /* 220, 130, 100 */
    green:  '#3e7859', /* 062, 120, 089 */
    purple: '#5a466e', /* 090, 070, 110 */
    yellow: '#f0bb20', /* 194, 146, 000 */
    brown:  '#996633', /* 153, 102, 051 */
    gray:   '#a6a6a6', /* 166, 166, 166 */
    clear:  'transparent'
  },
  // using weights and style to determine font styling
  font: {
    thin: 'Open Sans',
    light: 'Open Sans',
    regular: 'Open Sans',
    semi: 'Open Sans',
    bold: 'Open Sans',
    extra: 'Open Sans'
  },
  fontFace: `
    @font-face {
      font-family: 'Open Sans';
      src: url('../fonts/OpenSans-Light-webfont.woff') format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('../fonts/OpenSans-LightItalic-webfont.woff') format('woff');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('../fonts/OpenSans-Regular-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('../fonts/OpenSans-Italic-webfont.woff') format('woff');
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('../fonts/OpenSans-Semibold-webfont.woff') format('woff');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('../fonts/OpenSans-SemiboldItalic-webfont.woff') format('woff');
      font-weight: 600;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('../fonts/OpenSans-Bold-webfont.woff') format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('../fonts/OpenSans-BoldItalic-webfont.woff') format('woff');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('../fonts/OpenSans-ExtraBold-webfont.woff') format('woff');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('../fonts/OpenSans-ExtraBoldItalic-webfont.woff') format('woff');
      font-weight: 900;
      font-style: italic;
    }
  `,
  textAlign: {
    between: 'justify',
    center: 'center',
    end: 'end',
    start: 'left'
  },
  textSize: {
    vs: '0.250rem',
    xs: '0.500rem',
    sm: '0.825rem',
    md: '1.000rem',
    lg: '1.500rem',
    xl: '1.875rem',
    vl: '2.500rem'
  },
  weight: {
    thin: 200,
    light: 300,
    norm: 400,
    semi: 600,
    bold: 700,
    extra: 900
  },
  accordion: {},
  accordionPanel: {},
  anchor: {},
  animate: {},
  app: {},
  box: {},
  button: {},
  card: {},
  heading: {},
  menu: {},
  paragraph: {},
  search: {},
  sidebar: {},
  title: {}
};
