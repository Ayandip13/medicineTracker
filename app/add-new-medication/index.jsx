import { View, Text } from 'react-native'
import React from 'react'
import AddMedicationHeader from '../../components/AddMedicationHeader'
import AddMedicationForm from '../../components/AddMedicationForm'

const AddNewMedication = () => {
  return (
    <View>
        <AddMedicationHeader/>
        <AddMedicationForm/>
    </View>
  )
}

export default AddNewMedication