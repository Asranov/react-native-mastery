import React from 'react'
import { PixelRatio, Text } from 'react-native'
import { styleFont } from './TestFonts.styles';

function TestFonts() {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size: number) => size / fontScale

  return (
    <>
      <Text style={{ fontSize: getFontSize(20) }}>Testing fontsize</Text>
      <Text style={styleFont.testFontSize}>Testing fontsize</Text>
    </>
  )
}

export default TestFonts