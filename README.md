# EIFChar-Telemetria
  Projeto com o intuito de facilitar a troca de informações entre um carro eletrico e o box, durante uma bateria de testes.

# Funcionamento do projeto
  O projeto é composto por 3 aplicações:
    
    Client Web (ReactJS) - Pagina responsavel por mostrar em uma interface grafica, um painel para envio de informações para o veiculo, um painel que mostra as ultimas informações recebidas e um historico de todas as baterias feitas, assim possibilitando tanto analise em tempo real do dados quanto analise após a conclusão da bateria.
    
    Server (NodeJs) - O servidor é sesponsavel por fazer o controle das rotas do client web, fazer a comunicação em tempo real entre o client web e o app mobile, e salvar as informações das baterias num banco de dados, para consulta e analise futura.
    
    App mobile (React Native)- É a parte responsavel por fazer a comunicação entre o carro e o server
