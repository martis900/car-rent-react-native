import React, { useState, useEffect } from 'react'
import { Platform, View, Text, Button, TouchableOpacity, FlatList, ScrollView, Alert, Dimensions, Image, SafeAreaView } from 'react-native'
import Icon from "react-native-vector-icons/Feather"
import styled from 'styled-components'
import Rating from './../components/Rating'
import HotDealsList from './../data/HotDeals.json';
import { SliderBox } from 'react-native-image-slider-box';
import ImageScale from 'react-native-scalable-image';


const SearchBox = styled.View`
    width: 90%;
    background-color: white;
    align-self: center;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    margin-top: 20px;
    flex-direction: row;
    elevation: 12;
    box-shadow: 0 14px 22px rgba(0,0,0,0.33);
`;

const Shadow = styled.View`
    elevation: 12;
    box-shadow: 0 14px 5px rgba(0,0,0,0.12);
`;

const screenHeight = Math.round(Dimensions.get('window').height);
const isX = Platform.OS === "ios" && (Dimensions.get('window').height > 800 || Dimensions.get('window').height > 800) ? true : false;

const HotDeals = ({ navigation }) => {
    return (
        <FlatList
            horizontal={true}
            data={HotDealsList.HotDeals}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <View kye={item.id} style={{ paddingLeft: 15, flex: 10, overflow: 'hidden' }}>
                    <Shadow style={{ display: 'flex', paddingTop: 10, height: 225, width: 180, borderRadius: 15, backgroundColor: 'rgb(21, 76,196)' }}>
                        <View style={{ display: 'flex' }}>
                            <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", paddingLeft: 10, paddingRight: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}> {item.name}</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>${item.price}</Text>
                            </View>

                            <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", paddingLeft: 10, paddingRight: 10 }}>
                                <Text style={{ fontSize: 20, color: 'white', }}> {item.model}</Text>
                                <Text style={{ fontSize: 20, color: 'white', }}> / day</Text>
                            </View>
                        </View>


                        <View style={{ display: 'flex', paddingLeft: 20, height: 137, flex: 3.81 }} >
                            <ImageScale style={{ position: "absolute", top: -35 }} height={220} source={{ uri: item.img[0] }} />
                        </View>


                        <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                            <TouchableOpacity style={{ height: 35, display: 'flex', flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: 'center' }} onPress={() => Alert.alert("Details")}>
                                <Text style={{ color: 'white' }}>Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 35, backgroundColor: 'rgb(48,50,55)', display: 'flex', flex: 1.2, flexDirection: 'row', alignItems: "center", justifyContent: 'center', borderTopStartRadius: 15, borderBottomEndRadius: 15 }}
                                onPress={() => navigation.navigate('Rent', { CarID: item.id })}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Text style={{ color: 'white' }}>Rent now</Text>
                                    <Icon style={{ paddingTop: 1 }} name="arrow-right" color="white" size={15} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Shadow>
                </View >
            )}>

        </ FlatList>
    )
}


const TopDealers = () => {
    return (
        <FlatList
            horizontal={true}
            data={HotDealsList.TopDealers}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <View kye={item.id} style={{ paddingLeft: 15, height: 150 }}>
                    <Shadow style={{ display: 'flex', height: 110, width: 120, borderRadius: 15, backgroundColor: 'white', flexDirection: 'column' }}>
                        <Image style={{ margin: 10, borderRadius: 5, display: 'flex', width: 30, height: 30, resizeMode: 'cover' }} source={{ uri: `${item.img}` }} />
                        <View style={{ paddingLeft: 5 }}>
                            <Rating rating={item.rating} />
                        </View>

                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', paddingLeft: 13 }}>{item.name}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'grey', paddingLeft: 13 }}>174 offers</Text>
                    </Shadow>
                </View >
            )} />
    )
}

const searchBoxComponent = () => {
    return (
        <SearchBox >
            <Text style={{ fontSize: 18, paddingLeft: 15 }}>Search</Text>
            <TouchableOpacity>
                <Icon style={{ paddingRight: 15 }} name="search" color="#000" size={20} />
            </TouchableOpacity>
        </SearchBox>
    )
}

const TitleComponent = (FirstWord, SecondWord) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 15, paddingRight: 15, justifyContent: 'space-between', marginTop: 15 }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'black' }}>{FirstWord} </Text>
                <Text style={{ fontWeight: "normal", fontSize: 24, color: 'black' }}>{SecondWord}</Text>
            </View>
            <TouchableOpacity>
                <Text style={{ paddingTop: 8, color: '#3498db' }}>view all</Text>
            </TouchableOpacity>
        </View>
    )
}


const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', backgroundColor: 'whites' }}>
                {searchBoxComponent()}
                <ScrollView>

                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: screenHeight - 90 - (Platform.OS === 'ios' ? 80 + 40 : 45 + 15) - (isX ? 30 : 0) }}>

                        <View style={{ display: 'flex', }}>
                            {TitleComponent("Hot", "deals")}
                            <View style={{ marginTop: 15 }} >
                                <HotDeals navigation={navigation} />
                            </View>
                        </View>

                        <View style={{ display: 'flex' }}>
                            {TitleComponent("Top", "dealers")}
                            <View style={{ marginTop: 15, paddingLeft: 0 }} >
                                <TopDealers />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
        </SafeAreaView>
    )
}

Home.navigationOptions = {
    header: (
        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', height: Platform.OS === 'ios' ? 80 : 45, alignItems: 'center', paddingTop: Platform.OS === 'ios' ? 40 : 15 }}>
            <Text style={{ fontSize: 36, fontWeight: "bold", paddingLeft: 15, color: 'black' }}>Browse cars</Text>
            <TouchableOpacity>
                <Icon style={{ paddingRight: 15 }} name="align-right" color="grey" size={20} />
            </TouchableOpacity>
        </View>
    )
}

export default Home;
