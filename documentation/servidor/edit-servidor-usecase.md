# Adicionar no Servidor

## Dados
* Nome
* Matrícula
  * Padrão: /^[0-9]{12}$/

# Fluxo primário
1. Obter dados do frontEnd
2. Consultar se o Servidor existe
5. Alterar dados do Servidor
6. Retornar o dados alterados

# Fluxo alternativo 1: Servidor não existe
1. Retornar um erro de servidor não existente

# Fluxo alternativo 2: Matrícula inválida
1. Retornar erro de matrícula inválida
