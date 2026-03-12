import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Pressable, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const salvarRegistro = () => {
  Alert.alert("Registro salvo");

};
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <Text style={styles.titulo}>CADASTRO DE USUÁRIO</Text>

      <View style={styles.card}>

        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome aqui"
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email aqui"
        />

        <Text style={styles.label}>Data de nascimento:</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
        />

        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone aqui"
        />

        <Pressable
          onPress={salvarRegistro}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#0056b3' : '#007bff'
            },
            styles.button
          ]}
        >
          <Text style={styles.textoBotao}>SALVAR</Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 20,
    marginBottom: 80,
    fontWeight: 'bold',

  },

  card: {
    width: '85%',
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',

    // sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold'
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10
  },

  button: {
    width: '30%',
    alignSelf: 'center',
    marginTop: 15,
    padding: 10,
    borderRadius: 10
  },
  textoBotao: {
    textAlign: 'center'
  }

});