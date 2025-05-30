#!/bin/bash

echo "🧮 Setup da Calculadora Mobile - React Native"
echo "============================================="

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale o Node.js 18+ primeiro."
    exit 1
fi

# Verificar versão do Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js versão 18+ é necessária. Versão atual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) encontrado"

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependências instaladas com sucesso!"
else
    echo "❌ Erro ao instalar dependências"
    exit 1
fi

# Verificar se o Android SDK está configurado
if [ -z "$ANDROID_HOME" ]; then
    echo "⚠️  ANDROID_HOME não está configurado"
    echo "   Configure o Android SDK antes de continuar"
else
    echo "✅ Android SDK encontrado: $ANDROID_HOME"
fi

# Criar diretório de gradlew se não existir
mkdir -p android/gradle/wrapper

# Verificar se o Java está instalado
if command -v java &> /dev/null; then
    JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
    echo "✅ Java encontrado"
else
    echo "❌ Java não encontrado. Instale o JDK 11+"
fi

echo ""
echo "🚀 Setup concluído!"
echo ""
echo "Próximos passos:"
echo "1. Configure o Android SDK se ainda não fez"
echo "2. Execute 'npm run android' para testar no emulador"
echo "3. Faça push para GitHub para gerar APK automaticamente"
echo ""
echo "📱 Para build de produção:"
echo "   npm run build-android"
echo ""
echo "🔗 Para deploy automático:"
echo "   git add . && git commit -m '🚀 Deploy' && git push origin main" 