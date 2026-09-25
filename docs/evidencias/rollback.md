# Evidência de Rollback

## Objetivo

Demonstrar que o projeto pode retornar a uma versão anterior conhecida.

## Versão atual

Commit funcional:
ca88c71

## Procedimento de rollback

1. Identificar o commit anterior:

git log --oneline

2. Criar branch temporária de rollback:

git switch -c rollback-test HEAD~1

3. Validar conteúdo anterior:

git status
git log --oneline -1

4. Retornar à branch principal:

git switch main

5. Remover a branch temporária:

git branch -D rollback-test

## Critério de sucesso

O repositório retorna temporariamente ao commit anterior sem alterar ou perder a branch main.
