import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Alert, Platform } from "react-native";
import { Button, Text, FAB } from "react-native-paper";
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

  const handleDelete = (id: number) => {
    if (Platform.OS === "web") {
      const confirmar = window.confirm("Deseja realmente excluir?");
      if (!confirmar) return;

      produtoService.excluir(id).then(() => {
        setProdutos((prev) => prev.filter((p) => p.id !== id));
        alert("Produto excluído com sucesso!");
      });
      return;
    }

    Alert.alert("Excluir Produto", "Deseja realmente excluir este produto?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          await produtoService.excluir(id);
          setProdutos((prev) => prev.filter((p) => p.id !== id));
        },
      },
    ]);
  };

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#ffeaf3" }}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id?.toString() ?? ""}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 16,
              padding: 18,
              backgroundColor: "#ffffff",
              borderRadius: 18,
              borderWidth: 2,
              borderColor: "#ffb6d5",
              shadowColor: "#ff6fa3",
              shadowOpacity: 0.15,
              shadowRadius: 6,
              elevation: 4,
            }}
          >
            {/* Nome */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                marginBottom: 4,
                color: "#ff3e84",
              }}
            >
              {item.nome}
            </Text>

            {/* Preço */}
            <Text
              style={{
                fontSize: 16,
                marginBottom: 18,
                color: "#555",
              }}
            >
              R$ {Number(item.preco).toFixed(2)}
            </Text>

            {/* Botões */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 12,
              }}
            >
              <Button
                mode="outlined"
                icon="pencil"
                compact
                style={{
                  borderColor: "#ff6fa3",
                }}
                textColor="#ff6fa3"
                onPress={() => router.push(`/produtos/${item.id}`)}
              >
                Editar
              </Button>

              <Button
                mode="outlined"
                icon="delete"
                compact
                style={{
                  borderColor: "#ff3e84",
                }}
                textColor="#ff3e84"
                onPress={() => handleDelete(item.id!)}
              >
                Excluir
              </Button>
            </View>
          </View>
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
          backgroundColor: "#ff3e84",
        }}
        onPress={() => router.push("/produtos/novo")}
        color="#fff"
      />
    </View>
  );
}
