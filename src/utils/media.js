const sizes = {
    bigDesktop: 1800,
    desktop: 1200,
    tabletLandscape: 900,
    tabletPortrait: 600,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `

    return acc
}, {});