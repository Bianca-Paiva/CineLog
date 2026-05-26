import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Botao ({titulo, onPress}) {
    return (
        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao :{
        backgroundColo: '#e50914',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },

    texto :{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    }
})