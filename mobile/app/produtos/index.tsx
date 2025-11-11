import React, { useEffect, useState } from "react";
import { View, FlatList, Alert } from "react-native";
import { Button, Card, Text, ActivityIndicator } from "react-native-paper";
import produtoService, { Produto } from "../../script/produtoService";
import { useRouter } from "expo-router";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const carregarProdutos = async () => {
    setLoading(true);
    try {
      const dados = await produtoService.listar();
      setProdutos(dados);
    } catch {
      Alert.alert("Erro", "Não foi possível carregar os produtos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5", padding: 10 }}>
      <Button
        mode="contained"
        onPress={() => router.push("/produtos/novo")}
        style={{ marginBottom: 10, backgroundColor: "#1976d2" }}
      >
        Novo Produto
      </Button>

      {loading ? (
        <ActivityIndicator animating color="#1976d2" />
      ) : (
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id?.toString() ?? Math.random().toString()}
          renderItem={({ item }) => (
            <Card style={{ marginBottom: 10 }}>
              <Card.Title title={item.nome} subtitle={`Preço: R$${item.preco}`} />
              <Card.Actions>
                <Button onPress={() => router.push(`/produtos/${item.id}`)}>Editar</Button>
                <Button
                  textColor="red"
                  onPress={async () => {
                    try {
                      await produtoService.excluir(item.id!);
                      carregarProdutos();
                    } catch {
                      Alert.alert("Erro", "Não foi possível excluir o produto.");
                    }
                  }}
                >
                  Excluir
                </Button>
              </Card.Actions>
            </Card>
          )}
        />
      )}
    </View>
  );
}
