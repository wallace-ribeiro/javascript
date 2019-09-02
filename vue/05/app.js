



var app1 = new Vue({
    el: '#app-1',
    data: {
        hospitais: [],
        username: '',
        password: '',
        nome: '',
        descricao: '',
        imagem: '',
        endereco: '',
        filtro: '',
	latitude: '',
	longitude: '',
        onUpdateId: -1,
	makerOnCreate: false,
	makerOnEdit: false,
    },
    methods: {
        changeMakerOnCreate: function () {
	  this.makerOnCreate = !this.makerOnCreate
	},
	changeMakerOnEdit: function () {
	  this.makerOnEdit = !this.makerOnEdit
	},
        sendHospital: function ()   {
            
            let hospital = {nome: this.nome, 
                descricao: this.descricao, imagem: this.imagem, endereco: this.endereco, latitude: this.latitude, longitude: this.longitude}
                axios.post("http://104.248.235.252:3019/api/hospitais", hospital, {headers: {Authorization: localStorage.getItem("token")}}).then((response) => this.getAll())
        
	},
        filtrar: function () {
            axios.get("http://104.248.235.252:3019/api/hospitais?search="+this.filtro).then((response) => this.hospitais = response.data)
        },
        getUsuarioLogado: function() {
            return localStorage.getItem("username") 
        },
        deletarHospital: function (hospitalId) {
            axios.delete("http://104.248.235.252:3019/api/hospitais/"+hospitalId, {headers: {Authorization: localStorage.getItem("token")}}).then((response) => {
                this.getAll();
            })
        },
        editarHospital: function (hospitalId) {
            this.onUpdateId = hospitalId
            
        },
	
	createMapEdit: function (id) {
	  this['map_'+id] = L.map('map_'+id).setView([-22.905, -43.190], 13);
          L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	  }).addTo(this['map_'+id]);
	
	  this['map_'+id].on('click', (e) => {
	    if(this.makerOnEdit && this.onUpdateId != -1) {
	        let hospital = this.hospitais.find((hospital) => hospital.id == this.onUpdateId)
		if(hospital != null) {
	          hospital.latitude = e.latlng.lat
	          hospital.longitude = e.latlng.lng
		  if(this['markerEdit_'+id]) {
		    this['map_'+id].removeLayer(this['markerEdit_'+id]);
		  }
		  this['markerEdit_'+id] = new L.marker(e.latlng).addTo(this['map_'+id]);
		}
	    }
	     
          });
	},
        updateHospital: function (hospital)   {
            axios.put("http://104.248.235.252:3019/api/hospitais/"+hospital.id, hospital, {headers: {Authorization: localStorage.getItem("token")}}).then((response) => console.log('response.data: ',response.data))
	    this.onUpdateId = -1;
	    this.makerOnEdit = false;
 
        },
        isLoged: function () {
            return localStorage.getItem("token")
        },
        login: function () {
            axios.post("http://104.248.235.252:3019/api/login", {login: this.username, senha: this.password}).then((response) =>  { 
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("username", this.username)
                this.$forceUpdate();
            })
        },
        logout: function () {
            localStorage.setItem("token", '')
            this.$forceUpdate();
        },
	getAll: function () {
	  axios.get("http://104.248.235.252:3019/api/hospitais").then((response) => { 
	    this.hospitais = response.data
	    this.hospitais.forEach((hospital) => {
	        let latlng = {lat: Number(hospital.latitude), lng: Number(hospital.longitude)}
	        let m = new L.marker(latlng).addTo(this.mapidall)
		.bindPopup(hospital.nome)
                .openPopup();
	    });
	  
	  })
	}
    },
    updated() {
      console.log('Updated');
      if(this.onUpdateId != -1){
	if(!this['map_'+this.onUpdateId]) {
	      this.createMapEdit(this.onUpdateId);
	    }
            let hospital = this.hospitais.find((hospital) => hospital.id == this.onUpdateId)
            if(hospital != null && !this['markerEdit_'+this.onUpdateId]) {
	        let latlng = {lat: Number(hospital.latitude), lng: Number(hospital.longitude)}
	        this['markerEdit_'+this.onUpdateId] = new L.marker(latlng).addTo(this['map_'+this.onUpdateId])
	    }
      }
    },
    mounted () {


 	this.mapidall = L.map('mapidall').setView([-22.905, -43.190], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(this.mapidall);
	
	var mapidcreate = L.map('mapidcreate').setView([-22.905, -43.190], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mapidcreate);
	
	mapidcreate.on('click', (e) => {
            //var marker = new L.marker(e.latlng).addTo(map);
	  console.log('Maker: ',this.makerOnCreate);
	    if(this.makerOnCreate) {
	        this.latitude = e.latlng.lat
	        this.longitude = e.latlng.lng
	        console.log('Maker: ',e);
		if(this.markerCreate) {
		  mapidcreate.removeLayer(this.markerCreate);
		}
		this.markerCreate = new L.marker(e.latlng).addTo(mapidcreate);
	    }
	     
        });
	
        this.getAll();	
	
    }
}) 
