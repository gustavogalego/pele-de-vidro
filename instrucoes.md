# Instruções para o Hotsite de Venda do E-book "Pele de Vidro em 21 Dias"

## Visão Geral
Este documento contém instruções para utilização do hotsite de vendas desenvolvido para o e-book "Pele de Vidro em 21 Dias: O Guia Coreano de Skincare Que Transformou Milhares de Rostos". O hotsite foi criado com foco em alta conversão, CTAs chamativos e experiência otimizada para dispositivos móveis e desktop.

## Estrutura de Arquivos
O pacote contém os seguintes arquivos e diretórios:

- `index.html` - Arquivo principal HTML com toda a estrutura da página
- `styles.css` - Arquivo CSS com todos os estilos e formatação visual
- `scripts.js` - Arquivo JavaScript com funcionalidades interativas
- `images/` - Diretório contendo todas as imagens otimizadas
- `estrutura_hotsite.md` - Documentação detalhada da estrutura planejada
- `todo.md` - Registro do processo de desenvolvimento (apenas para referência)

## Instruções de Uso

### Para Publicação Imediata
1. Descompacte o arquivo ZIP em seu servidor web
2. Não altere a estrutura de diretórios para manter os links funcionando corretamente
3. O site está pronto para uso imediato sem necessidade de configurações adicionais

### Para Personalização

#### Personalização Básica (Textos e Imagens)
1. Edite o arquivo `index.html` para modificar textos, títulos e descrições
2. Substitua as imagens na pasta `images/` mantendo os mesmos nomes de arquivo ou atualize os caminhos no HTML
3. Atualize o link do botão CTA principal (atualmente é um link de âncora `#`) para seu link de pagamento real

#### Personalização Visual
1. Modifique o arquivo `styles.css` para alterar cores, fontes e espaçamentos
2. As variáveis CSS principais estão definidas no início do arquivo para facilitar alterações globais:
   ```css
   :root {
       --primary-color: #ff6b8b;
       --secondary-color: #f8c9d6;
       --accent-color: #ffd166;
       /* outras variáveis... */
   }
   ```

#### Personalização de Funcionalidades
1. O arquivo `scripts.js` contém todas as funcionalidades interativas:
   - Contador regressivo (configurado para 24h)
   - Accordion do FAQ
   - Smooth scroll para links de ancoragem
   - CTA flutuante baseado na posição de scroll

## Características Principais

### Elementos de Conversão
- CTAs chamativos e estrategicamente posicionados
- Contador regressivo para criar urgência
- Depoimentos com fotos para aumentar credibilidade
- Seção de garantia para reduzir objeções
- Elementos visuais que guiam o olhar para pontos de conversão

### Responsividade
- Design totalmente responsivo para todos os tamanhos de tela
- Experiência mobile-first para garantir boa usabilidade em smartphones
- Botões dimensionados adequadamente para interação por toque

### Otimização
- Imagens otimizadas para carregamento rápido
- CSS e JavaScript minificados para melhor performance
- Estrutura semântica para melhor SEO

## Suporte
Para quaisquer dúvidas ou personalizações avançadas, entre em contato através dos dados fornecidos no rodapé do site.

---

Desenvolvido com ❤️ para o e-book "Pele de Vidro em 21 Dias"
