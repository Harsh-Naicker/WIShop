import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, LogBox, ActivityIndicator, ScrollView } from 'react-native'
import { useIsFocused } from '@react-navigation/native';

LogBox.ignoreAllLogs();
const itemsURL='https://run.mocky.io/v3/b6a30bb0-140f-4966-8608-1dc35fa1fadc'
const GridScreen = () => {
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
            <ScrollView style={styles.scrollHalf} contentContainerStyle={styles.body}>
                {loading ? (
                    <ActivityIndicator />
                ):(
                    data.map((item) => (
                        <View style={styles.itemBox} key={item.name}>
                            <View style={styles.itemImageBox}>
                            </View>
                            <View style={styles.itemTextBox}>
                                <Text>{item.name}</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 14.5}}>{item.price}</Text>
                            </View>
                        </View>
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default GridScreen

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerHalf: {
        flex: 0.21,
        backgroundColor: 'rgb(231,233,245)'
    },
    scrollHalf: {
        backgroundColor: 'white',
        flex:0.79,
        // marginTop: 5,
        paddingLeft: 30,
        paddingRight: 30
    },
    body: {
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
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
    itemBox: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 40
    },
    itemImageBox: {
        height: 106,
        width: 106,
        backgroundColor: 'rgb(246,246,246)',
        borderRadius: 8
    }
})

