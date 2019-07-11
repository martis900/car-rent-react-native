import React from 'react'
import { View, Text } from 'react-native'
import Icon from "react-native-vector-icons/Octicons"
const Rating = ({ rating, color, colorSelected }) => {
    const size = 15;
    const iconName = "primitive-dot";
    const selectedColor = colorSelected === undefined ? "rgb(21,96,196)" : colorSelected;
    const unselectedColor = color === undefined ? "#d7d9db" : color;
    switch (rating) {
        case 1:
            return (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: 60 }}>
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                </View>
            )
        case 2:
            return (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: 60 }}>
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                </View>
            )
        case 3:
            return (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: 60 }}>
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                </View>
            )
        case 4:
            return (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: 60 }}>
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                </View>
            )
        case 5:
            return (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: 60 }}>
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={selectedColor} size={size} />
                    <Icon name={iconName} color={selectedColor} size={size} />
                </View>
            )
        default:
            return (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: 60 }}>
                    <Icon name={iconName} color={unselectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                    <Icon name={iconName} color={unselectedColor} size={size} />
                </View>
            )
    }

}

export default Rating
