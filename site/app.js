document
  .getElementById("leadForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    const nome =
      document.getElementById("nome").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const empresa =
      document.getElementById("empresa").value.trim();

    const cargo =
      document.getElementById("cargo").value.trim();

    if (!nome || !email || !empresa) {
      alert("Nome, e-mail e empresa são obrigatórios.");
      return;
    }

    if (!email.includes("@")) {
      alert("E-mail inválido.");
      return;
    }

    let score = 50;

    if (cargo) {
      score += 15;
    }

    if (email.toLowerCase().endsWith(".com.br")) {
      score += 10;
    }

    if (empresa.length >= 5) {
      score += 10;
    }

    score = Math.min(score, 100);

    let classificacao = "frio";

    if (score >= 80) {
      classificacao = "quente";
    } else if (score >= 60) {
      classificacao = "morno";
    }

    const dominio =
      email.split("@")[1] || null;

    const resultado = {
      nome,
      email,
      empresa,
      cargo,
      origem: "github-pages-prod",

      enriquecimento: {
        dominio_email: dominio,
        possui_cargo: Boolean(cargo)
      },

      qualificacao: {
        score,
        classificacao
      },

      processado_em:
        new Date().toISOString()
    };

    document.getElementById("score").textContent =
      score;

    document.getElementById("classificacao").textContent =
      classificacao.toUpperCase();

    document.getElementById("dominio").textContent =
      dominio;

    document.getElementById("json").textContent =
      JSON.stringify(resultado, null, 2);

    document
      .getElementById("resultado")
      .classList.remove("hidden");
  });
