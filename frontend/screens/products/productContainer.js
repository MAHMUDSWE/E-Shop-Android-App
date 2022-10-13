import { Icon, Input, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

import Banner from "../../shared/banner";
import ProductList from "./productList";
import SearchedProduct from "./searchedProducts";
const data = require('../../assets/data/products.json');

var { width, height } = Dimensions.get("window");

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);

        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus();
        }
    }, [])

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        );
    };
    const openList = () => {
        setFocus(true);
    };
    const onBlur = () => {
        setFocus(false);
    };

    return (
        <View>
            <VStack w="100%" space={5} alignSelf="center">

                <Input
                    backgroundColor={'gray.100'}
                    placeholder="Search Products"
                    width="90%"
                    InputLeftElement={<Icon as={MaterialIcons} name="search" size='2xl' />}
                    InputRightElement={focus == true ? <Icon onPress={onBlur} as={MaterialIcons} name="cancel" size='2xl' /> : null}
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                />
            </VStack>

            {focus == true ? (
                <View>
                    <SearchedProduct
                        productsFiltered={productsFiltered}
                    />
                </View>
            ) : (
                <View style={styles.container}>
                    <Banner />
                    <Text>Product Container</Text>
                    <View style={styles.listContainer}>
                        <FlatList
                            numColumns={2}
                            data={products}
                            renderItem={({ item }) => <ProductList
                                key={item.brand}
                                item={item}
                            />}
                            keyExtractor={item => item.brand}
                        />
                    </View>
                </View>
            )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro',
        marginTop: 10,
        marginBottom: 200
    },
    listContainer: {
        width: '100%',
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        marginTop: -500,
    }
})


export default ProductContainer;