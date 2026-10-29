# Política de Retenção e Exclusão - VendeMais

## Objetivo

Definir controles técnicos para retenção mínima e exclusão de dados associados às execuções do ambiente DEV.

## PROD

O ambiente público em GitHub Pages não possui banco de dados de leads.

Os dados digitados na interface pública não são persistidos pela aplicação.

## DEV

O ambiente DEV utiliza n8n com dados sintéticos.

O n8n mantém registros técnicos de execução para depuração, observabilidade e evidência acadêmica.

## Mecanismo real de exclusão

A exclusão automática é realizada pelo mecanismo nativo de pruning do n8n.

Configuração:

EXECUTIONS_DATA_PRUNE=true

EXECUTIONS_DATA_MAX_AGE=168

EXECUTIONS_DATA_PRUNE_MAX_COUNT=5000

Isso significa:

- execuções finalizadas com mais de 168 horas tornam-se elegíveis à exclusão;
- também existe limite quantitativo de 5.000 execuções;
- o mecanismo é aplicado automaticamente pelo runtime n8n.

## Minimização

O ambiente da disciplina utiliza dados sintéticos.

PII é sanitizada antes de qualquer chamada ao LLM.

## Governança

Caso o projeto evolua para dados reais, os períodos deverão ser reavaliados conforme finalidade, base legal e requisitos regulatórios.
