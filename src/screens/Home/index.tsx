import {Text,View,TextInput,TouchableOpacity,FlatList,Alert} from "react-native";
import React, {useState} from "react";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {

 const [participants, setParticipants] = useState<string[]> ([]);
 const [participantName, setParticipantName] = useState ('');


  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
       return Alert.alert("Participante existe", "Participante já existe na lista ");
    }
    setParticipants(prevState => [...prevState,participantName])    
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.eventName}>Reunião 14h</Text>
        <Text style={styles.eventDate}>Seta, 18 de Novembro de 23</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor={"#6b6b6b"}
            onChangeText={setParticipantName}
            value = {participantName}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantAdd}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList //Vai renderizando os itens aos poucos conforme aprarece na tela, diferente do Scrow Viewl
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ningéum chegou no evento ainda? Adicione mais participantes!
            </Text>
          )}
        />
      </View>
    </>
  );
}
