import { StyleSheet, Text, View } from "react-native";

export default function Emblema ({categoria}) {
    return (
        // View é o container do emblema (a "caixinha").
        <View style={styles.emblema}>
            <Text style={styles.texto}>{categoria}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    emblema :{
        backgroundColor: '#2D2D2D',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: '20',
        alignSelf: 'flex-start',
        marginTop: 6,
    },

    texto :{
        color: '#9CA3AF',
        fontSize: 11,
        fontWeight: '600',
    }
})