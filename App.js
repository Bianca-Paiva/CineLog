import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import CartaoFilme from './components/CartaoFilme';
import Titulo from './components/Titulo';

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

  // Estado que guarda o filme selecionado:
  //  - começa com 'null' por que nenhum filme foi selecionado
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)

  // Guarda a categoria selecionada no filtro
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");


  // Filter() cria uma nova lista filtrada pelo item informado
  const filmes = catalogo.filter((item) => item.categoria === 'filme')
  const series = catalogo.filter((item) => item.categoria === 'serie')
  const animes = catalogo.filter((item) => item.categoria === 'anime')


  // Função responsável por renderizar cada card
  //  - ele recebe um item da lista e retorna um componente CartaoFilme
  const renderFilmeItem = (filme) => (
    <CartaoFilme
      // Key ajuda a identificar cada item da lista
      key={filme.id}

      // O spread (...) envia as informações do filme como props
      {...filme}

      // Quando clicar no botão ele salva o filme no estado
      onPress={() => setFilmeSelecionado(filme)}
    />
  )

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.logo}>CINELOG</Text>

        <View style={styles.FiltroContainer}>
          {[
            { key: 'todos', label: 'todos' },
            { key: 'filme', label: 'filme' },
            { key: 'série', label: 'série' },
            { key: 'anime', label: 'anime' },
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
            {filmes.map(renderFilmeItem)}

            <Titulo texto={"🎥 Animes"} />
            {filmes.map(renderFilmeItem)}
          </>

        ) : (

          <>
            <Titulo
              texto={categoriaSelecionada === 'filme'
                ? '🎬 Filmes'
                : categoriaSelecionada === 'serie'
                  ? '📺 Séries'
                  : '🎥 Animes'
              }
            />

            {
              catalogo.filter((item) => item.categoria === categoriaSelecionada).map(renderFilmeItem)
            }
          </>
        )
        }

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
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

  FiltroContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },

  filtroBotao: {
    backgroundColor: '#1f1f1f',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginRight: 10,
    marginBottom: 10,
  },

  filtroBotaoAtivo: {
    backgroundColor: "#e50914"
  },

  filtroTexto: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  filtroTextoAtivo: {
    color: '#fff'
  }
});
