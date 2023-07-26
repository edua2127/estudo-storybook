import Input from "./Input";


export default {
    component: Input,
    parameters: {
        docs: {
          description: {
            component: 'Descricao geral do componente'
          }
        }
    }
};

export const Default = {
    args: {
        tipoPassado: "texto",  
        name:"", 
        id:"", 
        placeholder:"",
    },
    parameters: {
        docs: {
          description: {
            story: 'descricao de versao Default'
          }
        }
    }
};

export const Date = {
    args: {
        tipoPassado: "data",   
        name:"", 
        id:"", 
        placeholder:"Selecione a Data"
    },
    parameters: {
        docs: {
          description: {
            story: 'descricao de versao Date'
          }
        }
    }
}

export const Email = {
    args: {
      tipoPassado: "email",  
        name:"", 
        id:"", 
        placeholder:"Digite o email"
    },
    parameters: {
        docs: {
          description: {
            story: 'descricao de versao Email'
          }
        }
    }
}
export const Password = {
    args: {
      tipoPassado: "senha",   
        name:"", 
        id:"", 
        placeholder:"Digite a senha"
    },
    parameters: {
        docs: {
          description: {
            story: 'descricao de versao Password'
          }
        }
    }
}