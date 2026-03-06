# 🖧 CISCO Network Project — Infraestrutura de Rede e Servidores

Projeto educacional completo de infraestrutura de rede implementado em Cisco Packet Tracer com documentação web interativa.

## 📋 O Que Contém Este Projeto

✅ **Documentação Técnica Completa:**
- 7 Servidores implementados (DNS, DHCP, Web, Email, FTP, TFTP, Syslog)
- 3 Redes WiFi segregadas com encriptação WPA2
- Topologia completa de rede com switches e routers
- Testes de conectividade com resultados medidos

✅ **Interface Web Interativa:**
- Dashboard principal com visão geral
- Documentação de servidores detalhada
- Perfis da equipe com responsabilidades
- Perguntas educacionais sobre networking

✅ **Simulação Cisco Packet Tracer:**
- Arquivo .pkt completo pronto para estudos
- Configurações reais de rede
- Testes de ping realizados com sucesso

---

## 🚀 Acesso Rápido

### 📖 Visualizar Documentação

1. **Abra `frontend/index.html` no navegador** (recomendado)
   ```bash
   # Uma opção é usar servidor estático
   cd frontend
   python -m http.server 8000
   # Acesse: http://localhost:8000
   ```

2. **Ou abra **network_documentation.html** diretamente no navegador

### 📊 Explorar Servidores
- [Servidores](frontend/servers.html) - Documentação detalhada de cada servidor

### 👥 Conhecer a Equipe
- [Usuários](frontend/users.html) - Perfis de Miguel, Alder e projeto

---

## 📁 Estrutura

---

## 📁 Estrutura

```
CISCO_trabalho final/
├── README.md                        ← Este arquivo
├── README_COMPLETE.md               ← Documentação completa e detalhada
├── Cisco-estrutura.pkt              ← Arquivo Cisco Packet Tracer
├── network_documentation.html       ← Documentação técnica (HTML)
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── database.sqlite
│
└── frontend/
    ├── index.html                   ← Dashboard principal ⭐
    ├── servers.html                 ← Documentação servidores
    ├── users.html                   ← Perfis da equipe
    ├── questions.html               ← Perguntas educacionais
    ├── network_documentation.html   ← Análise técnica completa
    ├── css/style.css
    └── images/
```

---

## 🎯 Início Rápido

### Opção 1: Visualizar Documentação Web (Recomendado)
```bash
# Abra frontend/index.html no navegador
# Ou use um servidor HTTP local:
cd frontend
python -m http.server 8000
# Acesse: http://localhost:8000
```

### Opção 2: Abrir Cisco Packet Tracer
```bash
# Abra o arquivo Cisco-estrutura.pkt no Cisco Packet Tracer
# Explore a topologia de rede
# Execute testes de ping
# Revise configurações de servidores
```

---

## 📊 Resumo da Infraestrutura

| Componente | Quantidade | Status |
|----------|-----------|--------|
| **Servidores** | 7 | ✅ Operacionais |
| **Redes WiFi** | 3 | ✅ Configuradas |
| **Access Points** | 3 | ✅ Ativos |
| **Taxa Conectividade** | 100% | ✅ Perfeita |
| **Perda Pacotes** | 0% | ✅ Excelente |
| **Latência Média** | 8.75ms | ✅ Ótima |

---

## 🌐 Servidores Implementados

1. **🌐 DNS Server** - Resolução de nomes (Port 53)
2. **🔌 DHCP Server** - Atribuição dinâmica IPs (Ports 67/68)
3. **🌍 Web Server** - HTTP/HTTPS (Ports 80/443)
4. **✉️ Email Server** - SMTP/POP3/IMAP (Ports 25/110/143)
5. **📁 FTP Server** - Transferência ficheiros (Ports 20/21)
6. **⚙️ TFTP Server** - Trivial FTP (Port 69)
7. **📊 Syslog Server** - Registos de eventos

---

## 📡 Redes WiFi Configuradas

| Nome | SSID | Segurança | Cobertura | Propósito |
|------|------|-----------|-----------|----------|
| **WiFi Professores** | WIFI_PROFESSORES | WPA2-PSK | 256m | Docentes |
| **WiFi Alunos** | WIFI_ALUNOS | WPA2-PSK | 256m | Estudantes |
| **WiFi Convidados** | WIFI_CONVIDADOS | WPA2-PSK | 256m | Visitantes |

---

## 👥 Equipe do Projeto

- **Miguel** (Analista) - Responsável por DNS e DHCP
- **Alder** (Especialista) - Responsável por Redes Wireless
- **Projeto** - Infraestrutura completa (7 servidores)

---

## 📚 Documentação Disponível

| Documento | Descrição |
|-----------|-----------|
| **index.html** | Dashboard e visão geral |
| **servers.html** | Detalhes de cada servidor |
| **users.html** | Perfis da equipe |
| **network_documentation.html** | Análise técnica completa |
| **README_COMPLETE.md** | Documentação completa (Markdown) |

---

## 🔒 Segurança Implementada

✅ **Encriptação Wireless:**
- WPA2-PSK (Pre-Shared Key)
- Algoritmo AES
- Senhas fortes em todas as redes

✅ **Autenticação:**
- DNS: Protocolo seguro
- DHCP: Validação de clientes
- FTP: Username/Password
- Email: Autenticação SMTP

✅ **Segregação:**
- 3 VLANs WiFi diferentes
- Políticas por grupo de usuários
- Isolamento de tráfego

