# ADR-001 - Adoção do n8n como Stack de Automação

## Status

Aceito.

## Data

2026-09-24

## Contexto

O VendeMais é uma automação B2B destinada ao enriquecimento de leads de CRM.

O protótipo herdado foi descrito como um cenário Make.com, com espelho disponível em n8n. A solução precisa evoluir para uma operação automatizada, versionável, testável e reproduzível.

A decisão deve ainda privilegiar simplicidade de implantação e baixo custo operacional.

## Drivers de decisão

- simplicidade operacional;
- baixo custo;
- versionamento em Git;
- capacidade de automação;
- possibilidade de rollback;
- facilidade de manutenção;
- compatibilidade com o protótipo herdado.

## Alternativas avaliadas

### Make.com

Vantagens:

- interface simples;
- operação visual;
- baixa curva de aprendizado.

Desvantagens:

- versionamento menos natural em Git;
- maior dependência do serviço;
- limitações associadas a quotas e planos da plataforma.

### n8n

Vantagens:

- workflow visual;
- exportação em JSON;
- versionamento em Git;
- possibilidade de execução sob controle do projeto;
- boa adequação a CI/CD;
- permite evolução incremental do protótipo.

Desvantagens:

- exige administração da instância utilizada;
- configuração inicial maior que uma plataforma totalmente gerenciada.

### Código tradicional

Vantagens:

- máximo controle;
- testes e versionamento nativos;
- elevada flexibilidade.

Desvantagens:

- maior esforço de desenvolvimento;
- mais componentes para operar;
- implicaria reconstrução desnecessária de capacidades já existentes no protótipo.

## Decisão

Adotar n8n como mecanismo principal de automação do VendeMais.

## Consequências positivas

- workflow versionável em Git;
- menor complexidade de desenvolvimento;
- facilidade para criar ambientes de desenvolvimento e produção;
- possibilidade de rollback por versão do workflow;
- manutenção visual;
- continuidade da arquitetura herdada.

## Consequências negativas

- necessidade de manter uma instância n8n;
- credenciais precisam ser administradas fora do workflow;
- disponibilidade do sistema passa a depender também da infraestrutura que hospeda o n8n.

## Resultado

A decisão será considerada válida enquanto o n8n atender aos requisitos funcionais, operacionais, de segurança e de custo definidos para o projeto.
