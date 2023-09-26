# Atualizar dados do Campus

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
1. Consultar se o Instituto existe.
1. Consultar se o Campus existe.
1. Atualizar Campus com os dados fornecidos.
1. Retornar os novos dados do Campus editado.

## Fluxo alternativo 1: Instituto não existe
1. Retornar erro de Instituto não existente

## Fluxo alternativo 2: Campus não existe
1. Retornar um erro de Campus inexistente
