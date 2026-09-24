# Auditoria do Protótipo - VendeMais

## Contexto

O VendeMais é uma automação B2B para enriquecimento de leads de CRM.

O protótipo herdado foi descrito como um cenário originalmente executado manualmente por meio de Run once, após a interrupção do agendamento para evitar consumo da quota pessoal do criador.

## Objetivo da auditoria

Identificar lacunas existentes antes da evolução do protótipo.

## Lacunas iniciais

### Operação
- [ ] Execução ainda depende de ação manual
- [ ] Agendamento precisa ser restaurado de forma controlada
- [ ] Dependência de conta pessoal precisa ser eliminada

### Segurança
- [ ] Verificar existência de secrets hardcoded
- [ ] Verificar tokens em workflows
- [ ] Verificar histórico Git
- [ ] Implementar secrets por ambiente

### Deploy
- [ ] Separar DEV e PROD
- [ ] Automatizar deploy
- [ ] Implementar rollback

### Testes
- [ ] Smoke test de disponibilidade
- [ ] Smoke test de execução
- [ ] Smoke test de falha controlada

### Documentação
- [x] README inicial
- [ ] ADR-001
- [ ] ADR-002
- [ ] Diagrama C4 nível 1
- [ ] Diagrama C4 nível 2
- [ ] CHANGELOG
- [ ] Post-mortem
