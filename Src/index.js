const html = (title, body) => `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} | Shop Studio AI</title>
  <style>
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:760px;margin:0 auto;padding:32px 20px;line-height:1.6;color:#202124;background:#f7f7fb}
    header,main,footer{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:24px;margin:16px 0}
    h1{line-height:1.2} a{color:#5b21b6} nav{display:flex;flex-wrap:wrap;gap:14px}
    .muted{color:#5f6368;font-size:.92rem}
  </style>
</head>
<body>
<header><strong>Shop Studio AI</strong><nav><a href="/">Início</a><a href="/support">Suporte</a><a href="/privacy">Privacidade</a><a href="/terms">Termos</a></nav></header>
<main>${body}</main>
<footer class="muted">Shop Studio AI · Confira e complete os dados de contato e os textos legais antes de publicar.</footer>
</body></html>`;

function page(pathname) {
  if (pathname === "/support" || pathname === "/support/") {
    return new Response(html("Suporte", `<h1>Suporte</h1><p>Precisa de ajuda com o Shop Studio AI?</p><p>Substitua este texto por um endereço de contato real e monitorado antes de publicar.</p><p>Contato: <strong>[adicione seu e-mail de suporte]</strong></p>`), {headers: {"content-type":"text/html; charset=UTF-8"}});
  }
  if (pathname === "/privacy" || pathname === "/privacy/") {
    return new Response(html("Política de Privacidade", `<h1>Política de Privacidade</h1><p><strong>Rascunho — precisa ser revisado antes da publicação.</strong></p><p>Explique aqui quais dados o Shop Studio AI coleta ou recebe, para que são usados, com quem são compartilhados, por quanto tempo são mantidos e como os usuários podem solicitar acesso ou exclusão.</p><p>Responsável pelo serviço: [adicione o nome ou entidade responsável]. Contato: [adicione um e-mail real].</p><p>Não publique esta página sem substituir os campos entre colchetes e confirmar que o texto descreve a prática real do serviço.</p>`), {headers: {"content-type":"text/html; charset=UTF-8"}});
  }
  if (pathname === "/terms" || pathname === "/terms/") {
    return new Response(html("Termos de Serviço", `<h1>Termos de Serviço</h1><p><strong>Rascunho — precisa ser revisado antes da publicação.</strong></p><p>Descreva as condições de uso, responsabilidades, limitações, regras de uso aceitável, propriedade intelectual, alterações e encerramento do serviço.</p><p>Responsável pelo serviço: [adicione o nome ou entidade responsável]. Contato: [adicione um e-mail real].</p><p>Não publique esta página sem substituir os campos entre colchetes e revisar os termos para o seu serviço.</p>`), {headers: {"content-type":"text/html; charset=UTF-8"}});
  }
  return new Response(html("Criação visual com IA", `<h1>Criação visual com IA</h1><p>Bem-vindo ao site do Shop Studio AI.</p><p>O Shop Studio AI ajuda a preparar ideias e prompts para conteúdo visual de produtos. Esta é uma página inicial básica para testar a implantação do Cloudflare Worker.</p><p class="muted">Antes de usar este endereço no cadastro público do plugin, complete e revise as páginas de suporte, privacidade e termos.</p>`), {headers: {"content-type":"text/html; charset=UTF-8"}});
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    return page(url.pathname);
  }
};
