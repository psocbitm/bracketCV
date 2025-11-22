import { Font } from '@react-pdf/renderer'

export const registerFonts = () => {
  Font.register({
    family: 'Lato',
    fonts: [
      { src: '/fonts/Lato/static/Lato-Thin.ttf', fontWeight: 100 },
      {
        src: '/fonts/Lato/static/Lato-ThinItalic.ttf',
        fontWeight: 100,
        fontStyle: 'italic',
      },

      { src: '/fonts/Lato/static/Lato-Light.ttf', fontWeight: 300 },
      {
        src: '/fonts/Lato/static/Lato-LightItalic.ttf',
        fontWeight: 300,
        fontStyle: 'italic',
      },

      { src: '/fonts/Lato/static/Lato-Regular.ttf', fontWeight: 400 },
      {
        src: '/fonts/Lato/static/Lato-Italic.ttf',
        fontWeight: 400,
        fontStyle: 'italic',
      },

      { src: '/fonts/Lato/static/Lato-Bold.ttf', fontWeight: 700 },
      {
        src: '/fonts/Lato/static/Lato-BoldItalic.ttf',
        fontWeight: 700,
        fontStyle: 'italic',
      },

      { src: '/fonts/Lato/static/Lato-Black.ttf', fontWeight: 900 },
      {
        src: '/fonts/Lato/static/Lato-BlackItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
    ],
  })

  Font.register({
    family: 'Montserrat',
    fonts: [
      { src: '/fonts/Montserrat/static/Montserrat-Thin.ttf', fontWeight: 100 },
      {
        src: '/fonts/Montserrat/static/Montserrat-ThinItalic.ttf',
        fontWeight: 100,
        fontStyle: 'italic',
      },

      {
        src: '/fonts/Montserrat/static/Montserrat-ExtraLight.ttf',
        fontWeight: 200,
      },
      {
        src: '/fonts/Montserrat/static/Montserrat-ExtraLightItalic.ttf',
        fontWeight: 200,
        fontStyle: 'italic',
      },

      { src: '/fonts/Montserrat/static/Montserrat-Light.ttf', fontWeight: 300 },
      {
        src: '/fonts/Montserrat/static/Montserrat-LightItalic.ttf',
        fontWeight: 300,
        fontStyle: 'italic',
      },

      {
        src: '/fonts/Montserrat/static/Montserrat-Regular.ttf',
        fontWeight: 400,
      },
      {
        src: '/fonts/Montserrat/static/Montserrat-Italic.ttf',
        fontWeight: 400,
        fontStyle: 'italic',
      },

      {
        src: '/fonts/Montserrat/static/Montserrat-Medium.ttf',
        fontWeight: 600,
      },
      {
        src: '/fonts/Montserrat/static/Montserrat-MediumItalic.ttf',
        fontWeight: 600,
        fontStyle: 'italic',
      },

      {
        src: '/fonts/Montserrat/static/Montserrat-SemiBold.ttf',
        fontWeight: 600,
      },
      {
        src: '/fonts/Montserrat/static/Montserrat-SemiBoldItalic.ttf',
        fontWeight: 600,
        fontStyle: 'italic',
      },

      { src: '/fonts/Montserrat/static/Montserrat-Bold.ttf', fontWeight: 700 },
      {
        src: '/fonts/Montserrat/static/Montserrat-BoldItalic.ttf',
        fontWeight: 700,
        fontStyle: 'italic',
      },

      { src: '/fonts/Montserrat/static/Montserrat-Black.ttf', fontWeight: 900 },
      {
        src: '/fonts/Montserrat/static/Montserrat-BlackItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
    ],
  })

  Font.register({
    family: 'OpenSans',
    fonts: [
      { src: '/fonts/OpenSans/static/OpenSans-Light.ttf', fontWeight: 300 },
      {
        src: '/fonts/OpenSans/static/OpenSans-LightItalic.ttf',
        fontWeight: 300,
        fontStyle: 'italic',
      },

      { src: '/fonts/OpenSans/static/OpenSans-Regular.ttf', fontWeight: 400 },
      {
        src: '/fonts/OpenSans/static/OpenSans-Italic.ttf',
        fontWeight: 400,
        fontStyle: 'italic',
      },

      { src: '/fonts/OpenSans/static/OpenSans-Medium.ttf', fontWeight: 600 },
      {
        src: '/fonts/OpenSans/static/OpenSans-MediumItalic.ttf',
        fontWeight: 600,
        fontStyle: 'italic',
      },

      { src: '/fonts/OpenSans/static/OpenSans-SemiBold.ttf', fontWeight: 600 },
      {
        src: '/fonts/OpenSans/static/OpenSans-SemiBoldItalic.ttf',
        fontWeight: 600,
        fontStyle: 'italic',
      },

      { src: '/fonts/OpenSans/static/OpenSans-Bold.ttf', fontWeight: 700 },
      {
        src: '/fonts/OpenSans/static/OpenSans-BoldItalic.ttf',
        fontWeight: 700,
        fontStyle: 'italic',
      },

      { src: '/fonts/OpenSans/static/OpenSans-ExtraBold.ttf', fontWeight: 800 },
      {
        src: '/fonts/OpenSans/static/OpenSans-ExtraBoldItalic.ttf',
        fontWeight: 800,
        fontStyle: 'italic',
      },
    ],
  })

  Font.register({
    family: 'Roboto',
    fonts: [
      { src: '/fonts/Roboto/static/Roboto-Thin.ttf', fontWeight: 100 },
      {
        src: '/fonts/Roboto/static/Roboto-ThinItalic.ttf',
        fontWeight: 100,
        fontStyle: 'italic',
      },

      { src: '/fonts/Roboto/static/Roboto-Light.ttf', fontWeight: 300 },
      {
        src: '/fonts/Roboto/static/Roboto-LightItalic.ttf',
        fontWeight: 300,
        fontStyle: 'italic',
      },

      { src: '/fonts/Roboto/static/Roboto-Regular.ttf', fontWeight: 400 },
      {
        src: '/fonts/Roboto/static/Roboto-Italic.ttf',
        fontWeight: 400,
        fontStyle: 'italic',
      },

      { src: '/fonts/Roboto/static/Roboto-Medium.ttf', fontWeight: 600 },
      {
        src: '/fonts/Roboto/static/Roboto-MediumItalic.ttf',
        fontWeight: 600,
        fontStyle: 'italic',
      },

      { src: '/fonts/Roboto/static/Roboto-Bold.ttf', fontWeight: 700 },
      {
        src: '/fonts/Roboto/static/Roboto-BoldItalic.ttf',
        fontWeight: 700,
        fontStyle: 'italic',
      },

      { src: '/fonts/Roboto/static/Roboto-Black.ttf', fontWeight: 900 },
      {
        src: '/fonts/Roboto/static/Roboto-BlackItalic.ttf',
        fontWeight: 900,
        fontStyle: 'italic',
      },
    ],
  })

  Font.registerHyphenationCallback((word) => [word])
}
