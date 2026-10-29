# AI Factory - VendeMais

## Visão geral

O VendeMais é uma solução de qualificação de leads B2B evoluída ao longo da disciplina AI Factory: Build, Deploy and Showcase.

Na Etapa 1, o protótipo foi transformado em uma solução versionada, testável, publicável e com processo de rollback.

Na Etapa 2, o foco passou a ser segurança, conformidade LGPD, tratamento de PII e integração controlada com LLM local.

## Aplicação pública

https://lebalta.github.io/ai-factory-vendemais/

## Repositório

https://github.com/LeBalta/ai-factory-vendemais

## Problema

O cenário original dependia de operação manual e não possuía processo confiável de publicação, versionamento, CI/CD, rollback, tratamento de dados pessoais ou governança de uso de IA.

## Arquitetura atual

### DEV

O ambiente de desenvolvimento utiliza:

- n8n em Docker;
- LM Studio local;
- modelo qwen2.5-7b-instruct-1m;
- dados sintéticos;
- sanitização de PII;
- qualificação determinística;
- análise textual complementar por LLM local.

### PROD

O ambiente público utiliza:

- GitHub Pages;
- HTML;
- CSS;
- JavaScript;
- HTTPS;
- deploy por GitHub Actions;
- ausência de persistência de leads.

## Fluxo DEV - Etapa 2

Manual Trigger
→ Dados de Teste
→ Validar Lead
→ Sanitizar PII
→ Análise LLM Local
→ Enriquecer e Qualificar

O workflow está versionado em:

workflows/vendemais-dev.json

## Sanitização de PII

Antes de qualquer chamada ao LLM, o fluxo remove os identificadores diretos utilizados no teste:

- nome;
- e-mail.

O LLM recebe somente os dados necessários para a análise comercial:

- domínio do e-mail;
- empresa;
- cargo;
- origem.

A execução registra:

pii_sanitizada = true  
estrategia = supressao  
destino = LLM_LOCAL  
transferencia_internacional = false

## LLM local

Modelo:

qwen2.5-7b-instruct-1m

Runtime:

LM Studio

O n8n acessa o servidor local do LM Studio por:

http://host.docker.internal:1234/v1/chat/completions

A análise ocorre localmente e não depende de provedor externo de LLM.

## Regra de qualificação

O LLM não determina o score comercial.

A regra permanece determinística.

Score inicial:

50 pontos.

Regras:

- cargo informado: +15;
- e-mail terminado em .com.br: +10;
- empresa com cinco ou mais caracteres: +10.

Classificação:

- 80 ou mais: quente;
- 60 a 79: morno;
- abaixo de 60: frio.

No cenário sintético atual, o resultado permanece:

score = 85  
classificação = quente

## Governança da IA

A resposta do LLM é utilizada exclusivamente como análise textual complementar.

O modelo não altera:

- score;
- classificação;
- regra comercial principal.

Essa separação reduz o risco de uma saída probabilística alterar uma decisão determinística já validada.

## Segurança

Foram implementados os seguintes controles:

- `.env` local não versionado;
- `.env.example` versionado sem secrets reais;
- `.gitignore` protegendo arquivos de ambiente;
- auditoria do histórico Git com Gitleaks;
- auditoria do diretório atual com Gitleaks;
- nenhum vazamento encontrado;
- procedimento de rotação de credenciais documentado;
- separação conceitual de credenciais DEV e PROD.

Evidência:

docs/evidencias/etapa2/auditoria-gitleaks.md

## LGPD

A documentação de conformidade inclui:

- mapa de dados pessoais;
- finalidade dos campos;
- bases legais potenciais;
- princípio da minimização;
- proibição de dados sensíveis desnecessários;
- política de retenção e exclusão;
- uso exclusivo de dados sintéticos nesta etapa.

Arquivos:

docs/lgpd/mapa-dados-pessoais.md  
docs/lgpd/politica-retencao-exclusao.md

## Retenção

O PROD atual não possui banco de dados de leads.

