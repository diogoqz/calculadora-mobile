# 🧮 Calculadora Mobile - React Native

Uma calculadora moderna e elegante desenvolvida em React Native com build automático via GitHub Actions.

## ✨ Características

- 🎨 Interface moderna inspirada na calculadora do iOS
- 📱 Compatível com Android
- 🔢 Operações básicas: soma, subtração, multiplicação, divisão
- 📊 Suporte a decimais e porcentagens
- 🔄 Troca de sinais (+/-)
- 🌙 Design dark theme
- ⚙️ Build automático via GitHub Actions
- 📦 APK gerado automaticamente a cada push

## 🚀 Build Automático com GitHub Actions

O projeto está configurado para gerar automaticamente o APK sempre que você fizer push para a branch `main` ou `master`.

### Como configurar:

1. **Faça fork/clone deste repositório**
2. **Configure os secrets do GitHub (opcional para SSH deploy):**
   - Vá em Settings → Secrets and variables → Actions
   - Adicione os seguintes secrets se quiser deploy via SSH:
     - `SSH_HOST`: IP do seu servidor
     - `SSH_USERNAME`: usuário SSH
     - `SSH_PRIVATE_KEY`: chave privada SSH
     - `SSH_PORT`: porta SSH (geralmente 22)

3. **Faça push para a branch main:**
   ```bash
   git add .
   git commit -m "🚀 Deploy calculadora"
   git push origin main
   ```

4. **Acompanhe o build:**
   - Vá na aba "Actions" do seu repositório
   - Veja o progresso do build em tempo real
   - O APK será gerado automaticamente

5. **Download do APK:**
   - Após o build, vá em "Releases"
   - Baixe o APK mais recente
   - Instale no seu dispositivo Android

## 📱 Instalação no Android

1. Baixe o APK da seção "Releases"
2. No seu Android, vá em Configurações → Segurança
3. Ative "Fontes desconhecidas" ou "Instalar apps de fontes desconhecidas"
4. Abra o arquivo APK baixado
5. Siga as instruções de instalação

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 18+
- Android Studio
- React Native CLI
- JDK 11

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>
cd calculadora-mobile

# Instale as dependências
npm install

# Para Android
npm run android

# Para build de release
npm run build-android
```

### Estrutura do Projeto

```
calculadora-mobile/
├── App.tsx                 # Componente principal da calculadora
├── index.js               # Ponto de entrada do React Native
├── package.json           # Dependências do projeto
├── android/               # Configurações Android
│   ├── app/
│   │   ├── build.gradle
│   │   └── src/main/
│   │       ├── AndroidManifest.xml
│   │       ├── java/com/calculadora/
│   │       └── res/
│   ├── build.gradle
│   └── settings.gradle
└── .github/
    └── workflows/
        └── build-apk.yml  # Configuração GitHub Actions
```

## 🎯 Funcionalidades da Calculadora

- **Operações Básicas**: +, -, ×, ÷
- **Funções Especiais**:
  - `C`: Limpar tudo
  - `±`: Alternar sinal positivo/negativo
  - `%`: Calcular porcentagem
  - `.`: Adicionar casa decimal

## 🔧 Configuração SSH (Opcional)

Para usar o deploy via SSH, configure os secrets do GitHub:

```yaml
# Exemplo de configuração SSH
SSH_HOST: "192.168.1.100"
SSH_USERNAME: "usuario"
SSH_PORT: "22"
SSH_PRIVATE_KEY: |
  -----BEGIN OPENSSH PRIVATE KEY-----
  sua-chave-privada-aqui
  -----END OPENSSH PRIVATE KEY-----
```

## 🚀 Como Fazer Deploy

1. **Commit suas mudanças:**
   ```bash
   git add .
   git commit -m "✨ Nova funcionalidade"
   ```

2. **Push para o GitHub:**
   ```bash
   git push origin main
   ```

3. **Aguarde o build automático:**
   - O GitHub Actions irá:
     - Instalar dependências
     - Configurar ambiente Android
     - Gerar keystore para assinatura
     - Compilar o APK
     - Criar release com o APK
     - (Opcional) Notificar via SSH

4. **Download do APK:**
   - Vá na seção "Releases" do seu repositório
   - Baixe o APK mais recente

## 📋 Scripts Disponíveis

```bash
npm run android        # Executar no Android
npm run start         # Iniciar Metro bundler
npm run build-android # Build de release
npm run lint          # Verificar código
npm run test          # Executar testes
```

## 🐛 Solução de Problemas

### Build falha no GitHub Actions

1. Verifique se todos os arquivos foram commitados
2. Confira os logs na aba "Actions"
3. Certifique-se de que o `package.json` está correto

### APK não instala no Android

1. Ative "Fontes desconhecidas" nas configurações
2. Certifique-se de que o download está completo
3. Verifique se há espaço suficiente no dispositivo

### Erro de dependências

```bash
# Limpar cache
npm start -- --reset-cache

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

**Desenvolvido com ❤️ usando React Native e GitHub Actions** 