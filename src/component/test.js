import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import NfcManager, { Ndef, NfcTech } from 'react-native-nfc-manager';
import CryptoJS from "react-native-crypto-js";

NfcManager.start();

function NFCScanner() {
  const [isValable, setIsvalable] = useState(null);
  const [userData, setUserData] = useState([]);

  async function readNdef() {
    await NfcManager.requestTechnology(NfcTech.Ndef)
    try {
      // Vérification de l'intégrité de la carte
      const tag = await NfcManager.ndefHandler.getNdefMessage()
      const decrypted = CryptoJS.AES.decrypt(tag.ndefMessage[0].payload.toString(), "S3cr3tK3y");
      // const cipherText = Ndef.text.decodePayload(decrypted)
      // const uid = bytes.toString(CryptoJS.enc.)

    console.log(tag.ndefMessage[0].payload.toString());
    //   if (uid.length >= 32) {
    //     fetch(`http://fongo.artrevolutionlabel.com/api/etudiants/${uid}`)
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error('Network response failed');
    //       }
    //         return response.json();
    //       })
    //     .then(data => {
    //       if (data.data) {
    //         setUserData(data);
    //         setIsvalable(data.data["valable"]);
    //       } else {
    //         Alert.alert("Carte invalide");
    //       }
    //     })
    //       .catch(err => {
    //         Alert.alert("Erreur de réseau. Veuillez vérifier votre connexion.");
    //       });
    //    } else {
    //     Alert.alert("Carte invalide ou identifiant modifié");
    //    }
    } catch (ex) {
     console.log("je suis",ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
    
  }

  useEffect(() => {
    async function checkNFCEnabled() {
      const isEnabled = await NfcManager.isEnabled();
      console.log(isEnabled);
      if (!isEnabled) {
        if (Platform.OS === 'ios') {
          Alert.alert(
            'NFC désactivé',
            'Veuillez activer NFC dans les paramètres pour utiliser cette fonctionnalité.'
          );
        } else {
          Alert.alert(
            'NFC désactivé',
            'Voulez-vous activer le NFC ?',
            [
              { text: 'Oui', onPress: () => NfcManager.goToNfcSetting() },
              { text: 'Non', onPress: () => console.log('NFC non activé') }
            ]
          );
        }
      }
    }

    checkNFCEnabled();
  }, []);

readNdef()
  return null;
}

export default NFCScanner;
