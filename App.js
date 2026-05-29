// Importamos o useState para controlar informações que mudam na tela.
// Neste caso, vamos controlar qual filme foi selecionado.
import { useState } from 'react';

// StatusBar controla a barra superior do celular no Expo.
import { StatusBar } from 'expo-status-bar';

// Importamos os componentes básicos do React Native.
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// Importamção dos components criados
import CartaoFilme from './components/CartaoFilme';
import Titulo from './components/Titulo';
import ModalDetalhes from './components/ModalDetalhes';

// Lista principal do catálogo.
const catalogo = [
  {
    id: 1,
    categoria: 'filme',
    poster: '🚀',
    titulo: 'Interestelar',
    genero: 'Ficção Científica',
    ano: 2014,
    sinopse:
      'Um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade.',
  },
  {
    id: 2,
    categoria: 'filme',
    poster: '🏠',
    titulo: 'Parasita',
    genero: 'Thriller',
    ano: 2019,
    sinopse:
      'Uma família pobre se infiltra na vida de uma família rica, com consequências imprevisíveis.',
  },
  {
    id: 3,
    categoria: 'filme',
    poster: '🏜️',
    titulo: 'Duna',
    genero: 'Ficção Científica',
    ano: 2021,
    sinopse:
      'Um jovem nobre assume o controle do planeta mais perigoso do universo.',
  },
  {
    id: 4,
    categoria: 'filme',
    poster: '🪄',
    titulo: 'Harry Potter',
    genero: 'Fantasia / Aventura',
    ano: 2001,
    sinopse:
      'Um jovem bruxo descobre seus poderes e começa sua jornada na Escola de Magia de Hogwarts.',
  },
  {
    id: 5,
    categoria: 'filme',
    poster: '💍',
    titulo: 'Senhor dos Anéis',
    genero: 'Fantasia / Aventura',
    ano: 2001,
    sinopse:
      'Um hobbit parte em uma missão épica para destruir um anel poderoso e salvar a Terra-média.',
  },
  {
    id: 6,
    categoria: 'serie',
    poster: '🧪',
    titulo: 'Breaking Bad',
    genero: 'Drama / Crime',
    ano: 2008,
    sinopse:
      'Um professor de química começa a produzir metanfetamina para garantir o futuro da família.',
  },
  {
    id: 7,
    categoria: 'serie',
    poster: '🔦',
    titulo: 'Stranger Things',
    genero: 'Ficção Científica',
    ano: 2016,
    sinopse:
      'Um grupo de crianças enfrenta forças sobrenaturais em uma pequena cidade.',
  },
  {
    id: 8,
    categoria: 'anime',
    poster: '⚔️',
    titulo: 'Attack on Titan',
    genero: 'Ação / Drama',
    ano: 2013,
    sinopse:
      'A humanidade vive atrás de enormes muralhas para se proteger de gigantes.',
  },
  {
    id: 9,
    categoria: 'anime',
    poster: '📓',
    titulo: 'Death Note',
    genero: 'Thriller Psicológico',
    ano: 2006,
    sinopse:
      'Um estudante encontra um caderno capaz de matar qualquer pessoa cujo nome seja escrito nele.',
  },
  {
    id: 10,
    categoria: 'anime',
    poster: '🍥',
    titulo: 'Naruto',
    genero: 'Ação / Aventura',
    ano: 2002,
    sinopse:
      'Um jovem ninja busca reconhecimento e sonha em se tornar o Hokage de sua vila.',
  },
  {
    id: 11,
    categoria: 'anime',
    poster: '🐉',
    titulo: 'Dragon Ball',
    genero: 'Ação / Artes Marciais',
    ano: 1986,
    sinopse:
      'Goku reúne as Esferas do Dragão e enfrenta inimigos poderosos para proteger a Terra.',
  },
];

export default function App() {

  // Estado que guarda o filme selecionado.
  // Começa como null porque nenhum filme foi clicado ainda.
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)

  // Guarda a categoria selecionada no filtro
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");


  // filter() cria uma nova lista apenas com os itens da categoria "filme".
  const filmes = catalogo.filter((item) => item.categoria === 'filme')

  // filter() cria uma nova lista apenas com os itens da categoria "serie".
  const series = catalogo.filter((item) => item.categoria === 'serie')

  // filter() cria uma nova lista apenas com os itens da categoria "anime".
  const animes = catalogo.filter((item) => item.categoria === 'anime')


  // Função responsável por renderizar cada card.
  // Ela recebe um item da lista e retorna um componente CartaoFilme.
  const renderFilmeItem = (filme) => (
    <CartaoFilme
      // Key ajudao React a identificar cada item da lista
      key={filme.id}

      // O spread (...) envia todas as informações do filme como props
      {...filme}

      // Quando clicar no botão do card,
      // esse filme será salvo no estado filmeSelecionado.
      onPress={() => setFilmeSelecionado(filme)}
    />
  )

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Permite rolar a tela caso tenha muito conteúdo */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Logo do app */}
        <Text style={styles.logo}>CINELOG</Text>

        {/* Filtro do topo */}
        <View style={styles.filtroContainer}>
          {[
            { key: 'todos', label: 'Todos' },
            { key: 'filme', label: 'Filmes' },
            { key: 'serie', label: 'Séries' },
            { key: 'anime', label: 'Animes' },
          ].map((filtro) => (
            <TouchableOpacity
              key={filtro.key}
              style={[
                styles.filtroBotao,
                categoriaSelecionada === filtro.key && styles.filtroBotaoAtivo,
              ]}

              onPress={() => setCategoriaSelecionada(filtro.key)}
            >

              <Text
                style={[
                  styles.filtroTexto,
                  categoriaSelecionada === filtro.key && styles.filtroTextoAtivo,
                ]}
              >
                {filtro.label}
              </Text>

            </TouchableOpacity>
          ))

          }
        </View>

        {categoriaSelecionada === 'todos' ? (
          <>
            <Titulo texto={"🎬 Filmes"} />
            {filmes.map(renderFilmeItem)}

            <Titulo texto={"📺 Séries"} />
            {series.map(renderFilmeItem)}

            <Titulo texto={"🎥 Animes"} />
            {animes.map(renderFilmeItem)}
          </>

        ) : (

          <>
            <Titulo
              texto={
                categoriaSelecionada === 'filme'
                  ? '🎬 Filmes'
                  : categoriaSelecionada === 'serie'
                    ? '📺 Séries'
                    : '🎥 Animes'
              }
            />
            {catalogo
              .filter((item) => item.categoria === categoriaSelecionada).map(renderFilmeItem)}
          </>
        )}
      </ScrollView>

      {/* 
        ModalDetalhes recebe o filme selecionado.

        Se filmeSelecionado for null:
        o modal não aparece.

        Se filmeSelecionado tiver um filme:
        o modal aparece mostrando os detalhes.

        onFechar limpa o estado e fecha o modal.
      */}
      <ModalDetalhes
        filme={filmeSelecionado}
        onFechar={() => setFilmeSelecionado(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 20,
    paddingTop: 56,
  },

  logo: {
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 3,
    color: '#e50914',
    marginBottom: 24,
  },

  filtroContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },

  filtroBotao: {
    backgroundColor: '#1F1F1F',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginRight: 10,
    marginBottom: 10,
  },

  filtroBotaoAtivo: {
    backgroundColor: '#E50914'
  },

  filtroTexto: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  filtroTextoAtivo: {
    color: '#FFFFFF'
  }
});
