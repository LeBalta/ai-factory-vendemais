# Smoke Tests - VendeMais

## Smoke Test 1 - Workflow versionado

Objetivo:
Confirmar que o workflow low-code está presente no repositório.

Comando:
Test-Path ".\workflows\vendemais-dev.json"

Resultado esperado:
True

## Smoke Test 2 - Estrutura Docker DEV

Objetivo:
Confirmar que a infraestrutura local do n8n DEV está presente.

Comando:
Test-Path ".\infra\n8n-dev\docker-compose.yml"

Resultado esperado:
True

## Smoke Test 3 - Container n8n DEV

Objetivo:
Confirmar que o ambiente n8n DEV está em execução.

Comando:
docker compose -f ".\infra\n8n-dev\docker-compose.yml" ps

Resultado esperado:
vendemais-n8n-dev com status Up.
