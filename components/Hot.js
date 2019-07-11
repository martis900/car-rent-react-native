import React from 'react'
import { Platform, View, Text, Button, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import HotDealsList from './../data/HotDeals.json'
import styled from 'styled-components'
import Icon from "react-native-vector-icons/Feather"

const Shadow = styled.View`
    elevation: 12;
    box-shadow: 0 14px 22px rgba(0,0,0,0.33);
`;

const Hot = ({ navigation }) => {
    return (
        HotDealsList.HotDeals.map((item, index) => {
            return (
                <View kye={index} style={{ paddingLeft: 15, height: 230 }}>
                    <Shadow style={{ display: 'flex', paddingTop: 10, height: 225, width: 180, borderRadius: 15, backgroundColor: 'rgb(21, 76,196)' }}>
                        <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}> {item.name}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>${item.price}</Text>
                        </View>

                        <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: 20, color: 'white', }}> {item.model}</Text>
                            <Text style={{ fontSize: 20, color: 'white', }}> / day</Text>
                        </View>

                        <View style={{ display: 'flex', height: 141.2 - 5, justifyContent: 'center' }}>
                            <Image style={{ display: 'flex', height: 141 - 5, width: 'auto', resizeMode: 'cover' }} source={{ uri: `${item.img}` }} />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ height: 35, display: 'flex', flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: 'center' }} onPress={() => Alert.alert("Details")}>
                                <Text style={{ color: 'white' }}>Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 35, backgroundColor: 'rgb(48,50,55)', display: 'flex', flex: 1.2, flexDirection: 'row', alignItems: "center", justifyContent: 'center', borderTopStartRadius: 15, borderBottomEndRadius: 15 }}
                                onPress={() => navigation.navigate('Rent')}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Text style={{ color: 'white' }}>Rent now</Text>
                                    <Icon style={{ paddingTop: 1 }} name="arrow-right" color="white" size={15} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Shadow>
                </View >
            )
        })
    )
}

export default Hot
