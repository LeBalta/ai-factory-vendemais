# ADR-002 - Estratégia de disponibilização e separação de ambientes

## Status

Aceito.

## Contexto

O VendeMais precisava de um ambiente de desenvolvimento isolado e de uma aplicação pública que pudesse ser acessada sem depender da máquina utilizada para desenvolvimento.

A solução também precisava permitir versionamento, CI/CD, rollback e evolução segura nas etapas seguintes da disciplina.

## Drivers da decisão

- custo;
- simplicidade operacional;
- URL pública;
- CI/CD;
- separação DEV/PROD;
- versionamento;
- capacidade de rollback;
- prazo da entrega;
- preservação do workflow low-code.

## Alternativas avaliadas

### Render

Vantagens:

- deploy por Git;
- suporte a containers;
- URL pública;
- possibilidade de backend.

Desvantagens observadas durante a implementação:

- o workspace disponível estava suspenso;
- o deploy dependeria de regularização da conta.

### Railway

Vantagens:

- integração com GitHub;
- suporte a containers;
- URL pública.

Desvantagens observadas:

- o período gratuito disponível havia expirado;
- seria necessária mudança de plano.

### GitHub Pages + GitHub Actions

Vantagens:

- custo zero para o escopo atual;
- integração direta com GitHub;
- HTTPS público;
- CI/CD nativo;
- histórico das implantações;
- independência da máquina local;
- rollback pelo versionamento Git.

Desvantagens:

- não executa n8n;
- não possui backend server-side para o fluxo atual;
- futuras integrações privadas poderão exigir outra plataforma.

## Decisão

Foi adotada a seguinte separação:

DEV:

n8n + Docker + LM Studio local

PROD:

GitHub Pages

CI/CD:

GitHub Actions

## Evolução na Etapa 2

O ambiente DEV passou a incluir um LLM local por LM Studio.

O n8n comunica-se com o LM Studio pelo endereço:

http://host.docker.internal:1234

O modelo atualmente utilizado é:

qwen2.5-7b-instruct-1m

Antes da chamada ao modelo, o workflow executa sanitização de PII.

O LLM é utilizado somente para análise textual complementar.

A pontuação e a classificação comercial permanecem determinísticas e independentes da resposta do modelo.

## Segurança e privacidade

A arquitetura da Etapa 2 mantém:

- `.env` fora do Git;
- `.env.example` sem secrets reais;
- auditoria com Gitleaks;
- dados sintéticos no desenvolvimento;
- PII removida antes do LLM;
- execução do modelo local;
- nenhuma transferência internacional na chamada atual ao LLM.

## Consequências positivas

- PROD continua público e independente da máquina local;
- DEV pode evoluir sem regressão do ambiente público;
- processamento do LLM ocorre localmente;
- redução de exposição de dados pessoais;
- qualificação comercial permanece reproduzível;
- fluxo low-code continua versionado;
- rollback permanece possível via Git.

## Consequências negativas

- o PROD ainda não executa o workflow n8n;
- o LLM local depende da máquina DEV e do LM Studio ativo;
- observabilidade completa ainda precisa ser adicionada;
- integrações reais com CRM ou backend exigirão nova evolução arquitetural.

## Conclusão

A arquitetura escolhida atende ao escopo atual mantendo separação clara entre desenvolvimento e produção e permitindo evolução incremental sem substituir componentes que já estavam validados.
