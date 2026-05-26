import { StyleSheet, Text } from "react-native";

export default function Titulo ({texto}) {
    return (
        <Text style={styles.titulo}>{texto}</Text>
    );
}

const styles = StyleSheet.create ({
    titulo :{
        fontSize: 17,
        fontWeight: '700',
        color: '#ffffff',
        marginTop: 8,
        marginBootom: 12,
    }
})