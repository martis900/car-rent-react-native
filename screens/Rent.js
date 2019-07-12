import React from 'react'
import { Platform, View, Text, TouchableOpacity, Image, StatusBar } from 'react-native'

import Icon from "react-native-vector-icons/Ionicons"
import Rating from './../components/Rating'
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons"
import Icon2 from "react-native-vector-icons/SimpleLineIcons"
import Icon3 from "react-native-vector-icons/FontAwesome"
import HotDealsList from './../data/HotDeals.json'
import { SliderBox } from 'react-native-image-slider-box';


const CarFeatures = (id) => {
    return (
        HotDealsList.HotDeals[0].features.map((item, index) => {
            return (
                <View key={index} style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'transparent', borderColor: '#ffffff', borderWidth: 0.5, borderRadius: 15, height: 80, width: 100, margin: 5 }}>

                    {item.name === "engine" && <Icon1 style={{ marginTop: 10, alignSelf: 'center' }} name="engine" color="#ffffff" size={25} />}
                    {item.name === "seats" && <Icon1 style={{ marginTop: 10, alignSelf: 'center' }} name="seat-legroom-normal" color="#ffffff" size={25} />}
                    {item.name === "speed" && <Icon2 style={{ marginTop: 10, alignSelf: 'center' }} name="speedometer" color="#ffffff" size={25} />}
                    {item.name === "gears" && <Icon3 style={{ marginTop: 10, alignSelf: 'center' }} name="gears" color="#ffffff" size={25} />}
                    {item.name === "space" && <Icon3 style={{ marginTop: 10, alignSelf: 'center' }} name="suitcase" color="#ffffff" size={25} />}
                    <Text style={{ marginTop: 5, color: 'white', textAlign: "center", fontWeight: 'bold' }}>  {item.info}</Text>
                </View>
            )
        })
    )
}

const Rent = (props) => {

    const { navigation } = props;
    const CarID = navigation.getParam("CarID")

    const CarData = HotDealsList.HotDeals[CarID - 1];

    return (
        <View style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'rgb(21, 76,196)' }}>
            <StatusBar backgroundColor="rgb(21, 76,196)" barStyle="light-content" />
            <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 20, paddingLeft: 15 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 36, color: '#ffffff' }}>{CarData.name} </Text>
                <Text style={{ paddingTop: 7, fontWeight: "normal", fontSize: 28, color: '#ffffff' }}>{CarData.model}</Text>
            </View>

            <View style={{ display: 'flex', flex: 2, justifyContent: 'center' }}>
                <SliderBox style={{ height: 10, backgroundColor: 'red', alignSelf: 'center' }} images={CarData.img} dotColor="#ffffff" inactiveDotColor="rgb(128,160,226)" paginationBoxVerticalPadding={10} dotStyle={{ width: 8, height: 8 }} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', flex: 2, alignSelf: 'center' }}>
                < CarFeatures id={CarID} />
            </View>

            <View style={{ display: 'flex', borderWidth: 1, borderColor: '#ffffff', width: '90%', height: 60, backgroundColor: 'transparent', alignSelf: 'center', borderRadius: 15, marginTop: 5 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ margin: 10, borderRadius: 5, display: 'flex', width: 40, height: 40, resizeMode: 'cover' }} source={{ uri: `${HotDealsList.TopDealers[0].img}` }} />

                    <View style={{ display: 'flex', flexDirection: 'column', flex: 9 }}>
                        <Text style={{ color: '#ffffff' }}> Hertz </Text>
                        <Text style={{ color: '#ffffff' }}> Miami Beach - South Beach </Text>
                    </View>

                    <View style={{ display: 'flex', flex: 3, }}>
                        <Rating rating={3} colorSelected={'#ffffff'} color={"grey"} />
                    </View>
                </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", flex: 1 }}>
                <Text style={{ color: '#ffffff', fontSize: 18, alignSelf: 'center', marginLeft: 40 }}>${CarData.price} / day</Text>
                <TouchableOpacity>
                    <View style={{ height: 55, width: 150, borderRadius: 10, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginRight: 40 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: '#ffffff' }}>Rent Now   </Text>
                            <Icon style={{ scaleX: -1 }} name="ios-arrow-round-back" color="white" size={20} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        </View >
    )
}

// Rent.navigationOptions = {
//   tabBarVisible: false  // DOES NOT WORKK
// };

Rent.navigationOptions = ({ navigation }) => {
    return {
        header: (
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgb(21, 76,196)', justifyContent: 'space-between', height: Platform.OS === 'ios' ? 40 : 30, alignItems: 'center', paddingTop: Platform.OS === 'ios' ? 40 : 20 }}>
                <Icon style={{ paddingLeft: 25 }} name="ios-arrow-round-back" color='#ffffff' size={48} onPress={() => navigation.goBack()}></Icon>
                <Icon style={{ paddingRight: 25 }} name="ios-stats" color='#ffffff' size={24}></Icon>
            </View>
        )
    }
}

export default Rent
