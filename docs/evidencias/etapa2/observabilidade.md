# Evidência de Observabilidade - Etapa 2

## Arquitetura

n8n
→ OpenTelemetry
→ Jaeger

n8n /metrics
→ Prometheus
→ Grafana

## Trace distribuído

O workflow Vende+ foi executado com sucesso e rastreado no Jaeger.

Trace observado:

- serviço: vendemais-n8n
- workflow real: Vende+
- spans: 7
- composição: 1 span de workflow + 6 spans de nós
- duração observada no trace: aproximadamente 844 ms

## Métricas

Workflow:

3sMtpprRibUGcpCU

### Volume

1

### Sucessos

1

### Erros

0

### Taxa de erro

0%

### Latência

p50 = 0.75 s

p95 = 0.975 s

p99 = 0.995 s

Observação:

Os percentis atuais refletem a amostra disponível no ambiente acadêmico e não devem ser interpretados como SLO estatístico de produção.

## Custo

Custo variável de API por execução:

R$ 0,00

Motivo:

O modelo qwen2.5-7b-instruct-1m é executado localmente no LM Studio, sem cobrança de API externa.

Custos locais de hardware e energia não estão incluídos nesta métrica.

## Qualidade

A qualidade é controlada por dois critérios:

1. resposta estruturada do LLM nos campos resumo, recomendacao e risco;
2. preservação do score determinístico independente da resposta probabilística.

Resultado funcional validado:

score = 85
classificacao = quente

## Thresholds

Latência p95:

- normal: abaixo de 2 s
- atenção: a partir de 2 s
- crítico: a partir de 5 s

Taxa de erro:

- normal: abaixo de 5%
- atenção: a partir de 5%
- crítico: a partir de 10%

## Alerta

Prioridade:

Alta quando:

- p95 >= 5 s; ou
- taxa de erro >= 10%.

Público:

Responsável técnico do VendeMais.

Canal:

Dashboard Grafana e inspeção operacional da stack local.

## Status

Observabilidade funcional e baseada em dados reais.
