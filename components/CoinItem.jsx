import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.coinName}>
                <Image source={{ uri: coin.image }} style={styles.image} />

                <View styles={styles.containerNames}>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.textSymbol}>{coin.symbol}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.textPrice}>
                    {"$".concat(coin.current_price)}
                </Text>
                <Text
                    style={[
                        styles.pricePercentage,
                        coin.price_change_percentage_24h > 0
                            ? styles.priceUp
                            : styles.priceDown,
                    ]}
                >
                    {coin.price_change_percentage_24h}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: "#121212",
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        color: "#FFF",
    },
    image: {
        width: 30,
        height: 30,
    },
    containerNames: {
        marginLeft: 10,
    },
    coinName: {
        flexDirection: "row",
    },
    textSymbol: {
        color: "#434343",
        textTransform: "uppercase",
    },
    pricePercentage: {
        textAlign: "right",
    },
    priceUp: {
        color: "#00B5B9",
    },
    priceDown: {
        color: "#FC4422",
    },
    textPrice: {
        color: "#FFF",
        textAlign: "right",
    },
});

export default CoinItem;
