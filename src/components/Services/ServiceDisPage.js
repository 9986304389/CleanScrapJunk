import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const ServiceDisPage = (props) => {
    const { navigation, route } = props;
    const { serviceName } = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Service's",
            headerTitleStyle: {
                marginLeft: 0,
                fontWeight: 'bold',

            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Services')} style={{ marginLeft: 20 }}>
                    <FontAwesome name="arrow-left" size={20} color="black" style={{ fontWeight: '100' }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    console.log("serviceName", serviceName)
    const allServices = [
        {
            service_Name: 'OFFICE SCRAP',
            disc: "We are a leading provider of office scrap buying services in Chennai, India. We specialize in the collection and recycling of all types of office scrap, including outdated or excess electronic equipment, office furniture, office partition scrap, workstation scraps, office chairs, tables, and all interior scraps, etc. Our team of experienced professionals is dedicated to providing the highest quality of service to our customers and ensuring that all of their office scrap is properly recycled and disposed of. We understand that managing office scrap can be a time-consuming and overwhelming task, which is why we offer convenient and cost-effective solutions to help businesses and organizations dispose of their excess materials in an environmentally responsible way. We use the latest technology and equipment to ensure that all of our customers receive the highest quality of service and the best possible results. We are committed to sustainability and responsible recycling practices, and we make it our mission to help our customers reduce their environmental impact and support their sustainability goals. Whether you are a small business looking to dispose of a few outdated computers or a large organization looking to recycle a large volume of office scrap, we have the resources and expertise to meet your needs. Contact us today to learn more about our office scrap buying services and how we can help you declutter your office and make a positive impact on the environment. Office Scrap Buyers in Chennai Our team of experienced professionals is dedicated to providing efficient and cost-effective solutions for businesses and organizations in Chennai and the surrounding areas. We offer a wide range of services to meet the unique needs of our customers, including the collection and recycling of office paper, cardboard, metal, plastic, and other materials. We use the latest technology and equipment to ensure that all of our customers receive the highest quality of service and the best possible results. In addition to our waste and scrap recycling services, we also offer secure document shredding to protect the privacy and confidentiality of our customers. We take the utmost care to ensure that all sensitive materials are safely and securely destroyed, so you can trust us to handle your confidential information with the utmost care and discretion. At Office Scrap in Chennai, we are committed to sustainability and responsible recycling practices. We work with our customers to develop customized solutions that minimize waste and reduce the environmental impact of their operations. Contact us today to learn more about how we can help you manage your office waste and scrap in a more sustainable and cost-effective way."
        },
        {
            service_Name: 'INDUSTRY SCRAP',
            disc: "We are pleased to offer industrial scrap buying services to companies in the Chennai, India area. Our team of experienced professionals is dedicated to providing top-notch service and the most competitive prices for all types of industrial scrap. We specialize in the buying and recycling of a wide range of industrial scrap materials, including metal scraps, plastic scraps, electronic scraps, and more. Our state-of-the-art equipment and advanced recycling techniques allow us to efficiently and effectively process large volumes of scrap, ensuring that our customers receive the best possible return on their investment. In addition to providing competitive prices for industrial scrap, we are also committed to sustainability and responsible recycling practices. We take care to properly handle and dispose of all materials in a way that minimizes our impact on the environment. If you are a business looking to dispose of excess or outdated industrial scrap, we encourage you to contact us to learn more about our services. We have the resources and expertise to meet your needs and exceed your expectations. Let us help you turn your industrial scrap into cash and make a positive impact on the environment."
        },
        {
            service_Name: 'AC SCRAP',
            disc: "We specialize in buying scrap AC units. As a leading scrap AC buyer, we are committed to providing our customers with top dollar for their scrap AC units. We understand the importance of recycling these units in an environmentally responsible manner, which is why we have established a comprehensive scrap AC buying program. We are collecting Window AC, split AC, cassette AC, tower AC, package AC, ductable AC, AC plants, etc. Our team of experienced professionals is dedicated to providing the highest level of customer service and ensuring that our customers receive the best price for their scrap AC units. We make the process of selling your scrap AC units easy and convenient, with pickup services available for larger quantities. If you have scrap AC units that you would like to sell, don’t hesitate to contact us. We offer competitive prices and will work with you to find a solution that meets your needs. Contact us today to learn more about our scrap AC buying services and how we can help you recycle your old AC units in an environmentally responsible manner."
        },

        {
            service_Name: 'ALUMINIUM',
            disc: 'We have a stock of aluminum scraps for sale. We offer our customers quality aluminum scrap that can meet all their expectations and requirements. We are constantly gathering aluminum scraps. The collection and sorting of aluminium scrap, especially old scrap, is often a complex scheme involving millions of households, local and regional authorities, small and medium collectors, and metal merchants. Waste and environmental policies can also have strong influences on the effectiveness of collection schemes. Other input materials are also required to transform valuable aluminium scrap into aluminium metal. Aluminium Scrap Buyers in Chennai Alloying elements are crucial to the wide range of functionalities and characteristics of aluminium products. In refining aluminium scrap, impurities that cannot be removed by mechanical separation will be eliminated through the addition of salt flux in the melting furnaces. New scrap arises during the manufacturing of aluminium semi-fabricated and final products. Old scrap refers to those products collected after disposal by consumers. Old scrap is often more contaminated than new scrap. End-of-life vehicles, demolished buildings and constructions, discarded packaging material, home and office appliances, as well as machinery equipment are all potential sources of old aluminium scrap.'
        },
        {
            service_Name: 'COMPUTER',
            disc: "Computer scrap includes all wiring and hardware, desktop and laptop computers. This includes old monitors due to the expenses related to disposing of these safely. If you have old computer hardware that no longer works, bring it to us, and we will recycle it at no cost to you. Computers are made up of a large range of metals, each used for different components and features. Today many computer cases are made out of plastics to reduce weight and provide additional insulation between the electronics and the user. Due to this, the internal hardware (hard drives, circuit boards & wiring) is the part we would be looking to separate out. We are offering the best price for the computer on a piece-wise basis also at the weighing scale. All the computer scrap is being taken as scrap only. Computer Scrap Buyers in Chennai We are interested in scrapping bulk volumes of computer hardware, but not the plastic that comes with it. However, we will happily separate these items if you are unable to."
        },
        {
            service_Name: 'COPPER',
            disc: "We have a huge collection of scrap copper that we are willing to sell. Copper materials are used widely in electronic equipment like wiring and motors. It is an electrical conductor which can conduct heat and electricity very well. Copper Scrap Buyers in Chennai The copper and copper alloy industry depend on the economic recycling of any surplus products. Process scrap, which arises from manufacturing processes, is saved and traded for recycling to keep down the cost of the final product. Unlike other metals, when copper slowly reacts to oxygen, it generates a layer of brown-black copper oxide that actually protects the copper underneath from more extensive corrosion. A green layer of copper carbonate can often be seen on old copper constructions such as the Statue of Liberty. Copper is used extensively in the electrical and architectural fields. Due to this, every home will have a significant volume of copper hidden within walls and electrical equipment. Recycling of copper and copper alloys is relatively cheap, with small power consumption, and with minimal losses. The recycling of copper and its alloys play a significant role in the economics of production, which has been undertaken since the beginning of the copper industry. The cost of the raw material can be considerably reduced if an alloy can be made using recycled material. If the scrap is high purity copper and has not been contaminated by other metals, it can be used to make a high-quality product. Likewise, if the scrap is kept segregated and comprises only one alloy composition, it is easier to remelt to a superior quality product conforming to industry standards."
        },
        {
            service_Name: 'IRON & CASTING',
            disc: "Iron and steel are very popular and useful materials that are used in a variety of things. The iron and steel industry are known as the mother of other industries because it provides raw materials for them. Iron Scrap Dealers in Chennai Technological advancements have considerably reduced the generation of home scrap. New or prompt scrap is generated in manufacturers’ plants and includes items, such as stampings, turnings, and clippings. Old or obsolete scrap is referred to as iron or steel from post-consumer products, such as appliances, automobiles, bridges, and buildings. Some common grades of iron and steel scrap include – heavy metal steel, plate and structured steel, hydraulic silicon bundles, short shoveling steel turnings, machine shop turnings, cast iron borings, mixed turnings and borings, shredded scrap, mixed cast, steel turnings, and foundry steel. Some common types of iron and steel intermediary products include – steel-making slag, spent pickle liquor, flue dust, filter cake, waste sludge, and mill scale. In addition, all new steel products made from recycled steel can be recycled again and again at the end of their useful lives. Waste steel cans are recycled into part of a guardrail that may one day be recycled into an appliance. Ferrous scrap processors are there in the market to prepare all types of steel products for recycling."
        },
        {
            service_Name: 'METAL AND ROLLING',
            disc: "Scrap metal is the combination of waste metal, metallic material, and any product that contains metal, a source of industrial metals and alloys, particularly in the production of steel, copper, lead, aluminum. Metal Scrap Buyers in Chennai We are offering the best price for the metal scrap of ferrous and non-ferrous metal scrap at the weighing scale. The distinction between the two is the presence of iron. Ferrous metal is magnetic and contains iron, which makes it stronger than its counterpart, while non-ferrous metal is more pliable and resistant to corrosion. Typical ferrous scrap items submitted for recycling include things such as old machinery, stoves, refrigerators, freezers, and automobile engines. Non-ferrous metal recyclables, meanwhile, typically come from copper wire and piping, brass fixtures, Aluminium siding, chairs, and old computers. The following breakdown lists which category different types of metals fall into. Ferrous Metal scrap includes Alloy steel, Stainless steel, Carbon steel, Wrought iron, Cast iron, and non-ferrous scrap includes Aluminium, Brass, Copper, Iridium, Lead, Magnesium, Palladium, Platinum, Tin, and Zinc."
        }
    ];

    return (

        <ScrollView>

            <View style={styles.header2}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '600' }}>{serviceName}</Text>
                </View>
            </View>
            {allServices.map((item, index) => (
                serviceName === item.service_Name && (
                    <View style={styles.container}>
                        <View style={styles.cartItem}>
                            <View style={styles.text}>
                                <Text style={styles.text}>{item.disc}</Text>
                            </View>
                        </View>
                    </View>
                )
            ))}

        </ScrollView>

    )
}

export default ServiceDisPage;