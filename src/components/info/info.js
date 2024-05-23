import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Pressable, RefreshControl, SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigation } from "@react-navigation{'\n'}ative";
import useApi from '../../apiCalls/ApiCalls';
import CustomAlert from '../alert/Alert'
import { State } from "react-native-gesture-handler";


const new_stock = (props) => {
    const { navigation, route } = props;
    const { loading, error, get, fetchData, post, remove } = useApi();
    const jwtToken = useSelector((state) => state.auth.token);
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    // const [allMyCartProducts, setAllMyCartProducts] = useState([]);
    const [modelTitle, setModelTitle] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [color_title, setColorTitle] = useState('');
    const [color_description, setColorDescription] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [refreshCount, setRefreshCount] = useState(0);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const initialLoad = useRef(true);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        setRefreshCount(prevCount => prevCount + 1);

    }, []);

    const showAlert = () => {
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Info',
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold',

            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')} style={{ marginLeft: 20 }}>
                    <FontAwesome name="arrow-left" size={20} color="black" style={{ fontWeight: '100' }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);


    const allMyCartProducts = [
        {
            name: 'ALUMINIUM',
            disc: "We have a stock of aluminum scraps for sale. We offer our customers a quality aluminum scrap which can meet their all expectations and requirements. We are constantly gathering aluminum scraps.\n\n" +
                "The collection and sorting of aluminium scrap, especially old scrap, is often a complex scheme involving millions of households, local and regional authorities, small and medium collectors and metal merchants. Waste and environmental policies can also have strong influences on the effectiveness of collection schemes. Other input materials are also required to transform valuable aluminium scrap into aluminium metal. Aluminium Scrap Buyers in Chennai Alloying elements are crucial to the wide range of functionalities and characteristics of aluminium products. In refining aluminium scrap, impurities that cannot be removed by mechanical separation will be eliminated through the addition of salt flux in the melting furnaces.\n\n" +
                "New scrap arises during the manufacturing of aluminium semi-fabricated and final products. Old scrap refers to those products collected after disposal by consumers. Old scrap is often more contaminated than new scrap. End-of-life vehicles, demolished buildings and constructions, discarded packaging material, home and office appliances, as well as machinery equipment are all potential sources of old aluminium scrap."
        },
        {
            name: 'COMPUTER',
            disc: "Computer scrap includes all wiring and hardware, desktop and laptop computers. This includes old monitors due to the expenses related in disposing of these safely.\n\n" +
                "If you have old computer hardware that no longer works, bring it in to us and we will recycle it at no cost to you.\n\n" +
                "Computers are made up from a large range of metals, each used for different components and features. Today many computer cases are made out of plastics in order to reduce weight and provide additional insulation between the electronics and the user. Due to this the internal hardware (hard drives, circuit boards & wiring) is the part we would be looking to separate out.\n\n" +
                "We are offering the best price for the computer on piece-wise also at weighing scale. All the computer scrap is being taken as scrap only. Computer Scrap Buyers in Chennai We are interested in scrapping bulk volumes of computer hardware, but not the plastic that comes with it. We will however happily separate these items if you are unable to."
        },
        {
            name: 'COPPER',
            disc: "We have a huge collection of scrap copper that we are willing to sell. Copper materials are used widely in electronic equipment like wiring and motors.it electrical conductor which can conduct heat and electricity very well. Copper Scrap Buyers in Chennai\n\n" +
                "The copper and copper alloy industry depends on the economic recycling of any surplus products. Process scrap, which arises from manufacturing processes is saved and traded for recycling to keep down the cost of the final product\n\n" +
                "Unlike other metals, when copper slowly reacts to oxygen it generates a layer of brown-black copper oxide that actually protects the copper underneath from more extensive corrosion. A green layer of copper carbonate can often be seen on old copper constructions such as the Statue of Liberty.\n\n" +
                "Copper is used extensively in the electrical and architectural fields. Due to this every home will have a significant volume of copper hidden within walls and electrical equipment.\n\n" +
                "Recycling of copper and copper alloys is relatively cheap, with small power consumption, and with minimal losses. The recycling of copper and its alloys play a significant role in the economics of production, which has been undertaken since the beginning of copper industry. The cost of the raw material can be considerably reduced if an alloy can be made using recycled material. If the scrap is high purity copper and has not been contaminated by other metals, it can be used to make a high quality product. Likewise, if the scrap is kept segregated and comprises only of one alloy composition it is easier to remelt to a superior quality product conforming to industry standards."
        },
        {
            name: 'IRON & CASTING',
            disc: "Iron and steel are very popular and useful materials that are used in a variety of things. The iron and steel industry is known as the mother of other industries because it provides raw materials for them. Iron Scrap Dealers in Chennai\n\n" +
                "Technological advancements have considerably reduced the generation of home scrap. New or prompt scrap is generated in manufacturers’ plants and includes items, such as stampings, turnings, and clippings. Old or obsolete scrap is referred as iron or steel from post consumer products, such as appliances, automobiles, bridges and buildings.\n\n" +
                "Some common grades of iron and steel scrap include – heavy metal steel, plate and structured steel, hydraulic silicon bundles, short shoveling steel turnings, machine shop turnings, cast iron borings, mixed turnings and borings, shredded scrap, mixed cast, steel turnings and foundry steel. Some common types of iron and steel intermediary products, include – steel making slag, spent pickle liquor, flue dust, filter cake, waste sludge and mill scale..\n\n" +
                "In addition, all new steel products made from recycled steel can be recycled again and again at the end of their useful lives. Waste steel cans are recycled into part of a guard rail that may one day be recycled into an appliance. Ferrous scrap processors are there in the market to prepare all types of steel products for recycling..\n\n"
        },
        {
            name: 'METAL AND ROLLING',
            disc: "scrap metal is the combination of waste metal, metallic material and any product that contains metal source of industrial metals and alloys, particularly in the production of steel, copper, lead, aluminum Metal Scrap Buyers in Chennai\n\n" +
                "We are offering the best price for the metal scrap of ferrous and non ferrous metal scrap at weighing scale.\n\n" +
                "The distinction between the two is the presence of iron. Ferrous metal is magnetic and contains iron, which makes it stronger than its counterpart, while nonferrous metal is more pliable and resistant to corrosion.\n\n" +
                "Typical ferrous scrap items submitted for recycling include things such as old machinery, stoves, refrigerators, freezers, and automobile engines. Nonferrous metal recyclables, meanwhile, typically come from copper wire and piping, brass fixtures, Aluminium siding, chairs, and old computers. The following breakdown lists which category different types of metals fall into.\n\n" +
                "Ferrous Metal scrap includes Alloy steel, Stainless steel, Carbon steel, Wrought iron, Cast iron and non-ferrous scrap includes Aluminium, Brass, Copper, Iridium, Lead, Magnesium, Palladium,Platinum, Tin and Zinc."
        }
    ];


    return (
        <>
            {loadingSpinner && ( // Conditionally render ActivityIndicator when loading is true
                <View style={styles.spinnerContainer}>
                    <ActivityIndicator size="100" color="#347855" />
                </View>
            )}
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                <View style={styles.container}>

                    {allMyCartProducts.map((item, index) => (
                        <View style={styles.cartItem} key={index}>

                            <View style={styles.card}>

                                <View style={styles.textCard}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.disc}>{item.disc}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                    <CustomAlert
                        isVisible={isVisible}
                        title={modelTitle}
                        description={responseMessage}
                        buttonText={showButton ? "OK" : ""}
                        onPress={hideAlert}
                        onClose={hideAlert}
                        btnisVisible={false}
                        color_title={color_title}
                        color_description={color_description}
                    />
                </View>
            </ScrollView>
        </>
    );
}

export default new_stock;