---

## 📈 Testes de Conectividade

**Resultado dos Pings:**
```
Origem:   192.168.7.12
Destino:  192.168.7.12
Resposta: 4 packets, 4 recebidos, 0 perdidos (0% loss)

Latência:
- Mínima:   5ms
- Máxima:  13ms
- Média:   8.75ms
```

✅ **Resultado:** EXCELENTE

---

## 🎓 Conteúdo Educacional

Este projeto demonstra:
- Protocolo TCP/IP e camadas OSI
- Configuração de servidores (DNS, DHCP, Web, Email, FTP)
- Redes Wireless e encriptação WPA2
- Topologias de rede
- Administração de sistemas
- Testes e troubleshooting de rede

---

## 📞 Dúvidas?

Consulte:
1. **README_COMPLETE.md** - Documentação completa
2. **[Documentação Web](frontend/index.html)** - Interface interativa
3. **[Servidores](frontend/servers.html)** - Detalhes técnicos
4. **[Equipe](frontend/users.html)** - Responsabilidades

---

## ✅ Checklist Completo

- [x] Servidores implementados (7)
- [x] Redes WiFi segregadas (3)
- [x] Testes de conectividade
- [x] Documentação web
- [x] Perfis de usuários
- [x] Interface responsiva
- [x] CSS modernizado
- [x] README completo

---

**Status:** ✅ Projeto Completo e Testado  
**Data:** 2025  
**Versão:** 2.0
  -H "Content-Type: application/json" \
  -d '{"nome":"João Costa","email":"joao@escola.pt","cargo":"Aluno"}'

# Atualizar
curl -X PUT http://localhost:3001/users/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Costa","email":"joao@escola.pt","cargo":"Monitor"}'

# Remover
curl -X DELETE http://localhost:3001/users/1
```

---

## 🗄️ Base de Dados (SQLite)

O ficheiro `database.sqlite` é criado automaticamente. Estrutura da tabela:

```sql
CREATE TABLE users (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  nome         TEXT    NOT NULL,
  email        TEXT    NOT NULL UNIQUE,
  telefone     TEXT    DEFAULT '',
  cargo        TEXT    DEFAULT '',
  data_criacao TEXT    DEFAULT (datetime('now'))
);
```

Para inspecionar os dados, use [DB Browser for SQLite](https://sqlitebrowser.org/) ou o comando:

```bash
sqlite3 backend/database.sqlite "SELECT * FROM users;"
```

---

## 📸 Adicionar Prints (Imagens)

Coloque os seus prints na pasta `frontend/images/` com os seguintes nomes:

| Ficheiro                        | Conteúdo                                          |
|---------------------------------|---------------------------------------------------|
| `topologia-packet-tracer.jpg`   | Topologia completa da rede no Packet Tracer       |
| `ping-teste.png`                | Teste de ping entre dispositivos                  |
| `dhcp-packet-tracer.png`        | Configuração do servidor DHCP                     |
| `dns-packet-tracer.png`         | Configuração do servidor DNS                      |
| `web-packet-tracer.png`         | Servidor WEB e browser do cliente                 |
| `ftp-packet-tracer.png`         | Servidor FTP e teste via Command Prompt           |
| `email-packet-tracer.png`       | Cliente de email no Packet Tracer                 |
| `backend-teste.png`             | Terminal com servidor Node.js a correr            |
| `db-sqlite.png`                 | DB Browser com dados da tabela users              |
| `crud-users.png`                | Interface CRUD com utilizadores                   |

---

## 🌐 Servidores Documentados

- **FTP** — Transferência de ficheiros (porta 21/20)
- **WEB** — HTTP/HTTPS (portas 80/443)
- **DNS** — Resolução de nomes (porta 53)
- **DHCP** — Atribuição dinâmica de IPs (portas 67/68)
- **EMAIL** — SMTP/POP3/IMAP (portas 25/110/143)

Cada servidor está documentado em detalhe na página **Servidores**.

---

## 📋 Perguntas Respondidas

1. Como DHCP, DNS, WEB e EMAIL trabalham em conjunto
2. Uso prático do FTP numa escola
3. Consequências da falha do servidor DNS
4. Quando usar IP estático em vez de DHCP
5. Diferença entre POP3 e IMAP
6. O que é um "lease time" em DHCP

Veja todas as respostas na página **Perguntas & Respostas**.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** — Runtime JavaScript
- **Express.js** — Framework web
- **SQLite3** — Base de dados relacional
- **CORS** — Suporte para requisições cross-origin
- **Body-Parser** — Parsing de JSON

### Frontend
- **HTML5** — Markup
- **CSS3** — Estilos modernos
- **JavaScript Vanilla** — Sem dependências
- **Fetch API** — Comunicação com backend

---

## 🚀 Features

✅ **API REST completa** — CRUD de utilizadores  
✅ **Base de dados SQLite** — Persistência de dados  
✅ **Interface responsiva** — Desktop e mobile  
✅ **Educação sobre redes** — Documentação de servidores  
✅ **FAQ interativo** — Perguntas e respostas  
✅ **Validação de dados** — Email único e obrigatório  
✅ **Mensagens de status** — Feedback ao utilizador  
✅ **Health check** — Verificação de conectividade do backend  

---

## 📝 Licença

MIT — Livre para usar e modificar

---

## 👨‍💼 Autor

Desenvolvido como projeto educacional de redes e servidores.

---

*NetProject © 2025 — Projeto Educacional de Redes*
