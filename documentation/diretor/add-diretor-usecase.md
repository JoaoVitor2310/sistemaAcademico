# Adicionar no Diretor

## Dados
* Servidor
* Campus
* Data inicio
* formato data: aaaa/mm/dd
* Data fim
* formato data: aaaa/mm/dd


# Fluxo primário
1. Obter dados do frontEnd
2. Consultar se existe um diretor com os dados recebidos acima
3. Verificar existência do servidor
4. Verificar existência do campus
5. Criar um diretor com os dados
6. Retornar o dados gerados

# Fluxo alternativo 1: Diretor já existe
1. Retornar um erro de diretor existente

# Fluxo alternativo 2: Data inicio do Diretor inválida
1. Retornar erro de data inicio inválida

# Fluxo alternativo 3: Data fim do Diretor inválida
1. Retornar erro de data fim inválida

# Fluxo alternativo 4: Data inicio ocorre depois de data fim
1. Retornar erro de data inicio depois de data fim

# Fluxo alternativo 5: Campus não existente
1. Retornar erro de campus não existente

# Fluxo alternativo 6: Servidor não existente
1. Retornar erro de servidor não existente
