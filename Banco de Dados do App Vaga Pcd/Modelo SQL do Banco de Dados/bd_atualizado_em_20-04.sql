-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           5.7.24 - MySQL Community Server (GPL)
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para db_vaga_pcd
CREATE DATABASE IF NOT EXISTS `db_vaga_pcd` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `db_vaga_pcd`;

-- Copiando estrutura para tabela db_vaga_pcd.denuncia
CREATE TABLE IF NOT EXISTS `denuncia` (
  `pk_denuncia` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`pk_denuncia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Copiando dados para a tabela db_vaga_pcd.denuncia: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `denuncia` DISABLE KEYS */;
/*!40000 ALTER TABLE `denuncia` ENABLE KEYS */;

-- Copiando estrutura para tabela db_vaga_pcd.d_relacao
CREATE TABLE IF NOT EXISTS `d_relacao` (
  `pk_d_relacao` int(11) NOT NULL,
  `fk_denuncia` int(11) NOT NULL,
  `fk_foto` int(11) NOT NULL,
  `fk_usuario` int(11) DEFAULT NULL,
  `fk_vaga` int(11) DEFAULT NULL,
  PRIMARY KEY (`pk_d_relacao`),
  KEY `FK_denuncia_usuario` (`fk_usuario`),
  KEY `FK_denuncia_vaga` (`fk_vaga`),
  KEY `FK_denuncia_foto` (`fk_foto`),
  KEY `FK_d_relacao_denuncia` (`fk_denuncia`),
  CONSTRAINT `FK_d_relacao_denuncia` FOREIGN KEY (`fk_denuncia`) REFERENCES `denuncia` (`pk_denuncia`),
  CONSTRAINT `FK_denuncia_foto` FOREIGN KEY (`fk_foto`) REFERENCES `foto` (`pk_foto`),
  CONSTRAINT `FK_denuncia_usuario` FOREIGN KEY (`fk_usuario`) REFERENCES `usuario` (`pk_usuario`),
  CONSTRAINT `FK_denuncia_vaga` FOREIGN KEY (`fk_vaga`) REFERENCES `vaga` (`pk_vaga`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela db_vaga_pcd.d_relacao: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `d_relacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `d_relacao` ENABLE KEYS */;

-- Copiando estrutura para tabela db_vaga_pcd.foto
CREATE TABLE IF NOT EXISTS `foto` (
  `pk_foto` int(11) NOT NULL AUTO_INCREMENT,
  `foto_1` binary(50) DEFAULT NULL,
  `foto_2` binary(50) DEFAULT NULL,
  `foto_3` binary(50) DEFAULT NULL,
  `foto_4` binary(50) DEFAULT NULL,
  PRIMARY KEY (`pk_foto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela db_vaga_pcd.foto: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `foto` DISABLE KEYS */;
/*!40000 ALTER TABLE `foto` ENABLE KEYS */;

-- Copiando estrutura para tabela db_vaga_pcd.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `pk_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` text,
  `telefone` varchar(50) DEFAULT NULL,
  `cpf` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `rg` varchar(50) DEFAULT NULL,
  `senha` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`pk_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela db_vaga_pcd.usuario: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`pk_usuario`, `nome`, `telefone`, `cpf`, `email`, `rg`, `senha`) VALUES
	(1, 'rafael curtarelli soccol', '49991533139', '111.222.333-44', 'bovinobr14@gmail.com', '1.222.333', 'f8f7r7vv7'),
	(5, '', '', '', '', '', ''),
	(6, '', '', '', '', '', '');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

-- Copiando estrutura para tabela db_vaga_pcd.vaga
CREATE TABLE IF NOT EXISTS `vaga` (
  `pk_vaga` int(11) NOT NULL,
  `numero_vaga` int(11) DEFAULT NULL,
  `localizacao` geometry DEFAULT NULL,
  PRIMARY KEY (`pk_vaga`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela db_vaga_pcd.vaga: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `vaga` DISABLE KEYS */;
/*!40000 ALTER TABLE `vaga` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
