# checkInvite
Código em javascript para criar e validar convites. (utilizado apenas para meio acadêmico, não houve nenhuma integração entre front e back-end)

Funções principais:

* createInvite() - Cria um convite dentro do objeto que lista todos os convites.
* pushGuess() - Coloca alguem nas listas de convidados de um convite.
* checkInvite - Verifica se um convidado faz parte de um convite.

Além disso existe uma função especial, populateTestInvites(), para popular o objeto dos convites com valores para fins de teste do projeto.


Devido ao código ter sido criado para fins academicos, ainda não houve a integração do objeto dos convites com algum banco de dados ou arquivo externo. Sendo assim, para utilizar das funções principais é necessário instânciar a função checkInviteSystem() à uma variável para ter acesso a suas funções internas. 
Exemplo: const system = checkInviteSystem();

É possível também, passar o true como parametro na função para que ao iniciar o sistema pelo metodo init(), seja também iniciado automaticamente a função populateTestInvites().
