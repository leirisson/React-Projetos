import './style.css'
import CampoTexto from '../CampoTexto'
import StatusDoAluno from '../SatusDoAluno'
import { CampoTextArea } from '../CampoTextArea/CampoTextArea'
import { SexoAluno } from '../SexoAluno/SexoAluno'
import { Btn } from '../Btn/Btn'

export const Formulario = () => {

    const statusAluno = ['Desativado','Ativo']

    return (
        <section className="formulario">
            <form>
            <StatusDoAluno label="Estado do Aluno" status={statusAluno}/>
            <SexoAluno label="Masculino " checked="True"/> 
            <SexoAluno label="Feminio " />
            <CampoTexto label="N° de Contrato" placeholder="Digite o numero do contrato"/>
            <CampoTexto label="Data Nascimento" placeholder="Digite a data de nascimento"/>
            <CampoTexto label="RG" placeholder="Digite o nome do aluno"/>
            <CampoTexto label="CPF" placeholder="Digite o nome do aluno"/>
            <CampoTexto label="Turma" placeholder="Digite o nome da turma do aluno"/>
            <CampoTexto label="Curso" placeholder="Digite o curso do aluno(a)"/>
            <CampoTexto label="Ano" placeholder="Digite o Ano da turma"/>
            <CampoTexto label="DT da Matricula" placeholder="Digite a Data da matricula"/>
            <CampoTextArea label="Observação" linhas="7" colunas="42" />
            <Btn>Cadastrar</Btn>
            </form>
        </section>
    )
}