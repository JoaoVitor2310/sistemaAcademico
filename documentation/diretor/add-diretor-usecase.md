# Adicionar no Diretor

## Dados
* Servidor
* Campus
* Data inicio
* formato data: dd/mm/aaaa
* Data fim
* formato data: dd/mm/aaaa


# Fluxo primário
1. Obter dados do frontEnd
2. Consultar se existe um diretor com os dados recebidos acima
3. Verificar existência do servidor
4. Verificar existência do campus
5. Criar um diretor com os dados
6. Retornar o dados gerados

# Fluxo alternativo 1: Diretor já existe
1. Retornar um erro de diretor existente

# Fluxo alternativo 2: Data inicio do Diretor errado
1. Retornar erro de data inicio errada

# Fluxo alternativo 3: Data fim do Diretor errado
1. Retornar erro de data fim errada

# Fluxo alternativo 4: Campus não existente
1. Retornar erro de campus não existente

# Fluxo alternativo 5: Servidor não existente
1. Retornar erro de servidor não existente
