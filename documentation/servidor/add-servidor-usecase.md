# Adicionar no Servidor

## Dados
* Nome
* Matrícula
  * Padrão: /^[0-9]{12}$/

# Fluxo primário
1. Obter dados do frontEnd
2. Consultar se existe um servidor com os dados recebidos acima
3. Criar um servidor com os dados
4. Retornar o dados gerados

# Fluxo alternativo 1: Servidor já existe
1. Retornar um erro de servidor existente

# Fluxo alternativo 2: Matrícula inválida
1. Retornar erro de matrícula inválida