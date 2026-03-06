# 📸 Guia de Imagens do Projeto Cisco Network

## Acesso Rápido

O guia interativo pode ser acessado em qualquer página do projeto clicando no botão **📸 Guia de Imagens** no menu de navegação.

## Resumo Rápido

### 1. Criar Pasta
```
frontend/
├── images/        ← Criar esta pasta
├── index.html
├── servers.html
└── css/
```

### 2. Tirar Screenshots (6 imagens)

| # | O Quê | Nome do Arquivo | Instruções |
|---|-------|-----------------|-----------|
| 1 | Topologia Completa | `topology.png` | Clique na aba PT (Packet Tracer) e capture a visão geral |
| 2 | Configuração DNS | `dns-config.png` | Clique DNS Server → Desktop → Config → Services |
| 3 | Configuração DHCP | `dhcp-config.png` | Clique DHCP Server → Desktop → Config → Services |
| 4 | Redes WiFi | `wifi-config.png` | Clique Access Point → Desktop → Wireless Devices |
| 5 | Monitor Wireless | `wireless-monitor.png` | Clique PC WiFi → Desktop → Wireless Devices |
| 6 | Testes de Ping | `ping-test.png` | Clique PC → Desktop → Command Prompt → ping 192.168.x.x |

### 3. Salvar Imagens
- Use **Print Screen** ou **Ctrl + Print Screen**
- Cole no Paint ou editor de imagem
- Salve como `.png` na pasta `frontend/images/`

### 4. Adicionar ao HTML
No arquivo `frontend/servers.html`, substitua os placeholders:
```html
<!-- Onde tinha:
<div class="image-container">
    <div style="font-size: 60px; margin: 30px 0;">📷</div>
    <p>Captura da Topologia Geral</p>
</div>
-->

<!-- Adicione:
<div class="image-container">
    <img src="images/topology.png" alt="Topologia Geral" style="width: 100%; border-radius: 8px;">
    <p><strong>Topologia Geral</strong></p>
</div>
```

## 📋 Checklist Completo

- [ ] Criar pasta `frontend/images/`
- [ ] Capturar topology.png
- [ ] Capturar dns-config.png
- [ ] Capturar dhcp-config.png
- [ ] Capturar wifi-config.png
- [ ] Capturar wireless-monitor.png
- [ ] Capturar ping-test.png
- [ ] Salvar todos os arquivos em `frontend/images/`
- [ ] Editar tags `<img>` em `servers.html`
- [ ] Abrir `index.html` no navegador e verificar

## 🎯 Dicas Rápidas

**Qualidade**: Use PNG em alta resolução (min. 800x600px)  
**Nomes**: Use minúsculas com hífen: `dns-config.png` ✓  
**Responsividade**: Adicione `style="width: 100%; max-width: 100%;"` nas imagens  
**Otimização**: Se imagens forem pesadas, use ferramentas de compressão online

## 🔗 Links Úteis no Projeto

- **Página Principal**: `frontend/index.html` - Dashboard com explicação do Cisco Packet Tracer
- **Servidores**: `frontend/servers.html` - Onde adicionar as imagens
- **Guia Interativo**: `frontend/image-guide.html` - Instruções completas com exemplos

## 📞 Dúvidas Frequentes

**P: Onde salvo as imagens?**  
R: Em `frontend/images/` no projeto. Crie a pasta se não existir.

**P: Qual formato usar?**  
R: PNG é recomendado, mas JPEG também funciona bem. Evite BMP.

**P: Como referir as imagens no HTML?**  
R: Use `<img src="images/nome-do-arquivo.png" alt="descrição">`

**P: Posso usar imagens de outra fonte?**  
R: Sim, desde que sejam documentação da sua rede do Cisco Packet Tracer.

**P: As imagens aparecem no navegador?**  
R: Abra o arquivo HTML no navegador e verifique. Se não aparecerem, verifique:
1. A pasta `images/` existe?
2. Os arquivos estão lá?
3. Os nomes estão corretos (case-sensitive)?
4. O caminho relativo está certo?

---

**Última Atualização**: 2025  
**Projeto**: Cisco Network Infrastructure Documentation
