function tuktuk(a: number, b: number): number {
  return a + b
}

export const calculateFare = (
  distance: number,
  waitingTime: number
): number => {
  return 4 * distance + waitingTime
}

export const roundDistance = (distance: number): number => {
  return Math.ceil(distance * 2) / 2
}

export const roundWaitingTime = (waitingTime: number): number => {
  return 1
}

export default tuktuk
