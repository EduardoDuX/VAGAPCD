<?php
// inclui o arquivo BD.php dentro deste arquivo 
//para que seus metodos fiquem visiveis
include 'BD.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <?php

    //cria um instancia do objeto BD
    $objBD = new BD();
    //Faz a chamada do metodo Connection para conecta com o Banco de Dados
    $objBD->connection();

    if (!empty($_POST)) {
        //chama o metodo UPDATE recebendo os dados do usuário através do metodo $_POST
        $objBD->update($_POST);
        //metodo header faz uma chamada para a tela de listagem
        //depois que realizou a edicao
        header("Location: select.php");
    }

    //Busca os dados no banco de dados pelo ID da URL passando como parametro no metodo FIND
    $objUsuario = $objBD->find($_GET['pk_usuario']);
    ?>

    <form action="edit.php" method="POST">
        <!-- Input Hidden tag que fica oculta para receber o valor do ID do form--->
        <!-- passo os id para a propriedade value -->
        <input type="hidden" name="pk_usuario" value="<?php echo $_GET['pk_usuario']; ?>">

        <label>Nome</label>
        <!-- passo valor do atributo nome para a propriedade value -->
        <input type="text" name="nome" value="<?php echo $objUsuario->nome; ?>"> <br>

        <label>CPF</label>
        <!-- passo valor do atributo cpf para a propriedade value -->
        <input type="text" name="cpf" value="<?php echo $objUsuario->cpf; ?>"> <br>

        <label>Telefone</label>
        <!-- passo valor do atributo telefone para a propriedade value -->
        <input type="text" name="telefone" value="<?php echo $objUsuario->telefone; ?>"> <br>

        <label>email</label>
        <!-- passo valor do atributo e-mail para a propriedade value -->
        <input type="text" name="email" value="<?php echo $objUsuario->email; ?>"> <br>

         <label>rg</label>
        <!-- passo valor do atributo e-mail para a propriedade value -->
        <input type="text" name="rg" value="<?php echo $objUsuario->rg; ?>"> <br>

         <label>senha</label>
        <!-- passo valor do atributo e-mail para a propriedade value -->
        <input type="text" name="senha" value="<?php echo $objUsuario->senha; ?>"> <br>

        <input type="submit" value="Editar">
        <a href="select.php"><button>Voltar</button></a>
    </form>
</body>

</html>