function addLinha() {
    // Referência à tabela e ao corpo da tabela
    const tabela = document.getElementById("tabela");
    const tbody = tabela.getElementsByTagName("tbody")[0];

    // Contando o número de linhas existentes
    const totalLinhas = tbody.getElementsByTagName("tr").length;

    // Criando nova linha
    const novaLinha = document.createElement("tr");

    // Criando células para a nova linha
    const celulaId = document.createElement("td");
    celulaId.textContent = totalLinhas + 1;

    const celulaNome = document.createElement("td");
    celulaNome.textContent = "Novo Nome";

    const celulaIdade = document.createElement("td");
    celulaIdade.textContent = "00";

    const celulaTelefone = document.createElement("td");
    celulaTelefone.textContent = "(00) 00000-0000";

    // Adicionando as células à nova linha
    novaLinha.appendChild(celulaId);
    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaIdade);
    novaLinha.appendChild(celulaTelefone);

    // Adicionando a nova linha ao corpo da tabela
    tbody.appendChild(novaLinha);
}