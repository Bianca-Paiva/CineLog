// Importamos os componentes necessários do React Native:
// Modal: cria uma tela sobreposta (tipo pop-up)
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Componente ModalDetalhes
// Props:
//  - filme: objeto com os dados do filme selecionado
//  - onFechar: função para fechar o modal
export default function ModalDetalhes({ filme, onFechar }) {

  // Se não tiver filme selecionado, não renderiza nada.
  // Isso evita erro e também controla quando o modal aparece.
  if (!filme) return null;

  return (
    // Modal cria uma camada acima da tela atual
    <Modal
      visible={true} // Define que o modal está visível
      transparent={true} // Permite ver o fundo escuro atrás
      animationType="slide" // Animação de entrada (deslizando)
      onRequestClose={onFechar} // Necessário no Android (botão voltar)
    >
      
      {/* Fundo escuro por trás do modal */}
      <View style={styles.fundo}>

        {/* Caixa principal do conteúdo do modal */}
        <View style={styles.caixa}>

          {/* Poster (emoji ou texto) */}
          <Text style={styles.poster}>{filme.poster}</Text>

          {/* Título do filme */}
          <Text style={styles.titulo}>{filme.titulo}</Text>

          {/* Gênero */}
          <Text style={styles.genero}>{filme.genero}</Text>

          {/* Ano */}
          <Text style={styles.ano}>Ano: {filme.ano}</Text>

          {/* Sinopse */}
          <Text style={styles.sinopse}>{filme.sinopse}</Text>

          {/* Botão de fechar */}
          <TouchableOpacity style={styles.botaoFechar} onPress={onFechar}>
            <Text style={styles.botaoTexto}>Fechar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  caixa: {
    backgroundColor: '#1A1A1A', 
    borderRadius: 24,
    padding: 28,
    gap: 8,
  },

  poster: {
    fontSize: 52, 
    textAlign: 'center', 
    marginBottom: 8,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  genero: {
    fontSize: 14,
    color: '#E50914', 
    fontWeight: '600',
    textAlign: 'center',
  },

  ano: {
    fontSize: 13,
    color: '#9CA3AF', 
    textAlign: 'center',
  },

  sinopse: {
    fontSize: 14,
    color: '#D1D5DB',
    lineHeight: 22, 
    marginTop: 8,
    textAlign: 'center',
  },

  botaoFechar: {
    backgroundColor: '#2D2D2D',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});