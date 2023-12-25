import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function PracticeForm() {
    const [name, setName] = useState("");
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={name}
                onChangeText={setName} 
            />
            <Text style={styles.inputText}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:  1,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        margin: 12
    },
    inputText: {
        fontSize: 30,
        padding: 10                                   
    }
})