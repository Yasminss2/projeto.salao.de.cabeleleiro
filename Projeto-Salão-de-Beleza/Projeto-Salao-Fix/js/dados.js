// Dados do cardápio. Edite para alterar os itens.
const ITENS = [
  { nome: "Açaí - 300ml",      descricao: "Que tal 300ml da energia gelada que faltava no seu dia? Açaí cremoso com morango, banana, coco, granola e blueberry pra viciar na primeira colherada!",        preco: "R$ 16,00", imagem: "../img/acai1.jpeg" },
  { nome: "Açaí - 500ml",      descricao: "500ml de pura tentação? Açaí com morango, brigadeiro, amora, M&M’s, granola e pedaços de chocolate pra transformar qualquer vontade em vício!",        preco: "R$ 24,00", imagem: "../img/acai3.jpeg" },
  { nome: "Açaí - 500ml Tradicional",      descricao: "Já imaginou 500ml do clássico que nunca falha? Açaí com morango, banana, granola crocante e paçoca!", preco: "R$ 24,00", imagem: "../img/acai4.jpeg" },
  { nome: "Tigelão - 1L", descricao: "Já imaginou um tigelão de 1L feito pra quem não brinca em serviço? Açaí com todos os ingredientes que você merece!",      preco: "R$ 35,00", imagem: "../img/acai5.jpeg" }
];

// Descontos por tipo de cliente
const DESCONTOS = {
  "N": 0,     // Comum
  "P": 0.20,  // Preferencial
  "V": 0.15   // VIP
};
