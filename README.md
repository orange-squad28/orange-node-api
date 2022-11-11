# Orange Evolution API

API desenvolvida durante o Hackathon - Programa de Formação <Season4 -2022> com o objetivo de interfacear o banco de dados 
MongoDB com o Frontend. 


### Hospedado no Heroku em:

https://orange-node-api.herokuapp.com/


    
## API Reference

### Administradores
#### Listar Todos os Administradores

```http
  GET /admins
```

#### Listar Administrador por Id

```http
  GET /admins/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do Administrador |


#### Cadastrar Administrador

```http
  POST /admins
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `json`    | `json  ` | {                                 |
|           |          | 'nome': String     **Required**,  |
|           |          | 'email': String     **Required**, |
|           |          | 'senha': String     **Required**, |
|           |          | 'cargo': String     **Required**  |
|           |          | }                                 |



#### Atualizar Administrador

```http
  PUT /admins/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do Administrador |
| `json`    | `json  ` | {                                 |
|           |          | 'param': Type     **Required**,   |
|           |          | }                                 |


#### Apagar Administrador

```http
  DELETE /admins/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do Administrador |


### Alunos
#### Listar Todos os Alunos

```http
  GET /alunos
```

#### Listar Aluno por Id

```http
  GET /alunos/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do Administrador |

#### Listar Trilhas do Aluno por Id

```http
  GET /alunos/trilhas/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do Aluno         |


#### Cadastrar Aluno

```http
  POST /alunos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `json`    | `json  ` | {                                 |
|           |          | 'nome': String     **Required**,  |
|           |          | 'email': String     **Required**, |
|           |          | 'senha': String     **Required**, |
|           |          | 'cursos': Array                   |
|           |          | }                                 |


#### Matricular Aluno em um a trilha Id

```http
  PATCH /alunos/matricular/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do Aluno |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|           |          | Id da Trilha                      |
| `json`    | `json  ` | {                                 |
|           |          | 'id': String     **Required**,    |
|           |          | }                                 |


#### Atualizar Aluno

```http
  PUT /alunos/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do Aluno |
| `json`    | `json  ` | {                                 |
|           |          | 'param': Type     **Required**,   |
|           |          | }                                 |


#### Apagar Aluno

```http
  DELETE /alunos/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do Aluno |



### Trilhas
#### Listar Todas as Trilhas

```http
  GET /trilhas
```

#### Listar Trilha por Id

```http
  GET /trilhas/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id da Trilha        |


#### Cadastrar Trilha

```http
  POST /trilha
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `json`    | `json  ` | {                                 |
|           |          | 'titulo': String   **Required**,  |
|           |          | 'cursos': Array    **Required**,  |
|           |          | 'autor': String    **Required**,  |
|           |          | 'dataCriacao':Boolean             |
|           |          | 'dataAtualizacao': Boolean        |
|           |          | 'numeroDeHoras': Boolean          |
|           |          | }                                 |

#### Cadastrar Curso em uma Trilha por Id

```http
  PATCH /alunos/matricular/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id da Trilha |

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|           |          | Id do Curso                      |
| `json`    | `json  ` | {                                 |
|           |          | 'id': String     **Required**,    |
|           |          | }                                 |



#### Listar Cursos da Trilha por Id

```http
  GET /trilhas/cursos/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id da Trilha        |




#### Atualizar Trilha

```http
  PUT /trilha/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id da Trilha        |
| `json`    | `json  ` | {                                 |
|           |          | 'param': Type     **Required**,   |
|           |          | }                                 |


#### Apagar Trilha

```http
  DELETE /trilha/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id da Trilha        |



### Cursos
#### Listar Todos os Cursos

```http
  GET /cursos
```

#### Listar Curso por Id

```http
  GET /cursos/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id ddo Curso        |


#### Cadastrar Cursos

```http
  POST /cursos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `json`    | `json  ` | {                                 |
|           |          | 'titulo': String   **Required**,  |
|           |          | 'autor': String    **Required**,  |
|           |          | 'imagem': String    **Required**, |
|           |          | 'estaAtivo':Boolean **Required**, |
|           |          | 'dataCriacao':Date                |
|           |          | 'dataAtualizacao': Date           |
|           |          | 'duracao': Number                 |
|           |          | 'descricao': String               |
|           |          | 'link': String                    |
|           |          | }                                 |



#### Atualizar Cursos

```http
  PUT /cursos/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id do Curso       |
| `json`    | `json  ` | {                                 |
|           |          | 'param': Type     **Required**,   |
|           |          | }                                 |


#### Apagar Curso

```http
  DELETE /trilha/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id da Trilha        |


## Autores

- [Charles Eduardo](https://www.github.com/EduardoMG12);
- [Jade Figueredo](https://github.com/jadefigueredo)
- [Maria Amanda Freitas](https://www.github.com/amandaafreitas)
- [Rodrigo Alexandre](https://www.github.com/narradorww);


