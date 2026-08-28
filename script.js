
const dateElement = document.getElementById("date");
const statusElement = document.getElementById("status");
const atualizarButton = document.getElementById("atualizar");

// URL da API publicada no Render
const API_URL = "https://atividade-express.onrender.com/";

// Função para consultar a API
async function consultarDataHora() {

    statusElement.textContent = "Consultando API...";

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Erro ao acessar a API");
        }

        const dados = await response.json();

        console.log("Dados recebidos da API:", dados);

        // Exibe a data e hora retornadas pela API
        dateElement.textContent = dados.date;

        // Exibe o status retornado pela API
        statusElement.textContent = "✓ " + dados.status;

    } catch (error) {

        console.error("Erro:", error);

        dateElement.textContent = "--/--/---- --:--:--";

        statusElement.textContent =
            "❌ Não foi possível conectar à API.";

    }
}

// Consulta a API ao clicar no botão
atualizarButton.addEventListener("click", consultarDataHora);

// Consulta a API automaticamente ao abrir a página
consultarDataHora();

