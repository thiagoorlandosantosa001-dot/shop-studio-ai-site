const BRAND = "Shop Studio AI";
const SUPPORT_EMAIL = "PREENCHER_COM_SEU_EMAIL_DE_SUPORTE";
const OWNER_NAME = "PREENCHER_COM_NOME_DO_RESPONSÁVEL";

function page(title, body) {
  return new Response(`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} | ${BRAND}</title>
<style>
body{font-family:Arial,sans-serif;max-width:850px;margin:0 auto;padding:28px 20px;line-height:1.65;color:#20202a;background:#f7f7fb}
main{background:#fff;border:1px solid #e7e7ef;border-radius:18px;padding:28px}
h1{line-height:1.2}a{color:#5743c6}nav{display:flex;flex-wrap:wrap;gap:14px;margin:18px 0}
small{color:#606070}
</style>
</head>
<body><main>
<nav><a href="/">Início</a><a href="/support">Suporte</a><a href="/privacy">Privacidade</a><a href="/terms">Termos</a></nav>
<h1>${title}</h1>${body}
<hr><small>${BRAND} · Responsável: ${OWNER_NAME}</small>
</main></body></html>`, {
    headers: { "content-type": "text/html; charset=UTF-8" }
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Método não permitido", { status: 405 });
    }

    const path = url.pathname.replace(/\/+$/, "") || "/";
    switch (path) {
      case "/":
        return page("Shop Studio AI", `
          <p>Ferramenta de apoio à criação de conteúdo visual e prompts para vídeos de produtos.</p>
          <p>Consulte as páginas de suporte, privacidade e termos nos links abaixo.</p>
          <ul><li><a href="/support">Suporte</a></li><li><a href="/privacy">Política de privacidade</a></li><li><a href="/terms">Termos de serviço</a></li></ul>
          <p><strong>Nota:</strong> ajuste esta descrição para corresponder exatamente às funções oferecidas pelo seu projeto.</p>`);
      case "/support":
        return page("Suporte", `
          <p>Para dúvidas ou problemas com o Shop Studio AI, entre em contato pelo endereço abaixo.</p>
          <p><strong>E-mail:</strong> ${SUPPORT_EMAIL}</p>
          <p>Substitua o texto de exemplo por um endereço de e-mail real que você monitore.</p>`);
      case "/privacy":
        return page("Política de privacidade — revisar antes de publicar", `
          <p><strong>Modelo inicial: não publique sem completar e revisar.</strong></p>
          <h2>Responsável</h2><p>Responsável indicado: ${OWNER_NAME}. Confirme os dados e forneça um canal de contato válido.</p>
          <h2>Dados tratados</h2><p>Descreva quais dados o site e o serviço realmente recebem, como prompts, arquivos enviados, dados técnicos ou informações de contato. Remova categorias que não se aplicam.</p>
          <h2>Finalidades e compartilhamento</h2><p>Explique para que cada dado é usado e quais fornecedores ou terceiros podem recebê-lo. Não declare que não há compartilhamento sem verificar.</p>
          <h2>Retenção e segurança</h2><p>Informe por quanto tempo os dados são mantidos e descreva somente medidas de segurança que realmente são adotadas.</p>
          <h2>Solicitações e contato</h2><p>Explique como os usuários podem fazer solicitações relacionadas aos seus dados, quando aplicável. Contato: ${SUPPORT_EMAIL}.</p>
          <p><small>Data de atualização: PREENCHER_COM_DATA_REAL</small></p>`);
      case "/terms":
        return page("Termos de serviço — revisar antes de publicar", `
          <p><strong>Modelo inicial: revise e complete antes de publicar.</strong></p>
          <h2>Uso do serviço</h2><p>Descreva o funcionamento real do Shop Studio AI e as regras de uso.</p>
          <h2>Conteúdo e responsabilidades</h2><p>Explique responsabilidades dos usuários, direitos sobre conteúdos enviados e limites do serviço, de acordo com seu funcionamento real.</p>
          <h2>Disponibilidade e alterações</h2><p>Explique como alterações, interrupções ou encerramento do serviço serão tratados.</p>
          <h2>Contato</h2><p>Responsável: ${OWNER_NAME}. Suporte: ${SUPPORT_EMAIL}.</p>
          <p><small>Data de atualização: PREENCHER_COM_DATA_REAL</small></p>`);
      default:
        return page("Página não encontrada", `<p>Não encontramos esta página. Volte para a <a href="/">página inicial</a>.</p>`);
    }
  }
};
