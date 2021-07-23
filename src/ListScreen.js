import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, LogBox, ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native';

LogBox.ignoreAllLogs();
const itemsURL='https://run.mocky.io/v3/b6a30bb0-140f-4966-8608-1dc35fa1fadc'
const ListScreen = () => {
    const [loading, setLoading]=useState(true)
    const [data,setData]=useState([])
    const isFocused = useIsFocused()
    useEffect(() => {
        fetch(itemsURL)
            .then((response) => response.json())
            .then((json) => {
                var c=json.data.items;
                var len=c.length;
                for(var i=0; i< len; i++){
                    if(c[i].price.includes(".") === false){
                        c[i].price=c[i].price.concat(".0")
                }

                }
                setData(c)
                console.log(data)
            })
            .catch((error) => alert(error))
            .finally(setLoading(false));
        
    }, [isFocused]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerHalf}>
                <View style={styles.headerText}>
                    <Text style={styles.exploreText}>Explore</Text>
                    <Text style={styles.filterText}>Filter</Text>
                </View>
                <View style={styles.searchBar}>
                    <Text style={styles.searchBarText}>Search</Text>
                </View>
            </View>
            <ScrollView style={styles.body}>
                {loading ? (
                    <ActivityIndicator />
                ):(
                    data.map((item) => (
                        <View key={item.name} style={styles.itemListing}>
                            <View style={styles.itemImageBox}>
                            </View>
                            <View style={styles.itemTextBox}>
                                <View style={styles.itemName}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
                                </View>
                                <View style={styles.itemDetails}>
                                    <View style={styles.priceText}>
                                        <Text style={{color: 'lightgrey'}}>MRP: </Text>
                                        <Text>{item.price}</Text>
                                    </View>
                                    <Text style={{color: 'lightgrey'}}>{item.extra}        </Text>
                                </View>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ListScreen

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerHalf: {
        flex: 0.21,
        backgroundColor: 'rgb(231,233,245)'
    },
    body: {
        backgroundColor: 'white',
        flex: 0.79
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 45,
        paddingRight: 30,
        paddingTop: 20,
        paddingBottom: 20
    },
    exploreText: {
        fontWeight: 'bold',
        fontSize:  18
    },
    filterText: {
        color:  'rgb(114,174,122)',
        fontSize:  17
    },
    searchBar: {
        paddingLeft: 15,
        // paddingRight: 35,
        height: 45,
        backgroundColor: 'white',
        width: '85%',
        alignSelf: 'center',
        borderRadius: 25,
        justifyContent: 'center'
    },
    searchBarText: {
        color: 'lightgrey',
        alignSelf: 'flex-start',
        fontSize: 15
    },
    itemListing: {
        flexDirection: 'row',
        paddingBottom: 7,
        paddingTop: 18,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-between'
    },
    itemImageBox: {
        width: 45,
        height: 45,
        backgroundColor: 'rgb(246,246,246)',
        // paddingRight: 10,
        borderRadius: 4
    },
    itemTextBox: {
        height: 50,
        width: '84%',
        borderBottomWidth: 1,
        // paddingLeft: 10,
        borderBottomColor: 'lightgrey'
    },
    itemName: {
        flex: 0.5
    },
    itemDetails: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceText: {
        flexDirection: 'row',
    }

})
