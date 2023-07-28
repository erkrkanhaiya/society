import { useWindowDimensions } from 'react-native'

export const Orientation = {
  Portrait: 'Portrait',
  Landscape: 'Landscape',
}

const computeOrientation = windowDimensions => {
  return windowDimensions.height >= windowDimensions.width
    ? Orientation.Portrait
    : Orientation.Landscape
}

export const useOrientation = () => {
  const windowDimensions = useWindowDimensions()
  return computeOrientation(windowDimensions)
}
