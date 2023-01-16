// import other routes
const path = require('path');


const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/lista_webservices.html'));
        
    });

    // rota configuracao atividade
    app.get('/configuracao-atividade', (req, res) => {
        res.sendFile(path.join(__dirname, '../views/configuracao-atividade.html'));
    });
    // rota configuracao analytics atividade
    app.get('/analytics-atividade', (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/configuracao-analytics.html'));
        res.json({
            "activityID": "1",
            "Invira!RAStID": "122",

            "qualAnalytics": [
                { "name": "feedbackrespostas", "type": "text/plain","value": "exemplo feedback"},
            ],
            "quantAnalytics": [
                { "name": "totalrespcertas", "type": "integer","value": 2 },
                { "name": "totalduracaoquest", "type": "integer","value": 5 },
                { "name": "duracaocategoria", "type": "integer","value": 10 },
                { "name": "totalpontuacao", "type": "boolean","value": 5 },
            ]
        });
    });


    // rota configuracao parametros da atividade
    app.get('/json-params-atividade', (req, res) => {
        res.json([
            { "name": "questionarioturismo", "type": "text/plain" },
            { "name": "instrucoesobjetivo", "type": "text/plain" },
            { "name": "categorias", "type": "array" }, 
            { "name": "questões", "type": "array" },
            { "name": "respostascorretas", "type": "array" },
            { "name": "respostaserradas", "type": "array" },
            { "name": "feedbackrespostas", "type": "array" }
        ]);

    });

    // rota lista de analytics da atividade
    app.get('/lista-analytics-atividade', (req, res) => {
        res.json({

            "qualAnalytics": [
                { "name": "feedbackrespostas", "type": "text/plain" },
            ],
            "quantAnalytics": [
                { "name": "totalrespcertas", "type": "integer" },
                { "name": "totalduracaoquest", "type": "integer" },
                { "name": "duracaocategoria", "type": "integer" },
                { "name": "totalpontuacao", "type": "integer" },
            ]
        });

    });
    // rota Deploy da atividade
    app.post('/deploy-atividade/1', (req, res) => {
        res.json([
            { "activityID": "1", "type": "integer" },
            { "Invira!RAStID": "122", "type": "integer" },
            { "name": "categorias", "type": "array" }, 
            { "name": "questões", "type": "array" },
            "json_params", {
                "categorias": "Exemplo categorias",
                "questoes": "Exemplo questoes",
                "respostas": "Exemplo respostas",
                "feedback_respostas": "Exemplo feedback respostas",
            }


        ]);


    });
    
    

    // other routes
    userRoutes(app, fs);

};


module.exports = appRouter;