import { Icon, Input, ScrollView, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

import Banner from "../../shared/banner";
import CategoryFilter from "./categoryFilter";
import ProductList from "./productList";
import SearchedProduct from "./searchedProducts";


const data = require('../../assets/data/products.json');
const productsCategories = require('../../assets/data/categories.json');

var { width, height } = Dimensions.get("window");

const ProductContainer = (props) => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState(false);
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        setCategories(productsCategories);
        setProductsCtg(data);
        setActive(-1);
        setInitialState(data);

        return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus();
            setCategories([]);
            setActive();
            setInitialState();
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

    const changeCtg = (ctg) => {
        {
            ctg === 'all'
                ? [setProductsCtg(initialState), setActive(true)]
                : [
                    setProductsCtg(
                        products.filter((i) => i.category.$oid === ctg),
                        setActive(true)
                    )
                ]
        }
    }

    return (
        <View>
            <VStack w="95%" space={5} alignSelf="center" marginBottom={2} marginTop={2} >

                <Input
                    borderRadius={20}
                    backgroundColor={'gray.100'}
                    placeholder="Search Products"
                    width="100%"
                    InputLeftElement={<Icon as={MaterialIcons} name="search" size='2xl' />}
                    InputRightElement={focus == true ? <Icon onPress={onBlur} as={MaterialIcons} name="cancel" size='2xl' /> : null}
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                />
            </VStack>

            {focus == true ? (
                <ScrollView>
                    <SearchedProduct
                        navigation={props.navigation}
                        productsFiltered={productsFiltered}
                    />
                </ScrollView>
            ) : (

                <ScrollView>
                    <View >
                        <View>
                            <Banner />
                        </View>

                        <CategoryFilter
                            categories={categories}
                            CategoryFilter={changeCtg}
                            productsCtg={productsCtg}
                            active={active}
                            setActive={setActive}
                        />

                        {productsCtg.length > 0 ? (
                            <View style={styles.listContainer1}>
                                {productsCtg.map((item) => {
                                    return (
                                        <ProductList
                                            navigation={props.navigation}
                                            key={item._id.$oid}
                                            item={item}
                                        />
                                    )
                                })}
                            </View>
                        ) : (
                            <View style={[styles.listContainer1, styles.center, { height: height / 2 }]}>
                                <Text>No products found</Text>
                            </View>
                        )}
                    </View>

                </ScrollView>

            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro',
        marginTop: 10,
        marginBottom: 200,
    },
    listContainer: {
        height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        marginTop: -230,
        flexWrap: 'wrap',
        backgroundColor: "gainsboro"
    },
    listContainer1: {
        marginBottom: 140,
        marginTop: 370,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default ProductContainer;