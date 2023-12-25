import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";

export default function MultiLine() {
    const [name, setName] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
                style={styles.input} 
                value={name} 
                onChangeText={setName} 
                placeholder="email@example.com" 
                autoCorrect={true}
                autoCapitalize="none"
                // secureTextEntry
                // keyboardType="numeric"
            />
            <TextInput style={[styles.input, styles.multilineText]} placeholder="message" multiline />
            <Text style={styles.text}>My name is {name}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    input: {
        height: 40, 
        margin: 12,
        padding: 10,
        borderWidth: 1,
    },
    text: {
        fontSize: 30,
        padding: 10
    },
    multilineText: {
        minHeight: 100,
        textAlignVertical: "top",
    }
  });
  