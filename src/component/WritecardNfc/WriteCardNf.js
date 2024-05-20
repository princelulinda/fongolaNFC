import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import NfcManager, { Ndef, NfcTech } from 'react-native-nfc-manager';
import CryptoJS from 'react-native-crypto-js'

NfcManager.start();
const WriteNFCPage = () => {
  const [matricule, setMatricule] = useState('');

 
  const handleNFCWrite = async () => {



    try {
  
      await NfcManager.requestTechnology(NfcTech.Ndef);
  const cipherText = CryptoJS.AES.encrypt(matricule, "S3cr3tK3y").toString()
      const payload = Ndef.text.encodePayload(cipherText)
      const bytes = Ndef.encodeMessage([Ndef.textRecord(payload)]);
  
      if (bytes) {
        await NfcManager.ndefHandler 
          .writeNdefMessage(bytes); 
        result = true;
      }
    } catch (ex) {
      console.warn(ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }

    try {
      let tech = NfcTech.Ndef;
      
      Ndef.record(payload=payload)
      alert('Matricule écrit avec succès dans le tag NFC !');
    } catch (ex) {
      console.warn('NFC write error', ex);
      alert('Une erreur s\'est produite lors de l\'écriture du matricule dans le tag NFC.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Écrire Matricule NFC</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez le matricule"
        value={matricule}
        onChangeText={text => {
          setMatricule(text)
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleNFCWrite}>
        <Text style={styles.buttonText}>Écrire Matricule</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color:"black"
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WriteNFCPage;
