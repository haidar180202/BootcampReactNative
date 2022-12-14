import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Data } from './dummy'

export default function Telegram() {
    useEffect(() => {
        console.log(Data)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.subHeader}>
                    <View style={styles.subContentHeader}>
                        <Image
                            style={styles.avatarDrawwer}
                            source={require('./assets/drawwer.png')}
                        />
                        <Text style={styles.titleName}>Telegram</Text>
                    </View>
                    <View>
                        <Image
                            source={require('./assets/search.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <SafeAreaView>
                    <FlatList
                        data={Data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <>
                                <TouchableOpacity style={styles.messageContainer}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            style={{ height: 50, width: 50, borderRadius: 25 }}
                                            source={item.image}
                                        />
                                        <View style={styles.nameMessage}>
                                            <Text>{item.name}</Text>
                                            <Text>{item.message}</Text>
                                        </View>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <Image 
                                            style={{height:8,width: 12,marginRight:5}}
                                            source={require('./assets/check.png')}
                                            />
                                            <Text>{item.time}</Text>
                                        </View>
                                        <View style ={{
                                            backgroundColor:'#4ECC5E',
                                            height:24,
                                            width:24,
                                            borderRadius:12,
                                            alignItems:'center'
                                            
                                        }}>
                                            <Text style={{color:'white'}}>{item.totalMessage}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{borderBottomWidth:1,borderBottomColor:'#A8AAA'}}></View>
                                </>

                            )
                        }}
                    />
                </SafeAreaView>
                <TouchableOpacity style={{paddingRight:24,marginTop:20}}>
                    <View style={styles.addChat}>
                        <Image 
                        style={styles.avatarPen}
                        source={require('./assets/pencil.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 50,
        backgroundColor: '#517DA2',
        marginTop: 30,
        justifyContent: 'center'

    },
    subHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        justifyContent: 'space-between'
    },
    subContentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    
    avatarDrawwer: {
        width: 18,
        height: 12
    },
    titleName: {
        color: 'white',
        fontSize: 18,
        marginLeft: 20
    },
    messageContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: 27,
        paddingHorizontal: 24,
        paddingVertical: 24,
        justifyContent: 'space-between'
    },
    nameMessage:{
        paddingLeft:15
    },
    avatarPen:{
        height: 18,
        width:18
    },
    addChat:{
        height:45,
        width:45,
        borderRadius:45/2,
        backgroundColor: '#4EA4EA',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end'
    }
});
