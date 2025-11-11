import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import produtoService from "../../script/produtoService";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function EditarProduto() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    const carregar = async () => {
      try {
        const produto = await produtoService.obter(Number(id));
        setNome(produto.nome);
        setPreco(produto.preco.toString());
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar o produto.");
      }
    };
    carregar();
  }, []);

  const salvar = async () => {
    try {
      await produtoService.atualizar(Number(id), { nome, preco: parseFloat(preco) });
      Alert.alert("Sucesso", "Produto atualizado!");
      router.back();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o produto.");
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
        Atualizar
      </Button>
    </View>
  );
}
