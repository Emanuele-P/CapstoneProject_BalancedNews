const getMaxBias = (leftPercentage, centerPercentage, rightPercentage) => {
  const percentages = [
    { type: 'Left', value: parseFloat(leftPercentage) },
    { type: 'Center', value: parseFloat(centerPercentage) },
    { type: 'Right', value: parseFloat(rightPercentage) },
  ]

  percentages.sort((a, b) => b.value - a.value)

  return percentages[0]
}
