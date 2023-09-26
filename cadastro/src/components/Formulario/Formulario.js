import './style.css'
import CampoTexto from '../CampoTexto'
import StatusDoAluno from '../SatusDoAluno'
import { CampoTextArea } from '../CampoTextArea/CampoTextArea'
import { Btn } from '../Btn/Btn'
import {useState} from 'react'


export const Formulario = (props) => {

    const statusAluno = ['Desativado','Ativo']

    // Hook useState
    const [nomeDoAluno, setNovoNome] = useState('')
    const [estadoAluno, setStatusAluno] = useState('Desativado')
    const [contratoAluno, setContratoAluno] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [rg, setRg] = useState('')
    const [cpf,setCpf] = useState('')
    const [turmaAluno, setTurmaAluno] = useState('')
    const [cursoAluno, setCursoAluno] = useState('')
    const [anoDaTurma, setAnoDaTurma] = useState('')
    const [matriculaAluno, setMatriculaAluno] = useState('')
    const [observacaoDoAluno, setObservacaoDoAluno] = useState('')

    const salvando = function(evento){
        evento.preventDefault()
        props.alunoCadastrado(
            //passando ( objeto Aluno ) com os dados
            {
            estadoAluno,
            nomeDoAluno,
            contratoAluno,
            dataNascimento,
            rg,
            cpf,
            turmaAluno,
            cursoAluno,
            anoDaTurma,
            matriculaAluno,
            observacaoDoAluno
            }
        )
        // console.log("Status do aluno: ",estadoAluno)
        // console.log("Nome: ", nomeDoAluno)
        // console.log("N° do contrato: ",contratoAluno)
        // console.log("Data de nascimento: ",dataNascimento)
        // console.log("RG: ", rg)
        // console.log("CPF: ",cpf)
        // console.log("Turma: ",turmaAluno)
        // console.log("Curso: ",cursoAluno)
        // console.log("Ano da turma: ",anoDaTurma)
        // console.log("Matricula do aluno: ",matriculaAluno)
        // console.log("Observação: ",observacaoDoAluno)
    }
   
    return (
        <section className="formulario">
            <form onSubmit={salvando}>
            <StatusDoAluno 
            label="Estado do Aluno" 
            status={statusAluno}
            value={estadoAluno}
            estado={estadoAluno => setStatusAluno(estadoAluno)}
            />
            <CampoTexto 
            label="N° de Contrato" 
            placeholder="Digite o numero do contrato"
            value={contratoAluno}
            alterandoValor={value => setContratoAluno(value)}/>
            
            <CampoTexto 
            label="Nome do aluno" 
            placeholder="Digite o nome do aluno"
            value={nomeDoAluno}
            alterandoValor={value => setNovoNome(value)}/>

            <CampoTexto 
            label="Data Nascimento" 
            placeholder="Digite a data de nascimento"
            value={dataNascimento}
            alterandoValor={value => setDataNascimento(value)}
            />

            <CampoTexto 
            label="RG" 
            placeholder="Digite o RG do aluno"
            value={rg}
            alterandoValor={value => setRg(value)}/>

            <CampoTexto 
            label="CPF" 
            placeholder="Digite o CPF do aluno"
            value = {cpf}
            alterandoValor = {value => setCpf(value)}
            />

            <CampoTexto
            label="Turma" 
            placeholder="Digite o nome da turma do aluno"
            value={turmaAluno}
            alterandoValor={value => setTurmaAluno(value)}
            />

            <CampoTexto 
            label="Curso" 
            placeholder="Digite o curso do aluno(a)"
            value={cursoAluno}
            alterandoValor={value => setCursoAluno(value)}
            />

            <CampoTexto 
            label="Ano" 
            placeholder="Digite o Ano da turma"
            value={anoDaTurma}
            alterandoValor={value => setAnoDaTurma(value)}
            />
            <CampoTexto 
            label="DT da Matricula" 
            placeholder="Digite a Data da matricula"
            value={matriculaAluno}
            alterandoValor={value => setMatriculaAluno(value)}
            />
            <CampoTextArea 
            label="Observação" 
            linhas="7" colunas="42" 
            texto={observacaoDoAluno}
            passandoObs={texto => setObservacaoDoAluno(texto)}/>
            <Btn >
                Cadastrar
            </Btn>
            </form>
        </section>
    )
}