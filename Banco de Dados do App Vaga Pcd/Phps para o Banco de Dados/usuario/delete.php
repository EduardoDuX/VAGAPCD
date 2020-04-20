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
 
    if (!empty($_POST['confirmar'])) {
       
        //chama o metodo DELETAR recebendo os dados do usuário através do metodo $_POST
        $objBD->deletar($_GET['pk_usuario']);
        //metodo header faz uma chamada para a tela de listagem
        //depois que realizou a adicao
        header("Location: select.php");
    }
    ?>
 
    <!-- propriedade action faz a chamada do BD.php para pegar o valor do form
        o restante e um formulario comum usando o metodo POST
    -->
    <form action="delete.php?pk_usuario=<?php echo $_GET['pk_usuario']; ?> " method="POST">
        <label>Deseja excluir estes dados?</label>
        <input type="hidden" name="confirmar" value="ok"> <br>
        <imput type="hidden" name="pk_usuario" value="<?php echo $_GET['pk_usuario']; ?>" />
 
        <input type="submit" value="Deletar">
       
    </form>
    <a href="select.php">Cancelar</a>
 
</body>
 
</html>