A retenção persistente de dados inseridos na interface pública é zero.

No ambiente acadêmico DEV, somente dados sintéticos devem ser utilizados.

## CI/CD

Pipeline:

.github/workflows/deploy-pages.yml

Fluxo:

main
→ GitHub Actions
→ GitHub Pages
→ PROD

## Smoke tests

Os smoke tests da Etapa 1 permanecem documentados em:

tests/smoke-tests.md

## Rollback

Evidência:

docs/evidencias/rollback.md

Antes da evolução funcional da Etapa 2 foi criado também o baseline:

baseline-etapa2-2026-10-29

## Post-mortem

docs/post-mortem/incidente-webhook.md

## Evidências da Etapa 2

docs/evidencias/etapa2/auditoria-gitleaks.md  
docs/evidencias/etapa2/pii-llm-local.md

## Observabilidade

A instrumentação, as cinco métricas, os thresholds, o dashboard e o alerta funcional serão incorporados na próxima evolução técnica da Etapa 2.

Nenhuma métrica será declarada como resultado antes de existir evidência reproduzível no sistema.

## Otimização

A otimização medida com comparação antes/depois será realizada após a instrumentação, para que o ganho seja mensurado com evidência objetiva.

## Troubleshooting

### n8n não acessa o LM Studio

Confirmar que o servidor do LM Studio está ativo na porta 1234 e acessível pelo Docker.

Teste:

docker exec vendemais-n8n-dev node -e "fetch('http://host.docker.internal:1234/v1/models').then(r=>r.text()).then(console.log).catch(console.error)"

### n8n não inicia

Executar:

docker compose -f ".\infra\n8n-dev\docker-compose.yml" up -d

### Verificar o container

docker compose -f ".\infra\n8n-dev\docker-compose.yml" ps

### Verificar secrets expostos

Executar Gitleaks antes de qualquer release ou entrega.

## Status da Etapa 2

Concluído:

- segurança de credenciais;
- auditoria Gitleaks;
- documentação LGPD;
- política de retenção;
- sanitização real de PII;
- chamada real a LLM local;
- preservação da qualificação determinística.

Em implementação:

- observabilidade;
- cinco métricas;
- thresholds;
- alerta funcional;
- dashboard;
- otimização medida antes/depois.

---

# Etapa 2 - Segurança, LGPD e Observabilidade

## Segurança

- `.env` local protegido pelo `.gitignore`;
- `.env.example` sem credenciais reais;
- auditoria Gitleaks;
- rotação de credenciais documentada;
- versão n8n fixada em 2.39.8.

## LGPD

- mapa de dados pessoais;
- minimização de dados;
- sanitização de PII antes do LLM;
- LLM executado localmente;
- política de retenção;
- exclusão automática de execuções pelo pruning do n8n.

## Observabilidade

Stack:

n8n  
→ OpenTelemetry  
→ Jaeger

n8n `/metrics`  
→ Prometheus  
→ Grafana

Dashboard:

VendeMais - Observabilidade Etapa 2

Métricas:

- latência p50/p95/p99;
- custo;
- erro;
- volume;
- qualidade.

## Alertas

Thresholds:

Latência p95:

- atenção: >= 2 s;
- crítico: >= 5 s.

Taxa de erro:

- atenção: >= 5%;
- crítico: >= 10%.

Público:

Responsável técnico do VendeMais.

Canal:

Prometheus/Grafana.

O mecanismo de alerta foi validado por uma regra acadêmica de demonstração sem indução de falha real.

## Otimização

A chamada ao LLM foi otimizada reduzindo:

max_tokens: 220 → 120

A mudança reduz geração desnecessária e preserva a estrutura de resposta e a regra determinística.

Evidência:

docs/evidencias/etapa2/otimizacao.md

## Evidências

docs/evidencias/etapa2/auditoria-gitleaks.md  
docs/evidencias/etapa2/pii-llm-local.md  
docs/evidencias/etapa2/observabilidade.md  
docs/evidencias/etapa2/otimizacao.md
