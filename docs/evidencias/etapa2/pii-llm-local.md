# Evidência Funcional - Sanitização de PII e LLM Local

## Data

29/10/2026

## Workflow

Vende+

## Fluxo validado

Ao clicar em Executar fluxo de trabalho
→ Dados de Teste
→ Validar Lead
→ Sanitizar PII
→ Análise LLM Local
→ Enriquecer e Qualificar

## Resultado da execução

Todos os seis nós foram executados com sucesso.

## Sanitização de PII

Antes da chamada ao LLM, os seguintes campos identificadores são removidos:

- nome;
- e-mail.

O LLM recebe apenas os dados necessários para análise comercial, incluindo:

- domínio do e-mail;
- empresa;
- cargo;
- origem.

A sanitização registra explicitamente:

pii_sanitizada = true
estrategia = supressao
destino = LLM_LOCAL
transferencia_internacional = false

## LLM

Modelo utilizado:

qwen2.5-7b-instruct-1m

Runtime:

LM Studio local

Endpoint:

http://host.docker.internal:1234/v1/chat/completions

A execução ocorre localmente e não utiliza provedor de LLM externo.

## Governança

A resposta do LLM é utilizada apenas como análise textual complementar.

O score e a classificação comercial permanecem determinísticos e independentes do modelo.

Isso evita que uma saída probabilística altere a regra de negócio já validada na Etapa 1.

## Status

APROVADO
