import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Botao({ titulo, onPress }) {
    return (
        // TouchableOpacity cria uma área clicável/toqueável.
        // O style aplica a aparência do botão.
        // O onPress define o que acontece ao tocar no botão.
        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

// StyleSheet.create cria um objeto de estilos.
// É parecido com CSS, mas escrito em JavaScript.
const styles = StyleSheet.create({
    botao: {
        backgroundColo: '#E50914',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },

    texto: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    }
})