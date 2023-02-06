import clsx from "clsx";
import dayjs from "dayjs";
import { TouchableOpacity, Dimensions, TouchableOpacityProps } from "react-native";
import { generateProgressPercentage } from "../utils/generate-progress-percentage";

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

interface Props extends TouchableOpacityProps {
  amountOfHabits?: number
  amountCompleted?: number
  date: Date
}

export function HabitDay({ amountOfHabits = 0, amountCompleted = 0, date, ...rest }: Props) {
  const completedPercentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0
  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (
    <TouchableOpacity
      className={clsx("rounded-lg border-2 m-1", {
        ['bg-zinc-900 border-zinc-800']: completedPercentage === 0,
        ['bg-red-900 border-red-700']: completedPercentage > 0 && completedPercentage < 20,
        ['bg-red-800 border-red-600']: completedPercentage >= 20 && completedPercentage < 40,
        ['bg-red-700 border-red-500']: completedPercentage >= 50 && completedPercentage < 70,
        ['bg-red-600 border-red-500']: completedPercentage >= 60 && completedPercentage < 80,
        ['bg-red-500 border-red-400']: completedPercentage >= 80,
        ['border-white border-4']: isCurrentDay
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      {...rest}
    />
  )
}
