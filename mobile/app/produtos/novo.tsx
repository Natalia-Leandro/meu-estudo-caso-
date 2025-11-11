import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import produtoService from "../../script/produtoService";
import { useRouter } from "expo-router";

export default function NovoProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const router = useRouter();

  const salvar = async () => {
    if (!nome || !preco) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    try {
      await produtoService.criar({ nome, preco: parseFloat(preco) });
      Alert.alert("Sucesso", "Produto cadastrado!");
      router.back();
    } catch {
      Alert.alert("Erro", "Não foi possível salvar o produto.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput label="Nome" value={nome} onChangeText={setNome} style={{ marginBottom: 10 }} />
      <TextInput
        label="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      <Button mode="contained" onPress={salvar}>
        Salvar
      </Button>
    </View>
  );
}
