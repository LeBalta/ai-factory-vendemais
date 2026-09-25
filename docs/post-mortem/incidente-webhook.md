# Post-mortem - Incidente de Integração do Webhook

## Resumo

Durante a preparação do ambiente DEV, o fluxo inicialmente utilizou Webhook como mecanismo de entrada.

A execução apresentou instabilidade no modo de teste e divergência entre a porta interna do container e a porta publicada no host.

## Impacto

O fluxo não executava de forma previsível durante os testes e aumentava o tempo de diagnóstico.

## Causa

A causa não foi atribuída a uma pessoa.

Os fatores identificados foram:

- diferença entre a porta interna 5678 e a porta externa 5679;
- comportamento temporário do webhook-test do n8n;
- dependência simultânea de browser, PowerShell e workflow para validar a execução.

## Ação corretiva

Para estabilizar a Etapa 1, o fluxo DEV foi simplificado para execução manual com dados sintéticos controlados.

O resultado foi um workflow reproduzível, versionável e executável sem dependência externa.

## Prevenção

- separar testes de lógica dos testes de integração;
- validar fluxo local antes de expor endpoints;
- versionar workflows funcionais antes de novas integrações;
- manter ambientes DEV e PROD separados.
