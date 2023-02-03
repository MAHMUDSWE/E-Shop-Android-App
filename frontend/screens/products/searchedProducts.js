import { Container, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

var { width } = Dimensions.get("window")

const SearchedProduct = (props) => {
    const { productsFiltered } = props;
    return (
        <Container style={{ width: width }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                        <TouchableOpacity
                            style={{ width: '100%' }}
                            onPress={() => {
                                props.navigation.navigate("Product Detail", { item: item })
                            }}>
                            <ScrollView
                                key={item._id.$oid}
                                avatar
                            >
                                <HStack>
                                    <Image
                                        style={styles.image}
                                        resizeMode='contain'
                                        source={{
                                            uri: item.image ?
                                                item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                                        }}
                                    />
                                    <VStack>
                                        <Text>{item.name}</Text>
                                        <Text note>{item.description}</Text>
                                    </VStack>
                                </HStack>

                            </ScrollView>
                        </TouchableOpacity>

                ))
            ) : (
                <View style={styles.center}>
                    <Text style={{ alignSelf: 'center' }}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </Container>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    image: {
        width: 70,
        height: 60,
        backgroundColor: 'transparent',
    }
})

export default SearchedProduct;