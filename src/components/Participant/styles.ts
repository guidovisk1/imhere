import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name:{
        flex: 1,
        color: 'white',
        fontSize: 16,
        padding: 20
    } ,
    buttonText:{
        color: '#FFF',
        
        fontSize: 22,
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center',
       
    }
})