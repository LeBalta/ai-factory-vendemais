# Procedimento de Rotação de Credenciais

## Objetivo

Definir um processo reproduzível para substituição de credenciais do
VendeMais em caso de expiração, comprometimento, troca de fornecedor,
mudança de ambiente ou suspeita de exposição.

## Princípios

Credenciais reais nunca devem ser inseridas diretamente no código,
workflow exportado, README, arquivos de evidência ou histórico Git.

DEV e PROD devem manter credenciais independentes.

## Ambiente DEV

As credenciais de desenvolvimento devem permanecer no arquivo local:

.env

Esse arquivo não é versionado.

## Ambiente PROD

Quando uma integração que exija secret for ativada em produção,
a credencial deverá ser cadastrada diretamente no mecanismo de secrets
da plataforma de produção.

Nenhuma credencial de DEV poderá ser reutilizada em PROD.

## Procedimento de rotação

1. Gerar nova credencial no provedor.
2. Manter a credencial antiga válida apenas durante a transição, quando aplicável.
3. Atualizar exclusivamente o secret do ambiente correspondente.
4. Executar smoke test da integração.
5. Confirmar funcionamento do novo secret.
6. Revogar imediatamente a credencial anterior.
7. Registrar data, ambiente, motivo e responsável pela rotação.
8. Executar Gitleaks sobre o diretório e histórico Git.
9. Confirmar que nenhuma credencial foi introduzida no repositório.

## Em caso de vazamento no Git

Se uma credencial real for encontrada no histórico:

1. revogar imediatamente a credencial no provedor;
2. gerar uma credencial nova;
3. nunca considerar suficiente apenas apagar o arquivo atual;
4. analisar a necessidade de remoção do segredo do histórico Git;
5. executar novamente o Gitleaks;
6. registrar o incidente e as ações corretivas.

## Situação atual

A auditoria realizada em 29/10/2026 não encontrou secrets reais no
repositório ou no histórico analisado.
