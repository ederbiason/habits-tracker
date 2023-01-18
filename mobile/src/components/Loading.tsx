import { View, ActivityIndicator } from 'react-native'
import React from 'react'

export function Loading() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#09090A'}}>
        <ActivityIndicator color="#7C3AED" />
    </View>
  )
}