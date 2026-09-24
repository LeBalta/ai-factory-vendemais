# Matriz de Decisão de Stack

Os pesos foram definidos antes da atribuição das notas.

Escala: 1 = muito desfavorável; 5 = muito favorável.

| Critério | Peso | Make | n8n | Código tradicional |
|---|---:|---:|---:|---:|
| Simplicidade operacional | 25 | 5 | 4 | 2 |
| Custo | 20 | 2 | 4 | 4 |
| Versionamento | 20 | 2 | 5 | 5 |
| Automação | 15 | 4 | 5 | 5 |
| Manutenibilidade | 10 | 5 | 4 | 3 |
| Observabilidade | 10 | 3 | 4 | 5 |

## Resultado ponderado

- Make: 345 / 500 = 69%
- n8n: 435 / 500 = 87%
- Código tradicional: 385 / 500 = 77%

## Decisão

A stack escolhida para evolução do VendeMais é o n8n.

## Fundamentação

O n8n apresenta o melhor equilíbrio entre simplicidade operacional, custo, versionamento e automação.

O workflow pode ser exportado como JSON e mantido no Git, atendendo diretamente à exigência da disciplina para projetos low-code.

A opção também reduz a necessidade de desenvolver infraestrutura e lógica de orquestração do zero, preservando o objetivo da atividade: evoluir o protótipo herdado em vez de reescrevê-lo.

O Make apresentou maior simplicidade operacional imediata, porém menor controle sobre versionamento e maior dependência da plataforma.

A implementação tradicional ofereceria amplo controle técnico, mas acrescentaria desenvolvimento desnecessário para o escopo atual.
