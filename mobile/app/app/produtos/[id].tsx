import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Alert } from "react-native";
import { Card, Button, Text, FAB } from "react-native-paper";
import { useRouter } from "expo-router";
import produtoService, { Produto } from "../../scripts/produtoService";

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const carregarProdutos = async () => {
    setLoading(true);
    try {
      const lista = await produtoService.listar();
      setProdutos(lista);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  // Exclusão igual ao AV2 Alunos
  const handleDelete = (id: number) => {
    Alert.alert(
      "Excluir Produto",
      "Deseja realmente excluir este produto?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              await produtoService.excluir(id);

              // Remove da lista sem recarregar a rota
              setProdutos((anterior) =>
                anterior.filter((produto) => produto.id !== id)
              );

              Alert.alert("Sucesso", "Produto excluído com sucesso!");
            } catch (error) {
              Alert.alert("Erro", "Não foi possível excluir o produto.");
            }
          },
        },
      ]
    );
  };

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id?.toString() ?? ""}
        renderItem={({ item }) => (
          <Card
            style={{
              marginBottom: 12,
              backgroundColor: "#faf7fc",
            }}
            mode="elevated"
            pointerEvents="auto"
          >
            <Card.Title
              title={item.nome}
              subtitle={`R$ ${Number(item.preco ?? 0).toFixed(2)}`}
            />

            <Card.Actions style={{ pointerEvents: "auto" }}>
              <Button
                mode="outlined"
                onPress={() => router.push(`/produtos/${item.id}`)}
                style={{ marginRight: 8 }}
                pointerEvents="auto"
                accessibilityRole="button"
              >
                Editar
              </Button>

              <Button
                mode="outlined"
                textColor="#d32f2f"
                onPress={() => handleDelete(item.id!)}
                pointerEvents="auto"
                accessibilityRole="button"
              >
                Excluir
              </Button>
            </Card.Actions>
          </Card>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Nenhum produto cadastrado.
          </Text>
        }
      />

      <FAB
        icon="plus"
        style={{
          position: "absolute",
          right: 16,
          bottom: 16,
          backgroundColor: "#1976d2",
        }}
        onPress={() => router.push("/produtos/novo")}
        color="#fff"
      />
    </View>
  );
}
