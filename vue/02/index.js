<div id="app-1">
    
    <span><h3>Ultimas noticias:</h3></span>
    <div v-if="isLoged()">
        <button v-on:click="logout">Logout</button>
    </div>
    <div v-if="!isLoged()">
        <span>
            <span>Login: </span><input v-model="username" type="text" />
            <span>Senha: </span><input v-model="password" type="password" />
            <button v-on:click="login">Login</button>
        <span>
    </div>
    <hr/>
    <div    v-for="noticia in noticias">
        
        <div><span><h4>{{noticia.titulo}}</h4></div>
        <div><span></span></div>
        <div><span><span>{{noticia.titulo}}</span></div>
        <hr/>
    </div>
    <div v-if="isLoged()">
        <h4>Nova noticia</h4>
        <div><span><span>Titulo: </span><input v-model="titulo" type="text" /></span></div>
        <div><span><span>Mensagem: </span><input v-model="mensagem" type="text" /></span></div>
        <div><span><span>Imagem URL: </span><input v-model="imagem" type="text" /></span></div>
        <div><button v-on:click="sendMessage">Enviar</ button >
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
var app1 = new Vue({
    el: '#app-1',
    data: {
        noticias: [],
        current_message: '',
        name: '',
        isDisabled: true,
    },
    methods: {
        sendMessage: function ()   {
            if(this.current_message && this.name)
            {
                let message = {msg: {name: this.name, msg: this.current_message}}
                axios.post("http://104.248.235.252:3003/api/noticias", message).then((response) => this.noticias.push(response.data))
            } 
            
        },
        isLoged: function () {
            return localStorage.getItem("token")
        },
        login: function () {
            axios.post("http://104.248.235.252:3003/api/login", {login: this.username, senha: this.password}).then((response) =>  localStorage.setItem("token", response.data.token))
        },
        logout: function () {
            localStorage.setItem("token", null)
        }
    },
    mounted () {
        axios.get("http://104.248.235.252:3003/api/noticias").then((response) => this.noticias = response.data)
        
    }
})
</script>
