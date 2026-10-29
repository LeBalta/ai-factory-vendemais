# Política de Retenção e Exclusão - VendeMais

## Escopo da versão atual

O ambiente PROD demonstrativo utiliza processamento no navegador e não
possui banco de dados ou mecanismo de persistência de leads.

O ambiente DEV utiliza dados sintéticos definidos no workflow.

Portanto, a versão atual não mantém uma base persistente de dados
pessoais de leads.

## Regra de retenção

### Aplicação PROD atual

Retenção persistente:

0 dias.

Os valores inseridos no formulário são processados durante a sessão do
navegador e não são enviados para banco de dados do projeto.

### Workflow DEV

Somente dados sintéticos devem ser utilizados.

Execuções técnicas do n8n podem existir para fins de desenvolvimento
e observabilidade, mas não devem conter dados pessoais reais durante
esta etapa acadêmica.

## Exclusão

Como não existe banco persistente de leads na versão atual, a exclusão
dos dados processados no PROD ocorre pelo encerramento/atualização da
sessão do navegador.

Para ambientes futuros que introduzam persistência, deverá ser
implementada rotina automática de retenção e exclusão com prazo
formalmente definido.

## Princípio

A ausência de necessidade de retenção é tratada como controle de
privacidade por design: dados que não precisam ser armazenados não são
persistidos.
