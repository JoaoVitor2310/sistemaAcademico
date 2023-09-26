# Adicionar novo Campus

## Dados
* Nome do campus
* Endereço do campus
* Telefone
  * Formato
    * celular: DDXXXXXXXXX
    * fixo: DDXXXXXXXX
  * Exemplo
    * celular: 2298979695
    * fixo: 2226251234
* Identificação do Instituto associado



## Fluxo primário
1. Obter dados do frontEnd.
<!-- 1. Consultar se o Instituto existe. -->
1. Consultar se o Campus já existe.
1. Criar Campus com os dados fornecidos.
1. Retornar os dados do Campus criado.

<!-- ## Fluxo alternativo 1: Instituto não existe
1. Retornar erro de Instituto não existente -->

## Fluxo alternativo 2: Campus já existe
1. Retornar erro de Campus já existente com os dados fornecidos

<!-- ## Fluxo alternativo 3: Formato de telefone inválido
1. Retornar erro de formato de telefone inválido -->
