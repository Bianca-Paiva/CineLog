import { Text, View, StyleSheet } from "react-native";
import Emblema from "./Emblema";
import Botao from "./Botao";

export default function CartaoFilme({ poster, titulo, genero, ano, onPress }) {
    return (
        <View style={styles.cartao}>
            <Text style={styles.poster}>{poster}</Text>

            <View style={styles.info}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.ano}>{ano}</Text>

                <Emblema categoria={genero} />
                <Botao titulo={"Ver detalhes"} onPress={onPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cartao: {
        flexDirection: 'row',
        backgroundColor: '#1a1a1a',
        borderRadius: 12,
        padding: 14,
        marginBottom: 12,
        gap: 14,
    },

    poster : {
        fontSize: 40,
    },

    titulo: {
        fontSize: 16,
        fontWeight: '600',
    }
})