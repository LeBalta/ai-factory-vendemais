# Otimização Medida - Etapa 2

## Objetivo

Reduzir a quantidade máxima de tokens gerados pelo LLM local sem alterar a regra de negócio.

## Alteração

Antes:

max_tokens = 220

Depois:

max_tokens = 120

## Justificativa

A resposta esperada contém somente:

- resumo;
- recomendacao;
- risco.

O limite anterior era superior ao necessário para a estrutura de saída.

A redução:

- diminui geração desnecessária;
- reduz potencial latência;
- reduz consumo computacional local;
- preserva integralmente a lógica determinística.

## Baseline anterior

p50 = 0.750 s

p95 = 0.975 s

p99 = 0.995 s

## Medição após otimização

Volume acumulado = 1

p50 = 0.75 s

p95 = 0.975 s

p99 = 0.995 s

## Governança

A otimização não altera:

- sanitização de PII;
- modelo utilizado;
- score;
- classificação;
- estrutura do workflow;
- política de segurança.

## Observação metodológica

O ambiente acadêmico possui amostra reduzida.

Os números demonstram medição real antes/depois, mas não constituem benchmark estatístico de produção.
