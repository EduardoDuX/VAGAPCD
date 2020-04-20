<?php

class BD
{

    //metodo para conexao com o banco de dados
    public function connection()
    {
        //variaveis para configurar a conexao com o banco de dados
        $bd_tipo = "mysql";
        $host = "localhost";
        $bd_nome = "db_vaga_pcd";
        $bd_porta = "3306";
        $bd_usuario = "root";
        $bd_senha = "";
        $bd_charset = "utf8";

        $str_conn = $bd_tipo . ":host=" . $host . ";dbname=" . $bd_nome . ";port=" . $bd_porta;;

        //retorna um objeto PDO com os seus atributos e metodos para manipular o Banco de dado
        return new PDO(
            $str_conn,
            $bd_usuario,
            $bd_senha,
            array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES " . $bd_charset)
        );
    }

    public function selectAll()
    {

        $conn = $this->connection(); // conecta o banco de dados
        //prepara o select da tabela
        $stmt = $conn->prepare("SELECT * FROM usuario");
        //executa o SQL
        $stmt->execute();
        //retorna a execução no formato de um Array
        return $stmt;
    }

    //funcao para buscar um registro no banco de dados através de um ID
    public function find($id)
    {
        $conn = $this->connection(); // conecta o banco de dados
        //prepara o select da tabela fazendo um Where pelo id
        $stmt = $conn->prepare("SELECT * FROM usuario WHERE pk_usuario = ?");
        //executa o SQL
        $stmt->execute([$id]);
        //retorna a execução no formato de um objeto
        return $stmt->fetchObject();
    }

    //funcao para atualziar os dados de um formulario
    public function update($dados)
    {

        var_dump($dados);
        //sintaxe do SQL para atualizar um cliente
        $sql = "UPDATE `usuario` SET `nome`= ?, `telefone`= ?, `cpf`= ?,
         `email`= ?, `rg`= ?, `senha`= ? WHERE pk_usuario= ? ;";

        $conn = $this->connection(); //conecta ao banco de dados
        //prepara o SQL
        $stmt = $conn->prepare($sql);
        //execulta o SQL substituindo onde tem a iterrogacao pelos parametros 
        //passados atraves do vetor seguindo a mesma sequencia da esqueda para direita
        //sendo o $dados['nome'] a representacao da primeira interrogacao e assim por diante
        //o ultimo e o id representa o registro que sera alterado
        $stmt->execute([
            $dados['nome'],
            $dados['telefone'], $dados['cpf'], $dados['email'], $dados['rg'], $dados['senha'], $dados['pk_usuario']
        ]);

        //retorna verdadeiro ou falso se executou a operacao
        return $stmt;
    }

    //funcao para realizer o insert de um registro no banco de dado 
    public function insert($dados)
    {
        var_dump($dados);
        //sql do Insert
        $sql = "INSERT INTO `usuario` (`nome`, `telefone`, `cpf`, `email`, `rg`, `senha`) 
            VALUES (?, ?, ?, ?, ?, ?);";

        $conn = $this->connection(); //conecta ao banco de dado
        //prepara o SQL
        $stmt = $conn->prepare($sql);
        //execulta o SQL substituindo onde tem a iterrogacao pelos parametros 
        //passados atraves do vetor seguindo a mesma sequencia da esqueda para direita
        //sendo o $dados['nome'] a representacao da primeira interrogacao e assim por diante
        $stmt->execute([
            $dados['nome'],
            $dados['telefone'], $dados['cpf'], $dados['email'], $dados['rg'], $dados['senha']
        ]);

        //retorna verdadeiro ou falso se executou a operacao
         return $stmt;
    }
    //funcao para deletar um registro no banco de dados através de um ID
    public function deletar($id)
    {
        $conn = $this->connection(); // conecta o banco de dados
        //prepara o select da tabela fazendo um Where pelo id
        $stmt = $conn->prepare("DELETE FROM `usuario` WHERE `pk_usuario`=?;");
        //executa o SQL
        $stmt->execute([$id]);
        
    }

}