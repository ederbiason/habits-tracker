import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'

export function HabitsEmpty() {
  const { navigate } = useNavigation()

  return (
    <Text className='text-zinc-400 text-base text-center'>
        Você ainda não está monitorando nenhum hábito. {' '}

        <Text 
            className='text-red-400 text-base underline underline-offset-2 active:text-red-500'
            onPress={() => navigate('new')}
        >
            Comece cadastrando um.
        </Text>
    </Text>
  )
}