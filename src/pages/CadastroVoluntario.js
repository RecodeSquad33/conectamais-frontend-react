import { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from '../styles/Cadastro.module.css'
import post from '../acessoAPI/post';

class Voluntario {
    constructor(id, cep, cidade, dataNasc, estado, formacao, logradouro, nome, senha, sobre, telefone, email) {
        this.id = id;
        this.cep = cep;
        this.cidade = cidade;
        this.dataNasc = dataNasc;
        this.estado = estado;
        this.formacao = formacao;
        this.logradouro = logradouro;
        this.nome = nome;
        this.senha = senha;
        this.sobre = sobre;
        this.telefone = telefone;
        this.email = email;
    }
}

function CadastroVoluntario() {

    function EnviarBackEnd(e) {

        e.preventDefault();

        let voluntario = new Voluntario("", cep, cidade, dataNasc, estado, formacao, logradouro, nome, senha, sobre, telefone, email);
        
        let voluntarioJson = JSON.stringify(voluntario);

        post("http://localhost:8080/api/voluntario", voluntarioJson);
    }

    const [cep, setCep] = useState();
    const [cidade, setCidade] = useState();
    const [dataNasc, setDataNasc] = useState();
    const [estado, setEstado] = useState();
    const [formacao, setFormacao] = useState();
    const [logradouro, setLogradouro] = useState();
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const [sobre, setSobre] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();

    return (
        <div className={styles.ladoDireito}>
                <form onSubmit={EnviarBackEnd}>
                    <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                        <h1>Cadastro de voluntários</h1>
                    </div>

                    <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                        <h4>Dados pessoais</h4>
                    </div>

                    <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "3"}}>
                        <label for="nome">Nome</label>
                        <input name="nome_voluntario" type="text" id="nome" placeholder="Nome completo"
                        onChange={(p) => {setNome(p.target.value)}}></input>
                    </div>

                    <div className={styles.input}>
                        <label for="datanascimento">Data de nascimento</label>
                        <input name="dataAniv" type="text" id="datanascimento" placeholder="dd/mm/aaaa"
                        onChange={(p) => {setDataNasc(p.target.value)}}></input>
                    </div>

                    <div className={styles.input}>
                        <label for="cep">Cep</label>
                        <input name="cep_voluntario" type="text" id="cep" placeholder="CEP"
                        onChange={(p) => {setCep(p.target.value)}}></input>
                    </div>


                    <div className={styles.input} style={{gridColumnStart: "2", gridColumnEnd: "4"}}>
                        <label for="endereco">Endereço</label>
                        <input name="logradouro_voluntario" type="text" id="endereco" placeholder="Rua Exemplo, 123"
                        onChange={(p) => {setLogradouro(p.target.value)}}></input>
                    </div>

                    <div className={styles.input}>
                        <label for="cidade">Cidade</label>
                        <input name="cidade_voluntario" type="text" id="cidade" placeholder="Cidade"
                        onChange={(p) => {setCidade(p.target.value)}}></input>
                    </div>

                    <div className={styles.input}>
                        <label for="estado">Estado</label>
                        <input name="estado_voluntario" type="text" id="estado" placeholder="Estado"
                        onChange={(p) => {setEstado(p.target.value)}}></input>
                    </div>

                    <div className={styles.input}>
                        <label for="telefone">Telefone</label>
                        <input name="telefone_voluntario" type="text" id="telefone" placeholder="(XX) XXXX-XXXX" onChange={(p) => {setTelefone(p.target.value)}}></input>
                    </div>

                    <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                        <label for="formacao">Formação</label>
                        <select name="formacao" id="formacao" onChange={(p) => {setFormacao(p.target.value)}}>
                            <option value=""></option>
                            <option value="Ensino fundamental incompleto">Ensino fundamental incompleto</option>
                            <option value="Ensino fundamental completo">Ensino fundamental completo</option>
                            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                            <option value="Ensino médio completo">Ensino médio completo</option>
                            <option value="Ensino superior cursando">Ensino superior cursando</option>
                            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                            <option value="Ensino superior completo">Ensino superior completo</option>
                        </select>
                    </div>

                    <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                        <label for="sobre">Sobre</label>
                        <textarea name="sobre_voluntario" id=""
                            placeholder="Fale mais sobre você, suas experiências, como pretende atuar na instituição etc." onChange={(p) => {setSobre(p.target.value)}}></textarea>
                    </div>

                    <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                        <h4>Dados de login</h4>
                    </div>

                    <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                        <label for="email">Email</label>
                        <input name="email_voluntario" type="text" id="email" placeholder="Email"
                        onChange={(p) => {setEmail(p.target.value)}}></input>
                    </div>

                    <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                        <label for="senha">Senha</label>
                        <input name="senha" type="password" id="senha" placeholder="Senha"
                        onChange={(p) => {setSenha(p.target.value)}}></input>
                    </div>

                    <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                        <button>Enviar</button>
                    </div>
                </form>
        </div>
    );
}

export default CadastroVoluntario;