import styles from '../styles/Cadastro.module.css'

function Instituicao() {
    return (
        <div className={styles.ladoDireito}>
            <form id="form_inst">
                <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                    <h1>Cadastro de instituição de ensino</h1>
                </div>

                <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                    <h4>Dados da instituição</h4>
                </div>

                <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                    <label for="nomedainstituicao">Nome da instituição de ensino</label>
                    <input name="nome" type="text" id="nomedainstituicao"></input>
                </div>


                <div className={styles.input}>
                    <label for="cep">Cep</label>
                    <input name="cep" type="text" id="cep"></input>
                </div>


                <div className={styles.input} style={{gridColumnStart: "2", gridColumnEnd: "4"}}>
                    <label for="endereco">Endereço</label>
                    <input name="logradouro" type="text" id="endereco"></input>
                </div>

                <div className={styles.input}>
                    <label for="cidade">Cidade</label>
                    <input name="cidade" type="text" id="cidade"></input>
                </div>

                <div className={styles.input}>
                    <label for="estado">Estado</label>
                    <input name="estado" type="text" id="estado"></input>
                </div>

                <div className={styles.input}>
                    <label for="telefone">Telefone</label>
                    <input name="telefone" type="text" id="telefone"></input>
                </div>

                <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "3"}}>
                    <label for="categoria">Categoria/Área de atuação</label>
                    <select name="categoria" id="formacao">
                        <option value=""></option>
                        <option value="Ensino básico público">Ensino básico público</option>
                        <option value="Ensino básico particular">Ensino básico particular</option>
                        <option value="Ensino superior público">Ensino superior público</option>
                        <option value="Ensino superior particular">Ensino superior particular</option>
                        <option value="Ensino técnico">Ensino técnico</option>
                    </select>
                </div>

                <div className={styles.input}>
                    <label for="nalunos">Quantidade de alunos</label>
                    <input name="qtd_alunos" type="text" id="nalunos"></input>
                </div>

                <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                    <label for="sobre">Sobre</label>
                    <textarea name="sobre" id=""></textarea>
                </div>

                <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                    <h4>Dados de login</h4>
                </div>

                <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                    <label for="email">Email</label>
                    <input type="email" name="email_ie" id="email"></input>
                </div>

                <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                    <label for="senha">Senha</label>
                    <input type="password" name="senha_ie" id="senha"></input>
                </div>

                <div className={styles.input} style={{gridColumnStart: "1", gridColumnEnd: "4"}}>
                    <button name="act" value="btn_inst" type="submit" class="botao">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Instituicao;