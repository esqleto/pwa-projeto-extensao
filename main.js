const { createApp } = Vue;

createApp({

    data() {
        return {
            agradecer: false,
            contador: 0,
            menuAberto: false,
            doacoes: 0,
            itens: [
            { id: 1, nome: 'Cestas básicas', prioridade: 'alta', ok: false },
            { id: 2, nome: 'Material escolar', prioridade: 'média', ok: false },
            { id: 3, nome: 'Roupas infantis', prioridade: 'média', ok: false }
            ],
        };
    }

}).mount('#app');